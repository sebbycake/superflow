import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import ApplicationLayout from "../components/ApplicationLayout"

const Dashboard: NextPage = () => {

	return (
		<div>
			<Head>
				<title>Dashboard | SuperFlow</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ApplicationLayout isActive={[1,0]}>
				<main>
					Dashboard content goes here
				</main>
			</ApplicationLayout>
		</div>
	)
}

export default Dashboard