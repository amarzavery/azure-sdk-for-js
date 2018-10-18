/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing SkuName.
 */
export interface SkuName {
  /**
   * @member {string} [name]
   */
  name?: string;
}

/**
 * @interface
 * An interface representing SkuProperty.
 */
export interface SkuProperty {
  /**
   * @member {string} [name] An invariant to describe the feature.
   */
  name?: string;
  /**
   * @member {string} [value] An invariant if the feature is measured by
   * quantity.
   */
  value?: string;
}

/**
 * @interface
 * An interface representing SkuRestriction.
 */
export interface SkuRestriction {
  /**
   * @member {string} [type] The type of restrictions.
   */
  type?: string;
  /**
   * @member {string[]} [values] The value of restrictions. If the restriction
   * type is set to location. This would be different locations where the SKU
   * is restricted.
   */
  values?: string[];
  /**
   * @member {string} [reasonCode] The reason for restriction.
   */
  reasonCode?: string;
}

/**
 * @interface
 * An interface representing Catalog.
 */
export interface Catalog {
  /**
   * @member {string} [resourceType] The type of resource the SKU applies to.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly resourceType?: string;
  /**
   * @member {string} [name] The name of SKU
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {ReservationTerm[]} [terms] Available reservation terms for this
   * resource
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly terms?: ReservationTerm[];
  /**
   * @member {string[]} [locations] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly locations?: string[];
  /**
   * @member {SkuProperty[]} [skuProperties] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly skuProperties?: SkuProperty[];
  /**
   * @member {SkuRestriction[]} [restrictions] **NOTE: This property will not
   * be serialized. It can only be populated by the server.**
   */
  readonly restrictions?: SkuRestriction[];
}

/**
 * @interface
 * An interface representing ExtendedStatusInfo.
 */
export interface ExtendedStatusInfo {
  /**
   * @member {ReservationStatusCode} [statusCode] Possible values include:
   * 'None', 'Pending', 'Active', 'PurchaseError', 'PaymentInstrumentError',
   * 'Split', 'Merged', 'Expired', 'Succeeded'
   */
  statusCode?: ReservationStatusCode;
  /**
   * @member {string} [message] The message giving detailed information about
   * the status code.
   */
  message?: string;
}

/**
 * @interface
 * An interface representing ReservationSplitProperties.
 */
export interface ReservationSplitProperties {
  /**
   * @member {string[]} [splitDestinations] List of destination Resource Id
   * that are created due to split. Format of the resource Id is
   * /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
   */
  splitDestinations?: string[];
  /**
   * @member {string} [splitSource] Resource Id of the Reservation from which
   * this is split. Format of the resource Id is
   * /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
   */
  splitSource?: string;
}

/**
 * @interface
 * An interface representing ReservationMergeProperties.
 */
export interface ReservationMergeProperties {
  /**
   * @member {string} [mergeDestination] Reservation Resource Id Created due to
   * the merge. Format of the resource Id is
   * /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
   */
  mergeDestination?: string;
  /**
   * @member {string[]} [mergeSources] Resource Ids of the Source Reservation's
   * merged to form this Reservation. Format of the resource Id is
   * /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
   */
  mergeSources?: string[];
}

/**
 * @interface
 * An interface representing ReservationProperties.
 */
