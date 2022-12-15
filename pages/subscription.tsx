import React, { useState } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import ApplicationLayout from "../components/ApplicationLayout"
import styles from "../styles/Subscription.module.css"

const Subscription: NextPage = () => {
	const [subscriptionName, setSubscriptionName] = useState("")
	const [monthlyPrice, setMonthlyPrice] = useState("")
	const [crypto, setCrypto] = useState("USDC")
	const [IsStreamingPayment, setIsStreamingPayment] = useState(false)
	const [isRecurring, setIsRecurring] = useState(false)

	function handleName(event) {
		setSubscriptionName(event.target.value)
	}

	function handlePrice(event) {
		setMonthlyPrice(event.target.value)
	}

	function handleCrypto(event) {
		setCrypto(event.target.value)
	}

	function handleStreaming(event) {
		setIsStreamingPayment(event.target.value)
	}

	function handleRecurring(event) {
		setIsRecurring(event.target.value)
	}

	function handleSubmit(event) {
		event.preventDefault()
		alert("Subscription name: " + subscriptionName)
		alert("Monthly price: " + monthlyPrice)
		alert("Stablecoin selected: " + crypto)
		alert("Is streaming: " + IsStreamingPayment)
		alert("Is recurring: " + isRecurring)
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
					<form onSubmit={handleSubmit}>
						<label>
							Subscription Name:
							<input
								type="text"
								value={subscriptionName}
								onChange={handleName}
								className={styles.subscription_name}
								required
							/>
						</label>

						<label>
							Monthly Price:
							<input
								type="number"
								value={monthlyPrice}
								onChange={handlePrice}
								className={styles.subscription_name}
								required
							/>
						</label>

						<label>
							Accepted Stablecoin:
							<select name="crypto" className={styles.crypto} onChange={handleCrypto} required>
								<option value="usdc">USDC</option>
								<option value="dai">DAI</option>
								<option value="usdt">USDT</option>
							</select>
						</label>

						<label>
							Streaming as a form of payment:
							<input
								type="checkbox"
								name="streaming"
								value="true"
								onChange={handleStreaming}
								className={styles.streaming_payment}
							/>
						</label>

						<label>
							Recurring payment:
							<input
								type="checkbox"
								name="recurring"
								value="true"
								onChange={handleRecurring}
								className={styles.recurring_payment}
							/>
						</label>

						<input
							type="submit"
							value="Deploy Contract"
							className={styles.submit_btn}
						/>
					</form>
				</main>
			</ApplicationLayout>
		</div>
	)
}

export default Subscription
