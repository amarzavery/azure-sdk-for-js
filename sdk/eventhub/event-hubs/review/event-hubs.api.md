## API Report File for "@azure/event-hubs"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AadTokenProvider } from '@azure/amqp-common';
import { AmqpError } from 'rhea-promise';
import { ApplicationTokenCredentials } from '@azure/ms-rest-nodeauth';
import { ConditionErrorNameMapper } from '@azure/amqp-common';
import { ConditionStatusMapper } from '@azure/amqp-common';
import { ConnectionConfig } from '@azure/amqp-common';
import { ConnectionContextBase } from '@azure/amqp-common';
import { DataTransformer } from '@azure/amqp-common';
import { DefaultDataTransformer } from '@azure/amqp-common';
import { delay } from '@azure/amqp-common';
import { Delivery } from 'rhea-promise';
import { DeliveryAnnotations } from 'rhea-promise';
import { DeviceTokenCredentials } from '@azure/ms-rest-nodeauth';
import { Dictionary } from 'rhea-promise';
import { ErrorNameConditionMapper } from '@azure/amqp-common';
import { EventHubConnectionConfig } from '@azure/amqp-common';
import { EventHubConnectionStringModel } from '@azure/amqp-common';
import { IotHubConnectionStringModel } from '@azure/amqp-common';
import { isIotHubConnectionString } from '@azure/amqp-common';
import { Message } from 'rhea-promise';
import { MessageAnnotations } from 'rhea-promise';
import { MessageHeader } from 'rhea-promise';
import { MessageProperties } from 'rhea-promise';
import { MessagingError } from '@azure/amqp-common';
import { MSITokenCredentials } from '@azure/ms-rest-nodeauth';
import { OnAmqpEvent } from 'rhea-promise';
import { parseConnectionString } from '@azure/amqp-common';
import { Receiver } from 'rhea-promise';
import { ReceiverOptions } from 'rhea-promise';
import { SasTokenProvider } from '@azure/amqp-common';
import { Sender } from 'rhea-promise';
import { StorageConnectionStringModel } from '@azure/amqp-common';
import { Timeout } from '@azure/amqp-common';
import { TokenInfo } from '@azure/amqp-common';
import { TokenProvider } from '@azure/amqp-common';
import { TokenType } from '@azure/amqp-common';
import { UserTokenCredentials } from '@azure/ms-rest-nodeauth';
import { WebSocketImpl } from 'rhea-promise';

// @public (undocumented)
export const aadEventHubsAudience = "https://eventhubs.azure.net/";

export { AadTokenProvider }

export { AmqpError }

// @public
export interface ClientOptions extends ClientOptionsBase {
    tokenProvider?: TokenProvider;
}

// @public
export interface ClientOptionsBase {
    dataTransformer?: DataTransformer;
    userAgent?: string;
    webSocket?: WebSocketImpl;
    webSocketConstructorOptions?: any;
}

export { ConditionErrorNameMapper }

export { ConditionStatusMapper }

export { ConnectionConfig }

export { DataTransformer }

export { DefaultDataTransformer }

export { delay }

export { Delivery }

export { Dictionary }

export { ErrorNameConditionMapper }

// @public
export interface EventData {
    annotations?: EventHubMessageAnnotations;
    applicationProperties?: Dictionary<any>;
    body: any;
    enqueuedTimeUtc?: Date;
    header?: MessageHeader;
    lastEnqueuedOffset?: string;
    lastEnqueuedTime?: Date;
    lastSequenceNumber?: number;
    offset?: string;
    partitionKey?: string | null;
    properties?: MessageProperties;
    _raw_amqp_mesage?: Message;
    retrievalTime?: Date;
    sequenceNumber?: number;
}

// @public
export namespace EventData {
    export function fromAmqpMessage(msg: Message): EventData;
    export function toAmqpMessage(data: EventData): Message;
}

