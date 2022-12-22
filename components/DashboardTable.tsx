import React, { useState } from 'react';
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import styles from "./DashboardTable.module.css"
import {ConnectButton, RainbowKitProvider, darkTheme} from '@rainbow-me/rainbowkit';

function DashboardTable({children}) {

	return (
		<table className={styles.table}>
            <tr>
                <td className={styles.tableheader}>Address: 0xxxxx</td>    
            </tr>

            <tr className={styles.subheader}>
                <td className={styles.asset}>Asset</td>
                <td className={styles.balance}>Balance</td>
                <td className={styles.netflow}>Net Flow</td>
                <td className={styles.inflowoutflow}>Inflow/OutFlow</td>
                <td className={styles.chevrons}> <img src="/chevrons.png" alt="" className={styles.chevrons_png} /></td>
            </tr>

            <tr>
                {/* <section className={styles.application}>{children}</section> */}
                <td><img src="/eth.jpg" alt="" className={styles.logo_img} /></td>

            </tr>
        </table>
	)
}

export default DashboardTable
