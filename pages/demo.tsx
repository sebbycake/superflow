import type { NextPage } from "next"
import Head from "next/head"
import React, { useState } from "react"
import Link from "next/link"
import ApplicationLayout from "../components/ApplicationLayout"
import DemoContent from "../components/DemoContent"
import DashboardTables from "../components/DashboardTables"

import styles from "../styles/Demo.module.css"
import { isMounted } from "../hooks/isMounted"

const Demo: NextPage = () => {
	const mounted = isMounted()

	return (
		<div>
			<Head>
				<title>Dashboard | SuperFlow</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ApplicationLayout isActive={[0,0,1]}>
				<main className={styles.container}>
					<div className={styles.contents}>
						<div className={styles.headerTag}>
							<h2 className={styles.headerTagTxt}>Demo:</h2>
						</div>
						<div>
							{mounted ? (
								<DemoContent/>
								): null
							}						
						</div>
					</div>

				</main>
			</ApplicationLayout>
		</div>
	)
}

export default Demo