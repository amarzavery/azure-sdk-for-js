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
import * as Mappers from "../models/virtualMachineScaleSetRollingUpgradesMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a VirtualMachineScaleSetRollingUpgrades. */
export class VirtualMachineScaleSetRollingUpgrades {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a VirtualMachineScaleSetRollingUpgrades.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Cancels the current virtual machine scale set rolling upgrade.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  cancel(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginCancel(resourceGroupName,vmScaleSetName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available
   * Platform Image OS version. Instances which are already running the latest available OS version
   * are not affected.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  startOSUpgrade(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStartOSUpgrade(resourceGroupName,vmScaleSetName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Starts a rolling upgrade to move all extensions for all virtual machine scale set instances to
   * the latest available extension version. Instances which are already running the latest extension
   * versions are not affected.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  startExtensionUpgrade(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStartExtensionUpgrade(resourceGroupName,vmScaleSetName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the status of the latest virtual machine scale set rolling upgrade.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineScaleSetRollingUpgradesGetLatestResponse>
   */
  getLatest(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetRollingUpgradesGetLatestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param callback The callback
   */
  getLatest(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.RollingUpgradeStatusInfo>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The optional parameters
   * @param callback The callback
   */
  getLatest(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RollingUpgradeStatusInfo>): void;
  getLatest(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RollingUpgradeStatusInfo>): Promise<Models.VirtualMachineScaleSetRollingUpgradesGetLatestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vmScaleSetName,
        options
      },
      getLatestOperationSpec,
      callback) as Promise<Models.VirtualMachineScaleSetRollingUpgradesGetLatestResponse>;
  }

  /**
   * Cancels the current virtual machine scale set rolling upgrade.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCancel(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmScaleSetName,
        options
      },
      beginCancelOperationSpec,
      options);
  }

  /**
   * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available
   * Platform Image OS version. Instances which are already running the latest available OS version
   * are not affected.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStartOSUpgrade(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmScaleSetName,
        options
      },
      beginStartOSUpgradeOperationSpec,
      options);
  }

  /**
   * Starts a rolling upgrade to move all extensions for all virtual machine scale set instances to
   * the latest available extension version. Instances which are already running the latest extension
   * versions are not affected.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStartExtensionUpgrade(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        vmScaleSetName,
        options
      },
      beginStartExtensionUpgradeOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getLatestOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/rollingUpgrades/latest",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
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
      bodyMapper: Mappers.RollingUpgradeStatusInfo
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCancelOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/rollingUpgrades/cancel",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
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
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStartOSUpgradeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/osRollingUpgrade",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
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
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStartExtensionUpgradeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensionRollingUpgrade",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.vmScaleSetName,
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
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
