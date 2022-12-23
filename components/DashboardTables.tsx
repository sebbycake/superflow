import { useState } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import ApplicationLayout from "../components/ApplicationLayout"
import DashboardTable from "./DashboardTable"
import { isMounted } from "../hooks/isMounted"
import {
	useContractRead,
	useContractReads,
	useAccount,
	useWaitForTransaction,
} from "wagmi"
import { subscriptionAbi } from "../utils/subscriptionAbi"
import { abi } from "../utils/FactoryAbi"

function DashboardTables({ children }) {
	const [contractaddresses, setContractAddresses] = useState([])
	const { address, isConnected } = useAccount()
	const contractRead = useContractRead({
		//FACTORY
		address: "0x9e326385f0DFCEEc61ff255a2616484C257a23CC",
		abi: abi,
		functionName: "userDeployedContracts",
		args: [address],
		onSuccess(data) {
			setContractAddresses(data) //sets contract address now to an array containing all addresses of deployed
		},
	})

	const contractsWithAbi: { id: string; value: string }[] = []
	for (let i = 0; i < contractaddresses.length; i++) {
		let obj: { address: string; abi: string } = {
			address: contractaddresses[i],
			abi: subscriptionAbi,
		}
		contractsWithAbi.push(obj)
	}

	const contractReads = []
	for (let i = 0; i < contractaddresses.length; i++) {
		let obj = { ...contractsWithAbi[i], functionName: "getDetails" }
		contractReads[i] = obj
	}

	// dataset contains the main data
	const dataSet: any[] = []
	const [dataList, setdatalist] = useState([])
	const {
		data: datas,
		isError,
		isLoading,
	} = useContractReads({
		contracts: contractReads,
		watch: true,
		onSuccess(datas) {
			// well this is horrible code but it works
			for (let i = 0; i < contractaddresses.length; i++) {
				dataSet[i] = []
				for (let j = 0; j < 4; j++) {
					if (j == 0 || j == 3) {
						dataSet[i][j] = parseInt(datas[i][j]) / 1e18
					} else {
						dataSet[i][j] = parseInt(datas[i][j])
					}
				}
			}
			setdatalist(dataSet)
		},
	})

	const allTables = dataList.map((contractArr, index) => (
		<DashboardTable dataList={contractArr} contractAddress={contractaddresses[index]}/>
	))

	return (
		<div style={{marginTop: "3em"}}>
			{allTables}
		</div>
	)
}

export default DashboardTables
