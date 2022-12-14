import type { NextPage } from "next"
import Head from "next/head"
import React, { useState } from "react"
import Link from "next/link"
import ApplicationLayout from "../components/ApplicationLayout"
import DashboardTables from "../components/DashboardTables"
import styles from "../styles/Dashboard.module.css"
import { isMounted } from "../hooks/isMounted"
import {
	useContractRead,
	useContractReads,
	useAccount,
	useWaitForTransaction,
} from "wagmi"

const Dashboard: NextPage = () => {
	const mounted = isMounted()

	return (
		<div>
			<Head>
				<title>Dashboard | SuperFlow</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ApplicationLayout isActive={[1,0,0]}>
				<main className={styles.container}>
					<div className={styles.contents}>
						<div className={styles.headerTag}>
							<h2 className={styles.headerTagTxt}>Deployed Contracts:</h2>
						</div>
						<div>
							{mounted ? (
								<DashboardTables/>
								): null
							}						
						</div>
					</div>

				</main>
			</ApplicationLayout>
		</div>
	)
}

export default Dashboard