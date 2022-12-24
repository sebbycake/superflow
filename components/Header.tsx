import { useState } from "react"
import Link from "next/link"
import styles from "./Header.module.css"
import { ConnectButton } from "@rainbow-me/rainbowkit"

function Header() {
		
	const [isActive, setIsActive] = useState(false)

	return (
		<header className={styles.header}>
			<nav className={`${styles.container} ${styles.container_flex}`}>
				<Link href="/"className={styles.logo} >
					<img src="/logo.png" alt="" className={styles.logo_img} />
					<div className={styles.logotxt}>
						<h2 className={styles.logo_title}>SuperFlow</h2>
						<p className={styles.logo_description}>
							Easy. Elaborate. Efficient
						</p>
					</div>
				</Link>

				{/* Hamburger menu for mobile view  */}
				<img
					src="/hamburger_menu.svg"
					alt="An SVG of hamburger menu"
					className={`${styles.hidden} ${styles.hamburger}`}
					onClick={() => setIsActive(prev => !prev)}
				/>

				<div className={`${styles.nav_links} ${isActive ? styles.nav_active : ""}`}>
					<Link href="/" className={styles.nav_link}>
						Home
					</Link>
					<Link href="/" className={styles.nav_link}>
						About
					</Link>
					<Link href="/" className={styles.nav_link}>
						Blog
					</Link>
					<Link href="/" className={styles.nav_link}>
						Developers
					</Link>
					<Link href="/" className={styles.nav_link}>
						FAQ
					</Link>
					<ConnectButton
						accountStatus="address"
						chainStatus="none"
						showBalance={false}
					/>
				</div>
			
			</nav>
		</header>
	)
}

export default Header
