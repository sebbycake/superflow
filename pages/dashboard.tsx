import type { NextPage } from "next"
import Head from "next/head"
import ApplicationLayout from "../components/ApplicationLayout"
import styles from "../styles/Dashboard.module.css"
import supertoken from "../public/dashboardIcon/supertoken.png"

const Dashboard: NextPage = () => {

	return (
		<div>
			<Head>
				<title>Dashboard | SuperFlow</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ApplicationLayout isActive={[1,0]}>
				<main className={styles.container}>
					<div className={styles.prompt_connect}>
						<div className={styles.function_header}>Connect to SuperFlow</div>
						<div>Connect your wallet, view any wallet or take a look around!</div>
					</div>

					<div className={styles.functions}>

						<div className={styles.function}>
							<div className={styles.function_header}>Get Super Tokens</div>
							<span className={styles.function_info}>Wrap any token in your wallet</span>
							<img className={styles.function_icon} src="./dashboardIcon/supertoken.png" alt="supertoken"/>
						</div>

						<div className={styles.function}>
							<div className={styles.function_header}>Send a Stream</div>
							<span className={styles.function_info}>Pick a recipient, token and network</span>
							<img className={styles.function_icon} src="./dashboardIcon/stream.png" alt="stream"/>
						</div>

						<div className={styles.function}>
							<div className={styles.function_header}>Modify and Cancel Streams</div>
							<span className={styles.function_info}>Don't let your balances hit zero!</span>
							<img className={styles.function_icon} src="./dashboardIcon/modify.png" alt="modify"/>
						</div>
					
						<div className={styles.function}>
							<div className={styles.function_header}>Try out SuperFlow</div>
							<span className={styles.function_info}>Start on a Testnet</span>
							<img className={styles.function_icon} src="./dashboardIcon/test.png" alt="test"/>
						</div>

					</div>
				</main>
			</ApplicationLayout>
		</div>
	)
}

export default Dashboard
