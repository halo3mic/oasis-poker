// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {Test, console2} from "lib/forge-std/src/Test.sol";
import "../contracts/Deck.sol";


interface ICheat {
    function etch(address who, bytes calldata code) external;
}

contract RandomBytes {

    function randomBytes(uint nbytes) public view returns (bytes memory result) {
        bytes memory data = hex"e67e9e8e326f3807555e0098fa9d0893fea876dc56520f497f0654ecfd302feafa2407b8e59ef101924e7c405a18fea330a5564ba8d6c468da4d58892a6337432271ddcfbb584487e66b218c17832e7f369a09b3c1b934f4f59149dd692d4841f2ba2ad85240f40f2e448f8bebd2a69ae39ee400eb27b4eea234596e2b60b4fb9e53fb25713edbcf3e92e1c3f73e09fb0120ef7fd6d56d8f2c094e18675cd27637415fcf1222eb440e494984f362468ce060d84b47b38492d73e8ea7535ecdcdd60ed6d17085980411715a1c8b40bcbc";
        assembly {
            result := mload(0x40)
            mstore(result, 52)
            for { let i := 0 } lt(i, 52) { i := add(i, 32) } {
                mstore(add(result, add(0x20, i)), mload(add(data, add(0x20, i))))
            }
            mstore(0x40, add(result, 0x60))
        }
    }

    fallback() external {
        (uint numBytes, bytes memory _pers) = abi.decode(msg.data, (uint, bytes));
        bytes memory rand = randomBytes(numBytes);

        assembly {
            let location := rand
            let length := mload(rand)
            return(add(location, 0x20), length)
        }
    }

}

contract DeckTest is Test {
    using DeckUtils for Deck;
    using CardUtils for Card;

    ICheat cheat = ICheat(0x7109709ECfa91a80626fF3989D68f67F5b1DD12D);
    address constant RANDOM_BYTES = 0x0100000000000000000000000000000000000001;

    function setUp() public {
        address rb = address(new RandomBytes());
        cheat.etch(RANDOM_BYTES, rb.code);
    }

    function testRandomDummy() public {
        (bool success, bytes memory entropy) = RANDOM_BYTES.staticcall(
            abi.encode(49, "")
        );
        assert(success);
        bytes memory expectedEntropy = hex"e67e9e8e326f3807555e0098fa9d0893fea876dc56520f497f0654ecfd302feafa2407b8e59ef101924e7c405a18fea330a5564b";
        assert(
            keccak256(expectedEntropy) == keccak256(entropy)
        );
    }

    function testDeckIsFull() public {
        Deck memory deck = DeckUtils.create();

        uint bloom;
        for (uint i; i < 52; ++i) {
            Card memory c = deck.pop();
            uint idx = uint(c.suit) * 13 + uint(c.rank);
            bloom |= uint(1) << idx;
        }

        assert(0xfffffffffffff == bloom);
    }

}