export interface ReservationProperties {
  /**
   * @member {ReservedResourceType} [reservedResourceType] Possible values
   * include: 'VirtualMachines', 'SqlDatabases', 'SuseLinux', 'CosmosDb'
   */
  reservedResourceType?: ReservedResourceType;
  /**
   * @member {InstanceFlexibility} [instanceFlexibility] Possible values
   * include: 'On', 'Off', 'NotSupported'
   */
  instanceFlexibility?: InstanceFlexibility;
  /**
   * @member {string} [displayName] Friendly name for user to easily identify
   * the reservation
   */
  displayName?: string;
  /**
   * @member {string[]} [appliedScopes]
   */
  appliedScopes?: string[];
  /**
   * @member {AppliedScopeType} [appliedScopeType] Possible values include:
   * 'Single', 'Shared'
   */
  appliedScopeType?: AppliedScopeType;
  /**
   * @member {number} [quantity] Quantity of the SKUs that are part of the
   * Reservation.
   */
  quantity?: number;
  /**
   * @member {string} [provisioningState] Current state of the reservation.
   */
  provisioningState?: string;
  /**
   * @member {Date} [effectiveDateTime] DateTime of the Reservation starting
   * when this version is effective from.
   */
  effectiveDateTime?: Date;
  /**
   * @member {Date} [lastUpdatedDateTime] DateTime of the last time the
   * Reservation was updated.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly lastUpdatedDateTime?: Date;
  /**
   * @member {Date} [expiryDate] This is the date when the Reservation will
   * expire.
   */
  expiryDate?: Date;
  /**
   * @member {string} [skuDescription] Description of the SKU in english.
   */
  skuDescription?: string;
  /**
   * @member {ExtendedStatusInfo} [extendedStatusInfo]
   */
  extendedStatusInfo?: ExtendedStatusInfo;
  /**
   * @member {ReservationSplitProperties} [splitProperties]
   */
  splitProperties?: ReservationSplitProperties;
  /**
   * @member {ReservationMergeProperties} [mergeProperties]
   */
  mergeProperties?: ReservationMergeProperties;
}

/**
 * @interface
 * An interface representing ReservationResponse.
 * @extends BaseResource
 */
