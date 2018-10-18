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
import * as Mappers from "../models/replicationvCentersMappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClientContext } from "../siteRecoveryManagementClientContext";

/** Class representing a ReplicationvCenters. */
export class ReplicationvCenters {
  private readonly client: SiteRecoveryManagementClientContext;

  /**
   * Create a ReplicationvCenters.
   * @param {SiteRecoveryManagementClientContext} client Reference to the service client.
   */
  constructor(client: SiteRecoveryManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the vCenter servers registered in a fabric.
   * @summary Gets the list of vCenter registered under a fabric.
   * @param fabricName Fabric name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationvCentersListByReplicationFabricsResponse>
   */
  listByReplicationFabrics(fabricName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationvCentersListByReplicationFabricsResponse>;
  /**
   * @param fabricName Fabric name.
   * @param callback The callback
   */
  listByReplicationFabrics(fabricName: string, callback: msRest.ServiceCallback<Models.VCenterCollection>): void;
  /**
   * @param fabricName Fabric name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReplicationFabrics(fabricName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VCenterCollection>): void;
  listByReplicationFabrics(fabricName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VCenterCollection>): Promise<Models.ReplicationvCentersListByReplicationFabricsResponse> {
    return this.client.sendOperationRequest(
      {
        fabricName,
        options
      },
      listByReplicationFabricsOperationSpec,
      callback) as Promise<Models.ReplicationvCentersListByReplicationFabricsResponse>;
  }

  /**
   * Gets the details of a registered vCenter server(Add vCenter server.)
   * @summary Gets the details of a vCenter.
   * @param fabricName Fabric name.
   * @param vCenterName vCenter name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationvCentersGetResponse>
   */
  get(fabricName: string, vCenterName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationvCentersGetResponse>;
  /**
   * @param fabricName Fabric name.
   * @param vCenterName vCenter name.
   * @param callback The callback
   */
  get(fabricName: string, vCenterName: string, callback: msRest.ServiceCallback<Models.VCenter>): void;
  /**
   * @param fabricName Fabric name.
   * @param vCenterName vCenter name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(fabricName: string, vCenterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VCenter>): void;
  get(fabricName: string, vCenterName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VCenter>): Promise<Models.ReplicationvCentersGetResponse> {
    return this.client.sendOperationRequest(
      {
        fabricName,
        vCenterName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ReplicationvCentersGetResponse>;
  }

  /**
   * The operation to create a vCenter object..
   * @summary Add vCenter.
   * @param fabricName Fabric name.
   * @param vCenterName vCenter name.
   * @param addVCenterRequest The input to the add vCenter operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationvCentersCreateResponse>
   */
  create(fabricName: string, vCenterName: string, addVCenterRequest: Models.AddVCenterRequest, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationvCentersCreateResponse> {
    return this.beginCreate(fabricName,vCenterName,addVCenterRequest,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationvCentersCreateResponse>;
  }

  /**
   * The operation to remove(unregister) a registered vCenter server from the vault.
   * @summary Remove vCenter operation.
   * @param fabricName Fabric name.
   * @param vCenterName vCenter name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(fabricName: string, vCenterName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(fabricName,vCenterName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * The operation to update a registered vCenter.
   * @summary Update vCenter operation.
   * @param fabricName Fabric name.
   * @param vCenterName vCeneter name
   * @param updateVCenterRequest The input to the update vCenter operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationvCentersUpdateResponse>
   */
  update(fabricName: string, vCenterName: string, updateVCenterRequest: Models.UpdateVCenterRequest, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationvCentersUpdateResponse> {
    return this.beginUpdate(fabricName,vCenterName,updateVCenterRequest,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationvCentersUpdateResponse>;
  }

  /**
   * Lists the vCenter servers registered in the vault.
   * @summary Gets the list of vCenter registered under the vault.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationvCentersListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ReplicationvCentersListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.VCenterCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VCenterCollection>): void;
  list(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VCenterCollection>): Promise<Models.ReplicationvCentersListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ReplicationvCentersListResponse>;
  }

  /**
   * The operation to create a vCenter object..
   * @summary Add vCenter.
   * @param fabricName Fabric name.
   * @param vCenterName vCenter name.
   * @param addVCenterRequest The input to the add vCenter operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(fabricName: string, vCenterName: string, addVCenterRequest: Models.AddVCenterRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        fabricName,
        vCenterName,
        addVCenterRequest,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * The operation to remove(unregister) a registered vCenter server from the vault.
   * @summary Remove vCenter operation.
   * @param fabricName Fabric name.
   * @param vCenterName vCenter name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(fabricName: string, vCenterName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        fabricName,
        vCenterName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * The operation to update a registered vCenter.
   * @summary Update vCenter operation.
   * @param fabricName Fabric name.
   * @param vCenterName vCeneter name
   * @param updateVCenterRequest The input to the update vCenter operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(fabricName: string, vCenterName: string, updateVCenterRequest: Models.UpdateVCenterRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        fabricName,
        vCenterName,
        updateVCenterRequest,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Lists the vCenter servers registered in a fabric.
   * @summary Gets the list of vCenter registered under a fabric.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationvCentersListByReplicationFabricsNextResponse>
   */
  listByReplicationFabricsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationvCentersListByReplicationFabricsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByReplicationFabricsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VCenterCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReplicationFabricsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VCenterCollection>): void;
  listByReplicationFabricsNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VCenterCollection>): Promise<Models.ReplicationvCentersListByReplicationFabricsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByReplicationFabricsNextOperationSpec,
      callback) as Promise<Models.ReplicationvCentersListByReplicationFabricsNextResponse>;
  }

  /**
   * Lists the vCenter servers registered in the vault.
   * @summary Gets the list of vCenter registered under the vault.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationvCentersListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationvCentersListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VCenterCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VCenterCollection>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VCenterCollection>): Promise<Models.ReplicationvCentersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ReplicationvCentersListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByReplicationFabricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationvCenters",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VCenterCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationvCenters/{vCenterName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.vCenterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VCenter
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationvCenters",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.VCenterCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationvCenters/{vCenterName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.vCenterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "addVCenterRequest",
    mapper: {
      ...Mappers.AddVCenterRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VCenter
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationvCenters/{vCenterName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.vCenterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationvCenters/{vCenterName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.vCenterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "updateVCenterRequest",
    mapper: {
      ...Mappers.UpdateVCenterRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VCenter
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByReplicationFabricsNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.VCenterCollection
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
      bodyMapper: Mappers.VCenterCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
