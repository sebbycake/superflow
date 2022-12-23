import {useState, useEffect} from "react"
import Link from "next/link"
import styles from "./DashboardTable.module.css"

function DashboardTable({dataList, contractAddress}) {

	const [loading, setLoading] = useState(true) // Loading state

	// let setdatalist compute and render
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [])

	return (
		<table className={styles.table}>
			<tr>
				<div className={styles.tableheader}>
					Contract address: {contractAddress}
				</div>
			</tr>

			<tr className={styles.subheader}>
				<td className={styles.subheaderAsset}>Asset</td>
				<td className={styles.subheaderText}>Balance</td>
				<td className={styles.subheaderText}>Active Users</td>
				<td className={styles.subheaderText}>Total Users</td>
				<td className={styles.subheaderText}>Monthly Inflow</td>
			</tr>

			<tr>
				{loading ? (
					<p className={styles.loading}>loading....</p>
				) : (
					<tr className={styles.content}>
						<td className={styles.contentAsset}>USD</td>
						<td className={styles.contentBalance}>{dataList[0] && dataList[0].toFixed(5)}</td>
						<td className={styles.content_text}>{dataList[1] && dataList[1]}</td>
						<td className={styles.content_text}>{dataList[2] && dataList[2]}</td>
						<td className={styles.content_text}>{dataList[3] && dataList[3].toFixed(5)}</td>
					</tr>
				)}
			</tr>
		</table>
	)
}

export default DashboardTable
