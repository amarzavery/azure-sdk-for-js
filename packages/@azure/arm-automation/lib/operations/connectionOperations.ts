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
import * as Mappers from "../models/connectionOperationsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a ConnectionOperations. */
export class ConnectionOperations {
  private readonly client: AutomationClientContext;

  /**
   * Create a ConnectionOperations.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Delete the connection.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The name of connection.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectionDeleteMethodResponse>
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.ConnectionDeleteMethodResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The name of connection.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, connectionName: string, callback: msRest.ServiceCallback<Models.Connection>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The name of connection.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, connectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Connection>): void;
  deleteMethod(resourceGroupName: string, automationAccountName: string, connectionName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Connection>): Promise<Models.ConnectionDeleteMethodResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        connectionName,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.ConnectionDeleteMethodResponse>;
  }

  /**
   * Retrieve the connection identified by connection name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The name of connection.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectionGetResponse>
   */
  get(resourceGroupName: string, automationAccountName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.ConnectionGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The name of connection.
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, connectionName: string, callback: msRest.ServiceCallback<Models.Connection>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The name of connection.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, connectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Connection>): void;
  get(resourceGroupName: string, automationAccountName: string, connectionName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Connection>): Promise<Models.ConnectionGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        connectionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ConnectionGetResponse>;
  }

  /**
   * Create or update a connection.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The parameters supplied to the create or update connection operation.
   * @param parameters The parameters supplied to the create or update connection operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectionCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, connectionName: string, parameters: Models.ConnectionCreateOrUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.ConnectionCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The parameters supplied to the create or update connection operation.
   * @param parameters The parameters supplied to the create or update connection operation.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, connectionName: string, parameters: Models.ConnectionCreateOrUpdateParameters, callback: msRest.ServiceCallback<Models.Connection>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The parameters supplied to the create or update connection operation.
   * @param parameters The parameters supplied to the create or update connection operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, connectionName: string, parameters: Models.ConnectionCreateOrUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Connection>): void;
  createOrUpdate(resourceGroupName: string, automationAccountName: string, connectionName: string, parameters: Models.ConnectionCreateOrUpdateParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Connection>): Promise<Models.ConnectionCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        connectionName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ConnectionCreateOrUpdateResponse>;
  }

  /**
   * Update a connection.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The parameters supplied to the update a connection operation.
   * @param parameters The parameters supplied to the update a connection operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectionUpdateResponse>
   */
  update(resourceGroupName: string, automationAccountName: string, connectionName: string, parameters: Models.ConnectionUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.ConnectionUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The parameters supplied to the update a connection operation.
   * @param parameters The parameters supplied to the update a connection operation.
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, connectionName: string, parameters: Models.ConnectionUpdateParameters, callback: msRest.ServiceCallback<Models.Connection>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The parameters supplied to the update a connection operation.
   * @param parameters The parameters supplied to the update a connection operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, connectionName: string, parameters: Models.ConnectionUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Connection>): void;
  update(resourceGroupName: string, automationAccountName: string, connectionName: string, parameters: Models.ConnectionUpdateParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Connection>): Promise<Models.ConnectionUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        connectionName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ConnectionUpdateResponse>;
  }

  /**
   * Retrieve a list of connections.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectionListByAutomationAccountResponse>
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.ConnectionListByAutomationAccountResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, callback: msRest.ServiceCallback<Models.ConnectionListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectionListResult>): void;
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ConnectionListResult>): Promise<Models.ConnectionListByAutomationAccountResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        options
      },
      listByAutomationAccountOperationSpec,
      callback) as Promise<Models.ConnectionListByAutomationAccountResponse>;
  }

  /**
   * Retrieve a list of connections.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConnectionListByAutomationAccountNextResponse>
   */
  listByAutomationAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ConnectionListByAutomationAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ConnectionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectionListResult>): void;
  listByAutomationAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ConnectionListResult>): Promise<Models.ConnectionListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByAutomationAccountNextOperationSpec,
      callback) as Promise<Models.ConnectionListByAutomationAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.connectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Connection
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.connectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Connection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.connectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ConnectionCreateOrUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Connection
    },
    201: {
      bodyMapper: Mappers.Connection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.connectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ConnectionUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Connection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAutomationAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAutomationAccountNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
