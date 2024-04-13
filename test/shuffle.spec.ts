import { expect } from "chai";
import hre from "hardhat";


describe("Shuffle", function () {

    it("Shuffle should have no repeats", async function () {
        const Poker = await hre.ethers.deployContract("Poker");
        await Poker.createGame();
        const card0 = await Poker.nextCard.staticCall(0);
        console.log(card0);
    });

});