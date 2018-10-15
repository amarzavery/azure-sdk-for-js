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
import * as Mappers from "../models/syncMembersMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a SyncMembers. */
export class SyncMembers {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a SyncMembers.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncMembersGetResponse>
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, options?: msRest.RequestOptionsBase): Promise<Models.SyncMembersGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, callback: msRest.ServiceCallback<Models.SyncMember>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SyncMember>): void;
  get(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SyncMember>): Promise<Models.SyncMembersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        syncMemberName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SyncMembersGetResponse>;
  }

  /**
   * Creates or updates a sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param parameters The requested sync member resource state.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncMembersCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, parameters: Models.SyncMember, options?: msRest.RequestOptionsBase): Promise<Models.SyncMembersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serverName,databaseName,syncGroupName,syncMemberName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SyncMembersCreateOrUpdateResponse>;
  }

  /**
   * Deletes a sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,serverName,databaseName,syncGroupName,syncMemberName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Updates an existing sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param parameters The requested sync member resource state.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncMembersUpdateResponse>
   */
  update(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, parameters: Models.SyncMember, options?: msRest.RequestOptionsBase): Promise<Models.SyncMembersUpdateResponse> {
    return this.beginUpdate(resourceGroupName,serverName,databaseName,syncGroupName,syncMemberName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SyncMembersUpdateResponse>;
  }

  /**
   * Lists sync members in the given sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncMembersListBySyncGroupResponse>
   */
  listBySyncGroup(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.SyncMembersListBySyncGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param callback The callback
   */
  listBySyncGroup(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, callback: msRest.ServiceCallback<Models.SyncMemberListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySyncGroup(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SyncMemberListResult>): void;
  listBySyncGroup(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SyncMemberListResult>): Promise<Models.SyncMembersListBySyncGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        options
      },
      listBySyncGroupOperationSpec,
      callback) as Promise<Models.SyncMembersListBySyncGroupResponse>;
  }

  /**
   * Gets a sync member database schema.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncMembersListMemberSchemasResponse>
   */
  listMemberSchemas(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, options?: msRest.RequestOptionsBase): Promise<Models.SyncMembersListMemberSchemasResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param callback The callback
   */
  listMemberSchemas(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, callback: msRest.ServiceCallback<Models.SyncFullSchemaPropertiesListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param options The optional parameters
   * @param callback The callback
   */
  listMemberSchemas(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SyncFullSchemaPropertiesListResult>): void;
  listMemberSchemas(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SyncFullSchemaPropertiesListResult>): Promise<Models.SyncMembersListMemberSchemasResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        syncMemberName,
        options
      },
      listMemberSchemasOperationSpec,
      callback) as Promise<Models.SyncMembersListMemberSchemasResponse>;
  }

  /**
   * Refreshes a sync member database schema.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  refreshMemberSchema(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginRefreshMemberSchema(resourceGroupName,serverName,databaseName,syncGroupName,syncMemberName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates a sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param parameters The requested sync member resource state.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, parameters: Models.SyncMember, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        syncMemberName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        syncMemberName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Updates an existing sync member.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param parameters The requested sync member resource state.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, parameters: Models.SyncMember, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        syncMemberName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Refreshes a sync member database schema.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group on which the sync member is hosted.
   * @param syncMemberName The name of the sync member.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRefreshMemberSchema(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        syncMemberName,
        options
      },
      beginRefreshMemberSchemaOperationSpec,
      options);
  }

  /**
   * Lists sync members in the given sync group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncMembersListBySyncGroupNextResponse>
   */
  listBySyncGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SyncMembersListBySyncGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySyncGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SyncMemberListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySyncGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SyncMemberListResult>): void;
  listBySyncGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SyncMemberListResult>): Promise<Models.SyncMembersListBySyncGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySyncGroupNextOperationSpec,
      callback) as Promise<Models.SyncMembersListBySyncGroupNextResponse>;
  }

  /**
   * Gets a sync member database schema.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncMembersListMemberSchemasNextResponse>
   */
  listMemberSchemasNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SyncMembersListMemberSchemasNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listMemberSchemasNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SyncFullSchemaPropertiesListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listMemberSchemasNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SyncFullSchemaPropertiesListResult>): void;
  listMemberSchemasNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SyncFullSchemaPropertiesListResult>): Promise<Models.SyncMembersListMemberSchemasNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listMemberSchemasNextOperationSpec,
      callback) as Promise<Models.SyncMembersListMemberSchemasNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName,
    Parameters.syncMemberName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SyncMember
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySyncGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SyncMemberListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listMemberSchemasOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}/schemas",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName,
    Parameters.syncMemberName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SyncFullSchemaPropertiesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName,
    Parameters.syncMemberName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SyncMember,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SyncMember
    },
    201: {
      bodyMapper: Mappers.SyncMember
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName,
    Parameters.syncMemberName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName,
    Parameters.syncMemberName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SyncMember,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SyncMember
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginRefreshMemberSchemaOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}/refreshSchema",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName,
    Parameters.syncMemberName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
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

const listBySyncGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.SyncMemberListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listMemberSchemasNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.SyncFullSchemaPropertiesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
