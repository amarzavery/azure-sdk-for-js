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
import * as Models from "../models";
import * as Mappers from "../models/balancesMappers";
import * as Parameters from "../models/parameters";
import { ConsumptionManagementClientContext } from "../consumptionManagementClientContext";

/** Class representing a Balances. */
export class Balances {
  private readonly client: ConsumptionManagementClientContext;

  /**
   * Create a Balances.
   * @param {ConsumptionManagementClientContext} client Reference to the service client.
   */
  constructor(client: ConsumptionManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the balances for a scope by billingAccountId. Balances are available via this API only for
   * May 1, 2014 or later.
   * @param billingAccountId BillingAccount ID
   * @param [options] The optional parameters
   * @returns Promise<Models.BalancesGetByBillingAccountResponse>
   */
  getByBillingAccount(billingAccountId: string, options?: msRest.RequestOptionsBase): Promise<Models.BalancesGetByBillingAccountResponse>;
  /**
   * @param billingAccountId BillingAccount ID
   * @param callback The callback
   */
  getByBillingAccount(billingAccountId: string, callback: msRest.ServiceCallback<Models.Balance>): void;
  /**
   * @param billingAccountId BillingAccount ID
   * @param options The optional parameters
   * @param callback The callback
   */
  getByBillingAccount(billingAccountId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Balance>): void;
  getByBillingAccount(billingAccountId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Balance>): Promise<Models.BalancesGetByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountId,
        options
      },
      getByBillingAccountOperationSpec,
      callback) as Promise<Models.BalancesGetByBillingAccountResponse>;
  }

  /**
   * Gets the balances for a scope by billing period and billingAccountId. Balances are available via
   * this API only for May 1, 2014 or later.
   * @param billingAccountId BillingAccount ID
   * @param billingPeriodName Billing Period Name.
   * @param [options] The optional parameters
   * @returns Promise<Models.BalancesGetForBillingPeriodByBillingAccountResponse>
   */
  getForBillingPeriodByBillingAccount(billingAccountId: string, billingPeriodName: string, options?: msRest.RequestOptionsBase): Promise<Models.BalancesGetForBillingPeriodByBillingAccountResponse>;
  /**
   * @param billingAccountId BillingAccount ID
   * @param billingPeriodName Billing Period Name.
   * @param callback The callback
   */
  getForBillingPeriodByBillingAccount(billingAccountId: string, billingPeriodName: string, callback: msRest.ServiceCallback<Models.Balance>): void;
  /**
   * @param billingAccountId BillingAccount ID
   * @param billingPeriodName Billing Period Name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getForBillingPeriodByBillingAccount(billingAccountId: string, billingPeriodName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Balance>): void;
  getForBillingPeriodByBillingAccount(billingAccountId: string, billingPeriodName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Balance>): Promise<Models.BalancesGetForBillingPeriodByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountId,
        billingPeriodName,
        options
      },
      getForBillingPeriodByBillingAccountOperationSpec,
      callback) as Promise<Models.BalancesGetForBillingPeriodByBillingAccountResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getByBillingAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Consumption/balances",
  urlParameters: [
    Parameters.billingAccountId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Balance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getForBillingPeriodByBillingAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}/providers/Microsoft.Consumption/balances",
  urlParameters: [
    Parameters.billingAccountId,
    Parameters.billingPeriodName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Balance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
