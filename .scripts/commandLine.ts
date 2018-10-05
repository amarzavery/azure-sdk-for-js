/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 */

import * as minimist from "minimist";
import { arrayContains } from "./common";

export interface CommandLineOptions extends minimist.ParsedArgs {
    "azure-rest-api-specs-root": string;
    b: boolean,
    debugger: boolean,
    package: string,
    type: string,
    use: boolean,
    verbose: boolean,
    whatif: boolean,
    getSdkType(): SdkType;
}

export const commandLineConfiguration = {
    string: ["'azure-rest-api-specs-root", "package", "type"],
    boolean: ["debugger", "use", "verbose", "whatif"],
    alias: {
        package: "packageName",
        u: "use",
        v: "version",
    },
    default: {
        type: "arm"
    }
}

export enum SdkType {
    ResourceManager,
    DataPlane
}

let _options: CommandLineOptions;
export function getCommandLineOptions() {
    if (!_options) {
        _options = createCommandLineParameters();
    }

    return _options;
}

export function createCommandLineParameters() {
    const args = minimist(process.argv.slice(2), commandLineConfiguration) as CommandLineOptions;
    args.getSdkType = getSdkType;
    return args;
}

export function getSdkType() {
    const resourceManagerStrings = ["arm", "rm", "resourcemanager"]
    const dataPlaneStrings = ["dp", "data", "dataplane"]

    const type = this.type.toLowerCase().replace("-", "");
    if (arrayContains(resourceManagerStrings, type)) {
        return SdkType.ResourceManager;
    } else if (arrayContains(dataPlaneStrings, type)) {
        return SdkType.DataPlane;
    } else {
        throw new Error("Unknown SDK type");
    }
}