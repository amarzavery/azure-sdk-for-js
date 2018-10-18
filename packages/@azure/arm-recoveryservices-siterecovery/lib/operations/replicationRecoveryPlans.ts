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
import * as Mappers from "../models/replicationRecoveryPlansMappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClientContext } from "../siteRecoveryManagementClientContext";

/** Class representing a ReplicationRecoveryPlans. */
export class ReplicationRecoveryPlans {
  private readonly client: SiteRecoveryManagementClientContext;

  /**
   * Create a ReplicationRecoveryPlans.
   * @param {SiteRecoveryManagementClientContext} client Reference to the service client.
   */
  constructor(client: SiteRecoveryManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the recovery plans in the vault.
   * @summary Gets the list of recovery plans.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationRecoveryPlansListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryPlansListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.RecoveryPlanCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoveryPlanCollection>): void;
  list(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RecoveryPlanCollection>): Promise<Models.ReplicationRecoveryPlansListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ReplicationRecoveryPlansListResponse>;
  }

  /**
   * Gets the details of the recovery plan.
   * @summary Gets the requested recovery plan.
   * @param recoveryPlanName Name of the recovery plan.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationRecoveryPlansGetResponse>
   */
  get(recoveryPlanName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryPlansGetResponse>;
  /**
   * @param recoveryPlanName Name of the recovery plan.
   * @param callback The callback
   */
  get(recoveryPlanName: string, callback: msRest.ServiceCallback<Models.RecoveryPlan>): void;
  /**
   * @param recoveryPlanName Name of the recovery plan.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(recoveryPlanName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoveryPlan>): void;
  get(recoveryPlanName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RecoveryPlan>): Promise<Models.ReplicationRecoveryPlansGetResponse> {
    return this.client.sendOperationRequest(
      {
        recoveryPlanName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ReplicationRecoveryPlansGetResponse>;
  }

  /**
   * The operation to create a recovery plan.
   * @summary Creates a recovery plan with the given details.
   * @param recoveryPlanName Recovery plan name.
   * @param input Recovery Plan creation input.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationRecoveryPlansCreateResponse>
   */
  create(recoveryPlanName: string, input: Models.CreateRecoveryPlanInput, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryPlansCreateResponse> {
    return this.beginCreate(recoveryPlanName,input,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationRecoveryPlansCreateResponse>;
  }

  /**
   * Delete a recovery plan.
   * @summary Deletes the specified recovery plan.
   * @param recoveryPlanName Recovery plan name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(recoveryPlanName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(recoveryPlanName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * The operation to update a recovery plan.
   * @summary Updates the given recovery plan.
   * @param recoveryPlanName Recovery plan name.
   * @param input Update recovery plan input
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationRecoveryPlansUpdateResponse>
   */
  update(recoveryPlanName: string, input: Models.UpdateRecoveryPlanInput, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryPlansUpdateResponse> {
    return this.beginUpdate(recoveryPlanName,input,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationRecoveryPlansUpdateResponse>;
  }

  /**
   * The operation to commit the fail over of a recovery plan.
   * @summary Execute commit failover of the recovery plan.
   * @param recoveryPlanName Recovery plan name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationRecoveryPlansFailoverCommitResponse>
   */
  failoverCommit(recoveryPlanName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryPlansFailoverCommitResponse> {
    return this.beginFailoverCommit(recoveryPlanName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationRecoveryPlansFailoverCommitResponse>;
  }

  /**
   * The operation to start the planned failover of a recovery plan.
   * @summary Execute planned failover of the recovery plan.
   * @param recoveryPlanName Recovery plan name.
   * @param input Failover input.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationRecoveryPlansPlannedFailoverResponse>
   */
  plannedFailover(recoveryPlanName: string, input: Models.RecoveryPlanPlannedFailoverInput, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryPlansPlannedFailoverResponse> {
    return this.beginPlannedFailover(recoveryPlanName,input,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationRecoveryPlansPlannedFailoverResponse>;
  }

  /**
   * The operation to reprotect(reverse replicate) a recovery plan.
   * @summary Execute reprotect of the recovery plan.
   * @param recoveryPlanName Recovery plan name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationRecoveryPlansReprotectResponse>
   */
  reprotect(recoveryPlanName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryPlansReprotectResponse> {
    return this.beginReprotect(recoveryPlanName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationRecoveryPlansReprotectResponse>;
  }

  /**
   * The operation to start the test failover of a recovery plan.
   * @summary Execute test failover of the recovery plan.
   * @param recoveryPlanName Recovery plan name.
   * @param input Failover input.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationRecoveryPlansTestFailoverResponse>
   */
  testFailover(recoveryPlanName: string, input: Models.RecoveryPlanTestFailoverInput, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryPlansTestFailoverResponse> {
    return this.beginTestFailover(recoveryPlanName,input,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationRecoveryPlansTestFailoverResponse>;
  }

  /**
   * The operation to cleanup test failover of a recovery plan.
   * @summary Execute test failover cleanup of the recovery plan.
   * @param recoveryPlanName Recovery plan name.
   * @param input Test failover cleanup input.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationRecoveryPlansTestFailoverCleanupResponse>
   */
  testFailoverCleanup(recoveryPlanName: string, input: Models.RecoveryPlanTestFailoverCleanupInput, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryPlansTestFailoverCleanupResponse> {
    return this.beginTestFailoverCleanup(recoveryPlanName,input,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationRecoveryPlansTestFailoverCleanupResponse>;
  }

  /**
   * The operation to start the failover of a recovery plan.
   * @summary Execute unplanned failover of the recovery plan.
   * @param recoveryPlanName Recovery plan name.
   * @param input Failover input.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationRecoveryPlansUnplannedFailoverResponse>
   */
  unplannedFailover(recoveryPlanName: string, input: Models.RecoveryPlanUnplannedFailoverInput, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryPlansUnplannedFailoverResponse> {
    return this.beginUnplannedFailover(recoveryPlanName,input,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationRecoveryPlansUnplannedFailoverResponse>;
  }

  /**
   * The operation to create a recovery plan.
   * @summary Creates a recovery plan with the given details.
   * @param recoveryPlanName Recovery plan name.
   * @param input Recovery Plan creation input.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(recoveryPlanName: string, input: Models.CreateRecoveryPlanInput, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        recoveryPlanName,
        input,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Delete a recovery plan.
   * @summary Deletes the specified recovery plan.
   * @param recoveryPlanName Recovery plan name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(recoveryPlanName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        recoveryPlanName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * The operation to update a recovery plan.
   * @summary Updates the given recovery plan.
   * @param recoveryPlanName Recovery plan name.
   * @param input Update recovery plan input
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(recoveryPlanName: string, input: Models.UpdateRecoveryPlanInput, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        recoveryPlanName,
        input,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * The operation to commit the fail over of a recovery plan.
   * @summary Execute commit failover of the recovery plan.
   * @param recoveryPlanName Recovery plan name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginFailoverCommit(recoveryPlanName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        recoveryPlanName,
        options
      },
      beginFailoverCommitOperationSpec,
      options);
  }

  /**
   * The operation to start the planned failover of a recovery plan.
   * @summary Execute planned failover of the recovery plan.
   * @param recoveryPlanName Recovery plan name.
   * @param input Failover input.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPlannedFailover(recoveryPlanName: string, input: Models.RecoveryPlanPlannedFailoverInput, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        recoveryPlanName,
        input,
        options
      },
      beginPlannedFailoverOperationSpec,
      options);
  }

  /**
   * The operation to reprotect(reverse replicate) a recovery plan.
   * @summary Execute reprotect of the recovery plan.
   * @param recoveryPlanName Recovery plan name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginReprotect(recoveryPlanName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        recoveryPlanName,
        options
      },
      beginReprotectOperationSpec,
      options);
  }

  /**
   * The operation to start the test failover of a recovery plan.
   * @summary Execute test failover of the recovery plan.
   * @param recoveryPlanName Recovery plan name.
   * @param input Failover input.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginTestFailover(recoveryPlanName: string, input: Models.RecoveryPlanTestFailoverInput, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        recoveryPlanName,
        input,
        options
      },
      beginTestFailoverOperationSpec,
      options);
  }

  /**
   * The operation to cleanup test failover of a recovery plan.
   * @summary Execute test failover cleanup of the recovery plan.
   * @param recoveryPlanName Recovery plan name.
   * @param input Test failover cleanup input.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginTestFailoverCleanup(recoveryPlanName: string, input: Models.RecoveryPlanTestFailoverCleanupInput, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        recoveryPlanName,
        input,
        options
      },
      beginTestFailoverCleanupOperationSpec,
      options);
  }

  /**
   * The operation to start the failover of a recovery plan.
   * @summary Execute unplanned failover of the recovery plan.
   * @param recoveryPlanName Recovery plan name.
   * @param input Failover input.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUnplannedFailover(recoveryPlanName: string, input: Models.RecoveryPlanUnplannedFailoverInput, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        recoveryPlanName,
        input,
        options
      },
      beginUnplannedFailoverOperationSpec,
      options);
  }

  /**
   * Lists the recovery plans in the vault.
   * @summary Gets the list of recovery plans.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationRecoveryPlansListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryPlansListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecoveryPlanCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoveryPlanCollection>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RecoveryPlanCollection>): Promise<Models.ReplicationRecoveryPlansListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ReplicationRecoveryPlansListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.RecoveryPlanCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.recoveryPlanName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPlan
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.recoveryPlanName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.CreateRecoveryPlanInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPlan
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.recoveryPlanName
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
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.recoveryPlanName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.UpdateRecoveryPlanInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPlan
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginFailoverCommitOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/failoverCommit",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.recoveryPlanName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPlan
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginPlannedFailoverOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/plannedFailover",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.recoveryPlanName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.RecoveryPlanPlannedFailoverInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPlan
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginReprotectOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/reProtect",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.recoveryPlanName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPlan
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginTestFailoverOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/testFailover",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.recoveryPlanName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.RecoveryPlanTestFailoverInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPlan
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginTestFailoverCleanupOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/testFailoverCleanup",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.recoveryPlanName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.RecoveryPlanTestFailoverCleanupInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPlan
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUnplannedFailoverOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/unplannedFailover",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.recoveryPlanName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.RecoveryPlanUnplannedFailoverInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPlan
    },
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
      bodyMapper: Mappers.RecoveryPlanCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
