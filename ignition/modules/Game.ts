import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"

export default buildModule("GameModule", (m) => {
  const gameContract = m.contract("Game");

  // m.call(game, "launch", []);

  return { gameContract };
});
