import Link from "next/link"
import styles from "./Header.module.css"
import {ConnectButton} from "@rainbow-me/rainbowkit"

function Header() {
	return (
		<header className={styles.header}>
			<nav className={`${styles.container} ${styles.container_flex}`}>
				<div className={styles.logo}>
					<img src="/logo.png" alt="" className={styles.logo_img} />
					<div>
						<h2 className={styles.logo_title}>SuperFlow</h2>
						<p className={styles.logo_description}>
							Easy. Elaborate. Efficient
						</p>
					</div>
				</div>
				<div className={styles.nav_links}>
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
