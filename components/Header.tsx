import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

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
					<a href="#" className={styles.nav_link}>Home</a>
					<a href="#" className={styles.nav_link}>About</a>
					<a href="#" className={styles.nav_link}>Blog</a>
					<a href="#" className={styles.nav_link}>Developers</a>
					<a href="#" className={styles.nav_link}>FAQ</a>
                    <button className={styles.button}>Connect</button>
				</div>
			</nav>
		</header>
	);
}

export default Header;