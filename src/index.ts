import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";

const wsProvider = new WsProvider("ws://127.0.0.1:9944");

async function main() {
  const api = await ApiPromise.create({ provider: wsProvider });
  // Create a keyring instance
  const keyring = new Keyring({ type: "sr25519" });

  const alice = keyring.addFromUri("//Alice");
  await api.tx.creditcoin
    .registerAddress("Ethereum", "0x71C7656EC7ab88b098defB751B7401B5f6d8976F")
    .signAndSend(alice);

  await api.disconnect();
}

main().catch((err) => console.error(err));
