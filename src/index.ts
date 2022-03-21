import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";

const wsProvider = new WsProvider("ws://127.0.0.1:9944");

const customRpcs = {
  creditcoin: {
    getEvents: {
      description: "Get events in the latest block as json",
      params: [
        {
          name: "at",
          type: "Hash",
          isOptional: true,
        },
      ],
      type: "object",
    },
    eventsSubscribe: {
      description: "Subscribe to events as json",
      params: [],
      type: "string",
    },
    eventsUnsubscribe: {
      description: "Unsubscribe to events as json",
      params: [{ name: "subscriptionId", type: "string" }],
      type: "void",
    },
  },
};

async function main() {
  const api = await ApiPromise.create({
    provider: wsProvider,
    rpc: customRpcs,
  });

  await api.disconnect();
}

main().catch((err) => console.error(err));
