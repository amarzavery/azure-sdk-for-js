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
    (factory((global.Azure = global.Azure || {}, global.Azure.ArmDatacatalog = {}),global.msRestAzure,global.msRest));
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
     * Defines values for SkuType.
     * Possible values include: 'Free', 'Standard'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: SkuType = <SkuType>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var SkuType;
    (function (SkuType) {
        SkuType["Free"] = "Free";
        SkuType["Standard"] = "Standard";
    })(SkuType || (SkuType = {}));

    var index = /*#__PURE__*/Object.freeze({
        get SkuType () { return SkuType; }
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
    var Principals = {
        serializedName: "Principals",
        type: {
            name: "Composite",
            className: "Principals",
            modelProperties: {
                upn: {
                    serializedName: "upn",
                    type: {
                        name: "String"
                    }
                },
                objectId: {
                    serializedName: "objectId",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var ADCCatalogProperties = {
        serializedName: "ADCCatalogProperties",
        type: {
            name: "Composite",
            className: "ADCCatalogProperties",
            modelProperties: {
                sku: {
                    serializedName: "sku",
                    type: {
                        name: "String"
                    }
                },
                units: {
                    serializedName: "units",
                    type: {
                        name: "Number"
                    }
                },
                admins: {
                    serializedName: "admins",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "Principals"
                            }
                        }
                    }
                },
                users: {
                    serializedName: "users",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "Principals"
                            }
                        }
                    }
                },
                successfullyProvisioned: {
                    serializedName: "successfullyProvisioned",
                    type: {
                        name: "Boolean"
                    }
                },
                enableAutomaticUnitAdjustment: {
                    serializedName: "enableAutomaticUnitAdjustment",
                    type: {
                        name: "Boolean"
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
                },
                location: {
                    serializedName: "location",
                    type: {
                        name: "String"
                    }
                },
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
                },
                etag: {
                    serializedName: "etag",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var ADCCatalog = {
        serializedName: "ADCCatalog",
        type: {
            name: "Composite",
            className: "ADCCatalog",
            modelProperties: __assign({}, Resource.type.modelProperties, { sku: {
                    serializedName: "properties.sku",
                    type: {
                        name: "String"
                    }
                }, units: {
                    serializedName: "properties.units",
                    type: {
                        name: "Number"
                    }
                }, admins: {
                    serializedName: "properties.admins",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "Principals"
                            }
                        }
                    }
                }, users: {
                    serializedName: "properties.users",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "Principals"
                            }
                        }
                    }
                }, successfullyProvisioned: {
                    serializedName: "properties.successfullyProvisioned",
                    type: {
                        name: "Boolean"
                    }
                }, enableAutomaticUnitAdjustment: {
                    serializedName: "properties.enableAutomaticUnitAdjustment",
                    type: {
                        name: "Boolean"
                    }
                } })
        }
    };
    var ADCCatalogsListResult = {
        serializedName: "ADCCatalogsListResult",
        type: {
            name: "Composite",
            className: "ADCCatalogsListResult",
            modelProperties: {
                value: {
                    serializedName: "value",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "ADCCatalog"
                            }
                        }
                    }
                }
            }
        }
    };
    var OperationDisplayInfo = {
        serializedName: "OperationDisplayInfo",
        type: {
            name: "Composite",
            className: "OperationDisplayInfo",
            modelProperties: {
                description: {
                    serializedName: "description",
                    type: {
                        name: "String"
                    }
                },
                operation: {
                    serializedName: "operation",
                    type: {
                        name: "String"
                    }
                },
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
                }
            }
        }
    };
    var OperationEntity = {
        serializedName: "OperationEntity",
        type: {
            name: "Composite",
            className: "OperationEntity",
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
                        className: "OperationDisplayInfo"
                    }
                }
            }
        }
    };
    var OperationEntityListResult = {
        serializedName: "OperationEntityListResult",
        type: {
            name: "Composite",
            className: "OperationEntityListResult",
            modelProperties: {
                value: {
                    serializedName: "value",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "OperationEntity"
                            }
                        }
                    }
                }
            }
        }
    };

    var mappers = /*#__PURE__*/Object.freeze({
        CloudError: CloudError,
        BaseResource: BaseResource,
        Principals: Principals,
        ADCCatalogProperties: ADCCatalogProperties,
        Resource: Resource,
        ADCCatalog: ADCCatalog,
        ADCCatalogsListResult: ADCCatalogsListResult,
        OperationDisplayInfo: OperationDisplayInfo,
        OperationEntity: OperationEntity,
        OperationEntityListResult: OperationEntityListResult
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
        OperationEntityListResult: OperationEntityListResult,
        OperationEntity: OperationEntity,
        OperationDisplayInfo: OperationDisplayInfo,
        CloudError: CloudError
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
    var catalogName = {
        parameterPath: "catalogName",
        mapper: {
            required: true,
            serializedName: "catalogName",
            type: {
                name: "String"
            }
        }
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

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    /** Class representing a ADCOperations. */
    var ADCOperations = /** @class */ (function () {
        /**
         * Create a ADCOperations.
         * @param {DataCatalogRestClientContext} client Reference to the service client.
         */
        function ADCOperations(client) {
            this.client = client;
        }
        ADCOperations.prototype.list = function (options, callback) {
            return this.client.sendOperationRequest({
                options: options
            }, listOperationSpec, callback);
        };
        return ADCOperations;
    }());
    // Operation Specifications
    var serializer = new msRest.Serializer(Mappers);
    var listOperationSpec = {
        httpMethod: "GET",
        path: "providers/Microsoft.DataCatalog/operations",
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: OperationEntityListResult
            },
            default: {
                bodyMapper: CloudError
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
        ADCCatalogsListResult: ADCCatalogsListResult,
        ADCCatalog: ADCCatalog,
        Resource: Resource,
        BaseResource: BaseResource,
        Principals: Principals,
        CloudError: CloudError
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
    /** Class representing a ADCCatalogs. */
    var ADCCatalogs = /** @class */ (function () {
        /**
         * Create a ADCCatalogs.
         * @param {DataCatalogRestClientContext} client Reference to the service client.
         */
        function ADCCatalogs(client) {
            this.client = client;
        }
        ADCCatalogs.prototype.listtByResourceGroup = function (resourceGroupName$$1, options, callback) {
            return this.client.sendOperationRequest({
                resourceGroupName: resourceGroupName$$1,
                options: options
            }, listtByResourceGroupOperationSpec, callback);
        };
        ADCCatalogs.prototype.createOrUpdate = function (resourceGroupName$$1, properties, options, callback) {
            return this.client.sendOperationRequest({
                resourceGroupName: resourceGroupName$$1,
                properties: properties,
                options: options
            }, createOrUpdateOperationSpec, callback);
        };
        ADCCatalogs.prototype.get = function (resourceGroupName$$1, options, callback) {
            return this.client.sendOperationRequest({
                resourceGroupName: resourceGroupName$$1,
                options: options
            }, getOperationSpec, callback);
        };
        /**
         * The Delete Azure Data Catalog Service operation deletes an existing data catalog.
         * @summary Delete Azure Data Catalog Service (DELETE Resource)
         * @param resourceGroupName The name of the resource group within the user's subscription. The name
         * is case insensitive.
         * @param [options] The optional parameters
         * @returns Promise<msRest.RestResponse>
         */
        ADCCatalogs.prototype.deleteMethod = function (resourceGroupName$$1, options) {
            return this.beginDeleteMethod(resourceGroupName$$1, options)
                .then(function (lroPoller) { return lroPoller.pollUntilFinished(); });
        };
        ADCCatalogs.prototype.update = function (resourceGroupName$$1, properties, options, callback) {
            return this.client.sendOperationRequest({
                resourceGroupName: resourceGroupName$$1,
                properties: properties,
                options: options
            }, updateOperationSpec, callback);
        };
        /**
         * The Delete Azure Data Catalog Service operation deletes an existing data catalog.
         * @summary Delete Azure Data Catalog Service (DELETE Resource)
         * @param resourceGroupName The name of the resource group within the user's subscription. The name
         * is case insensitive.
         * @param [options] The optional parameters
         * @returns Promise<msRestAzure.LROPoller>
         */
        ADCCatalogs.prototype.beginDeleteMethod = function (resourceGroupName$$1, options) {
            return this.client.sendLRORequest({
                resourceGroupName: resourceGroupName$$1,
                options: options
            }, beginDeleteMethodOperationSpec, options);
        };
        return ADCCatalogs;
    }());
    // Operation Specifications
    var serializer$1 = new msRest.Serializer(Mappers$1);
    var listtByResourceGroupOperationSpec = {
        httpMethod: "GET",
        path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs",
        urlParameters: [
            subscriptionId,
            resourceGroupName
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: ADCCatalogsListResult
            },
            default: {
                bodyMapper: CloudError
            }
        },
        serializer: serializer$1
    };
    var createOrUpdateOperationSpec = {
        httpMethod: "PUT",
        path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs/{catalogName}",
        urlParameters: [
            subscriptionId,
            resourceGroupName,
            catalogName
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        requestBody: {
            parameterPath: "properties",
            mapper: __assign({}, ADCCatalog, { required: true })
        },
        responses: {
            200: {
                bodyMapper: ADCCatalog
            },
            201: {
                bodyMapper: ADCCatalog
            },
            default: {
                bodyMapper: CloudError
            }
        },
        serializer: serializer$1
    };
    var getOperationSpec = {
        httpMethod: "GET",
        path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs/{catalogName}",
        urlParameters: [
            subscriptionId,
            resourceGroupName,
            catalogName
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: ADCCatalog
            },
            default: {
                bodyMapper: CloudError
            }
        },
        serializer: serializer$1
    };
    var updateOperationSpec = {
        httpMethod: "PATCH",
        path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs/{catalogName}",
        urlParameters: [
            subscriptionId,
            resourceGroupName,
            catalogName
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        requestBody: {
            parameterPath: "properties",
            mapper: __assign({}, ADCCatalog, { required: true })
        },
        responses: {
            200: {
                bodyMapper: ADCCatalog
            },
            default: {
                bodyMapper: CloudError
            }
        },
        serializer: serializer$1
    };
    var beginDeleteMethodOperationSpec = {
        httpMethod: "DELETE",
        path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs/{catalogName}",
        urlParameters: [
            subscriptionId,
            resourceGroupName,
            catalogName
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {},
            202: {},
            204: {},
            default: {
                bodyMapper: CloudError
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
    var packageName = "@azure/arm-datacatalog";
    var packageVersion = "1.0.0";
    var DataCatalogRestClientContext = /** @class */ (function (_super) {
        __extends(DataCatalogRestClientContext, _super);
        /**
         * Initializes a new instance of the DataCatalogRestClient class.
         * @param credentials Credentials needed for the client to connect to Azure.
         * @param subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure
         * subscription. The subscription ID forms part of the URI for every service call.
         * @param catalogName The name of the data catlog in the specified subscription and resource group.
         * @param [options] The parameter options
         */
        function DataCatalogRestClientContext(credentials, subscriptionId, catalogName, options) {
            var _this = this;
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
            _this = _super.call(this, credentials, options) || this;
            _this.apiVersion = '2016-03-30';
            _this.acceptLanguage = 'en-US';
            _this.longRunningOperationRetryTimeout = 30;
            _this.baseUri = options.baseUri || _this.baseUri || "https://management.azure.com";
            _this.requestContentType = "application/json; charset=utf-8";
            _this.credentials = credentials;
            _this.subscriptionId = subscriptionId;
            _this.catalogName = catalogName;
            _this.addUserAgentInfo(packageName + "/" + packageVersion);
            if (options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
                _this.acceptLanguage = options.acceptLanguage;
            }
            if (options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
                _this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
            }
            return _this;
        }
        return DataCatalogRestClientContext;
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
    var DataCatalogRestClient = /** @class */ (function (_super) {
        __extends(DataCatalogRestClient, _super);
        /**
         * Initializes a new instance of the DataCatalogRestClient class.
         * @param credentials Credentials needed for the client to connect to Azure.
         * @param subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure
         * subscription. The subscription ID forms part of the URI for every service call.
         * @param catalogName The name of the data catlog in the specified subscription and resource group.
         * @param [options] The parameter options
         */
        function DataCatalogRestClient(credentials, subscriptionId, catalogName, options) {
            var _this = _super.call(this, credentials, subscriptionId, catalogName, options) || this;
            _this.aDCOperations = new ADCOperations(_this);
            _this.aDCCatalogs = new ADCCatalogs(_this);
            return _this;
        }
        return DataCatalogRestClient;
    }(DataCatalogRestClientContext));

    exports.DataCatalogRestClient = DataCatalogRestClient;
    exports.DataCatalogRestClientContext = DataCatalogRestClientContext;
    exports.DataCatalogRestModels = index;
    exports.DataCatalogRestMappers = mappers;
    exports.ADCOperations = ADCOperations;
    exports.ADCCatalogs = ADCCatalogs;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=arm-datacatalog.js.map
