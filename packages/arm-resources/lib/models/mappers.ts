/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const DeploymentExtendedFilter: msRest.CompositeMapper = {
  serializedName: "DeploymentExtendedFilter",
  type: {
    name: "Composite",
    className: "DeploymentExtendedFilter",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GenericResourceFilter: msRest.CompositeMapper = {
  serializedName: "GenericResourceFilter",
  type: {
    name: "Composite",
    className: "GenericResourceFilter",
    modelProperties: {
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      tagname: {
        serializedName: "tagname",
        type: {
          name: "String"
        }
      },
      tagvalue: {
        serializedName: "tagvalue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceGroupFilter: msRest.CompositeMapper = {
  serializedName: "ResourceGroupFilter",
  type: {
    name: "Composite",
    className: "ResourceGroupFilter",
    modelProperties: {
      tagName: {
        serializedName: "tagName",
        type: {
          name: "String"
        }
      },
      tagValue: {
        serializedName: "tagValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TemplateLink: msRest.CompositeMapper = {
  serializedName: "TemplateLink",
  type: {
    name: "Composite",
    className: "TemplateLink",
    modelProperties: {
      uri: {
        required: true,
        serializedName: "uri",
        type: {
          name: "String"
        }
      },
      contentVersion: {
        serializedName: "contentVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ParametersLink: msRest.CompositeMapper = {
  serializedName: "ParametersLink",
  type: {
    name: "Composite",
    className: "ParametersLink",
    modelProperties: {
      uri: {
        required: true,
        serializedName: "uri",
        type: {
          name: "String"
        }
      },
      contentVersion: {
        serializedName: "contentVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DebugSetting: msRest.CompositeMapper = {
  serializedName: "DebugSetting",
  type: {
    name: "Composite",
    className: "DebugSetting",
    modelProperties: {
      detailLevel: {
        serializedName: "detailLevel",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OnErrorDeployment: msRest.CompositeMapper = {
  serializedName: "OnErrorDeployment",
  type: {
    name: "Composite",
    className: "OnErrorDeployment",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "LastSuccessful",
            "SpecificDeployment"
          ]
        }
      },
      deploymentName: {
        serializedName: "deploymentName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeploymentProperties: msRest.CompositeMapper = {
  serializedName: "DeploymentProperties",
  type: {
    name: "Composite",
    className: "DeploymentProperties",
    modelProperties: {
      template: {
        serializedName: "template",
        type: {
          name: "Object"
        }
      },
      templateLink: {
        serializedName: "templateLink",
        type: {
          name: "Composite",
          className: "TemplateLink"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Object"
        }
      },
      parametersLink: {
        serializedName: "parametersLink",
        type: {
          name: "Composite",
          className: "ParametersLink"
        }
      },
      mode: {
        required: true,
        serializedName: "mode",
        type: {
          name: "Enum",
          allowedValues: [
            "Incremental",
            "Complete"
          ]
        }
      },
      debugSetting: {
        serializedName: "debugSetting",
        type: {
          name: "Composite",
          className: "DebugSetting"
        }
      },
      onErrorDeployment: {
        serializedName: "onErrorDeployment",
        type: {
          name: "Composite",
          className: "OnErrorDeployment"
        }
      }
    }
  }
};

export const Deployment: msRest.CompositeMapper = {
  serializedName: "Deployment",
  type: {
    name: "Composite",
    className: "Deployment",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      properties: {
        required: true,
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeploymentProperties"
        }
      }
    }
  }
};

export const DeploymentExportResult: msRest.CompositeMapper = {
  serializedName: "DeploymentExportResult",
  type: {
    name: "Composite",
    className: "DeploymentExportResult",
    modelProperties: {
      template: {
        serializedName: "template",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const ResourceManagementErrorWithDetails: msRest.CompositeMapper = {
  serializedName: "ResourceManagementErrorWithDetails",
  type: {
    name: "Composite",
    className: "ResourceManagementErrorWithDetails",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        readOnly: true,
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        readOnly: true,
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceManagementErrorWithDetails"
            }
          }
        }
      }
    }
  }
};

export const AliasPathType: msRest.CompositeMapper = {
  serializedName: "AliasPathType",
  type: {
    name: "Composite",
    className: "AliasPathType",
    modelProperties: {
      path: {
        serializedName: "path",
        type: {
          name: "String"
        }
      },
      apiVersions: {
        serializedName: "apiVersions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const AliasType: msRest.CompositeMapper = {
  serializedName: "AliasType",
  type: {
    name: "Composite",
    className: "AliasType",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      paths: {
        serializedName: "paths",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AliasPathType"
            }
          }
        }
      }
    }
  }
};

export const ProviderResourceType: msRest.CompositeMapper = {
  serializedName: "ProviderResourceType",
  type: {
    name: "Composite",
    className: "ProviderResourceType",
    modelProperties: {
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      locations: {
        serializedName: "locations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      aliases: {
        serializedName: "aliases",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AliasType"
            }
          }
        }
      },
      apiVersions: {
        serializedName: "apiVersions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      properties: {
        serializedName: "properties",
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

export const Provider: msRest.CompositeMapper = {
  serializedName: "Provider",
  type: {
    name: "Composite",
    className: "Provider",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      namespace: {
        serializedName: "namespace",
        type: {
          name: "String"
        }
      },
      registrationState: {
        readOnly: true,
        serializedName: "registrationState",
        type: {
          name: "String"
        }
      },
      resourceTypes: {
        readOnly: true,
        serializedName: "resourceTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProviderResourceType"
            }
          }
        }
      }
    }
  }
};

export const BasicDependency: msRest.CompositeMapper = {
  serializedName: "BasicDependency",
  type: {
    name: "Composite",
    className: "BasicDependency",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      resourceName: {
        serializedName: "resourceName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Dependency: msRest.CompositeMapper = {
  serializedName: "Dependency",
  type: {
    name: "Composite",
    className: "Dependency",
    modelProperties: {
      dependsOn: {
        serializedName: "dependsOn",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BasicDependency"
            }
          }
        }
      },
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      resourceName: {
        serializedName: "resourceName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OnErrorDeploymentExtended: msRest.CompositeMapper = {
  serializedName: "OnErrorDeploymentExtended",
  type: {
    name: "Composite",
    className: "OnErrorDeploymentExtended",
    modelProperties: {
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "LastSuccessful",
            "SpecificDeployment"
          ]
        }
      },
      deploymentName: {
        serializedName: "deploymentName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeploymentPropertiesExtended: msRest.CompositeMapper = {
  serializedName: "DeploymentPropertiesExtended",
  type: {
    name: "Composite",
    className: "DeploymentPropertiesExtended",
    modelProperties: {
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      correlationId: {
        readOnly: true,
        serializedName: "correlationId",
        type: {
          name: "String"
        }
      },
      timestamp: {
        readOnly: true,
        serializedName: "timestamp",
        type: {
          name: "DateTime"
        }
      },
      outputs: {
        serializedName: "outputs",
        type: {
          name: "Object"
        }
      },
      providers: {
        serializedName: "providers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Provider"
            }
          }
        }
      },
      dependencies: {
        serializedName: "dependencies",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Dependency"
            }
          }
        }
      },
      template: {
        serializedName: "template",
        type: {
          name: "Object"
        }
      },
      templateLink: {
        serializedName: "templateLink",
        type: {
          name: "Composite",
          className: "TemplateLink"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Object"
        }
      },
      parametersLink: {
        serializedName: "parametersLink",
        type: {
          name: "Composite",
          className: "ParametersLink"
        }
      },
      mode: {
        serializedName: "mode",
        type: {
          name: "Enum",
          allowedValues: [
            "Incremental",
            "Complete"
          ]
        }
      },
      debugSetting: {
        serializedName: "debugSetting",
        type: {
          name: "Composite",
          className: "DebugSetting"
        }
      },
      onErrorDeployment: {
        serializedName: "onErrorDeployment",
        type: {
          name: "Composite",
          className: "OnErrorDeploymentExtended"
        }
      }
    }
  }
};

export const DeploymentValidateResult: msRest.CompositeMapper = {
  serializedName: "DeploymentValidateResult",
  type: {
    name: "Composite",
    className: "DeploymentValidateResult",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ResourceManagementErrorWithDetails"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeploymentPropertiesExtended"
        }
      }
    }
  }
};

export const DeploymentExtended: msRest.CompositeMapper = {
  serializedName: "DeploymentExtended",
  type: {
    name: "Composite",
    className: "DeploymentExtended",
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
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeploymentPropertiesExtended"
        }
      }
    }
  }
};

