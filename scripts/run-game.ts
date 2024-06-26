
// Usage: pnpm hardhat run --network <network> scripts/run-game.ts
// https://explorer.oasis.io/testnet/sapphire/address/oasis1qq66rexpac3vylyagzawy0d5x8djzvpvgg57mvak (for 0x5dcccaad516d68e01823aff6e75de8be73fb57bc)
// Deployed to: https://explorer.oasis.io/testnet/sapphire/address/0x2E8B017d87EA34C9e4A8Da30222f44f2c0dFd1D9

import { ethers } from 'hardhat'

async function main() {
  const Poker = await ethers.getContractFactory('Poker');
  const poker = await Poker.deploy();
  console.log('Poker deployed to:', await poker.getAddress());

  const tx = await poker.createGame()
  console.log('Creating a new poker game (table):', tx.hash);
  await tx.wait();
  
  console.log('Joining the newly created game:', tx.hash);
  const tx2 = await poker.joinGame(0)
  await tx2.wait();

  console.log('Display hand');
  console.log(await poker.viewHand(0));

  
  // try {
    // console.log('Checking the secret');
    // await poker.connect(ethers.provider).revealSecret.staticCall(0);
    // console.log('Uh oh. The secret was available!');
    // process.exit(1);
  // } catch (e: any) {
  //   console.log('failed to fetch secret:', e.message);
  // }
  
  // Manually generate some transactions to increment local Docker
  // container block
  if ((await ethers.provider.getNetwork()).name == 'sapphire_localnet') {
    await generateTraffic(10);
  }
  
  // await new Promise((resolve) => setTimeout(resolve, 30_000));
  // console.log('Checking the secret again');
  // await (await poker.revealSecret(0)).wait(); // Reveal the secret.
  // const secret = await poker.revealSecret.staticCallResult(0); // Get the value.
  // console.log('The secret ingredient is', Buffer.from(secret[0].slice(2), 'hex').toString());
  console.log('Done');
}

async function generateTraffic(n: number) {
  const signer = await ethers.provider.getSigner();
  for (let i = 0; i < n; i++) {
    await signer.sendTransaction({
      to: "0x000000000000000000000000000000000000dEaD",
      value: ethers.parseEther("1.0"),
      data: "0x"
    });
  };
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