// @public
export class EventHubClient {
    constructor(config: EventHubConnectionConfig, options?: ClientOptions);
    close(): Promise<void>;
    connectionId?: string;
    static createFromAadTokenCredentials(host: string, entityPath: string, credentials: ApplicationTokenCredentials | UserTokenCredentials | DeviceTokenCredentials | MSITokenCredentials, options?: ClientOptionsBase): EventHubClient;
    static createFromConnectionString(connectionString: string, path?: string, options?: ClientOptions): EventHubClient;
    static createFromIotHubConnectionString(iothubConnectionString: string, options?: ClientOptions): Promise<EventHubClient>;
    static createFromTokenProvider(host: string, entityPath: string, tokenProvider: TokenProvider, options?: ClientOptionsBase): EventHubClient;
    readonly eventhubName: string;
    getHubRuntimeInformation(): Promise<EventHubRuntimeInformation>;
    getPartitionIds(): Promise<Array<string>>;
    getPartitionInformation(partitionId: string | number): Promise<EventHubPartitionRuntimeInformation>;
    receive(partitionId: string | number, onMessage: OnMessage, onError: OnError, options?: ReceiveOptions): ReceiveHandler;
    receiveBatch(partitionId: string | number, maxMessageCount: number, maxWaitTimeInSeconds?: number, options?: ReceiveOptions): Promise<EventData[]>;
    send(data: EventData, partitionId?: string | number): Promise<Delivery>;
    sendBatch(datas: EventData[], partitionId?: string | number): Promise<Delivery>;
}

export { EventHubConnectionConfig }

export { EventHubConnectionStringModel }

// @public
export interface EventHubDeliveryAnnotations extends DeliveryAnnotations {
    [x: string]: any;
    last_enqueued_offset?: string;
    last_enqueued_sequence_number?: number;
    last_enqueued_time_utc?: number;
    runtime_info_retrieval_time_utc?: number;
}

// @public
export interface EventHubMessageAnnotations extends MessageAnnotations {
    [x: string]: any;
    "x-opt-enqueued-time"?: number;
    "x-opt-offset"?: string;
    "x-opt-partition-key"?: string | null;
    "x-opt-sequence-number"?: number;
}

// @public
export interface EventHubPartitionRuntimeInformation {
    beginningSequenceNumber: number;
    hubPath: string;
    lastEnqueuedOffset: string;
    lastEnqueuedTimeUtc: Date;
    lastSequenceNumber: number;
    partitionId: string;
    type: "com.microsoft:partition";
}

// @public
export interface EventHubRuntimeInformation {
    createdAt: Date;
    partitionCount: number;
    partitionIds: string[];
    path: string;
    type: "com.microsoft:eventhub";
}

// @public
export class EventPosition {
    // Warning: (ae-forgotten-export) The symbol "EventPositionOptions" needs to be exported by the entry point index.d.ts
    constructor(options?: EventPositionOptions);
    customFilter?: string;
    static readonly endOfStream: string;
    enqueuedTime?: Date | number;
    static fromEnd(): EventPosition;
    static fromEnqueuedTime(enqueuedTime: Date | number): EventPosition;
    static fromOffset(offset: string, isInclusive?: boolean): EventPosition;
    static fromSequenceNumber(sequenceNumber: number, isInclusive?: boolean): EventPosition;
    static fromStart(): EventPosition;
    getExpression(): string;
    isInclusive: boolean;
    offset?: string;
    sequenceNumber?: number;
    static readonly startOfStream: string;
    static withCustomFilter(customFilter: string): EventPosition;
}

export { IotHubConnectionStringModel }

export { isIotHubConnectionString }

export { Message }

export { MessageHeader }

export { MessageProperties }

export { MessagingError }

// @public
export type OnError = (error: MessagingError | Error) => void;

// @public
export type OnMessage = (eventData: EventData) => void;

export { parseConnectionString }

// @public
export class ReceiveHandler {
    // Warning: (ae-forgotten-export) The symbol "EventHubReceiver" needs to be exported by the entry point index.d.ts
    constructor(receiver: EventHubReceiver);
    readonly address: string | undefined;
    readonly consumerGroup: string | undefined;
    readonly epoch: number | undefined;
    readonly identifier: string | undefined;
    readonly isReceiverOpen: boolean;
    readonly name: string;
    readonly partitionId: string | number | undefined;
    readonly runtimeInfo: ReceiverRuntimeInfo | undefined;
    stop(): Promise<void>;
}

// @public
export interface ReceiveOptions {
    consumerGroup?: string;
    enableReceiverRuntimeMetric?: boolean;
    epoch?: number;
    eventPosition?: EventPosition;
    identifier?: string;
    name?: string;
    prefetchCount?: number;
}

// @public
export interface ReceiverRuntimeInfo {
    lastEnqueuedOffset?: string;
    lastEnqueuedTimeUtc?: Date;
    lastSequenceNumber?: number;
    partitionId: string;
    retrievalTime?: Date;
}

export { SasTokenProvider }

export { StorageConnectionStringModel }

export { Timeout }

export { TokenInfo }

export { TokenProvider }

export { TokenType }

export { WebSocketImpl }


// (No @packageDocumentation comment for this package)

```