export const Plan: msRest.CompositeMapper = {
  serializedName: "Plan",
  type: {
    name: "Composite",
    className: "Plan",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      product: {
        serializedName: "product",
        type: {
          name: "String"
        }
      },
      promotionCode: {
        serializedName: "promotionCode",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: msRest.CompositeMapper = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
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
      },
      size: {
        serializedName: "size",
        type: {
          name: "String"
        }
      },
      family: {
        serializedName: "family",
        type: {
          name: "String"
        }
      },
      model: {
        serializedName: "model",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const IdentityUserAssignedIdentitiesValue: msRest.CompositeMapper = {
  serializedName: "Identity_userAssignedIdentitiesValue",
  type: {
    name: "Composite",
    className: "IdentityUserAssignedIdentitiesValue",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      clientId: {
        readOnly: true,
        serializedName: "clientId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Identity: msRest.CompositeMapper = {
  serializedName: "Identity",
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None"
          ]
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "IdentityUserAssignedIdentitiesValue"
            }
          }
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
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
      }
    }
  }
};

export const GenericResource: msRest.CompositeMapper = {
  serializedName: "GenericResource",
  type: {
    name: "Composite",
    className: "GenericResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      plan: {
        serializedName: "plan",
        type: {
          name: "Composite",
          className: "Plan"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Object"
        }
      },
      kind: {
        serializedName: "kind",
        constraints: {
          Pattern: /^[-\w\._,\(\)]+$/
        },
        type: {
          name: "String"
        }
      },
      managedBy: {
        serializedName: "managedBy",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      }
    }
  }
};

