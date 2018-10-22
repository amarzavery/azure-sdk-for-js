/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ms-rest-azure-js'), require('ms-rest-js')) :
    typeof define === 'function' && define.amd ? define(['exports', 'ms-rest-azure-js', 'ms-rest-js'], factory) :
    (factory((global.Azure = global.Azure || {}, global.Azure.ArmDatabricks = {}),global.msRestAzure,global.msRest));
}(this, (function (exports,msRestAzure,msRest) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    /**
     * Defines values for ProvisioningState.
     * Possible values include: 'Accepted', 'Running', 'Ready', 'Creating',
     * 'Created', 'Deleting', 'Deleted', 'Canceled', 'Failed', 'Succeeded',
     * 'Updating'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: ProvisioningState =
     * <ProvisioningState>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var ProvisioningState;
    (function (ProvisioningState) {
        ProvisioningState["Accepted"] = "Accepted";
        ProvisioningState["Running"] = "Running";
        ProvisioningState["Ready"] = "Ready";
        ProvisioningState["Creating"] = "Creating";
        ProvisioningState["Created"] = "Created";
        ProvisioningState["Deleting"] = "Deleting";
        ProvisioningState["Deleted"] = "Deleted";
        ProvisioningState["Canceled"] = "Canceled";
        ProvisioningState["Failed"] = "Failed";
        ProvisioningState["Succeeded"] = "Succeeded";
        ProvisioningState["Updating"] = "Updating";
    })(ProvisioningState || (ProvisioningState = {}));

    var index = /*#__PURE__*/Object.freeze({
        get ProvisioningState () { return ProvisioningState; }
    });

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    var CloudError = msRestAzure.CloudErrorMapper;
    var BaseResource = msRestAzure.BaseResourceMapper;
    var WorkspaceProviderAuthorization = {
        serializedName: "WorkspaceProviderAuthorization",
        type: {
            name: "Composite",
            className: "WorkspaceProviderAuthorization",
            modelProperties: {
                principalId: {
                    required: true,
                    serializedName: "principalId",
                    type: {
                        name: "Uuid"
                    }
                },
                roleDefinitionId: {
                    required: true,
                    serializedName: "roleDefinitionId",
                    type: {
                        name: "Uuid"
                    }
                }
            }
        }
    };
    var Sku = {
        serializedName: "Sku",
        type: {
            name: "Composite",
            className: "Sku",
            modelProperties: {
                name: {
                    required: true,
                    serializedName: "name",
                    type: {
                        name: "String"
                    }
                },
                tier: {
                    serializedName: "tier",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var Resource = {
        serializedName: "Resource",
        type: {
            name: "Composite",
            className: "Resource",
            modelProperties: {
                id: {
                    readOnly: true,
                    serializedName: "id",
                    type: {
                        name: "String"
                    }
                },
                name: {
                    readOnly: true,
                    serializedName: "name",
                    type: {
                        name: "String"
                    }
                },
                type: {
                    readOnly: true,
                    serializedName: "type",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var TrackedResource = {
        serializedName: "TrackedResource",
        type: {
            name: "Composite",
            className: "TrackedResource",
            modelProperties: __assign({}, Resource.type.modelProperties, { tags: {
                    serializedName: "tags",
                    type: {
                        name: "Dictionary",
                        value: {
                            type: {
                                name: "String"
                            }
                        }
                    }
                }, location: {
                    required: true,
                    serializedName: "location",
                    type: {
                        name: "String"
                    }
                } })
        }
    };
    var Workspace = {
        serializedName: "Workspace",
        type: {
            name: "Composite",
            className: "Workspace",
            modelProperties: __assign({}, TrackedResource.type.modelProperties, { managedResourceGroupId: {
                    required: true,
                    serializedName: "properties.managedResourceGroupId",
                    type: {
                        name: "String"
                    }
                }, parameters: {
                    serializedName: "properties.parameters",
                    type: {
                        name: "Object"
                    }
                }, provisioningState: {
                    readOnly: true,
                    serializedName: "properties.provisioningState",
                    type: {
                        name: "String"
                    }
                }, uiDefinitionUri: {
                    serializedName: "properties.uiDefinitionUri",
                    type: {
                        name: "String"
                    }
                }, authorizations: {
                    serializedName: "properties.authorizations",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "WorkspaceProviderAuthorization"
                            }
                        }
                    }
                }, sku: {
                    serializedName: "sku",
                    type: {
                        name: "Composite",
                        className: "Sku"
                    }
                } })
        }
    };
    var WorkspaceUpdate = {
        serializedName: "WorkspaceUpdate",
        type: {
            name: "Composite",
            className: "WorkspaceUpdate",
            modelProperties: {
                tags: {
                    serializedName: "tags",
                    type: {
                        name: "Dictionary",
                        value: {
                            type: {
                                name: "String"
                            }
                        }
                    }
                }
            }
        }
    };
    var ErrorDetail = {
        serializedName: "ErrorDetail",
        type: {
            name: "Composite",
            className: "ErrorDetail",
            modelProperties: {
                code: {
                    required: true,
                    serializedName: "code",
                    type: {
                        name: "String"
                    }
                },
                message: {
                    required: true,
                    serializedName: "message",
                    type: {
                        name: "String"
                    }
                },
                target: {
                    serializedName: "target",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var ErrorInfo = {
        serializedName: "ErrorInfo",
        type: {
            name: "Composite",
            className: "ErrorInfo",
            modelProperties: {
                code: {
                    required: true,
                    serializedName: "code",
                    type: {
                        name: "String"
                    }
                },
                message: {
                    required: true,
                    serializedName: "message",
                    type: {
                        name: "String"
                    }
                },
                details: {
                    serializedName: "details",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "ErrorDetail"
                            }
                        }
                    }
                },
                innererror: {
                    serializedName: "innererror",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var ErrorResponse = {
        serializedName: "ErrorResponse",
        type: {
            name: "Composite",
            className: "ErrorResponse",
            modelProperties: {
                error: {
                    required: true,
                    serializedName: "error",
                    type: {
                        name: "Composite",
                        className: "ErrorInfo"
                    }
                }
            }
        }
    };
    var OperationDisplay = {
        serializedName: "Operation_display",
        type: {
            name: "Composite",
            className: "OperationDisplay",
            modelProperties: {
                provider: {
                    serializedName: "provider",
                    type: {
                        name: "String"
                    }
                },
                resource: {
                    serializedName: "resource",
                    type: {
                        name: "String"
                    }
                },
                operation: {
                    serializedName: "operation",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var Operation = {
        serializedName: "Operation",
        type: {
            name: "Composite",
            className: "Operation",
            modelProperties: {
                name: {
                    serializedName: "name",
                    type: {
                        name: "String"
                    }
                },
                display: {
                    serializedName: "display",
                    type: {
                        name: "Composite",
                        className: "OperationDisplay"
                    }
                }
            }
        }
    };
    var WorkspaceListResult = {
        serializedName: "WorkspaceListResult",
        type: {
            name: "Composite",
            className: "WorkspaceListResult",
            modelProperties: {
                value: {
                    serializedName: "",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "Workspace"
                            }
                        }
                    }
                },
                nextLink: {
                    serializedName: "nextLink",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var OperationListResult = {
        serializedName: "OperationListResult",
        type: {
            name: "Composite",
            className: "OperationListResult",
            modelProperties: {
                value: {
                    serializedName: "",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "Operation"
                            }
                        }
                    }
                },
                nextLink: {
                    serializedName: "nextLink",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };

    var mappers = /*#__PURE__*/Object.freeze({
        CloudError: CloudError,
        BaseResource: BaseResource,
        WorkspaceProviderAuthorization: WorkspaceProviderAuthorization,
        Sku: Sku,
        Resource: Resource,
        TrackedResource: TrackedResource,
        Workspace: Workspace,
        WorkspaceUpdate: WorkspaceUpdate,
        ErrorDetail: ErrorDetail,
        ErrorInfo: ErrorInfo,
        ErrorResponse: ErrorResponse,
        OperationDisplay: OperationDisplay,
        Operation: Operation,
        WorkspaceListResult: WorkspaceListResult,
        OperationListResult: OperationListResult
    });

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */

    var Mappers = /*#__PURE__*/Object.freeze({
        Workspace: Workspace,
        TrackedResource: TrackedResource,
        Resource: Resource,
        BaseResource: BaseResource,
        WorkspaceProviderAuthorization: WorkspaceProviderAuthorization,
        Sku: Sku,
        ErrorResponse: ErrorResponse,
        ErrorInfo: ErrorInfo,
        ErrorDetail: ErrorDetail,
        WorkspaceUpdate: WorkspaceUpdate,
        WorkspaceListResult: WorkspaceListResult
    });

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    var acceptLanguage = {
        parameterPath: "acceptLanguage",
        mapper: {
            serializedName: "accept-language",
            defaultValue: 'en-US',
            type: {
                name: "String"
            }
        }
    };
    var apiVersion = {
        parameterPath: "apiVersion",
        mapper: {
            required: true,
            serializedName: "api-version",
            type: {
                name: "String"
            }
        }
    };
    var nextPageLink = {
        parameterPath: "nextPageLink",
        mapper: {
            required: true,
            serializedName: "nextLink",
            type: {
                name: "String"
            }
        },
        skipEncoding: true
    };
    var resourceGroupName = {
        parameterPath: "resourceGroupName",
        mapper: {
            required: true,
            serializedName: "resourceGroupName",
            constraints: {
                MaxLength: 90,
                MinLength: 1,
                Pattern: /^[-\w\._\(\)]+$/
            },
            type: {
                name: "String"
            }
        }
    };
    var subscriptionId = {
        parameterPath: "subscriptionId",
        mapper: {
            required: true,
            serializedName: "subscriptionId",
            type: {
                name: "String"
            }
        }
    };
    var workspaceName = {
        parameterPath: "workspaceName",
        mapper: {
            required: true,
            serializedName: "workspaceName",
            constraints: {
                MaxLength: 64,
                MinLength: 3
            },
            type: {
                name: "String"
            }
        }
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    /** Class representing a Workspaces. */
    var Workspaces = /** @class */ (function () {
        /**
         * Create a Workspaces.
         * @param {DatabricksClientContext} client Reference to the service client.
         */
        function Workspaces(client) {
            this.client = client;
        }
        Workspaces.prototype.get = function (resourceGroupName$$1, workspaceName$$1, options, callback) {
            return this.client.sendOperationRequest({
                resourceGroupName: resourceGroupName$$1,
                workspaceName: workspaceName$$1,
                options: options
            }, getOperationSpec, callback);
        };
        /**
         * Deletes the workspace.
         * @param resourceGroupName The name of the resource group. The name is case insensitive.
         * @param workspaceName The name of the workspace.
         * @param [options] The optional parameters
         * @returns Promise<msRest.RestResponse>
         */
        Workspaces.prototype.deleteMethod = function (resourceGroupName$$1, workspaceName$$1, options) {
            return this.beginDeleteMethod(resourceGroupName$$1, workspaceName$$1, options)
                .then(function (lroPoller) { return lroPoller.pollUntilFinished(); });
        };
        /**
         * Creates a new workspace.
         * @param parameters Parameters supplied to the create or update a workspace.
         * @param resourceGroupName The name of the resource group. The name is case insensitive.
         * @param workspaceName The name of the workspace.
         * @param [options] The optional parameters
         * @returns Promise<Models.WorkspacesCreateOrUpdateResponse>
         */
        Workspaces.prototype.createOrUpdate = function (parameters, resourceGroupName$$1, workspaceName$$1, options) {
            return this.beginCreateOrUpdate(parameters, resourceGroupName$$1, workspaceName$$1, options)
                .then(function (lroPoller) { return lroPoller.pollUntilFinished(); });
        };
        /**
         * Updates a workspace.
         * @param parameters The update to the workspace.
         * @param resourceGroupName The name of the resource group. The name is case insensitive.
         * @param workspaceName The name of the workspace.
         * @param [options] The optional parameters
         * @returns Promise<Models.WorkspacesUpdateResponse>
         */
        Workspaces.prototype.update = function (parameters, resourceGroupName$$1, workspaceName$$1, options) {
            return this.beginUpdate(parameters, resourceGroupName$$1, workspaceName$$1, options)
                .then(function (lroPoller) { return lroPoller.pollUntilFinished(); });
        };
        Workspaces.prototype.listByResourceGroup = function (resourceGroupName$$1, options, callback) {
            return this.client.sendOperationRequest({
                resourceGroupName: resourceGroupName$$1,
                options: options
            }, listByResourceGroupOperationSpec, callback);
        };
        Workspaces.prototype.listBySubscription = function (options, callback) {
            return this.client.sendOperationRequest({
                options: options
            }, listBySubscriptionOperationSpec, callback);
        };
        /**
         * Deletes the workspace.
         * @param resourceGroupName The name of the resource group. The name is case insensitive.
         * @param workspaceName The name of the workspace.
         * @param [options] The optional parameters
         * @returns Promise<msRestAzure.LROPoller>
         */
        Workspaces.prototype.beginDeleteMethod = function (resourceGroupName$$1, workspaceName$$1, options) {
            return this.client.sendLRORequest({
                resourceGroupName: resourceGroupName$$1,
                workspaceName: workspaceName$$1,
                options: options
            }, beginDeleteMethodOperationSpec, options);
        };
        /**
         * Creates a new workspace.
         * @param parameters Parameters supplied to the create or update a workspace.
         * @param resourceGroupName The name of the resource group. The name is case insensitive.
         * @param workspaceName The name of the workspace.
         * @param [options] The optional parameters
         * @returns Promise<msRestAzure.LROPoller>
         */
        Workspaces.prototype.beginCreateOrUpdate = function (parameters, resourceGroupName$$1, workspaceName$$1, options) {
            return this.client.sendLRORequest({
                parameters: parameters,
                resourceGroupName: resourceGroupName$$1,
                workspaceName: workspaceName$$1,
                options: options
            }, beginCreateOrUpdateOperationSpec, options);
        };
        /**
         * Updates a workspace.
         * @param parameters The update to the workspace.
         * @param resourceGroupName The name of the resource group. The name is case insensitive.
         * @param workspaceName The name of the workspace.
         * @param [options] The optional parameters
         * @returns Promise<msRestAzure.LROPoller>
         */
        Workspaces.prototype.beginUpdate = function (parameters, resourceGroupName$$1, workspaceName$$1, options) {
            return this.client.sendLRORequest({
                parameters: parameters,
                resourceGroupName: resourceGroupName$$1,
                workspaceName: workspaceName$$1,
                options: options
            }, beginUpdateOperationSpec, options);
        };
        Workspaces.prototype.listByResourceGroupNext = function (nextPageLink$$1, options, callback) {
            return this.client.sendOperationRequest({
                nextPageLink: nextPageLink$$1,
                options: options
            }, listByResourceGroupNextOperationSpec, callback);
        };
        Workspaces.prototype.listBySubscriptionNext = function (nextPageLink$$1, options, callback) {
            return this.client.sendOperationRequest({
                nextPageLink: nextPageLink$$1,
                options: options
            }, listBySubscriptionNextOperationSpec, callback);
        };
        return Workspaces;
    }());
    // Operation Specifications
    var serializer = new msRest.Serializer(Mappers);
    var getOperationSpec = {
        httpMethod: "GET",
        path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}",
        urlParameters: [
            resourceGroupName,
            workspaceName,
            subscriptionId
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: Workspace
            },
            404: {},
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };
    var listByResourceGroupOperationSpec = {
        httpMethod: "GET",
        path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces",
        urlParameters: [
            resourceGroupName,
            subscriptionId
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: WorkspaceListResult
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };
    var listBySubscriptionOperationSpec = {
        httpMethod: "GET",
        path: "subscriptions/{subscriptionId}/providers/Microsoft.Databricks/workspaces",
        urlParameters: [
            subscriptionId
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: WorkspaceListResult
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };
    var beginDeleteMethodOperationSpec = {
        httpMethod: "DELETE",
        path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}",
        urlParameters: [
            resourceGroupName,
            workspaceName,
            subscriptionId
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            202: {},
            204: {},
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };
    var beginCreateOrUpdateOperationSpec = {
        httpMethod: "PUT",
        path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}",
        urlParameters: [
            resourceGroupName,
            workspaceName,
            subscriptionId
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        requestBody: {
            parameterPath: "parameters",
            mapper: __assign({}, Workspace, { required: true })
        },
        responses: {
            200: {
                bodyMapper: Workspace
            },
            201: {
                bodyMapper: Workspace
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };
    var beginUpdateOperationSpec = {
        httpMethod: "PATCH",
        path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}",
        urlParameters: [
            resourceGroupName,
            workspaceName,
            subscriptionId
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        requestBody: {
            parameterPath: "parameters",
            mapper: __assign({}, WorkspaceUpdate, { required: true })
        },
        responses: {
            200: {
                bodyMapper: Workspace
            },
            202: {},
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };
    var listByResourceGroupNextOperationSpec = {
        httpMethod: "GET",
        baseUrl: "https://management.azure.com",
        path: "{nextLink}",
        urlParameters: [
            nextPageLink
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: WorkspaceListResult
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };
    var listBySubscriptionNextOperationSpec = {
        httpMethod: "GET",
        baseUrl: "https://management.azure.com",
        path: "{nextLink}",
        urlParameters: [
            nextPageLink
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: WorkspaceListResult
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */

    var Mappers$1 = /*#__PURE__*/Object.freeze({
        OperationListResult: OperationListResult,
        Operation: Operation,
        OperationDisplay: OperationDisplay,
        ErrorResponse: ErrorResponse,
        ErrorInfo: ErrorInfo,
        ErrorDetail: ErrorDetail
    });

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    /** Class representing a Operations. */
    var Operations = /** @class */ (function () {
        /**
         * Create a Operations.
         * @param {DatabricksClientContext} client Reference to the service client.
         */
        function Operations(client) {
            this.client = client;
        }
        Operations.prototype.list = function (options, callback) {
            return this.client.sendOperationRequest({
                options: options
            }, listOperationSpec, callback);
        };
        Operations.prototype.listNext = function (nextPageLink$$1, options, callback) {
            return this.client.sendOperationRequest({
                nextPageLink: nextPageLink$$1,
                options: options
            }, listNextOperationSpec, callback);
        };
        return Operations;
    }());
    // Operation Specifications
    var serializer$1 = new msRest.Serializer(Mappers$1);
    var listOperationSpec = {
        httpMethod: "GET",
        path: "providers/Microsoft.Databricks/operations",
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: OperationListResult
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer$1
    };
    var listNextOperationSpec = {
        httpMethod: "GET",
        baseUrl: "https://management.azure.com",
        path: "{nextLink}",
        urlParameters: [
            nextPageLink
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: OperationListResult
            },
            default: {
                bodyMapper: ErrorResponse
            }
        },
        serializer: serializer$1
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    var packageName = "@azure/arm-databricks";
    var packageVersion = "1.0.0";
    var DatabricksClientContext = /** @class */ (function (_super) {
        __extends(DatabricksClientContext, _super);
        /**
         * Initializes a new instance of the DatabricksClient class.
         * @param credentials Credentials needed for the client to connect to Azure.
         * @param subscriptionId The ID of the target subscription.
         * @param [options] The parameter options
         */
        function DatabricksClientContext(credentials, subscriptionId, options) {
            var _this = this;
            if (credentials == undefined) {
                throw new Error('\'credentials\' cannot be null.');
            }
            if (subscriptionId == undefined) {
                throw new Error('\'subscriptionId\' cannot be null.');
            }
            if (!options) {
                options = {};
            }
            _this = _super.call(this, credentials, options) || this;
            _this.apiVersion = '2018-04-01';
            _this.acceptLanguage = 'en-US';
            _this.longRunningOperationRetryTimeout = 30;
            _this.baseUri = options.baseUri || _this.baseUri || "https://management.azure.com";
            _this.requestContentType = "application/json; charset=utf-8";
            _this.credentials = credentials;
            _this.subscriptionId = subscriptionId;
            _this.addUserAgentInfo(packageName + "/" + packageVersion);
            if (options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
                _this.acceptLanguage = options.acceptLanguage;
            }
            if (options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
                _this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
            }
            return _this;
        }
        return DatabricksClientContext;
    }(msRestAzure.AzureServiceClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    var DatabricksClient = /** @class */ (function (_super) {
        __extends(DatabricksClient, _super);
        /**
         * Initializes a new instance of the DatabricksClient class.
         * @param credentials Credentials needed for the client to connect to Azure.
         * @param subscriptionId The ID of the target subscription.
         * @param [options] The parameter options
         */
        function DatabricksClient(credentials, subscriptionId, options) {
            var _this = _super.call(this, credentials, subscriptionId, options) || this;
            _this.workspaces = new Workspaces(_this);
            _this.operations = new Operations(_this);
            return _this;
        }
        return DatabricksClient;
    }(DatabricksClientContext));

    exports.DatabricksClient = DatabricksClient;
    exports.DatabricksClientContext = DatabricksClientContext;
    exports.DatabricksModels = index;
    exports.DatabricksMappers = mappers;
    exports.Workspaces = Workspaces;
    exports.Operations = Operations;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=arm-databricks.js.map
