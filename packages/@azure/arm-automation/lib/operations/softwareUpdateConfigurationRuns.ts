/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/softwareUpdateConfigurationRunsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a SoftwareUpdateConfigurationRuns. */
export class SoftwareUpdateConfigurationRuns {
  private readonly client: AutomationClientContext;

  /**
   * Create a SoftwareUpdateConfigurationRuns.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Get a single software update configuration Run by Id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationRunId The Id of the software update configuration run.
   * @param [options] The optional parameters
   * @returns Promise<Models.SoftwareUpdateConfigurationRunsGetByIdResponse>
   */
  getById(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationRunId: string, options?: Models.SoftwareUpdateConfigurationRunsGetByIdOptionalParams): Promise<Models.SoftwareUpdateConfigurationRunsGetByIdResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationRunId The Id of the software update configuration run.
   * @param callback The callback
   */
  getById(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationRunId: string, callback: msRest.ServiceCallback<Models.SoftwareUpdateConfigurationRun>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationRunId The Id of the software update configuration run.
   * @param options The optional parameters
   * @param callback The callback
   */
  getById(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationRunId: string, options: Models.SoftwareUpdateConfigurationRunsGetByIdOptionalParams, callback: msRest.ServiceCallback<Models.SoftwareUpdateConfigurationRun>): void;
  getById(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationRunId: string, options?: Models.SoftwareUpdateConfigurationRunsGetByIdOptionalParams, callback?: msRest.ServiceCallback<Models.SoftwareUpdateConfigurationRun>): Promise<Models.SoftwareUpdateConfigurationRunsGetByIdResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        softwareUpdateConfigurationRunId,
        options
      },
      getByIdOperationSpec,
      callback) as Promise<Models.SoftwareUpdateConfigurationRunsGetByIdResponse>;
  }

  /**
   * Return list of software update configuration runs
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param [options] The optional parameters
   * @returns Promise<Models.SoftwareUpdateConfigurationRunsListResponse>
   */
  list(resourceGroupName: string, automationAccountName: string, options?: Models.SoftwareUpdateConfigurationRunsListOptionalParams): Promise<Models.SoftwareUpdateConfigurationRunsListResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param callback The callback
   */
  list(resourceGroupName: string, automationAccountName: string, callback: msRest.ServiceCallback<Models.SoftwareUpdateConfigurationRunListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, automationAccountName: string, options: Models.SoftwareUpdateConfigurationRunsListOptionalParams, callback: msRest.ServiceCallback<Models.SoftwareUpdateConfigurationRunListResult>): void;
  list(resourceGroupName: string, automationAccountName: string, options?: Models.SoftwareUpdateConfigurationRunsListOptionalParams, callback?: msRest.ServiceCallback<Models.SoftwareUpdateConfigurationRunListResult>): Promise<Models.SoftwareUpdateConfigurationRunsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SoftwareUpdateConfigurationRunsListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationRuns/{softwareUpdateConfigurationRunId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.softwareUpdateConfigurationRunId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SoftwareUpdateConfigurationRun
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationRuns",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName
  ],
  queryParameters: [
    Parameters.apiVersion1,
    Parameters.filter,
    Parameters.skip1,
    Parameters.top1
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SoftwareUpdateConfigurationRunListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