export interface ReservationResponse extends BaseResource {
  /**
   * @member {string} [location] The Azure Region where the reserved resource
   * lives.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly location?: string;
  /**
   * @member {number} [etag]
   */
  etag?: number;
  /**
   * @member {string} [id] Identifier of the reservation
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Name of the reservation
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {SkuName} [sku]
   */
  sku?: SkuName;
  /**
   * @member {ReservationProperties} [properties]
   */
  properties?: ReservationProperties;
  /**
   * @member {string} [type] Type of resource.
   * "Microsoft.Capacity/reservationOrders/reservations"
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
}

/**
 * @interface
 * An interface representing ReservationOrderResponse.
 * @extends BaseResource
 */
export interface ReservationOrderResponse extends BaseResource {
  /**
   * @member {number} [etag]
   */
  etag?: number;
  /**
   * @member {string} [id] Identifier of the reservation
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Name of the reservation
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [displayName] Friendly name for user to easily identified
   * the reservation.
   */
  displayName?: string;
  /**
   * @member {Date} [requestDateTime] This is the DateTime when the reservation
   * was initially requested for purchase.
   */
  requestDateTime?: Date;
  /**
   * @member {Date} [createdDateTime] This is the DateTime when the reservation
   * was created.
   */
  createdDateTime?: Date;
  /**
   * @member {Date} [expiryDate] This is the date when the Reservation will
   * expire.
   */
  expiryDate?: Date;
  /**
   * @member {number} [originalQuantity] Total Quantity of the SKUs purchased
   * in the Reservation.
   */
  originalQuantity?: number;
  /**
   * @member {ReservationTerm} [term] Possible values include: 'P1Y', 'P3Y'
   */
  term?: ReservationTerm;
  /**
   * @member {string} [provisioningState] Current state of the reservation.
   */
  provisioningState?: string;
  /**
   * @member {ReservationResponse[]} [reservations]
   */
  reservations?: ReservationResponse[];
  /**
   * @member {string} [type] Type of resource.
   * "Microsoft.Capacity/reservations"
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
}

/**
 * @interface
 * An interface representing MergeRequest.
 */
export interface MergeRequest {
  /**
   * @member {string[]} [sources] Format of the resource id should be
   * /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
   */
  sources?: string[];
}

/**
 * @interface
 * An interface representing Patch.
 */
export interface Patch {
  /**
   * @member {AppliedScopeType} [appliedScopeType] Possible values include:
   * 'Single', 'Shared'
   */
  appliedScopeType?: AppliedScopeType;
  /**
   * @member {string[]} [appliedScopes]
   */
  appliedScopes?: string[];
  /**
   * @member {InstanceFlexibility} [instanceFlexibility] Possible values
   * include: 'On', 'Off', 'NotSupported'
   */
  instanceFlexibility?: InstanceFlexibility;
  /**
   * @member {string} [name] Name of the Reservation
   */
  name?: string;
}

/**
 * @interface
 * An interface representing SplitRequest.
 */
export interface SplitRequest {
  /**
   * @member {number[]} [quantities] List of the quantities in the new
   * reservations to create.
   */
  quantities?: number[];
  /**
   * @member {string} [reservationId] Resource id of the reservation to be
   * split. Format of the resource id should be
   * /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
   */
  reservationId?: string;
}

/**
 * @interface
 * An interface representing ExtendedErrorInfo.
 */
export interface ExtendedErrorInfo {
  /**
   * @member {ErrorResponseCode} [code] Possible values include:
   * 'NotSpecified', 'InternalServerError', 'ServerTimeout',
   * 'AuthorizationFailed', 'BadRequest', 'ClientCertificateThumbprintNotSet',
   * 'InvalidRequestContent', 'OperationFailed', 'HttpMethodNotSupported',
   * 'InvalidRequestUri', 'MissingTenantId', 'InvalidTenantId',
   * 'InvalidReservationOrderId', 'InvalidReservationId',
   * 'ReservationIdNotInReservationOrder', 'ReservationOrderNotFound',
   * 'InvalidSubscriptionId', 'InvalidAccessToken', 'InvalidLocationId',
   * 'UnauthenticatedRequestsThrottled', 'InvalidHealthCheckType', 'Forbidden',
   * 'BillingScopeIdCannotBeChanged',
   * 'AppliedScopesNotAssociatedWithCommerceAccount',
   * 'PatchValuesSameAsExisting', 'RoleAssignmentCreationFailed',
   * 'ReservationOrderCreationFailed', 'ReservationOrderNotEnabled',
   * 'CapacityUpdateScopesFailed', 'UnsupportedReservationTerm',
   * 'ReservationOrderIdAlreadyExists', 'RiskCheckFailed', 'CreateQuoteFailed',
   * 'ActivateQuoteFailed', 'NonsupportedAccountId',
   * 'PaymentInstrumentNotFound', 'MissingAppliedScopesForSingle',
   * 'NoValidReservationsToReRate', 'ReRateOnlyAllowedForEA',
   * 'OperationCannotBePerformedInCurrentState',
   * 'InvalidSingleAppliedScopesCount', 'InvalidFulfillmentRequestParameters',
   * 'NotSupportedCountry', 'InvalidRefundQuantity', 'PurchaseError',
   * 'BillingCustomerInputError', 'BillingPaymentInstrumentSoftError',
   * 'BillingPaymentInstrumentHardError', 'BillingTransientError',
   * 'BillingError', 'FulfillmentConfigurationError',
   * 'FulfillmentOutOfStockError', 'FulfillmentTransientError',
   * 'FulfillmentError', 'CalculatePriceFailed'
   */
  code?: ErrorResponseCode;
  /**
   * @member {string} [message]
   */
  message?: string;
}

/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {ExtendedErrorInfo} [error]
   */
  error?: ExtendedErrorInfo;
}

/**
 * @interface
 * An interface representing AppliedReservationList.
 */
export interface AppliedReservationList {
  /**
   * @member {string[]} [value]
   */
  value?: string[];
  /**
   * @member {string} [nextLink] Url to get the next page of reservations
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing AppliedReservations.
 */
export interface AppliedReservations {
  /**
   * @member {string} [id] Identifier of the applied reservations
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Name of resource
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Type of resource.
   * "Microsoft.Capacity/AppliedReservations"
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {AppliedReservationList} [reservationOrderIds]
   */
  reservationOrderIds?: AppliedReservationList;
}

/**
 * @interface
 * An interface representing OperationDisplay.
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider]
   */
  provider?: string;
  /**
   * @member {string} [resource]
   */
  resource?: string;
  /**
   * @member {string} [operation]
   */
  operation?: string;
  /**
   * @member {string} [description]
   */
  description?: string;
}

/**
 * @interface
 * An interface representing OperationResponse.
 */
export interface OperationResponse {
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {OperationDisplay} [display]
   */
  display?: OperationDisplay;
  /**
   * @member {string} [origin]
   */
  origin?: string;
}

/**
 * @interface
 * An interface representing AzureReservationAPIGetCatalogOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AzureReservationAPIGetCatalogOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [location] Filters the skus based on the location
   * specified in this parameter. This can be an azure region or global
   */
  location?: string;
}

