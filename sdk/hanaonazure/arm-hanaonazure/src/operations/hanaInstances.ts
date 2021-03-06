/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/hanaInstancesMappers";
import * as Parameters from "../models/parameters";
import { HanaManagementClientContext } from "../hanaManagementClientContext";

/** Class representing a HanaInstances. */
export class HanaInstances {
  private readonly client: HanaManagementClientContext;

  /**
   * Create a HanaInstances.
   * @param {HanaManagementClientContext} client Reference to the service client.
   */
  constructor(client: HanaManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of SAP HANA instances in the specified subscription. The operations returns various
   * properties of each SAP HANA on Azure instance.
   * @summary Gets a list of SAP HANA instances in the specified subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.HanaInstancesListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.HanaInstancesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.HanaInstancesListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HanaInstancesListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HanaInstancesListResult>, callback?: msRest.ServiceCallback<Models.HanaInstancesListResult>): Promise<Models.HanaInstancesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.HanaInstancesListResponse>;
  }

  /**
   * Gets a list of SAP HANA instances in the specified subscription and the resource group. The
   * operations returns various properties of each SAP HANA on Azure instance.
   * @summary Gets a list of SAP HANA instances in the specified subscription and the resource group.
   * @param resourceGroupName Name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.HanaInstancesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.HanaInstancesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.HanaInstancesListResult>): void;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HanaInstancesListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HanaInstancesListResult>, callback?: msRest.ServiceCallback<Models.HanaInstancesListResult>): Promise<Models.HanaInstancesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.HanaInstancesListByResourceGroupResponse>;
  }

  /**
   * Gets properties of a SAP HANA instance for the specified subscription, resource group, and
   * instance name.
   * @summary Gets properties of a SAP HANA instance.
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.HanaInstancesGetResponse>
   */
  get(resourceGroupName: string, hanaInstanceName: string, options?: msRest.RequestOptionsBase): Promise<Models.HanaInstancesGetResponse>;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param callback The callback
   */
  get(resourceGroupName: string, hanaInstanceName: string, callback: msRest.ServiceCallback<Models.HanaInstance>): void;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, hanaInstanceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HanaInstance>): void;
  get(resourceGroupName: string, hanaInstanceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HanaInstance>, callback?: msRest.ServiceCallback<Models.HanaInstance>): Promise<Models.HanaInstancesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hanaInstanceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.HanaInstancesGetResponse>;
  }

  /**
   * Creates a SAP HANA instance for the specified subscription, resource group, and instance name.
   * @summary Creates a SAP HANA instance.
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param hanaInstanceParameter Request body representing a HanaInstance
   * @param [options] The optional parameters
   * @returns Promise<Models.HanaInstancesCreateResponse>
   */
  create(resourceGroupName: string, hanaInstanceName: string, hanaInstanceParameter: Models.HanaInstance, options?: msRest.RequestOptionsBase): Promise<Models.HanaInstancesCreateResponse> {
    return this.beginCreate(resourceGroupName,hanaInstanceName,hanaInstanceParameter,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.HanaInstancesCreateResponse>;
  }

  /**
   * Deletes a SAP HANA instance with the specified subscription, resource group, and instance name.
   * @summary Deletes a SAP HANA instance.
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, hanaInstanceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,hanaInstanceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Patches the Tags field of a SAP HANA instance for the specified subscription, resource group,
   * and instance name.
   * @summary Patches the Tags field of a SAP HANA instance.
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param tagsParameter Request body that only contains the new Tags field
   * @param [options] The optional parameters
   * @returns Promise<Models.HanaInstancesUpdateResponse>
   */
  update(resourceGroupName: string, hanaInstanceName: string, tagsParameter: Models.Tags, options?: msRest.RequestOptionsBase): Promise<Models.HanaInstancesUpdateResponse>;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param tagsParameter Request body that only contains the new Tags field
   * @param callback The callback
   */
  update(resourceGroupName: string, hanaInstanceName: string, tagsParameter: Models.Tags, callback: msRest.ServiceCallback<Models.HanaInstance>): void;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param tagsParameter Request body that only contains the new Tags field
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, hanaInstanceName: string, tagsParameter: Models.Tags, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HanaInstance>): void;
  update(resourceGroupName: string, hanaInstanceName: string, tagsParameter: Models.Tags, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HanaInstance>, callback?: msRest.ServiceCallback<Models.HanaInstance>): Promise<Models.HanaInstancesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hanaInstanceName,
        tagsParameter,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.HanaInstancesUpdateResponse>;
  }

  /**
   * The operation to restart a SAP HANA instance.
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  restart(resourceGroupName: string, hanaInstanceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginRestart(resourceGroupName,hanaInstanceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * The operation to add a monitor to an SAP HANA instance.
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param monitoringParameter Request body that only contains monitoring attributes
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  enableMonitoring(resourceGroupName: string, hanaInstanceName: string, monitoringParameter: Models.MonitoringDetails, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginEnableMonitoring(resourceGroupName,hanaInstanceName,monitoringParameter,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a SAP HANA instance for the specified subscription, resource group, and instance name.
   * @summary Creates a SAP HANA instance.
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param hanaInstanceParameter Request body representing a HanaInstance
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, hanaInstanceName: string, hanaInstanceParameter: Models.HanaInstance, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        hanaInstanceName,
        hanaInstanceParameter,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Deletes a SAP HANA instance with the specified subscription, resource group, and instance name.
   * @summary Deletes a SAP HANA instance.
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, hanaInstanceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        hanaInstanceName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * The operation to restart a SAP HANA instance.
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRestart(resourceGroupName: string, hanaInstanceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        hanaInstanceName,
        options
      },
      beginRestartOperationSpec,
      options);
  }

  /**
   * The operation to add a monitor to an SAP HANA instance.
   * @param resourceGroupName Name of the resource group.
   * @param hanaInstanceName Name of the SAP HANA on Azure instance.
   * @param monitoringParameter Request body that only contains monitoring attributes
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginEnableMonitoring(resourceGroupName: string, hanaInstanceName: string, monitoringParameter: Models.MonitoringDetails, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        hanaInstanceName,
        monitoringParameter,
        options
      },
      beginEnableMonitoringOperationSpec,
      options);
  }

  /**
   * Gets a list of SAP HANA instances in the specified subscription. The operations returns various
   * properties of each SAP HANA on Azure instance.
   * @summary Gets a list of SAP HANA instances in the specified subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.HanaInstancesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.HanaInstancesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.HanaInstancesListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HanaInstancesListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HanaInstancesListResult>, callback?: msRest.ServiceCallback<Models.HanaInstancesListResult>): Promise<Models.HanaInstancesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.HanaInstancesListNextResponse>;
  }

  /**
   * Gets a list of SAP HANA instances in the specified subscription and the resource group. The
   * operations returns various properties of each SAP HANA on Azure instance.
   * @summary Gets a list of SAP HANA instances in the specified subscription and the resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.HanaInstancesListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.HanaInstancesListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.HanaInstancesListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HanaInstancesListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HanaInstancesListResult>, callback?: msRest.ServiceCallback<Models.HanaInstancesListResult>): Promise<Models.HanaInstancesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.HanaInstancesListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.HanaOnAzure/hanaInstances",
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
      bodyMapper: Mappers.HanaInstancesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances",
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
      bodyMapper: Mappers.HanaInstancesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances/{hanaInstanceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hanaInstanceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HanaInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances/{hanaInstanceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hanaInstanceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "tagsParameter",
    mapper: {
      ...Mappers.Tags,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.HanaInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances/{hanaInstanceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hanaInstanceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "hanaInstanceParameter",
    mapper: {
      ...Mappers.HanaInstance,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.HanaInstance
    },
    201: {
      bodyMapper: Mappers.HanaInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances/{hanaInstanceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hanaInstanceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginRestartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances/{hanaInstanceName}/restart",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hanaInstanceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginEnableMonitoringOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances/{hanaInstanceName}/monitoring",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hanaInstanceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "monitoringParameter",
    mapper: {
      ...Mappers.MonitoringDetails,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
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
      bodyMapper: Mappers.HanaInstancesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
      bodyMapper: Mappers.HanaInstancesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
