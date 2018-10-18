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
import * as Mappers from "../models/wCFRelaysMappers";
import * as Parameters from "../models/parameters";
import { RelayManagementClientContext } from "../relayManagementClientContext";

/** Class representing a WCFRelays. */
export class WCFRelays {
  private readonly client: RelayManagementClientContext;

  /**
   * Create a WCFRelays.
   * @param {RelayManagementClientContext} client Reference to the service client.
   */
  constructor(client: RelayManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the WCF relays within the namespace.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param [options] The optional parameters
   * @returns Promise<Models.WCFRelaysListByNamespaceResponse>
   */
  listByNamespace(resourceGroupName: string, namespaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.WCFRelaysListByNamespaceResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param callback The callback
   */
  listByNamespace(resourceGroupName: string, namespaceName: string, callback: msRest.ServiceCallback<Models.WcfRelaysListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByNamespace(resourceGroupName: string, namespaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WcfRelaysListResult>): void;
  listByNamespace(resourceGroupName: string, namespaceName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WcfRelaysListResult>): Promise<Models.WCFRelaysListByNamespaceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        options
      },
      listByNamespaceOperationSpec,
      callback) as Promise<Models.WCFRelaysListByNamespaceResponse>;
  }

  /**
   * Creates or updates a WCF relay. This operation is idempotent.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param parameters Parameters supplied to create a WCF relay.
   * @param [options] The optional parameters
   * @returns Promise<Models.WCFRelaysCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, namespaceName: string, relayName: string, parameters: Models.WcfRelay, options?: msRest.RequestOptionsBase): Promise<Models.WCFRelaysCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param parameters Parameters supplied to create a WCF relay.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, namespaceName: string, relayName: string, parameters: Models.WcfRelay, callback: msRest.ServiceCallback<Models.WcfRelay>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param parameters Parameters supplied to create a WCF relay.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, namespaceName: string, relayName: string, parameters: Models.WcfRelay, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WcfRelay>): void;
  createOrUpdate(resourceGroupName: string, namespaceName: string, relayName: string, parameters: Models.WcfRelay, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WcfRelay>): Promise<Models.WCFRelaysCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        relayName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.WCFRelaysCreateOrUpdateResponse>;
  }

  /**
   * Deletes a WCF relay.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, relayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, relayName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, relayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, namespaceName: string, relayName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        relayName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Returns the description for the specified WCF relay.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param [options] The optional parameters
   * @returns Promise<Models.WCFRelaysGetResponse>
   */
  get(resourceGroupName: string, namespaceName: string, relayName: string, options?: msRest.RequestOptionsBase): Promise<Models.WCFRelaysGetResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param callback The callback
   */
  get(resourceGroupName: string, namespaceName: string, relayName: string, callback: msRest.ServiceCallback<Models.WcfRelay>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, namespaceName: string, relayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WcfRelay>): void;
  get(resourceGroupName: string, namespaceName: string, relayName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WcfRelay>): Promise<Models.WCFRelaysGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        relayName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WCFRelaysGetResponse>;
  }

  /**
   * Authorization rules for a WCF relay.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param [options] The optional parameters
   * @returns Promise<Models.WCFRelaysListAuthorizationRulesResponse>
   */
  listAuthorizationRules(resourceGroupName: string, namespaceName: string, relayName: string, options?: msRest.RequestOptionsBase): Promise<Models.WCFRelaysListAuthorizationRulesResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param callback The callback
   */
  listAuthorizationRules(resourceGroupName: string, namespaceName: string, relayName: string, callback: msRest.ServiceCallback<Models.AuthorizationRuleListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAuthorizationRules(resourceGroupName: string, namespaceName: string, relayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AuthorizationRuleListResult>): void;
  listAuthorizationRules(resourceGroupName: string, namespaceName: string, relayName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AuthorizationRuleListResult>): Promise<Models.WCFRelaysListAuthorizationRulesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        relayName,
        options
      },
      listAuthorizationRulesOperationSpec,
      callback) as Promise<Models.WCFRelaysListAuthorizationRulesResponse>;
  }

  /**
   * Creates or updates an authorization rule for a WCF relay.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param authorizationRuleName The authorization rule name.
   * @param parameters The authorization rule parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.WCFRelaysCreateOrUpdateAuthorizationRuleResponse>
   */
  createOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, parameters: Models.AuthorizationRule, options?: msRest.RequestOptionsBase): Promise<Models.WCFRelaysCreateOrUpdateAuthorizationRuleResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param authorizationRuleName The authorization rule name.
   * @param parameters The authorization rule parameters.
   * @param callback The callback
   */
  createOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, parameters: Models.AuthorizationRule, callback: msRest.ServiceCallback<Models.AuthorizationRule>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param authorizationRuleName The authorization rule name.
   * @param parameters The authorization rule parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, parameters: Models.AuthorizationRule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AuthorizationRule>): void;
  createOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, parameters: Models.AuthorizationRule, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AuthorizationRule>): Promise<Models.WCFRelaysCreateOrUpdateAuthorizationRuleResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        relayName,
        authorizationRuleName,
        parameters,
        options
      },
      createOrUpdateAuthorizationRuleOperationSpec,
      callback) as Promise<Models.WCFRelaysCreateOrUpdateAuthorizationRuleResponse>;
  }

  /**
   * Deletes a WCF relay authorization rule.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param authorizationRuleName The authorization rule name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteAuthorizationRule(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param authorizationRuleName The authorization rule name.
   * @param callback The callback
   */
  deleteAuthorizationRule(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param authorizationRuleName The authorization rule name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteAuthorizationRule(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteAuthorizationRule(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        relayName,
        authorizationRuleName,
        options
      },
      deleteAuthorizationRuleOperationSpec,
      callback);
  }

  /**
   * Get authorizationRule for a WCF relay by name.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param authorizationRuleName The authorization rule name.
   * @param [options] The optional parameters
   * @returns Promise<Models.WCFRelaysGetAuthorizationRuleResponse>
   */
  getAuthorizationRule(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.WCFRelaysGetAuthorizationRuleResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param authorizationRuleName The authorization rule name.
   * @param callback The callback
   */
  getAuthorizationRule(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, callback: msRest.ServiceCallback<Models.AuthorizationRule>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param authorizationRuleName The authorization rule name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAuthorizationRule(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AuthorizationRule>): void;
  getAuthorizationRule(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AuthorizationRule>): Promise<Models.WCFRelaysGetAuthorizationRuleResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        relayName,
        authorizationRuleName,
        options
      },
      getAuthorizationRuleOperationSpec,
      callback) as Promise<Models.WCFRelaysGetAuthorizationRuleResponse>;
  }

  /**
   * Primary and secondary connection strings to the WCF relay.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param authorizationRuleName The authorization rule name.
   * @param [options] The optional parameters
   * @returns Promise<Models.WCFRelaysListKeysResponse>
   */
  listKeys(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.WCFRelaysListKeysResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param authorizationRuleName The authorization rule name.
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, callback: msRest.ServiceCallback<Models.AccessKeys>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param authorizationRuleName The authorization rule name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessKeys>): void;
  listKeys(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AccessKeys>): Promise<Models.WCFRelaysListKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        relayName,
        authorizationRuleName,
        options
      },
      listKeysOperationSpec,
      callback) as Promise<Models.WCFRelaysListKeysResponse>;
  }

  /**
   * Regenerates the primary or secondary connection strings to the WCF relay.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param authorizationRuleName The authorization rule name.
   * @param parameters Parameters supplied to regenerate authorization rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.WCFRelaysRegenerateKeysResponse>
   */
  regenerateKeys(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, parameters: Models.RegenerateAccessKeyParameters, options?: msRest.RequestOptionsBase): Promise<Models.WCFRelaysRegenerateKeysResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param authorizationRuleName The authorization rule name.
   * @param parameters Parameters supplied to regenerate authorization rule.
   * @param callback The callback
   */
  regenerateKeys(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, parameters: Models.RegenerateAccessKeyParameters, callback: msRest.ServiceCallback<Models.AccessKeys>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param relayName The relay name.
   * @param authorizationRuleName The authorization rule name.
   * @param parameters Parameters supplied to regenerate authorization rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerateKeys(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, parameters: Models.RegenerateAccessKeyParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessKeys>): void;
  regenerateKeys(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, parameters: Models.RegenerateAccessKeyParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AccessKeys>): Promise<Models.WCFRelaysRegenerateKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        relayName,
        authorizationRuleName,
        parameters,
        options
      },
      regenerateKeysOperationSpec,
      callback) as Promise<Models.WCFRelaysRegenerateKeysResponse>;
  }

  /**
   * Lists the WCF relays within the namespace.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.WCFRelaysListByNamespaceNextResponse>
   */
  listByNamespaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WCFRelaysListByNamespaceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByNamespaceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WcfRelaysListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByNamespaceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WcfRelaysListResult>): void;
  listByNamespaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WcfRelaysListResult>): Promise<Models.WCFRelaysListByNamespaceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByNamespaceNextOperationSpec,
      callback) as Promise<Models.WCFRelaysListByNamespaceNextResponse>;
  }

  /**
   * Authorization rules for a WCF relay.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.WCFRelaysListAuthorizationRulesNextResponse>
   */
  listAuthorizationRulesNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WCFRelaysListAuthorizationRulesNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAuthorizationRulesNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AuthorizationRuleListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAuthorizationRulesNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AuthorizationRuleListResult>): void;
  listAuthorizationRulesNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AuthorizationRuleListResult>): Promise<Models.WCFRelaysListAuthorizationRulesNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAuthorizationRulesNextOperationSpec,
      callback) as Promise<Models.WCFRelaysListAuthorizationRulesNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByNamespaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WcfRelaysListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.relayName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.WcfRelay,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WcfRelay
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.relayName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.relayName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WcfRelay
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listAuthorizationRulesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}/authorizationRules",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.relayName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateAuthorizationRuleOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}/authorizationRules/{authorizationRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.relayName,
    Parameters.authorizationRuleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.AuthorizationRule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteAuthorizationRuleOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}/authorizationRules/{authorizationRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.relayName,
    Parameters.authorizationRuleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getAuthorizationRuleOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}/authorizationRules/{authorizationRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.relayName,
    Parameters.authorizationRuleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}/authorizationRules/{authorizationRuleName}/listKeys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.relayName,
    Parameters.authorizationRuleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccessKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const regenerateKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}/authorizationRules/{authorizationRuleName}/regenerateKeys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.relayName,
    Parameters.authorizationRuleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RegenerateAccessKeyParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AccessKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByNamespaceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.WcfRelaysListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listAuthorizationRulesNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.AuthorizationRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