/**
 * @interface
 * An interface representing AzureReservationAPIOptions.
 * @extends AzureServiceClientOptions
 */
export interface AzureReservationAPIOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the ReservationOrderList.
 * @extends Array<ReservationOrderResponse>
 */
export interface ReservationOrderList extends Array<ReservationOrderResponse> {
  /**
   * @member {string} [nextLink] Url to get the next page of reservationOrders.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the ReservationList.
 * @extends Array<ReservationResponse>
 */
export interface ReservationList extends Array<ReservationResponse> {
  /**
   * @member {string} [nextLink] Url to get the next page of reservations.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the OperationList.
 * @extends Array<OperationResponse>
 */
export interface OperationList extends Array<OperationResponse> {
  /**
   * @member {string} [nextLink] Url to get the next page of items.
   */
  nextLink?: string;
}

/**
 * Defines values for ReservationStatusCode.
 * Possible values include: 'None', 'Pending', 'Active', 'PurchaseError',
 * 'PaymentInstrumentError', 'Split', 'Merged', 'Expired', 'Succeeded'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ReservationStatusCode =
 * <ReservationStatusCode>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum ReservationStatusCode {
  None = 'None',
  Pending = 'Pending',
  Active = 'Active',
  PurchaseError = 'PurchaseError',
  PaymentInstrumentError = 'PaymentInstrumentError',
  Split = 'Split',
  Merged = 'Merged',
  Expired = 'Expired',
  Succeeded = 'Succeeded',
}

/**
 * Defines values for ErrorResponseCode.
 * Possible values include: 'NotSpecified', 'InternalServerError',
 * 'ServerTimeout', 'AuthorizationFailed', 'BadRequest',
 * 'ClientCertificateThumbprintNotSet', 'InvalidRequestContent',
 * 'OperationFailed', 'HttpMethodNotSupported', 'InvalidRequestUri',
 * 'MissingTenantId', 'InvalidTenantId', 'InvalidReservationOrderId',
 * 'InvalidReservationId', 'ReservationIdNotInReservationOrder',
 * 'ReservationOrderNotFound', 'InvalidSubscriptionId', 'InvalidAccessToken',
 * 'InvalidLocationId', 'UnauthenticatedRequestsThrottled',
 * 'InvalidHealthCheckType', 'Forbidden', 'BillingScopeIdCannotBeChanged',
 * 'AppliedScopesNotAssociatedWithCommerceAccount',
 * 'PatchValuesSameAsExisting', 'RoleAssignmentCreationFailed',
 * 'ReservationOrderCreationFailed', 'ReservationOrderNotEnabled',
 * 'CapacityUpdateScopesFailed', 'UnsupportedReservationTerm',
 * 'ReservationOrderIdAlreadyExists', 'RiskCheckFailed', 'CreateQuoteFailed',
 * 'ActivateQuoteFailed', 'NonsupportedAccountId', 'PaymentInstrumentNotFound',
 * 'MissingAppliedScopesForSingle', 'NoValidReservationsToReRate',
 * 'ReRateOnlyAllowedForEA', 'OperationCannotBePerformedInCurrentState',
 * 'InvalidSingleAppliedScopesCount', 'InvalidFulfillmentRequestParameters',
 * 'NotSupportedCountry', 'InvalidRefundQuantity', 'PurchaseError',
 * 'BillingCustomerInputError', 'BillingPaymentInstrumentSoftError',
 * 'BillingPaymentInstrumentHardError', 'BillingTransientError',
 * 'BillingError', 'FulfillmentConfigurationError',
 * 'FulfillmentOutOfStockError', 'FulfillmentTransientError',
 * 'FulfillmentError', 'CalculatePriceFailed'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ErrorResponseCode =
 * <ErrorResponseCode>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum ErrorResponseCode {
  NotSpecified = 'NotSpecified',
  InternalServerError = 'InternalServerError',
  ServerTimeout = 'ServerTimeout',
  AuthorizationFailed = 'AuthorizationFailed',
  BadRequest = 'BadRequest',
  ClientCertificateThumbprintNotSet = 'ClientCertificateThumbprintNotSet',
  InvalidRequestContent = 'InvalidRequestContent',
  OperationFailed = 'OperationFailed',
  HttpMethodNotSupported = 'HttpMethodNotSupported',
  InvalidRequestUri = 'InvalidRequestUri',
  MissingTenantId = 'MissingTenantId',
  InvalidTenantId = 'InvalidTenantId',
  InvalidReservationOrderId = 'InvalidReservationOrderId',
  InvalidReservationId = 'InvalidReservationId',
  ReservationIdNotInReservationOrder = 'ReservationIdNotInReservationOrder',
  ReservationOrderNotFound = 'ReservationOrderNotFound',
  InvalidSubscriptionId = 'InvalidSubscriptionId',
  InvalidAccessToken = 'InvalidAccessToken',
  InvalidLocationId = 'InvalidLocationId',
  UnauthenticatedRequestsThrottled = 'UnauthenticatedRequestsThrottled',
  InvalidHealthCheckType = 'InvalidHealthCheckType',
  Forbidden = 'Forbidden',
  BillingScopeIdCannotBeChanged = 'BillingScopeIdCannotBeChanged',
  AppliedScopesNotAssociatedWithCommerceAccount = 'AppliedScopesNotAssociatedWithCommerceAccount',
  PatchValuesSameAsExisting = 'PatchValuesSameAsExisting',
  RoleAssignmentCreationFailed = 'RoleAssignmentCreationFailed',
  ReservationOrderCreationFailed = 'ReservationOrderCreationFailed',
  ReservationOrderNotEnabled = 'ReservationOrderNotEnabled',
  CapacityUpdateScopesFailed = 'CapacityUpdateScopesFailed',
  UnsupportedReservationTerm = 'UnsupportedReservationTerm',
  ReservationOrderIdAlreadyExists = 'ReservationOrderIdAlreadyExists',
  RiskCheckFailed = 'RiskCheckFailed',
  CreateQuoteFailed = 'CreateQuoteFailed',
  ActivateQuoteFailed = 'ActivateQuoteFailed',
  NonsupportedAccountId = 'NonsupportedAccountId',
  PaymentInstrumentNotFound = 'PaymentInstrumentNotFound',
  MissingAppliedScopesForSingle = 'MissingAppliedScopesForSingle',
  NoValidReservationsToReRate = 'NoValidReservationsToReRate',
  ReRateOnlyAllowedForEA = 'ReRateOnlyAllowedForEA',
  OperationCannotBePerformedInCurrentState = 'OperationCannotBePerformedInCurrentState',
  InvalidSingleAppliedScopesCount = 'InvalidSingleAppliedScopesCount',
  InvalidFulfillmentRequestParameters = 'InvalidFulfillmentRequestParameters',
  NotSupportedCountry = 'NotSupportedCountry',
  InvalidRefundQuantity = 'InvalidRefundQuantity',
  PurchaseError = 'PurchaseError',
  BillingCustomerInputError = 'BillingCustomerInputError',
  BillingPaymentInstrumentSoftError = 'BillingPaymentInstrumentSoftError',
  BillingPaymentInstrumentHardError = 'BillingPaymentInstrumentHardError',
  BillingTransientError = 'BillingTransientError',
  BillingError = 'BillingError',
  FulfillmentConfigurationError = 'FulfillmentConfigurationError',
  FulfillmentOutOfStockError = 'FulfillmentOutOfStockError',
  FulfillmentTransientError = 'FulfillmentTransientError',
  FulfillmentError = 'FulfillmentError',
  CalculatePriceFailed = 'CalculatePriceFailed',
}

/**
 * Defines values for ReservationTerm.
 * Possible values include: 'P1Y', 'P3Y'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ReservationTerm =
 * <ReservationTerm>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum ReservationTerm {
  P1Y = 'P1Y',
  P3Y = 'P3Y',
}

/**
 * Defines values for ReservedResourceType.
 * Possible values include: 'VirtualMachines', 'SqlDatabases', 'SuseLinux',
 * 'CosmosDb'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ReservedResourceType =
 * <ReservedResourceType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum ReservedResourceType {
  VirtualMachines = 'VirtualMachines',
  SqlDatabases = 'SqlDatabases',
  SuseLinux = 'SuseLinux',
  CosmosDb = 'CosmosDb',
}

/**
 * Defines values for InstanceFlexibility.
 * Possible values include: 'On', 'Off', 'NotSupported'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: InstanceFlexibility =
 * <InstanceFlexibility>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum InstanceFlexibility {
  On = 'On',
  Off = 'Off',
  NotSupported = 'NotSupported',
}

/**
 * Defines values for AppliedScopeType.
 * Possible values include: 'Single', 'Shared'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: AppliedScopeType =
 * <AppliedScopeType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum AppliedScopeType {
  Single = 'Single',
  Shared = 'Shared',
}

/**
 * Contains response data for the getCatalog operation.
 */
export type GetCatalogResponse = Array<Catalog> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Catalog[];
    };
};

