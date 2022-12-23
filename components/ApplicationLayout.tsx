import { useState } from 'react';
import Link from "next/link"
import styles from "./ApplicationLayout.module.css"
import {ConnectButton} from '@rainbow-me/rainbowkit';
import isActive from "./Header"

function ApplicationLayout({isActive, children }) {

	const [isSideBarActive, setIsSidebarActive] = useState(false)

	return (
		<div>
			<main className={styles.container_flex}>

				<section className={styles.sidebar_menu}>
					<div className={`${styles.sidebar} ${isSideBarActive ? styles.sidebar_active : ""}`}>
						<Link href="/dashboard" className={styles.logo}>
							<img src="/logo.png" alt="" className={styles.logo_img} />
							<div>
								<h2 className={styles.logo_title}>SuperFlow</h2>
							</div>
						</Link>
						<div className={styles.wallet}>
							<ConnectButton accountStatus="address" chainStatus="name" showBalance={false} />
						</div>
						<div className="nav_items">
								<Link href="/dashboard" className={`${styles.nav_item} ${isActive[0] && styles.nav_active}`}>Dashboard</Link>
								<Link href="/subscription" className={`${styles.nav_item} ${isActive[1] && styles.nav_active}`}>Create Subscription</Link>
						</div>
					</div>
				</section>

				<section className={styles.application}>{children}</section>

				<img
					src="/hamburger_menu.svg"
					alt="An SVG of hamburger menu"
					className={`${styles.hidden} ${styles.hamburger}`}
					onClick={() => setIsSidebarActive(prev => !prev)}
				/>
				
			</main>
		</div>
	)
}

export default ApplicationLayout
