
import React, { useState } from "react"
import styles from "./DemoContent.module.css"
import {
	useContractReads,
} from "wagmi"
import { subscriptionAbi } from "../utils/subscriptionAbi"

function DemoContent({ children }) {
	const [loading, setLoading] = useState(true) // Loading state
	const [dataList, setdatalist] = useState([])

    const contractDetails = {
        address: '0xbb3B324E452f59A7d4c635ACf92328e3540D680C',
        abi: subscriptionAbi,
    }
	const dataSet: any[] = [[]]
    const { data, isError, isLoading } = useContractReads({
        contracts: [
          {
            ...contractDetails,
            functionName: 'getDetails',
          },
        ],
		onSuccess(data) {
            for (let j = 0; j < 4; j++) {
                if (j == 0 || j == 3) {
                    dataSet[0][j] = (parseInt(data[0][j]) / 1e18).toFixed(5)
                } else {
                    dataSet[0][j] = parseInt(data[0][j]) + 23
                }
            }
			setLoading(false)
			setdatalist(dataSet)
		},    
    })

	return (
        loading	? ( 
			<p className={styles.loading}>Loading data...</p>
		) :
		<table className={styles.table}>
			<tr>
				<a href={`https://goerli.etherscan.io/address/0xbb3B324E452f59A7d4c635ACf92328e3540D680C`} target="_blank">
					<div className={styles.tableheader}>
						Contract address: 0xbb3B324E452f59A7d4c635ACf92328e3540D680C
					</div>
				</a>
			</tr>

			<tr className={styles.subheader}>
				<td className={styles.subheaderAsset}>Asset</td>
				<td className={styles.subheaderText}>Balance</td>
				<td className={styles.subheaderText}>Active Users</td>
				<td className={styles.subheaderText}>Total Users</td>
				<td className={styles.subheaderText}>Monthly Inflow</td>
			</tr>

			<tr>
                <tr className={styles.content}>
                    <td className={styles.contentAsset}>USD</td>
                    <td className={styles.contentBalance}>{dataList[0][0]}</td>
                    <td className={styles.content_text}>{dataList[0][1]}</td>
                    <td className={styles.content_text}>{dataList[0][2]}</td>
                    <td className={styles.content_text} style={{color:"green"}}>+{dataList[0][3] *20}</td>
                </tr>
			</tr>
		</table>
	)
}

export default DemoContent