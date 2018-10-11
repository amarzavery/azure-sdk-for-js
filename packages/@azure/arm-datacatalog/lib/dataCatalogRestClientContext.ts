/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";

const packageName = "@azure/arm-datacatalog";
const packageVersion = "1.0.0";

export class DataCatalogRestClientContext extends msRestAzure.AzureServiceClient {

  credentials: msRest.ServiceClientCredentials;

  subscriptionId: string;

  apiVersion: string;

  catalogName: string;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  /**
   * Initializes a new instance of the DataCatalogRestClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param catalogName The name of the data catlog in the specified subscription and resource group.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, catalogName: string, options?: Models.DataCatalogRestClientOptions) {
    if (credentials == undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }
    if (subscriptionId == undefined) {
      throw new Error('\'subscriptionId\' cannot be null.');
    }
    if (catalogName == undefined) {
      throw new Error('\'catalogName\' cannot be null.');
    }

    if (!options) {
      options = {};
    }
    super(credentials, options);

    this.apiVersion = '2016-03-30';
    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.baseUri = options.baseUri || this.baseUri || "https://management.azure.com";
    this.requestContentType = "application/json; charset=utf-8";
    this.credentials = credentials;
    this.subscriptionId = subscriptionId;
    this.catalogName = catalogName;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
  }
}
