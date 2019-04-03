/*
Test Scenario summary:
- Creates 10 clients against 10 different existing queues with names as queue-1, queue-2, ... queue-10.
- Sends, receives & completes messages in a loop on each client independently.
- All senders, receivers and clients are closed in the end.

The test assumes no other process is working with the queues defined in here,
but the queues must be empty and use default configurations before running the test.

For running this test, connection string of the Service Bus namespace must be supplied.
*/

import { ServiceBusClient, SendableMessageInfo, ReceiveMode, Sender, Receiver } from "../../lib";

const connectionString = "";

const testDurationInMilliseconds = 60000 * 5 * 12 * 24 * 7; // 1 week

const numOfClients = 10;

let msgId = 1;

let snapshotIntervalID: any;

let isJobDone = false;

async function main(): Promise<void> {
  snapshotIntervalID = setInterval(snapshot, 5000); // Every 5 seconds
  setTimeout(() => {
    isJobDone = true;
  }, testDurationInMilliseconds);

  await sendReceiveMessages();
}

async function sendReceiveMessages(): Promise<void> {
  const ns = ServiceBusClient.createFromConnectionString(connectionString);

  const clients = [];
  const senders = [];
  const receivers = [];

  const sendReceiveMessagePromises = [];

  try {
    for (let i = 0; i < numOfClients; i++) {
      clients[i] = ns.createQueueClient(`queue-${i + 1}`);
      senders[i] = clients[i].createSender();
      receivers[i] = await clients[i].createReceiver(ReceiveMode.peekLock);

      sendReceiveMessagePromises.push(sendReceiveMessagesPerClient(senders[i], receivers[i]));
    }

    await Promise.all(sendReceiveMessagePromises);
  } finally {
    for (let i = 0; i < numOfClients; i++) {
      await senders[i].close();
      await receivers[i].close();
      await clients[i].close();
    }
    await ns.close();
    clearInterval(snapshotIntervalID);
  }
}

async function sendReceiveMessagesPerClient(sender: Sender, receiver: Receiver): Promise<void> {
  while (!isJobDone) {
    const message: SendableMessageInfo = {
      messageId: msgId,
      body: "test",
      label: `${msgId}`
    };
    msgId++;
    await sender.send(message);
    const messagesReceived = await receiver.receiveBatch(1);
    await messagesReceived[0].complete();
  }
}


function snapshot(): void {
  console.log("Time : ", new Date());
  console.log("Number of clients opened, closed successfully so far : ", msgId);
  console.log("\n");
}

main().catch((err) => {
  console.log("Error occurred: ", err);
});