/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 */

import { SdkType, getCommandLineOptions } from "./commandLine";
import { findAzureRestApiSpecsRepositoryPath, findSdkDirectory, saveContentToFile, findMissingSdks } from "./generateSdks";
import { copyExistingNodeJsReadme, updateTypeScriptReadmeFile, findReadmeTypeScriptMdFilePaths, getPackageNamesFromReadmeTypeScriptMdFileContents, getAbsolutePackageFolderPathFromReadmeFileContents, updateMainReadmeFile } from "./readme";
import * as fs from "fs";
import * as path from "path";
import { contains, npmInstall } from "./common";
import { execSync } from "child_process";
import { getLogger } from "./logger";
import { refreshRepository, getValidatedRepository } from "./git";
import { commitAndCreatePullRequest } from "./github";

const _logger = getLogger();
const _args = getCommandLineOptions();

function containsPackageName(packageNames: string[], packageName: string): boolean {
    return contains(packageNames, packageName) ||
      contains(packageNames, `@azure/${packageName}`) ||
      contains(packageNames, `"${packageName}"`) ||
      contains(packageNames, `"@azure/${packageName}"`) ||
      contains(packageNames, `'${packageName}'`) ||
      contains(packageNames, `'@azure/${packageName}'`);
}

export async function generateSdk(azureRestAPISpecsRoot: string, azureSDKForJSRepoRoot: string, packageName: string, use?: boolean, useDebugger?: boolean) {
    const typeScriptReadmeFilePaths: string[] = findReadmeTypeScriptMdFilePaths(azureRestAPISpecsRoot);

    for (let i = 0; i < typeScriptReadmeFilePaths.length; ++i) {
        const typeScriptReadmeFilePath: string = typeScriptReadmeFilePaths[i];

        const typeScriptReadmeFileContents: string = await fs.promises.readFile(typeScriptReadmeFilePath, { encoding: 'utf8' });
        const packageNames: string[] = getPackageNamesFromReadmeTypeScriptMdFileContents(typeScriptReadmeFileContents);
        const packageNamesString: string = JSON.stringify(packageNames);

        if (!packageName || containsPackageName(packageNames, packageName)) {
            _logger.log(`>>>>>>>>>>>>>>>>>>> Start: "${packageNamesString}" >>>>>>>>>>>>>>>>>>>>>>>>>`);

            const readmeFilePath: string = path.resolve(path.dirname(typeScriptReadmeFilePath), 'readme.md');

            let cmd = `autorest --typescript --typescript-sdks-folder=${azureSDKForJSRepoRoot} --license-header=MICROSOFT_MIT_NO_VERSION ${readmeFilePath}`;
            if (use) {
                cmd += ` --use=${use}`;
            }
            else {
                const localAutorestTypeScriptFolderPath = path.resolve(azureSDKForJSRepoRoot, '..', 'autorest.typescript');
                if (fs.existsSync(localAutorestTypeScriptFolderPath) && fs.lstatSync(localAutorestTypeScriptFolderPath).isDirectory()) {
                    cmd += ` --use=${localAutorestTypeScriptFolderPath}`;
                }
            }

            if (useDebugger) {
                cmd += ` --typescript.debugger`;
            }

            try {
                _logger.log('Executing command:');
                _logger.log('------------------------------------------------------------');
                _logger.log(cmd);
                _logger.log('------------------------------------------------------------');

                const commandOutput = execSync(cmd, { encoding: "utf8" });
                _logger.log(commandOutput);

                _logger.log('Installing dependencies...');
                const packageFolderPath: string = getAbsolutePackageFolderPathFromReadmeFileContents(azureSDKForJSRepoRoot, typeScriptReadmeFileContents);
                npmInstall(packageFolderPath);
            } catch (err) {
                _logger.log('Error:');
                _logger.log(`An error occurred while generating client for packages: "${packageNamesString}":\n Stderr: "${err.stderr}"`);
            }

            _logger.log(`>>>>>>>>>>>>>>>>>>> End: "${packageNamesString}" >>>>>>>>>>>>>>>>>>>>>>>>>`);
            _logger.log();
        }
    }
}

