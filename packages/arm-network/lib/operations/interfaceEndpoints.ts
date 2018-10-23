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
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/interfaceEndpointsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a InterfaceEndpoints. */
export class InterfaceEndpoints {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a InterfaceEndpoints.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }


  /**
   * Deletes the specified interface endpoint.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} interfaceEndpointName The name of the interface endpoint.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, interfaceEndpointName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName, interfaceEndpointName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified interface endpoint by resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} interfaceEndpointName The name of the interface endpoint.
   *
   * @param {InterfaceEndpointsGetOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, interfaceEndpointName: string): Promise<Models.InterfaceEndpointsGetResponse>;
  get(resourceGroupName: string, interfaceEndpointName: string, options: Models.InterfaceEndpointsGetOptionalParams): Promise<Models.InterfaceEndpointsGetResponse>;
  get(resourceGroupName: string, interfaceEndpointName: string, callback: msRest.ServiceCallback<Models.InterfaceEndpoint>): void;
  get(resourceGroupName: string, interfaceEndpointName: string, options: Models.InterfaceEndpointsGetOptionalParams, callback: msRest.ServiceCallback<Models.InterfaceEndpoint>): void;
  get(resourceGroupName: string, interfaceEndpointName: string, options?: Models.InterfaceEndpointsGetOptionalParams, callback?: msRest.ServiceCallback<Models.InterfaceEndpoint>): Promise<Models.InterfaceEndpointsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        interfaceEndpointName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.InterfaceEndpointsGetResponse>;
  }


  /**
   * Creates or updates an interface endpoint in the specified resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} interfaceEndpointName The name of the interface endpoint.
   *
   * @param {InterfaceEndpoint} parameters Parameters supplied to the create or update interface
   * endpoint operation
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdate(resourceGroupName: string, interfaceEndpointName: string, parameters: Models.InterfaceEndpoint, options?: msRest.RequestOptionsBase): Promise<Models.InterfaceEndpointsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName, interfaceEndpointName, parameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.InterfaceEndpointsCreateOrUpdateResponse>;
  }

  /**
   * Gets all interface endpoints in a resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(resourceGroupName: string): Promise<Models.InterfaceEndpointsListResponse>;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.InterfaceEndpointsListResponse>;
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.InterfaceEndpointListResult>): void;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InterfaceEndpointListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.InterfaceEndpointListResult>): Promise<Models.InterfaceEndpointsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.InterfaceEndpointsListResponse>;
  }

  /**
   * Gets all interface endpoints in a subscription.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listBySubscription(): Promise<Models.InterfaceEndpointsListBySubscriptionResponse>;
  listBySubscription(options: msRest.RequestOptionsBase): Promise<Models.InterfaceEndpointsListBySubscriptionResponse>;
  listBySubscription(callback: msRest.ServiceCallback<Models.InterfaceEndpointListResult>): void;
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InterfaceEndpointListResult>): void;
  listBySubscription(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.InterfaceEndpointListResult>): Promise<Models.InterfaceEndpointsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.InterfaceEndpointsListBySubscriptionResponse>;
  }

  /**
   * Deletes the specified interface endpoint.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} interfaceEndpointName The name of the interface endpoint.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethod(resourceGroupName: string, interfaceEndpointName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        interfaceEndpointName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates an interface endpoint in the specified resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} interfaceEndpointName The name of the interface endpoint.
   *
   * @param {InterfaceEndpoint} parameters Parameters supplied to the create or update interface
   * endpoint operation
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginCreateOrUpdate(resourceGroupName: string, interfaceEndpointName: string, parameters: Models.InterfaceEndpoint, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        interfaceEndpointName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all interface endpoints in a resource group.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listNext(nextPageLink: string): Promise<Models.InterfaceEndpointsListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.InterfaceEndpointsListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.InterfaceEndpointListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InterfaceEndpointListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.InterfaceEndpointListResult>): Promise<Models.InterfaceEndpointsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.InterfaceEndpointsListNextResponse>;
  }

  /**
   * Gets all interface endpoints in a subscription.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listBySubscriptionNext(nextPageLink: string): Promise<Models.InterfaceEndpointsListBySubscriptionNextResponse>;
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.InterfaceEndpointsListBySubscriptionNextResponse>;
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.InterfaceEndpointListResult>): void;
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InterfaceEndpointListResult>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.InterfaceEndpointListResult>): Promise<Models.InterfaceEndpointsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.InterfaceEndpointsListBySubscriptionNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/interfaceEndpoints/{interfaceEndpointName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.interfaceEndpointName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InterfaceEndpoint
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/interfaceEndpoints",
  urlParameters: [
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.InterfaceEndpointListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/interfaceEndpoints",
  urlParameters: [
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
      bodyMapper: Mappers.InterfaceEndpointListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/interfaceEndpoints/{interfaceEndpointName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.interfaceEndpointName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/interfaceEndpoints/{interfaceEndpointName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.interfaceEndpointName,
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
      ...Mappers.InterfaceEndpoint,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.InterfaceEndpoint
    },
    201: {
      bodyMapper: Mappers.InterfaceEndpoint
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.InterfaceEndpointListResult
    },
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
      bodyMapper: Mappers.InterfaceEndpointListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
