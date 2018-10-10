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
import * as Mappers from "../models/collectionMappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";

/** Class representing a Collection. */
export class Collection {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Create a Collection.
   * @param {CosmosDBManagementClientContext} client Reference to the service client.
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the metrics determined by the given filter for the given database account and
   * collection.
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   * parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   * names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param [options] The optional parameters
   * @returns Promise<Models.CollectionListMetricsResponse>
   */
  listMetrics(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, filter: string, options?: msRest.RequestOptionsBase): Promise<Models.CollectionListMetricsResponse>;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   * parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   * names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param callback The callback
   */
  listMetrics(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, filter: string, callback: msRest.ServiceCallback<Models.MetricListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   * parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   * names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetrics(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, filter: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricListResult>): void;
  listMetrics(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, filter: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MetricListResult>): Promise<Models.CollectionListMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        databaseRid,
        collectionRid,
        filter,
        options
      },
      listMetricsOperationSpec,
      callback) as Promise<Models.CollectionListMetricsResponse>;
  }

  /**
   * Retrieves the usages (most recent storage data) for the given collection.
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param [options] The optional parameters
   * @returns Promise<Models.CollectionListUsagesResponse>
   */
  listUsages(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, options?: Models.CollectionListUsagesOptionalParams): Promise<Models.CollectionListUsagesResponse>;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param callback The callback
   */
  listUsages(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, callback: msRest.ServiceCallback<Models.UsagesResult>): void;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param options The optional parameters
   * @param callback The callback
   */
  listUsages(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, options: Models.CollectionListUsagesOptionalParams, callback: msRest.ServiceCallback<Models.UsagesResult>): void;
  listUsages(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, options?: Models.CollectionListUsagesOptionalParams, callback?: msRest.ServiceCallback<Models.UsagesResult>): Promise<Models.CollectionListUsagesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        databaseRid,
        collectionRid,
        options
      },
      listUsagesOperationSpec,
      callback) as Promise<Models.CollectionListUsagesResponse>;
  }

  /**
   * Retrieves metric defintions for the given collection.
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param [options] The optional parameters
   * @returns Promise<Models.CollectionListMetricDefinitionsResponse>
   */
  listMetricDefinitions(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, options?: msRest.RequestOptionsBase): Promise<Models.CollectionListMetricDefinitionsResponse>;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param callback The callback
   */
  listMetricDefinitions(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, callback: msRest.ServiceCallback<Models.MetricDefinitionsListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetricDefinitions(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricDefinitionsListResult>): void;
  listMetricDefinitions(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MetricDefinitionsListResult>): Promise<Models.CollectionListMetricDefinitionsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        databaseRid,
        collectionRid,
        options
      },
      listMetricDefinitionsOperationSpec,
      callback) as Promise<Models.CollectionListMetricDefinitionsResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listMetricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/metrics",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.databaseRid,
    Parameters.collectionRid
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listUsagesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/usages",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.databaseRid,
    Parameters.collectionRid
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UsagesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listMetricDefinitionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/metricDefinitions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.databaseRid,
    Parameters.collectionRid
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricDefinitionsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