export const ResourceGroupProperties: msRest.CompositeMapper = {
  serializedName: "ResourceGroupProperties",
  type: {
    name: "Composite",
    className: "ResourceGroupProperties",
    modelProperties: {
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceGroup: msRest.CompositeMapper = {
  serializedName: "ResourceGroup",
  type: {
    name: "Composite",
    className: "ResourceGroup",
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
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ResourceGroupProperties"
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      managedBy: {
        serializedName: "managedBy",
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
      }
    }
  }
};

export const ResourceGroupPatchable: msRest.CompositeMapper = {
  serializedName: "ResourceGroupPatchable",
  type: {
    name: "Composite",
    className: "ResourceGroupPatchable",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ResourceGroupProperties"
        }
      },
      managedBy: {
        serializedName: "managedBy",
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
      }
    }
  }
};

export const ResourcesMoveInfo: msRest.CompositeMapper = {
  serializedName: "ResourcesMoveInfo",
  type: {
    name: "Composite",
    className: "ResourcesMoveInfo",
    modelProperties: {
      resources: {
        serializedName: "resources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      targetResourceGroup: {
        serializedName: "targetResourceGroup",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExportTemplateRequest: msRest.CompositeMapper = {
  serializedName: "ExportTemplateRequest",
  type: {
    name: "Composite",
    className: "ExportTemplateRequest",
    modelProperties: {
      resources: {
        serializedName: "resources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      options: {
        serializedName: "options",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TagCount: msRest.CompositeMapper = {
  serializedName: "TagCount",
  type: {
    name: "Composite",
    className: "TagCount",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const TagValue: msRest.CompositeMapper = {
  serializedName: "TagValue",
  type: {
    name: "Composite",
    className: "TagValue",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      tagValue: {
        serializedName: "tagValue",
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        type: {
          name: "Composite",
          className: "TagCount"
        }
      }
    }
  }
};

export const TagDetails: msRest.CompositeMapper = {
  serializedName: "TagDetails",
  type: {
    name: "Composite",
    className: "TagDetails",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      tagName: {
        serializedName: "tagName",
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        type: {
          name: "Composite",
          className: "TagCount"
        }
      },
      values: {
        serializedName: "values",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TagValue"
            }
          }
        }
      }
    }
  }
};

export const TargetResource: msRest.CompositeMapper = {
  serializedName: "TargetResource",
  type: {
    name: "Composite",
    className: "TargetResource",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      resourceName: {
        serializedName: "resourceName",
        type: {
          name: "String"
        }
      },
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpMessage: msRest.CompositeMapper = {
  serializedName: "HttpMessage",
  type: {
    name: "Composite",
    className: "HttpMessage",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const DeploymentOperationProperties: msRest.CompositeMapper = {
  serializedName: "DeploymentOperationProperties",
  type: {
    name: "Composite",
    className: "DeploymentOperationProperties",
    modelProperties: {
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      timestamp: {
        readOnly: true,
        serializedName: "timestamp",
        type: {
          name: "DateTime"
        }
      },
      serviceRequestId: {
        readOnly: true,
        serializedName: "serviceRequestId",
        type: {
          name: "String"
        }
      },
      statusCode: {
        readOnly: true,
        serializedName: "statusCode",
        type: {
          name: "String"
        }
      },
      statusMessage: {
        readOnly: true,
        serializedName: "statusMessage",
        type: {
          name: "Object"
        }
      },
      targetResource: {
        readOnly: true,
        serializedName: "targetResource",
        type: {
          name: "Composite",
          className: "TargetResource"
        }
      },
      request: {
        readOnly: true,
        serializedName: "request",
        type: {
          name: "Composite",
          className: "HttpMessage"
        }
      },
      response: {
        readOnly: true,
        serializedName: "response",
        type: {
          name: "Composite",
          className: "HttpMessage"
        }
      }
    }
  }
};

export const DeploymentOperation: msRest.CompositeMapper = {
  serializedName: "DeploymentOperation",
  type: {
    name: "Composite",
    className: "DeploymentOperation",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      operationId: {
        readOnly: true,
        serializedName: "operationId",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeploymentOperationProperties"
        }
      }
    }
  }
};

export const ResourceProviderOperationDisplayProperties: msRest.CompositeMapper = {
  serializedName: "ResourceProviderOperationDisplayProperties",
  type: {
    name: "Composite",
    className: "ResourceProviderOperationDisplayProperties",
    modelProperties: {
      publisher: {
        serializedName: "publisher",
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
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubResource: msRest.CompositeMapper = {
  serializedName: "SubResource",
  type: {
    name: "Composite",
    className: "SubResource",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceGroupExportResult: msRest.CompositeMapper = {
  serializedName: "ResourceGroupExportResult",
  type: {
    name: "Composite",
    className: "ResourceGroupExportResult",
    modelProperties: {
      template: {
        serializedName: "template",
        type: {
          name: "Object"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ResourceManagementErrorWithDetails"
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
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
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
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

export const OperationListResult: msRest.CompositeMapper = {
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

export const DeploymentListResult: msRest.CompositeMapper = {
  serializedName: "DeploymentListResult",
  type: {
    name: "Composite",
    className: "DeploymentListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DeploymentExtended"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProviderListResult: msRest.CompositeMapper = {
  serializedName: "ProviderListResult",
  type: {
    name: "Composite",
    className: "ProviderListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Provider"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceListResult: msRest.CompositeMapper = {
  serializedName: "ResourceListResult",
  type: {
    name: "Composite",
    className: "ResourceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GenericResource"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceGroupListResult: msRest.CompositeMapper = {
  serializedName: "ResourceGroupListResult",
  type: {
    name: "Composite",
    className: "ResourceGroupListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceGroup"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TagsListResult: msRest.CompositeMapper = {
  serializedName: "TagsListResult",
  type: {
    name: "Composite",
    className: "TagsListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TagDetails"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeploymentOperationsListResult: msRest.CompositeMapper = {
  serializedName: "DeploymentOperationsListResult",
  type: {
    name: "Composite",
    className: "DeploymentOperationsListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DeploymentOperation"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
