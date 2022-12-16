import React, { useState } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import ApplicationLayout from "../components/ApplicationLayout"
import styles from "../styles/Subscription.module.css"
import { usePrepareContractWrite, useContractWrite, useAccount } from "wagmi"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { abi } from "../utils/abi"
import { isMounted } from "../hooks/isMounted"

const Subscription: NextPage = () => {
	const mounted = isMounted()
	const [subscriptionName, setSubscriptionName] = useState("")
	const [monthlyPrice, setMonthlyPrice] = useState("")
	const [isUSDCAccepted, setUSDC] = useState(false)
	const [isDAIAccepted, setDAI] = useState(false)
	const [isUSDTAccepted, setUSDT] = useState(false)
	const [isStreamingPayment, setIsStreamingPayment] = useState(false)
	const [isRecurring, setIsRecurring] = useState(false)
	const { address, isConnected } = useAccount()
	const { config } = usePrepareContractWrite({
		address: "0x7432D6d775AbC6ECb0b99F3F9Bf589d5c6EB91AE",
		abi: abi,
		functionName: "createSubscription",
		args: [
			[monthlyPrice],
			subscriptionName,
			address,
			isUSDCAccepted,
			isDAIAccepted,
			isUSDTAccepted,
			isStreamingPayment,
			isRecurring,
		],
	})
	const { data, isLoading, isSuccess, write } = useContractWrite(config)

	function handleChange(event, setData) {
		setData(event.target.value)
	}

	// const connectWalletButton = () => {
	// 	return (
	// 	<ConnectButton accountStatus="address" chainStatus="name" showBalance={false} />
	// 	)
	//   }
	function connectWalletButton() {
		return (
			<ConnectButton
				accountStatus="address"
				chainStatus="name"
				showBalance={false}
			/>
		)
	}

	function deployContractButton() {
		return (
			<button
				className={styles.submit_btn}
				disabled={!write}
				onClick={() => write?.()}
			>
				Deploy subscription!
			</button>
		)
	}

	// TODO: handle inputs validation (e.g. check empty fields) when time permits

	return (
		<div>
			<Head>
				<title>Create Subscription | SuperFlow</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ApplicationLayout isActive={[0, 1]}>
				<main className={styles.container}>
					<form>
						<label>
							Subscription Name:
							<input
								type="text"
								value={subscriptionName}
								onChange={() => handleChange(event, setSubscriptionName)}
								className={styles.subscription_name}
								required
							/>
						</label>
						<label>
							Monthly Price: <br/>
							<input
								type="number"
								value={monthlyPrice}
								onChange={() => handleChange(event, setMonthlyPrice)}
								className={styles.subscription_name}
								required
							/>
						</label>
						Accepted Stablecoin:
						<label className={styles.payment_method}>
							USDC
							<input
								type="checkbox"
								name="usdc"
								value="true"
								onChange={() => handleChange(event, setUSDC)}
								className={styles.payment_method_checkbox}
							/>
						</label>
						<label className={styles.payment_method}>
							DAI
							<input
								type="checkbox"
								name="dai"
								value="true"
								onChange={() => handleChange(event, setDAI)}
								className={styles.payment_method_checkbox}
							/>
						</label>
						<label className={styles.payment_method}>
							UDST
							<input
								type="checkbox"
								name="usdt"
								value="true"
								onChange={() => handleChange(event, setUSDT)}
								className={styles.payment_method_checkbox}
							/>
						</label>
						<label className={styles.streaming_payment_label}>
							Streaming as a form of payment:
							<input
								type="checkbox"
								name="streaming"
								value="true"
								onChange={() => handleChange(event, setIsStreamingPayment)}
								className={styles.streaming_payment}
							/>
						</label>
						<label>
							Recurring payment:
							<input
								type="checkbox"
								name="recurring"
								value="true"
								onChange={() => handleChange(event, setIsRecurring)}
								className={styles.recurring_payment}
							/>
						</label>
						<div>
							{mounted
								? isConnected
									? deployContractButton()
									: connectWalletButton()
								: null}
							{isLoading && <div>Check Wallet</div>}
							{isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
						</div>
					</form>
				</main>
			</ApplicationLayout>
		</div>
	)
}

export default Subscription
