import { useState } from "react"
import Link from "next/link"
import DashboardTable from "./DashboardTable"
import {
	useContractRead,
	useContractReads,
	useAccount,
} from "wagmi"
import { subscriptionAbi } from "../utils/subscriptionAbi"
import { abi } from "../utils/FactoryAbi"
import styles from "./DashboardTable.module.css"
import LoadingSpinner from './LoadingSpinner'

function DashboardTables({ children }) {
	const [contractaddresses, setContractAddresses] = useState([])
	const [loading, setLoading] = useState(true) // Loading state
	const { address, isConnected } = useAccount()
	const contractRead = useContractRead({
		//FACTORY
		address: "0x9e326385f0DFCEEc61ff255a2616484C257a23CC",
		abi: abi,
		functionName: "userDeployedContracts",
		args: [address],
		onSuccess(data) {
			setContractAddresses(data) //sets contract address now to an array containing all addresses of deployed
			setLoading(false)
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
			// contractaddress.length is always 0 in the initial state. this for loop doesnt run hence loading remains true
			// only after data is fetched then for loop runs and setloading is complete to false
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
		loading	? ( 
			// <p className={styles.loading}>Loading data...</p>
			<LoadingSpinner />
		) : (
			contractaddresses.length == 0 
		) ? (
			<div className={styles.noContracts}>
				<div className={styles.noContractsheader}>
					<img src="/nocontract.png" alt=""  className={styles.noContractsImage}/>
					<p className={styles.noContractsHeaderTxt}>You Have No Contracts</p>
				</div>
				<Link href="/subscription" className={styles.noContractsbutton}>Deploy One Now!</Link>

			</div>
		) : (
			<div style={{marginTop: "2.6em"}}>
				{allTables}
			</div>
		)
	)
}

export default DashboardTables
