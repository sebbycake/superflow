import React, { useState } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import ApplicationLayout from "../components/ApplicationLayout"
import styles from "../styles/Subscription.module.css"
import {
	usePrepareContractWrite,
	useContractWrite,
	useAccount,
	useWaitForTransaction,
} from "wagmi"
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
	const [isRecurring, setIsRecurring] = useState(false)
	const [isStreamingPayment, setIsStreamingPayment] = useState(false)
	const { address, isConnected } = useAccount()
	const { config } = usePrepareContractWrite({
		address: "0x7432D6d775AbC6ECb0b99F3F9Bf589d5c6EB91AE",
		abi: abi,
		functionName: "createSubscription",
		args: [
			convertPricesToArray(),
			subscriptionName,
			address,
			isUSDCAccepted,
			isDAIAccepted,
			isUSDTAccepted,
			isRecurring,
			isStreamingPayment,
		],
	})
	const { data, isLoading, isSuccess, error, write } = useContractWrite(config)

	var {
		data: txData,
		isSuccess: txSuccess,
		error: txError,
	} = useWaitForTransaction({
		hash: data?.hash,
	})

	function handleChange(event, setData) {
		setData(event.target.value)
	}

	function convertPricesToArray() {
		return monthlyPrice.split(",").map(Number)
	}

	function handleSubmit(event) {
		event.preventDefault()
		write?.()
	}

	function handleFlip() {
		// var hi = (document.getElementById('mainForm') as HTMLFormElement);
		// hi.reset()y
		// not sure why the above doesnt work

		var element = document.getElementById("card");
		if (element != null) {
			element.classList.toggle(styles.is_flipped);
		}
	}
	

	return (
		<div>
			<Head>
				<title>Create Subscription | SuperFlow</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ApplicationLayout isActive={[0, 1]}>
				<main className={`${styles.scene}`}>
					<div id = "card" className={`${styles.card} ${txSuccess && styles.is_flipped}`}>
						<form
							id = "mainForm"
							className={`${styles.card__face} ${styles.card__face__front}`}
							onSubmit={handleSubmit}
						>
							<div className={styles.headerTag}>
								<p className={styles.headerTagTxt}>Create Subscription</p>
							</div>
							<label>
								Subscription name:
								<input
									type="text"
									placeholder="e.g. SuperFlow subscription"
									value={subscriptionName}
									onChange={() => handleChange(event, setSubscriptionName)}
									className={styles.text_input}
									required
								/>
							</label>
							<label>
								Monthly price(s): <br />
								<small>Separate by "," for multiple prices</small>
								<input
									type="text"
									placeholder="e.g. 7, 10, 15"
									value={monthlyPrice}
									onChange={() => handleChange(event, setMonthlyPrice)}
									className={styles.text_input}
									required
								/>
							</label>
							Accepted stablecoins:
							<label className={styles.stablecoin_box}>
								<p className={styles.subscription_text}>USDC:</p>
								<label className = {styles.switch}>
									<input									
										type="checkbox"
										name="recurring"
										value="true"
										onChange={() => handleChange(event, setUSDC)}
									/>
									<span className={styles.slider}></span>
								</label>
								<p className={styles.subscription_text}>DAI:</p>
								<label className = {styles.switch}>
									<input									
										type="checkbox"
										name="recurring"
										value="true"
										onChange={() => handleChange(event, setDAI)}
									/>
									<span className={styles.slider}></span>
								</label>
								<p className={styles.subscription_text}>USDT:</p>
								<label className = {styles.switch}>
									<input									
										type="checkbox"
										name="recurring"
										value="true"
										onChange={() => handleChange(event, setUSDT)}
									/>
									<span className={styles.slider}></span>
								</label>
							</label>

							<label className={styles.subscription_box}>
								<p className={styles.subscription_text}>Recurring payment:</p>
								<label className = {styles.switch}>
									<input									
										type="checkbox"
										name="recurring"
										value="true"
										onChange={() => handleChange(event, setIsRecurring)}
									/>
									<span className={styles.slider}></span>
								</label>

								<p className={styles.subscription_text}>Streaming payment:</p>
								<label className = {styles.switch}>
									<input									
										type="checkbox"
										name="recurring"
										value="true"
										onChange={() => handleChange(event, setIsStreamingPayment)}
									/>
									<span className={styles.slider}></span>
								</label>
							</label>
							<div>
								{mounted ? (
									isConnected ? (
										<button
											type="submit"
											className={styles.submit_btn}
											disabled={isLoading || isSuccess}
											data-mint-loading={isLoading}
											data-mint-started={isSuccess}
										>
											{isLoading && "Waiting for approval"}
											{isSuccess && "Deploying please wait..."}
											{!isLoading && !isSuccess && "Deploy subscription!"}
										</button>
									) : (
										<ConnectButton />
									)
								) : null}
							</div>
						</form>
						<div className={`${styles.card__face} ${styles.card__face__back}`}>
							<div className={styles.success_msg_box}>
								<h2>SUCCESS</h2>
							</div>
							<div className={styles.success_info_box}>
								<p className={styles.success_msg}>
									Congratulations, your subscription contract is successfully
									deployed.
								</p>
								<a
									href={`https://goerli.etherscan.io/tx/${data?.hash}`}
									target="_blank"
									className={styles.link}
								>
									View transaction details
								</a>
								<form>
									<button  className={styles.button} onClick={handleFlip}>
										Deploy another contract									
									</button>
								</form>
								<Link className={styles.button} href="/dashboard">
									View dashboard
								</Link>
							</div>
						</div>
					</div>
				</main>
			</ApplicationLayout>
		</div>
	)
}

export default Subscription
