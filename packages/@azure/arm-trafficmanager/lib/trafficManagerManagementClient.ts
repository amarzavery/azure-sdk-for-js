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
import { TrafficManagerManagementClientContext } from "./trafficManagerManagementClientContext";


class TrafficManagerManagementClient extends TrafficManagerManagementClientContext {
  // Operation groups
  endpoints: operations.Endpoints;
  profiles: operations.Profiles;
  geographicHierarchies: operations.GeographicHierarchies;
  heatMap: operations.HeatMap;
  trafficManagerUserMetricsKeys: operations.TrafficManagerUserMetricsKeys;

  /**
   * Initializes a new instance of the TrafficManagerManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.TrafficManagerManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.endpoints = new operations.Endpoints(this);
    this.profiles = new operations.Profiles(this);
    this.geographicHierarchies = new operations.GeographicHierarchies(this);
    this.heatMap = new operations.HeatMap(this);
    this.trafficManagerUserMetricsKeys = new operations.TrafficManagerUserMetricsKeys(this);
  }
}

// Operation Specifications

export {
  TrafficManagerManagementClient,
  TrafficManagerManagementClientContext,
  Models as TrafficManagerManagementModels,
  Mappers as TrafficManagerManagementMappers
};
export * from "./operations";
