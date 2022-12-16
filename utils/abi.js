export const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "contract Subscription",
				name: "subscription",
				type: "address",
			},
		],
		name: "SubscriptionCreated",
		type: "event",
	},
	{
		inputs: [
			{ internalType: "uint96[]", name: "_price", type: "uint96[]" },
			{ internalType: "string", name: "_name", type: "string" },
			{ internalType: "address", name: "_owner", type: "address" },
			{ internalType: "bool", name: "_USDc", type: "bool" },
			{ internalType: "bool", name: "_Dai", type: "bool" },
			{ internalType: "bool", name: "_USDt", type: "bool" },
			{ internalType: "bool", name: "_recurring", type: "bool" },
			{ internalType: "bool", name: "_streaming", type: "bool" },
		],
		name: "createSubscription",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "getSubscriptionList",
		outputs: [
			{ internalType: "contract Subscription[]", name: "", type: "address[]" },
		],
		stateMutability: "view",
		type: "function",
	},
]