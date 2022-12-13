import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>SuperFlow</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex min-h-screen flex-col items-center justify-center py-2">
				<h1>SuperFlow Landing Page</h1>
			</main>
		</div>
	);
};

export default Home;
