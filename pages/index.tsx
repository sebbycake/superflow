import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/MainContent.module.css"
import Layout from "../components/Layout"

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>SuperFlow</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<main className={`${styles.container} ${styles.container_flex}`}>
					<div className={styles.information}>
						<h1 className={styles.main_title}>
							Crypto payments <br /> every second
						</h1>
						<p className={styles.main_description}>
							SuperFlow provides an effective and powerful way to create and
							manage your subscriptions
						</p>
						<button className={styles.button}>Launch App</button>
						<div className={styles.benefits}>
							<div className={styles.benefit}>
								<img src="/asset1.png" alt="" className={styles.benefit_img} />
								<p className={styles.benefit_description}>
									Speed & <br /> Security
								</p>
							</div>
							<div className={styles.benefit}>
								<img src="/asset2.png" alt="" className={styles.benefit_img} />
								<p className={styles.benefit_description}>
									Flexibility & <br /> Scalability
								</p>
							</div>
							<div className={styles.benefit}>
								<img src="/asset3.png" alt="" className={styles.benefit_img} />
								<p className={styles.benefit_description}>
									Better <br /> Ownership
								</p>
							</div>
						</div>
					</div>

					<div>
						<img
							src="/landing_graphic.png"
							alt=""
							className={styles.main_image}
						/>
					</div>
				</main>
			</Layout>
		</div>
	)
}

export default Home
