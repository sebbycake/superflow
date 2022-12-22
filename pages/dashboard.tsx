import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import ApplicationLayout from "../components/ApplicationLayout"
import DashboardTable from "../components/DashboardTable"
import styles from "../styles/Dashboard.module.css"

const Dashboard: NextPage = () => {
	// pages/index.js
    const columns = [
		{
		  Header: 'Name',
		  accessor: 'name'
		},
		{
		  Header: 'Review',
		  accessor: 'review'
		},
		{
		  Header: 'Rating',
		  accessor: 'rating'
		}
	  ]
	  const data = [
		{
		  name: 'Stan Lee',
		  review: 'This movie was awesome',
		  rating: '9.5'
		}
	  ]
	
	// function tables({content}) {
	// 	return (
	// 		<
	// 	)
	// }



	return (
		<div>
			<Head>
				<title>Dashboard | SuperFlow</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ApplicationLayout isActive={[1,0]}>
				<main className={styles.container}>
					<div className={styles.header}>
						<h1>Smart Contracts:</h1>
					</div>
					<div>
						<DashboardTable>
							<img src="/eth.jpg" alt="" className={styles.logo_img} />
						</DashboardTable>
					</div>

					
				</main>
			</ApplicationLayout>
		</div>
	)
}

export default Dashboard