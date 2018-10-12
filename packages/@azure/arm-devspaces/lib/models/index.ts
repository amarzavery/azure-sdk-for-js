/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing ContainerHostMapping.
 * Container host mapping object specifying the Container host resource ID and
 * its associated Controller resource.
 *
 */
export interface ContainerHostMapping {
  /**
   * @member {string} [containerHostResourceId] ARM ID of the Container Host
   * resource
   */
  containerHostResourceId?: string;
  /**
   * @member {string} [mappedControllerResourceId] ARM ID of the mapped
   * Controller resource
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly mappedControllerResourceId?: string;
}

/**
 * @interface
 * An interface representing Sku.
 * Model representing SKU for Azure Dev Spaces Controller.
 *
 */
export interface Sku {
  /**
   * @member {SkuTier} [tier] The tier of the SKU for Azure Dev Spaces
   * Controller. Possible values include: 'Standard'
   */
  tier?: SkuTier;
}

/**
 * @interface
 * An interface representing Resource.
 * An Azure resource.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Fully qualified resource Id for the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] The name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] The type of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
}

/**
 * @interface
 * An interface representing TrackedResource.
 * The resource model definition for a ARM tracked top level resource.
 *
 * @extends Resource
 */
export interface TrackedResource extends Resource {
  /**
   * @member {{ [propertyName: string]: string }} [tags] Tags for the Azure
   * resource.
   */
  tags?: { [propertyName: string]: string };
  /**
   * @member {string} [location] Region where the Azure resource is located.
   */
  location?: string;
}

/**
 * @interface
 * An interface representing Controller.
 * @extends TrackedResource
 */
export interface Controller extends TrackedResource {
  /**
   * @member {ProvisioningState} [provisioningState] Provisioning state of the
   * Azure Dev Spaces Controller. Possible values include: 'Succeeded',
   * 'Failed', 'Canceled', 'Updating', 'Creating', 'Deleting', 'Deleted'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * @member {string} hostSuffix DNS suffix for public endpoints running in the
   * Azure Dev Spaces Controller.
   */
  hostSuffix: string;
  /**
   * @member {string} [dataPlaneFqdn] DNS name for accessing DataPlane services
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly dataPlaneFqdn?: string;
  /**
   * @member {string} targetContainerHostResourceId Resource ID of the target
   * container host
   */
  targetContainerHostResourceId: string;
  /**
   * @member {string} targetContainerHostCredentialsBase64 Credentials of the
   * target container host (base64).
   */
  targetContainerHostCredentialsBase64: string;
  /**
   * @member {Sku} sku
   */
  sku: Sku;
}

/**
 * @interface
 * An interface representing ControllerUpdateParameters.
 * Parameters for updating an Azure Dev Spaces Controller.
 *
 */
export interface ControllerUpdateParameters {
  /**
   * @member {{ [propertyName: string]: string }} [tags] Tags for the Azure Dev
   * Spaces Controller.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Contains the possible cases for OrchestratorSpecificConnectionDetails.
 */
export type OrchestratorSpecificConnectionDetailsUnion = OrchestratorSpecificConnectionDetails | KubernetesConnectionDetails;

/**
 * @interface
 * An interface representing OrchestratorSpecificConnectionDetails.
 * Base class for types that supply values used to connect to container
 * orchestrators
 *
 */
export interface OrchestratorSpecificConnectionDetails {
  /**
   * @member {string} instanceType Polymorphic Discriminator
   */
  instanceType: "OrchestratorSpecificConnectionDetails";
}

/**
 * @interface
 * An interface representing ControllerConnectionDetails.
 */
export interface ControllerConnectionDetails {
  /**
   * @member {string} [authKey] Authentication key for communicating with
   * services.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly authKey?: string;
  /**
   * @member {string} [workspaceStorageAccountName] Workspace storage account
   * name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly workspaceStorageAccountName?: string;
  /**
   * @member {string} [workspaceStorageSasToken] Workspace storage account SAS
   * token.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly workspaceStorageSasToken?: string;
  /**
   * @member {OrchestratorSpecificConnectionDetailsUnion}
   * [orchestratorSpecificConnectionDetails]
   */
  orchestratorSpecificConnectionDetails?: OrchestratorSpecificConnectionDetailsUnion;
}

/**
 * @interface
 * An interface representing ControllerConnectionDetailsList.
 */
export interface ControllerConnectionDetailsList {
  /**
   * @member {ControllerConnectionDetails[]} [connectionDetailsList] List of
   * Azure Dev Spaces Controller connection details.
   */
  connectionDetailsList?: ControllerConnectionDetails[];
}

/**
 * @interface
 * An interface representing ResourceProviderOperationDisplay.
 */
export interface ResourceProviderOperationDisplay {
  /**
   * @member {string} [provider] Name of the resource provider.
   */
  provider?: string;
  /**
   * @member {string} [resource] Name of the resource type.
   */
  resource?: string;
  /**
   * @member {string} [operation] Name of the resource provider operation.
   */
  operation?: string;
  /**
   * @member {string} [description] Description of the resource provider
   * operation.
   */
  description?: string;
}

/**
 * @interface
 * An interface representing ResourceProviderOperationDefinition.
 */
export interface ResourceProviderOperationDefinition {
  /**
   * @member {string} [name] Resource provider operation name.
   */
  name?: string;
  /**
   * @member {ResourceProviderOperationDisplay} [display]
   */
  display?: ResourceProviderOperationDisplay;
}

/**
 * @interface
 * An interface representing KubernetesConnectionDetails.
 * Contains information used to connect to a Kubernetes cluster
 *
 */
export interface KubernetesConnectionDetails {
  /**
   * @member {string} instanceType Polymorphic Discriminator
   */
  instanceType: "Kubernetes";
  /**
   * @member {string} [kubeConfig] Gets the kubeconfig for the cluster.
   */
  kubeConfig?: string;
}

/**
 * @interface
 * An interface representing ErrorDetails.
 */
export interface ErrorDetails {
  /**
   * @member {string} [code] Status code for the error.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly code?: string;
  /**
   * @member {string} [message] Error message describing the error in detail.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly message?: string;
  /**
   * @member {string} [target] The target of the particular error.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly target?: string;
}

/**
 * @interface
 * An interface representing ErrorResponse.
 * Error response indicates that the service is not able to process the
 * incoming request. The reason is provided in the error message.
 *
 */
export interface ErrorResponse {
  /**
   * @member {ErrorDetails} [error] The details of the error.
   */
  error?: ErrorDetails;
}

/**
 * @interface
 * An interface representing DevSpacesManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface DevSpacesManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the ControllerList.
 * @extends Array<Controller>
 */
export interface ControllerList extends Array<Controller> {
  /**
   * @member {string} [nextLink] The URI that can be used to request the next
   * page for list of Azure Dev Spaces Controllers.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the ResourceProviderOperationList.
 * @extends Array<ResourceProviderOperationDefinition>
 */
export interface ResourceProviderOperationList extends Array<ResourceProviderOperationDefinition> {
  /**
   * @member {string} [nextLink] The URI that can be used to request the next
   * page for list of Azure operations.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Succeeded', 'Failed', 'Canceled', 'Updating',
 * 'Creating', 'Deleting', 'Deleted'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ProvisioningState =
 * <ProvisioningState>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum ProvisioningState {
  Succeeded = 'Succeeded',
  Failed = 'Failed',
  Canceled = 'Canceled',
  Updating = 'Updating',
  Creating = 'Creating',
  Deleting = 'Deleting',
  Deleted = 'Deleted',
}

/**
 * Defines values for SkuTier.
 * Possible values include: 'Standard'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: SkuTier = <SkuTier>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum SkuTier {
  Standard = 'Standard',
}

/**
 * Contains response data for the getContainerHostMapping operation.
 */
export type ContainerHostMappingsGetContainerHostMappingResponse = {
  /**
   * The parsed response body.
   */
  body: any;
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ControllersGetResponse = Controller & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Controller;
    };
};

/**
 * Contains response data for the create operation.
 */
export type ControllersCreateResponse = Controller & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Controller;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ControllersUpdateResponse = Controller & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Controller;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ControllersListByResourceGroupResponse = ControllerList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ControllerList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ControllersListResponse = ControllerList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ControllerList;
    };
};

/**
 * Contains response data for the listConnectionDetails operation.
 */
export type ControllersListConnectionDetailsResponse = ControllerConnectionDetailsList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ControllerConnectionDetailsList;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type ControllersBeginCreateResponse = Controller & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Controller;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type ControllersListByResourceGroupNextResponse = ControllerList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ControllerList;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type ControllersListNextResponse = ControllerList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ControllerList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = ResourceProviderOperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceProviderOperationList;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = ResourceProviderOperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceProviderOperationList;
    };
};
