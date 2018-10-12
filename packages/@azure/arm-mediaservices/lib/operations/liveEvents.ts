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
import * as Mappers from "../models/liveEventsMappers";
import * as Parameters from "../models/parameters";
import { AzureMediaServicesContext } from "../azureMediaServicesContext";

/** Class representing a LiveEvents. */
export class LiveEvents {
  private readonly client: AzureMediaServicesContext;

  /**
   * Create a LiveEvents.
   * @param {AzureMediaServicesContext} client Reference to the service client.
   */
  constructor(client: AzureMediaServicesContext) {
    this.client = client;
  }

  /**
   * Lists the Live Events in the account.
   * @summary List Live Events
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param [options] The optional parameters
   * @returns Promise<Models.LiveEventsListResponse>
   */
  list(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.LiveEventsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.LiveEventListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LiveEventListResult>): void;
  list(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LiveEventListResult>): Promise<Models.LiveEventsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.LiveEventsListResponse>;
  }

  /**
   * Gets a Live Event.
   * @summary Get Live Event
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the Live Event.
   * @param [options] The optional parameters
   * @returns Promise<Models.LiveEventsGetResponse>
   */
  get(resourceGroupName: string, accountName: string, liveEventName: string, options?: msRest.RequestOptionsBase): Promise<Models.LiveEventsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the Live Event.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, liveEventName: string, callback: msRest.ServiceCallback<Models.LiveEvent>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the Live Event.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, liveEventName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LiveEvent>): void;
  get(resourceGroupName: string, accountName: string, liveEventName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LiveEvent>): Promise<Models.LiveEventsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        liveEventName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.LiveEventsGetResponse>;
  }

  /**
   * Creates a Live Event.
   * @summary Create Live Event
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the Live Event.
   * @param parameters Live Event properties needed for creation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LiveEventsCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, liveEventName: string, parameters: Models.LiveEvent, options?: Models.LiveEventsCreateOptionalParams): Promise<Models.LiveEventsCreateResponse> {
    return this.beginCreate(resourceGroupName,accountName,liveEventName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LiveEventsCreateResponse>;
  }

  /**
   * Updates a existing Live Event.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the Live Event.
   * @param parameters Live Event properties needed for creation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LiveEventsUpdateResponse>
   */
  update(resourceGroupName: string, accountName: string, liveEventName: string, parameters: Models.LiveEvent, options?: msRest.RequestOptionsBase): Promise<Models.LiveEventsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,accountName,liveEventName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LiveEventsUpdateResponse>;
  }

  /**
   * Deletes a Live Event.
   * @summary Delete Live Event
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the Live Event.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, liveEventName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,accountName,liveEventName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Starts an existing Live Event.
   * @summary Start Live Event
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the Live Event.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  start(resourceGroupName: string, accountName: string, liveEventName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStart(resourceGroupName,accountName,liveEventName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Stops an existing Live Event.
   * @summary Stop Live Event
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the Live Event.
   * @param parameters LiveEvent stop parameters
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stop(resourceGroupName: string, accountName: string, liveEventName: string, parameters: Models.LiveEventActionInput, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStop(resourceGroupName,accountName,liveEventName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Resets an existing Live Event.
   * @summary Reset Live Event
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the Live Event.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  reset(resourceGroupName: string, accountName: string, liveEventName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginReset(resourceGroupName,accountName,liveEventName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a Live Event.
   * @summary Create Live Event
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the Live Event.
   * @param parameters Live Event properties needed for creation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, accountName: string, liveEventName: string, parameters: Models.LiveEvent, options?: Models.LiveEventsBeginCreateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        liveEventName,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Updates a existing Live Event.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the Live Event.
   * @param parameters Live Event properties needed for creation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, accountName: string, liveEventName: string, parameters: Models.LiveEvent, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        liveEventName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a Live Event.
   * @summary Delete Live Event
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the Live Event.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, accountName: string, liveEventName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        liveEventName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Starts an existing Live Event.
   * @summary Start Live Event
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the Live Event.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStart(resourceGroupName: string, accountName: string, liveEventName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        liveEventName,
        options
      },
      beginStartOperationSpec,
      options);
  }

  /**
   * Stops an existing Live Event.
   * @summary Stop Live Event
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the Live Event.
   * @param parameters LiveEvent stop parameters
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStop(resourceGroupName: string, accountName: string, liveEventName: string, parameters: Models.LiveEventActionInput, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        liveEventName,
        parameters,
        options
      },
      beginStopOperationSpec,
      options);
  }

  /**
   * Resets an existing Live Event.
   * @summary Reset Live Event
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the Live Event.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginReset(resourceGroupName: string, accountName: string, liveEventName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        liveEventName,
        options
      },
      beginResetOperationSpec,
      options);
  }

  /**
   * Lists the Live Events in the account.
   * @summary List Live Events
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LiveEventsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.LiveEventsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LiveEventListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LiveEventListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LiveEventListResult>): Promise<Models.LiveEventsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.LiveEventsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LiveEventListResult
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.liveEventName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LiveEvent
    },
    404: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.liveEventName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.autoStart
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.LiveEvent,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.LiveEvent
    },
    202: {
      bodyMapper: Mappers.LiveEvent
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.liveEventName
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
      ...Mappers.LiveEvent,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.LiveEvent
    },
    202: {
      bodyMapper: Mappers.LiveEvent
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.liveEventName
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
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const beginStartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}/start",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.liveEventName
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
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const beginStopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}/stop",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.liveEventName
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
      ...Mappers.LiveEventActionInput,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const beginResetOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}/reset",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.liveEventName
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
      bodyMapper: Mappers.ApiError
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
      bodyMapper: Mappers.LiveEventListResult
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};