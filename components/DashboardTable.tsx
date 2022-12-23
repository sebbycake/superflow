import React, { useEffect, useState } from 'react';
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import styles from "./DashboardTable.module.css"
import ApplicationLayout from "../components/ApplicationLayout"
import { isMounted } from "../hooks/isMounted"
import {
	useContractRead,
	useContractReads,
	useAccount,
	useWaitForTransaction,
} from "wagmi"
import { subscriptionAbi } from "../utils/subscriptionAbi"
import { abi } from "../utils/FactoryAbi"

function DashboardTable({children}) {
	const [contractaddresses, setContractAddresses] = useState([])
	const { address, isConnected } = useAccount()
	const contractRead = useContractRead({ //FACTORY
		address: '0x9e326385f0DFCEEc61ff255a2616484C257a23CC',
		abi: abi,
		functionName: 'userDeployedContracts',
		args: [address],
		onSuccess(data) {
			setContractAddresses(data) //sets contract address now to an array containing all addresses of deployed
		},
	})

	const contractsWithAbi: { id: string, value: string }[] = [];
	for (let i = 0; i < contractaddresses.length; i++) {
	  let obj: { address: string, abi: string } = { address: contractaddresses[i], abi: subscriptionAbi};
	  contractsWithAbi.push(obj);
	}

	const contractReads = [];
	for (let i = 0; i < contractaddresses.length; i++) {
		let obj= { ...contractsWithAbi[i], functionName: 'getDetails'};
		contractReads[i] = obj;
	}

	// dataset contains the main data
	const dataSet: any[] = [];
    const [dataList, setdatalist] = useState()
	const { data : datas, isError, isLoading } = useContractReads({
		contracts: contractReads,
		watch: true,
		onSuccess(datas) {
			// well this is horrible code but it works
			for (let i =0; i<contractaddresses.length; i++) {
				dataSet[i] = []
				for (let j=0; j < 4; j++) {
                    if (j == 0 || j == 3) {
                        dataSet[i][j] = parseInt(datas[i][j]) / 1e18
                    } else {
                        dataSet[i][j] = parseInt(datas[i][j])
                    }
				}
			}
            setdatalist(dataSet)	
        },
	})

    const [loading, setLoading] = useState(true); // Loading state
    // let setdatalist compute and render
    useEffect(() => { 
        setTimeout(() => { 
    setLoading(false);
    }, 3000);
    }, []);	
    
	return (
		<div>

		<table className={styles.table}>
            <tr>
                <div className={styles.tableheader}>Contract address: {contractaddresses[0]}</div>    
            </tr>

            <tr className={styles.subheader}>
                <td className={styles.subheaderAsset}>Asset</td>
                <td className={styles.subheaderText}>Balance</td>
                <td className={styles.subheaderText}>Active Users</td>
                <td className={styles.subheaderText}>Total Users</td>
                <td className={styles.subheaderText}>Monthly Inflow</td>
            </tr>

            <tr>
            {loading ? (
            	<p>loading....</p> 
				) : (
                <tr className={styles.content}>
                    <td className={styles.contentAsset}>USD</td>
                    <td className={styles.contentBalance}>{(dataList[0][0]).toFixed(5)}</td>
                    <td className={styles.content_text}>{dataList[0][1]}</td>
                    <td className={styles.content_text}>{dataList[0][2]}</td>
                    <td className={styles.content_text}>{(dataList[0][3]).toFixed(5)}</td>
                </tr>
				)}
            </tr>
        </table>


		<table className={styles.table}>
            <tr>
                <div className={styles.tableheader}>Contract address: {contractaddresses[1]}</div>    
            </tr>

            <tr className={styles.subheader}>
                <td className={styles.subheaderAsset}>Asset</td>
                <td className={styles.subheaderText}>Balance</td>
                <td className={styles.subheaderText}>Active Users</td>
                <td className={styles.subheaderText}>Total Users</td>
                <td className={styles.subheaderText}>Monthly Inflow</td>
            </tr>

            <tr>
            {loading ? (
            	<p>loading....</p> 
				) : (
                <tr className={styles.content}>
                    <td className={styles.contentAsset}>USD</td>
                    <td className={styles.contentBalance}>{(dataList[1][0]).toFixed(5)}</td>
                    <td className={styles.content_text}>{dataList[1][1]}</td>
                    <td className={styles.content_text}>{dataList[1][2]}</td>
                    <td className={styles.content_text}>{(dataList[1][3]).toFixed(5)}</td>
                </tr>
				)}
            </tr>
        </table>

		</div>

	)
}

export default DashboardTable