/**
 * Contains response data for the getAppliedReservationList operation.
 */
export type GetAppliedReservationListResponse = AppliedReservations & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AppliedReservations;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ReservationOrderListResponse = ReservationOrderList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationOrderList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ReservationOrderGetResponse = ReservationOrderResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationOrderResponse;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type ReservationOrderListNextResponse = ReservationOrderList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationOrderList;
    };
};

/**
 * Contains response data for the split operation.
 */
export type ReservationSplitResponse = Array<ReservationResponse> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationResponse[];
    };
};

/**
 * Contains response data for the merge operation.
 */
export type ReservationMergeResponse = Array<ReservationResponse> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationResponse[];
    };
};

/**
 * Contains response data for the list operation.
 */
export type ReservationListResponse = ReservationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ReservationGetResponse = ReservationResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationResponse;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ReservationUpdateResponse = ReservationResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationResponse;
    };
};

/**
 * Contains response data for the listRevisions operation.
 */
export type ReservationListRevisionsResponse = ReservationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationList;
    };
};

/**
 * Contains response data for the beginSplit operation.
 */
export type ReservationBeginSplitResponse = Array<ReservationResponse> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationResponse[];
    };
};

/**
 * Contains response data for the beginMerge operation.
 */
export type ReservationBeginMergeResponse = Array<ReservationResponse> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationResponse[];
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type ReservationBeginUpdateResponse = ReservationResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationResponse;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type ReservationListNextResponse = ReservationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationList;
    };
};

/**
 * Contains response data for the listRevisionsNext operation.
 */
export type ReservationListRevisionsNextResponse = ReservationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationListResponse = OperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationList;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationListNextResponse = OperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationList;
    };
};
