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
import * as Mappers from "../models/virtualNetworkPeeringsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a VirtualNetworkPeerings. */
export class VirtualNetworkPeerings {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a VirtualNetworkPeerings.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }


  /**
   * Deletes the specified virtual network peering.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} virtualNetworkName The name of the virtual network.
   *
   * @param {string} virtualNetworkPeeringName The name of the virtual network peering.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName, virtualNetworkName, virtualNetworkPeeringName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified virtual network peering.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} virtualNetworkName The name of the virtual network.
   *
   * @param {string} virtualNetworkPeeringName The name of the virtual network peering.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string): Promise<Models.VirtualNetworkPeeringsGetResponse>;
  get(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkPeeringsGetResponse>;
  get(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkPeering>): void;
  get(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkPeering>): void;
  get(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VirtualNetworkPeering>): Promise<Models.VirtualNetworkPeeringsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualNetworkName,
        virtualNetworkPeeringName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualNetworkPeeringsGetResponse>;
  }


  /**
   * Creates or updates a peering in the specified virtual network.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} virtualNetworkName The name of the virtual network.
   *
   * @param {string} virtualNetworkPeeringName The name of the peering.
   *
   * @param {VirtualNetworkPeering} virtualNetworkPeeringParameters Parameters supplied to the create
   * or update virtual network peering operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdate(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, virtualNetworkPeeringParameters: Models.VirtualNetworkPeering, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkPeeringsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName, virtualNetworkName, virtualNetworkPeeringName, virtualNetworkPeeringParameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualNetworkPeeringsCreateOrUpdateResponse>;
  }

  /**
   * Gets all virtual network peerings in a virtual network.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} virtualNetworkName The name of the virtual network.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(resourceGroupName: string, virtualNetworkName: string): Promise<Models.VirtualNetworkPeeringsListResponse>;
  list(resourceGroupName: string, virtualNetworkName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkPeeringsListResponse>;
  list(resourceGroupName: string, virtualNetworkName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkPeeringListResult>): void;
  list(resourceGroupName: string, virtualNetworkName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkPeeringListResult>): void;
  list(resourceGroupName: string, virtualNetworkName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VirtualNetworkPeeringListResult>): Promise<Models.VirtualNetworkPeeringsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualNetworkName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VirtualNetworkPeeringsListResponse>;
  }

  /**
   * Deletes the specified virtual network peering.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} virtualNetworkName The name of the virtual network.
   *
   * @param {string} virtualNetworkPeeringName The name of the virtual network peering.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethod(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualNetworkName,
        virtualNetworkPeeringName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates a peering in the specified virtual network.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} virtualNetworkName The name of the virtual network.
   *
   * @param {string} virtualNetworkPeeringName The name of the peering.
   *
   * @param {VirtualNetworkPeering} virtualNetworkPeeringParameters Parameters supplied to the create
   * or update virtual network peering operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, virtualNetworkPeeringParameters: Models.VirtualNetworkPeering, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualNetworkName,
        virtualNetworkPeeringName,
        virtualNetworkPeeringParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all virtual network peerings in a virtual network.
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
  listNext(nextPageLink: string): Promise<Models.VirtualNetworkPeeringsListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkPeeringsListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualNetworkPeeringListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkPeeringListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VirtualNetworkPeeringListResult>): Promise<Models.VirtualNetworkPeeringsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.VirtualNetworkPeeringsListNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/virtualNetworkPeerings/{virtualNetworkPeeringName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkName,
    Parameters.virtualNetworkPeeringName,
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
      bodyMapper: Mappers.VirtualNetworkPeering
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/virtualNetworkPeerings",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkName,
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
      bodyMapper: Mappers.VirtualNetworkPeeringListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/virtualNetworkPeerings/{virtualNetworkPeeringName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkName,
    Parameters.virtualNetworkPeeringName,
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/virtualNetworkPeerings/{virtualNetworkPeeringName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkName,
    Parameters.virtualNetworkPeeringName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "virtualNetworkPeeringParameters",
    mapper: {
      ...Mappers.VirtualNetworkPeering,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkPeering
    },
    201: {
      bodyMapper: Mappers.VirtualNetworkPeering
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
      bodyMapper: Mappers.VirtualNetworkPeeringListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
