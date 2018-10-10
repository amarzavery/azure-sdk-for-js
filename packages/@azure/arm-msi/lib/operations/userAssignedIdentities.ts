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
import * as Mappers from "../models/userAssignedIdentitiesMappers";
import * as Parameters from "../models/parameters";
import { ManagedServiceIdentityClientContext } from "../managedServiceIdentityClientContext";

/** Class representing a UserAssignedIdentities. */
export class UserAssignedIdentities {
  private readonly client: ManagedServiceIdentityClientContext;

  /**
   * Create a UserAssignedIdentities.
   * @param {ManagedServiceIdentityClientContext} client Reference to the service client.
   */
  constructor(client: ManagedServiceIdentityClientContext) {
    this.client = client;
  }

  /**
   * Lists all the userAssignedIdentities available under the specified subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.UserAssignedIdentitiesListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.UserAssignedIdentitiesListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.UserAssignedIdentitiesListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UserAssignedIdentitiesListResult>): void;
  listBySubscription(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.UserAssignedIdentitiesListResult>): Promise<Models.UserAssignedIdentitiesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.UserAssignedIdentitiesListBySubscriptionResponse>;
  }

  /**
   * Lists all the userAssignedIdentities available under the specified ResourceGroup.
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param [options] The optional parameters
   * @returns Promise<Models.UserAssignedIdentitiesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.UserAssignedIdentitiesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.UserAssignedIdentitiesListResult>): void;
  /**
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UserAssignedIdentitiesListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.UserAssignedIdentitiesListResult>): Promise<Models.UserAssignedIdentitiesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.UserAssignedIdentitiesListByResourceGroupResponse>;
  }

  /**
   * Create or update an identity in the specified subscription and resource group.
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param resourceName The name of the identity resource.
   * @param parameters Parameters to create or update the identity
   * @param [options] The optional parameters
   * @returns Promise<Models.UserAssignedIdentitiesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, parameters: Models.Identity, options?: msRest.RequestOptionsBase): Promise<Models.UserAssignedIdentitiesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param resourceName The name of the identity resource.
   * @param parameters Parameters to create or update the identity
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, parameters: Models.Identity, callback: msRest.ServiceCallback<Models.Identity>): void;
  /**
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param resourceName The name of the identity resource.
   * @param parameters Parameters to create or update the identity
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, parameters: Models.Identity, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Identity>): void;
  createOrUpdate(resourceGroupName: string, resourceName: string, parameters: Models.Identity, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Identity>): Promise<Models.UserAssignedIdentitiesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.UserAssignedIdentitiesCreateOrUpdateResponse>;
  }

  /**
   * Update an identity in the specified subscription and resource group.
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param resourceName The name of the identity resource.
   * @param parameters Parameters to update the identity
   * @param [options] The optional parameters
   * @returns Promise<Models.UserAssignedIdentitiesUpdateResponse>
   */
  update(resourceGroupName: string, resourceName: string, parameters: Models.Identity, options?: msRest.RequestOptionsBase): Promise<Models.UserAssignedIdentitiesUpdateResponse>;
  /**
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param resourceName The name of the identity resource.
   * @param parameters Parameters to update the identity
   * @param callback The callback
   */
  update(resourceGroupName: string, resourceName: string, parameters: Models.Identity, callback: msRest.ServiceCallback<Models.Identity>): void;
  /**
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param resourceName The name of the identity resource.
   * @param parameters Parameters to update the identity
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, resourceName: string, parameters: Models.Identity, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Identity>): void;
  update(resourceGroupName: string, resourceName: string, parameters: Models.Identity, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Identity>): Promise<Models.UserAssignedIdentitiesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.UserAssignedIdentitiesUpdateResponse>;
  }

  /**
   * Gets the identity.
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param resourceName The name of the identity resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.UserAssignedIdentitiesGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.UserAssignedIdentitiesGetResponse>;
  /**
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param resourceName The name of the identity resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.Identity>): void;
  /**
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param resourceName The name of the identity resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Identity>): void;
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Identity>): Promise<Models.UserAssignedIdentitiesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.UserAssignedIdentitiesGetResponse>;
  }

  /**
   * Deletes the identity.
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param resourceName The name of the identity resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param resourceName The name of the identity resource.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the Resource Group to which the identity belongs.
   * @param resourceName The name of the identity resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists all the userAssignedIdentities available under the specified subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.UserAssignedIdentitiesListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.UserAssignedIdentitiesListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.UserAssignedIdentitiesListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UserAssignedIdentitiesListResult>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.UserAssignedIdentitiesListResult>): Promise<Models.UserAssignedIdentitiesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.UserAssignedIdentitiesListBySubscriptionNextResponse>;
  }

  /**
   * Lists all the userAssignedIdentities available under the specified ResourceGroup.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.UserAssignedIdentitiesListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.UserAssignedIdentitiesListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.UserAssignedIdentitiesListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UserAssignedIdentitiesListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.UserAssignedIdentitiesListResult>): Promise<Models.UserAssignedIdentitiesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.UserAssignedIdentitiesListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.ManagedIdentity/userAssignedIdentities",
  urlParameters: [
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
      bodyMapper: Mappers.UserAssignedIdentitiesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UserAssignedIdentitiesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
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
      ...Mappers.Identity,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Identity
    },
    201: {
      bodyMapper: Mappers.Identity
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
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
      ...Mappers.Identity,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Identity
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Identity
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
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
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.UserAssignedIdentitiesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.UserAssignedIdentitiesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
