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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { OperationalInsightsManagementClientContext } from "./operationalInsightsManagementClientContext";


class OperationalInsightsManagementClient extends OperationalInsightsManagementClientContext {
  // Operation groups
  linkedServices: operations.LinkedServices;
  dataSources: operations.DataSources;
  workspaces: operations.Workspaces;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the OperationalInsightsManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.OperationalInsightsManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.linkedServices = new operations.LinkedServices(this);
    this.dataSources = new operations.DataSources(this);
    this.workspaces = new operations.Workspaces(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  OperationalInsightsManagementClient,
  OperationalInsightsManagementClientContext,
  Models as OperationalInsightsManagementModels,
  Mappers as OperationalInsightsManagementMappers
};
export * from "./operations";
