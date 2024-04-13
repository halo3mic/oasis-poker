/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Game, GameInterface } from "../Game";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "SecretCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "SecretRevealed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_lastSeen",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_metas",
    outputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "longevity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "longevity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "secret",
        type: "bytes",
      },
    ],
    name: "createSecret",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getLastSeen",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "getMetas",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "creator",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "longevity",
            type: "uint256",
          },
        ],
        internalType: "struct Game.SecretMetadata[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "refreshSecrets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "revealSecret",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061170a806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806388193a251161005b57806388193a25146100fe578063975136901461010857806398df67c614610138578063cafc24ff146101685761007d565b8063413c0fd8146100825780634aec3a321461009e57806361b94576146100ce575b600080fd5b61009c60048036038101906100979190610b12565b61019a565b005b6100b860048036038101906100b39190610ba7565b610367565b6040516100c59190610dd9565b60405180910390f35b6100e860048036038101906100e39190610e27565b6105cd565b6040516100f59190610e63565b60405180910390f35b610106610616565b005b610122600480360381019061011d9190610e27565b610620565b60405161012f9190610e63565b60405180910390f35b610152600480360381019061014d9190610e7e565b610638565b60405161015f9190610f00565b60405180910390f35b610182600480360381019061017d9190610e7e565b6108b8565b60405161019193929190610f7b565b60405180910390f35b6101a261099a565b600060405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200187878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200185815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908161029e91906111f4565b5060408201518160020155505060018282909180600181540180825580915050600190039060005260206000200160009091929091929091929091925091826102e892919061132c565b5084846040516102f992919061143b565b60405180910390203373ffffffffffffffffffffffffffffffffffffffff167f12a499eb02c8cf9494d3a624d30d5f39809807866252f6783a9ad28431d52e95600160008054905061034b9190611483565b6040516103589190610e63565b60405180910390a35050505050565b606060008054905083106103d157600067ffffffffffffffff8111156103905761038f610fb9565b5b6040519080825280602002602001820160405280156103c957816020015b6103b66109e0565b8152602001906001900390816103ae5790505b5090506105c7565b6000808054905083856103e491906114b7565b111561040057836000805490506103fb9190611483565b610402565b825b905060008167ffffffffffffffff8111156104205761041f610fb9565b5b60405190808252806020026020018201604052801561045957816020015b6104466109e0565b81526020019060019003908161043e5790505b50905060005b828110156105c0576000818761047591906114b7565b81548110610486576104856114eb565b5b90600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461050590611017565b80601f016020809104026020016040519081016040528092919081815260200182805461053190611017565b801561057e5780601f106105535761010080835404028352916020019161057e565b820191906000526020600020905b81548152906001019060200180831161056157829003601f168201915b505050505081526020016002820154815250508282815181106105a4576105a36114eb565b5b6020026020010181905250806105b99061151a565b905061045f565b5080925050505b92915050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61061e61099a565b565b60026020528060005260406000206000915090505481565b60606000805490508210610681576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610678906115ae565b60405180910390fd5b6000808381548110610696576106956114eb565b5b906000526020600020906003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008084815481106106df576106de6114eb565b5b906000526020600020906003020160020154600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461073b91906114b7565b905080421015610780576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107779061161a565b60405180910390fd5b60008481548110610794576107936114eb565b5b90600052602060002090600302016001016040516107b291906116bd565b60405180910390208273ffffffffffffffffffffffffffffffffffffffff167f08acac239b874e19cf736ed5370e1bc54e17ac10c96028aeaba701c13081d02d866040516108009190610e63565b60405180910390a36001848154811061081c5761081b6114eb565b5b90600052602060002001805461083190611017565b80601f016020809104026020016040519081016040528092919081815260200182805461085d90611017565b80156108aa5780601f1061087f576101008083540402835291602001916108aa565b820191906000526020600020905b81548152906001019060200180831161088d57829003601f168201915b505050505092505050919050565b600081815481106108c857600080fd5b90600052602060002090600302016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101805461091190611017565b80601f016020809104026020016040519081016040528092919081815260200182805461093d90611017565b801561098a5780601f1061095f5761010080835404028352916020019161098a565b820191906000526020600020905b81548152906001019060200180831161096d57829003601f168201915b5050505050908060020154905083565b42600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600081525090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610a4657610a45610a21565b5b8235905067ffffffffffffffff811115610a6357610a62610a26565b5b602083019150836001820283011115610a7f57610a7e610a2b565b5b9250929050565b6000819050919050565b610a9981610a86565b8114610aa457600080fd5b50565b600081359050610ab681610a90565b92915050565b60008083601f840112610ad257610ad1610a21565b5b8235905067ffffffffffffffff811115610aef57610aee610a26565b5b602083019150836001820283011115610b0b57610b0a610a2b565b5b9250929050565b600080600080600060608688031215610b2e57610b2d610a17565b5b600086013567ffffffffffffffff811115610b4c57610b4b610a1c565b5b610b5888828901610a30565b95509550506020610b6b88828901610aa7565b935050604086013567ffffffffffffffff811115610b8c57610b8b610a1c565b5b610b9888828901610abc565b92509250509295509295909350565b60008060408385031215610bbe57610bbd610a17565b5b6000610bcc85828601610aa7565b9250506020610bdd85828601610aa7565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c3e82610c13565b9050919050565b610c4e81610c33565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c8e578082015181840152602081019050610c73565b60008484015250505050565b6000601f19601f8301169050919050565b6000610cb682610c54565b610cc08185610c5f565b9350610cd0818560208601610c70565b610cd981610c9a565b840191505092915050565b610ced81610a86565b82525050565b6000606083016000830151610d0b6000860182610c45565b5060208301518482036020860152610d238282610cab565b9150506040830151610d386040860182610ce4565b508091505092915050565b6000610d4f8383610cf3565b905092915050565b6000602082019050919050565b6000610d6f82610be7565b610d798185610bf2565b935083602082028501610d8b85610c03565b8060005b85811015610dc75784840389528151610da88582610d43565b9450610db383610d57565b925060208a01995050600181019050610d8f565b50829750879550505050505092915050565b60006020820190508181036000830152610df38184610d64565b905092915050565b610e0481610c33565b8114610e0f57600080fd5b50565b600081359050610e2181610dfb565b92915050565b600060208284031215610e3d57610e3c610a17565b5b6000610e4b84828501610e12565b91505092915050565b610e5d81610a86565b82525050565b6000602082019050610e786000830184610e54565b92915050565b600060208284031215610e9457610e93610a17565b5b6000610ea284828501610aa7565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000610ed282610eab565b610edc8185610eb6565b9350610eec818560208601610c70565b610ef581610c9a565b840191505092915050565b60006020820190508181036000830152610f1a8184610ec7565b905092915050565b610f2b81610c33565b82525050565b600082825260208201905092915050565b6000610f4d82610c54565b610f578185610f31565b9350610f67818560208601610c70565b610f7081610c9a565b840191505092915050565b6000606082019050610f906000830186610f22565b8181036020830152610fa28185610f42565b9050610fb16040830184610e54565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061102f57607f821691505b60208210810361104257611041610fe8565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026110aa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261106d565b6110b4868361106d565b95508019841693508086168417925050509392505050565b6000819050919050565b60006110f16110ec6110e784610a86565b6110cc565b610a86565b9050919050565b6000819050919050565b61110b836110d6565b61111f611117826110f8565b84845461107a565b825550505050565b600090565b611134611127565b61113f818484611102565b505050565b5b818110156111635761115860008261112c565b600181019050611145565b5050565b601f8211156111a85761117981611048565b6111828461105d565b81016020851015611191578190505b6111a561119d8561105d565b830182611144565b50505b505050565b600082821c905092915050565b60006111cb600019846008026111ad565b1980831691505092915050565b60006111e483836111ba565b9150826002028217905092915050565b6111fd82610c54565b67ffffffffffffffff81111561121657611215610fb9565b5b6112208254611017565b61122b828285611167565b600060209050601f83116001811461125e576000841561124c578287015190505b61125685826111d8565b8655506112be565b601f19841661126c86611048565b60005b828110156112945784890151825560018201915060208501945060208101905061126f565b868310156112b157848901516112ad601f8916826111ba565b8355505b6001600288020188555050505b505050505050565b600082905092915050565b60008190508160005260206000209050919050565b601f821115611327576112f8816112d1565b6113018461105d565b81016020851015611310578190505b61132461131c8561105d565b830182611144565b50505b505050565b61133683836112c6565b67ffffffffffffffff81111561134f5761134e610fb9565b5b6113598254611017565b6113648282856112e6565b6000601f8311600181146113935760008415611381578287013590505b61138b85826111d8565b8655506113f3565b601f1984166113a1866112d1565b60005b828110156113c9578489013582556001820191506020850194506020810190506113a4565b868310156113e657848901356113e2601f8916826111ba565b8355505b6001600288020188555050505b50505050505050565b600081905092915050565b82818337600083830152505050565b600061142283856113fc565b935061142f838584611407565b82840190509392505050565b6000611448828486611416565b91508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061148e82610a86565b915061149983610a86565b92508282039050818111156114b1576114b0611454565b5b92915050565b60006114c282610a86565b91506114cd83610a86565b92508282019050808211156114e5576114e4611454565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061152582610a86565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361155757611556611454565b5b600182019050919050565b7f6e6f207375636820736563726574000000000000000000000000000000000000600082015250565b6000611598600e83610f31565b91506115a382611562565b602082019050919050565b600060208201905081810360008301526115c78161158b565b9050919050565b7f6e6f742065787069726564000000000000000000000000000000000000000000600082015250565b6000611604600b83610f31565b915061160f826115ce565b602082019050919050565b60006020820190508181036000830152611633816115f7565b9050919050565b6000815461164781611017565b61165181866113fc565b9450600182166000811461166c5760018114611681576116b4565b60ff19831686528115158202860193506116b4565b61168a85611048565b60005b838110156116ac5781548189015260018201915060208101905061168d565b838801955050505b50505092915050565b60006116c9828461163a565b91508190509291505056fea2646970667358221220858d6599c11db047e08bddbe16579b426d5917c21ab450d4d0e622e615068eed64736f6c63430008110033";

type GameConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GameConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Game__factory extends ContractFactory {
  constructor(...args: GameConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Game & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Game__factory {
    return super.connect(runner) as Game__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GameInterface {
    return new Interface(_abi) as GameInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Game {
    return new Contract(address, _abi, runner) as unknown as Game;
  }
}
