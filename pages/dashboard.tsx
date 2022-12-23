import type { NextPage } from "next"
import Head from "next/head"
import React, { useState } from "react"
import Link from "next/link"
import ApplicationLayout from "../components/ApplicationLayout"
import DashboardTable from "../components/DashboardTable"
import styles from "../styles/Dashboard.module.css"
import { isMounted } from "../hooks/isMounted"
import {
	useContractRead,
	useContractReads,
	useAccount,
	useWaitForTransaction,
} from "wagmi"
import { DaiAbi } from "../utils/DaiAbi"
import { UsdcAbi } from "../utils/UsdcAbi"
import { UsdtAbi } from "../utils/UsdtAbi"
import { StreamingAbi } from "../utils/StreamingAbi"
import { subscriptionAbi } from "../utils/subscriptionAbi"
import { abi } from "../utils/FactoryAbi"


const Dashboard: NextPage = () => {
	const mounted = isMounted()
	// const [subscriptionName, setSubscriptionName] = useState("")
	// const [isUSDCAccepted, setUSDC] = useState(false)
	// const { address, isConnected } = useAccount()
	// const [contractaddresses, setContractAddresses] = useState("")
	// const contractRead = useContractRead({ //FACTORY
	// 	address: '0x9e326385f0DFCEEc61ff255a2616484C257a23CC',
	// 	abi: abi,
	// 	functionName: 'userDeployedContracts',
	// 	args: [address],
	// 	onSuccess(data) {
	// 		setContractAddresses(data) //sets contract address now to an array containing all addresses of deployed
	// 	},
	// })

	// const contracts: { id: string, value: string }[] = [];
	// for (let i = 0; i < contractaddresses.length; i++) {
	//   let obj: { address: string, abi: string } = { address: contractaddresses[i], abi: subscriptionAbi};
	//   contracts.push(obj);
	// }

	// const contracts3 = []
	// for (let i = 0; i < contractaddresses.length; i++) {
	// 	let obj= { ...contracts[i], functionName: 'getDetails'};
	// 	contracts3[i] = obj;
	// }

	// //now i need to put all the data into an array database to be used for FE later.
	// const dataSet = []
	// const { data, isError, isLoading } = useContractReads({
	// 	contracts: contracts3,
	// 	watch: true,
	// 	onSuccess(data) {
	// 		// well this is horrible code but it works
	// 		for (let i =0; i<contractaddresses.length; i++) {
	// 			dataSet[i] = []
	// 			for (let j=0; j < 7; j++) {
	// 				dataSet[i][j] = parseInt(data[i][j])
	// 			}
	// 		}
	// 		console.log(dataSet)
	// 	},
	// })

	// const DaiContract = {
	// 	address: '0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844',
	// 	abi: DaiAbi,
	//   }
	//   const UsdcContract = {
	// 	address: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
	// 	abi: UsdcAbi,
	// }
	// const UsdtContract = {
	// 	address: '0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844',
	// 	abi: UsdtAbi,
	// }
	// const DaixContract = {
	// 	address: '0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00',
	// 	abi: StreamingAbi,
	// }
	// const USDcxContract = {
	// 	address: '0x8aE68021f6170E5a766bE613cEA0d75236ECCa9a',
	// 	abi: StreamingAbi,
	// }
	// const UsdtxContract = {
	// 	address: '0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00',
	// 	abi: StreamingAbi,
	// }
	return (
		<div>
			<Head>
				<title>Dashboard | SuperFlow</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ApplicationLayout isActive={[1,0]}>
				<main className={styles.container}>
					<div className={styles.contents}>
						<div className={styles.headerTag}>
							<h2 className={styles.headerTagTxt}>Smart Contracts:</h2>
						</div>
						<div>
							{mounted ? (
								<DashboardTable>
								</DashboardTable>
								): (null)
							}						
						</div>
					</div>

				</main>
			</ApplicationLayout>
		</div>
	)
}

export default Dashboard