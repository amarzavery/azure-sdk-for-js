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
import * as Mappers from "../models/iscsiServersMappers";
import * as Parameters from "../models/parameters";
import { StorSimpleManagementClientContext } from "../storSimpleManagementClientContext";

/** Class representing a IscsiServers. */
export class IscsiServers {
  private readonly client: StorSimpleManagementClientContext;

  /**
   * Create a IscsiServers.
   * @param {StorSimpleManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorSimpleManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves all the iscsi in a device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.IscsiServersListByDeviceResponse>
   */
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.IscsiServersListByDeviceResponse>;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.ISCSIServerList>): void;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ISCSIServerList>): void;
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ISCSIServerList>): Promise<Models.IscsiServersListByDeviceResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        managerName,
        options
      },
      listByDeviceOperationSpec,
      callback) as Promise<Models.IscsiServersListByDeviceResponse>;
  }

  /**
   * Returns the properties of the specified iscsi server name.
   * @param deviceName The device name.
   * @param iscsiServerName The iscsi server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.IscsiServersGetResponse>
   */
  get(deviceName: string, iscsiServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.IscsiServersGetResponse>;
  /**
   * @param deviceName The device name.
   * @param iscsiServerName The iscsi server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  get(deviceName: string, iscsiServerName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.ISCSIServer>): void;
  /**
   * @param deviceName The device name.
   * @param iscsiServerName The iscsi server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(deviceName: string, iscsiServerName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ISCSIServer>): void;
  get(deviceName: string, iscsiServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ISCSIServer>): Promise<Models.IscsiServersGetResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        iscsiServerName,
        resourceGroupName,
        managerName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IscsiServersGetResponse>;
  }

  /**
   * Creates or updates the iscsi server.
   * @param deviceName The device name.
   * @param iscsiServerName The iscsi server name.
   * @param iscsiServer The iscsi server.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.IscsiServersCreateOrUpdateResponse>
   */
  createOrUpdate(deviceName: string, iscsiServerName: string, iscsiServer: Models.ISCSIServer, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.IscsiServersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(deviceName,iscsiServerName,iscsiServer,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.IscsiServersCreateOrUpdateResponse>;
  }

  /**
   * Deletes the iscsi server.
   * @param deviceName The device name.
   * @param iscsiServerName The iscsi server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(deviceName: string, iscsiServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(deviceName,iscsiServerName,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Backup the iscsi server now.
   * @param deviceName The device name.
   * @param iscsiServerName The iscsi server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  backupNow(deviceName: string, iscsiServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginBackupNow(deviceName,iscsiServerName,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the iscsi server metrics
   * @param deviceName The devie name.
   * @param iscsiServerName The iscsi server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.IscsiServersListMetricsResponse>
   */
  listMetrics(deviceName: string, iscsiServerName: string, resourceGroupName: string, managerName: string, options?: Models.IscsiServersListMetricsOptionalParams): Promise<Models.IscsiServersListMetricsResponse>;
  /**
   * @param deviceName The devie name.
   * @param iscsiServerName The iscsi server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listMetrics(deviceName: string, iscsiServerName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.MetricList>): void;
  /**
   * @param deviceName The devie name.
   * @param iscsiServerName The iscsi server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetrics(deviceName: string, iscsiServerName: string, resourceGroupName: string, managerName: string, options: Models.IscsiServersListMetricsOptionalParams, callback: msRest.ServiceCallback<Models.MetricList>): void;
  listMetrics(deviceName: string, iscsiServerName: string, resourceGroupName: string, managerName: string, options?: Models.IscsiServersListMetricsOptionalParams, callback?: msRest.ServiceCallback<Models.MetricList>): Promise<Models.IscsiServersListMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        iscsiServerName,
        resourceGroupName,
        managerName,
        options
      },
      listMetricsOperationSpec,
      callback) as Promise<Models.IscsiServersListMetricsResponse>;
  }

  /**
   * Retrieves metric definitions for all metrics aggregated at iscsi server.
   * @param deviceName The devie name.
   * @param iscsiServerName The iscsi server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.IscsiServersListMetricDefinitionResponse>
   */
  listMetricDefinition(deviceName: string, iscsiServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.IscsiServersListMetricDefinitionResponse>;
  /**
   * @param deviceName The devie name.
   * @param iscsiServerName The iscsi server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listMetricDefinition(deviceName: string, iscsiServerName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.MetricDefinitionList>): void;
  /**
   * @param deviceName The devie name.
   * @param iscsiServerName The iscsi server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetricDefinition(deviceName: string, iscsiServerName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricDefinitionList>): void;
  listMetricDefinition(deviceName: string, iscsiServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MetricDefinitionList>): Promise<Models.IscsiServersListMetricDefinitionResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        iscsiServerName,
        resourceGroupName,
        managerName,
        options
      },
      listMetricDefinitionOperationSpec,
      callback) as Promise<Models.IscsiServersListMetricDefinitionResponse>;
  }

  /**
   * Retrieves all the iscsi servers in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.IscsiServersListByManagerResponse>
   */
  listByManager(resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.IscsiServersListByManagerResponse>;
  /**
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listByManager(resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.ISCSIServerList>): void;
  /**
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByManager(resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ISCSIServerList>): void;
  listByManager(resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ISCSIServerList>): Promise<Models.IscsiServersListByManagerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managerName,
        options
      },
      listByManagerOperationSpec,
      callback) as Promise<Models.IscsiServersListByManagerResponse>;
  }

  /**
   * Creates or updates the iscsi server.
   * @param deviceName The device name.
   * @param iscsiServerName The iscsi server name.
   * @param iscsiServer The iscsi server.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(deviceName: string, iscsiServerName: string, iscsiServer: Models.ISCSIServer, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        iscsiServerName,
        iscsiServer,
        resourceGroupName,
        managerName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the iscsi server.
   * @param deviceName The device name.
   * @param iscsiServerName The iscsi server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(deviceName: string, iscsiServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        iscsiServerName,
        resourceGroupName,
        managerName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Backup the iscsi server now.
   * @param deviceName The device name.
   * @param iscsiServerName The iscsi server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginBackupNow(deviceName: string, iscsiServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        iscsiServerName,
        resourceGroupName,
        managerName,
        options
      },
      beginBackupNowOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByDeviceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ISCSIServerList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.iscsiServerName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ISCSIServer
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listMetricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/metrics",
  urlParameters: [
    Parameters.deviceName,
    Parameters.iscsiServerName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listMetricDefinitionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/metricsDefinitions",
  urlParameters: [
    Parameters.deviceName,
    Parameters.iscsiServerName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricDefinitionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByManagerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/iscsiservers",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ISCSIServerList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.iscsiServerName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "iscsiServer",
    mapper: {
      ...Mappers.ISCSIServer,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ISCSIServer
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.iscsiServerName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
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
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginBackupNowOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/backup",
  urlParameters: [
    Parameters.deviceName,
    Parameters.iscsiServerName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
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
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
