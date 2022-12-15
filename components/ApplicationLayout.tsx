import React, { useState } from 'react';
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import styles from "./ApplicationLayout.module.css"
import {ConnectButton, RainbowKitProvider, darkTheme} from '@rainbow-me/rainbowkit';

function ApplicationLayout({isActive, children }) {

	return (
		<div>
			<main className={styles.container_flex}>
				<section className={styles.sidebar_menu}>
					<div className={styles.sidebar}>
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
							<div className={`${styles.nav_item} ${isActive[0] && styles.nav_active}`}>
								<Link href="/dashboard">Dashboard</Link>
							</div>
							<div className={`${styles.nav_item} ${isActive[1] && styles.nav_active}`}>
								<Link href="/subscription">Create Subscription</Link>
							</div>
						</div>
					</div>
				</section>
				<section className={styles.application}>{children}</section>
			</main>
		</div>
	)
}

export default ApplicationLayout
