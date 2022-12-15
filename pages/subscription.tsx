import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import ApplicationLayout from "../components/ApplicationLayout"

const Subscription: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Create Subscription | SuperFlow</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ApplicationLayout isActive={[0,1]}>
				<main>
					Subscription content goes here
				</main>
			</ApplicationLayout>
		</div>
	)
}

export default Subscription