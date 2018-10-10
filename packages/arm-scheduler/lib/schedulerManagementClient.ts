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
import { SchedulerManagementClientContext } from "./schedulerManagementClientContext";


class SchedulerManagementClient extends SchedulerManagementClientContext {
  // Operation groups
  jobCollections: operations.JobCollections;
  jobs: operations.Jobs;

  /**
   * Initializes a new instance of the SchedulerManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The subscription id.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.SchedulerManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.jobCollections = new operations.JobCollections(this);
    this.jobs = new operations.Jobs(this);
  }
}

// Operation Specifications

export {
  SchedulerManagementClient,
  SchedulerManagementClientContext,
  Models as SchedulerManagementModels,
  Mappers as SchedulerManagementMappers
};
export * from "./operations";