export async function generateTsReadme(packageName: string, sdkType: SdkType): Promise<string> {
    if (_args["skip-spec"]) {
        _logger.log(`Skipping spec generation`);
        return "";
    }

    const azureRestApiSpecsRepositoryPath: string = await findAzureRestApiSpecsRepositoryPath();
    const azureRestApiSpecRepository = await getValidatedRepository(azureRestApiSpecsRepositoryPath);
    _logger.log(`Found azure-rest-api-specs repository in ${azureRestApiSpecsRepositoryPath}`);

    await refreshRepository(azureRestApiSpecRepository);
    _logger.log(`Refreshed ${azureRestApiSpecsRepositoryPath} repository successfully`);

    const sdkPath: string = await findSdkDirectory(azureRestApiSpecsRepositoryPath, packageName, sdkType);
    _logger.log(`Found specification in ${sdkPath}`);

    const typescriptReadmePath: string = await copyExistingNodeJsReadme(sdkPath);
    _logger.log(`Copied readme file successfully`);

    const newContent: string = await updateTypeScriptReadmeFile(typescriptReadmePath);
    _logger.log(`Generated content of the new TypeScript readme file successfully`);

    await saveContentToFile(typescriptReadmePath, newContent);
    _logger.log(`Content saved successfully to ${typescriptReadmePath}`);

    const readmeFilePath = path.resolve(sdkPath, "readme.md");
    const updatedReadmeContent: string = await updateMainReadmeFile(readmeFilePath);
    _logger.log(`Updated content of the readme file successfully`);

    await saveContentToFile(readmeFilePath, updatedReadmeContent);
    _logger.log(`Content saved successfully to ${readmeFilePath}`);

    const pullRequestTitle = `Add ${packageName}/${sdkType}/readme.typescript.md`;
    const pullRequestDescription = "Autogenerated";
    const validate = statuses => statuses.length == 2;
    const validateEach = el => el.path().startsWith(`specification/${packageName}`);

    return commitAndCreatePullRequest(azureRestApiSpecRepository, packageName, pullRequestTitle, "azure-rest-api-specs", pullRequestTitle, pullRequestDescription, validate, validateEach);
}

export async function generateMissingSdk(azureSdkForJsRepoPath: string, packageName: string, sdkType: SdkType): Promise<string> {
    const specsPullRequestsUrl = await generateTsReadme(packageName, sdkType);
    if (_args["skip-sdk"]) {
        _logger.log(`Skipping sdk generation`);
        return "";
    }

    const azureRestApiSpecsRepositoryPath: string = await findAzureRestApiSpecsRepositoryPath();
    _logger.log(`Found azure-rest-api-specs repository in ${azureRestApiSpecsRepositoryPath}`);

    const azureSdkForJsRepository = await getValidatedRepository(azureSdkForJsRepoPath);
    await refreshRepository(azureSdkForJsRepository);
    _logger.log(`Refreshed ${azureSdkForJsRepository} repository successfully`);

    await generateSdk(azureRestApiSpecsRepositoryPath, azureSdkForJsRepoPath, `arm-${packageName}`);
    _logger.log(`Generated ${packageName} SDK successfully`);

    const pullRequestTitle = `Generate ${packageName} package`;
    const pullRequestDescription =
    ` Autogenerated. Matching specification pull request - ${specsPullRequestsUrl}\n\n\n
    \`\`\`${_logger.getCapturedText()}\`\`\``
    const validateEach = el => el.path().startsWith(`specification/arm-${packageName}`);

    return commitAndCreatePullRequest(azureSdkForJsRepository, packageName, pullRequestTitle, "azure-sdk-for-js", pullRequestTitle, pullRequestDescription, undefined, validateEach);
}

export async function generateAllMissingSdks(azureSdkForJsRepoPath: string, azureRestApiSpecsRepository: string) {
    const missingSdks = await findMissingSdks(azureRestApiSpecsRepository);
    _logger.log(`Found ${missingSdks.length} missing specifications`);

    for (const missingSdk of missingSdks) {
        try {
            await generateMissingSdk(azureSdkForJsRepoPath, missingSdk.sdkName, missingSdk.sdkType);
        } catch (error) {
            _logger.logError(error);
            continue;
        }
    }
}
