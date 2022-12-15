import React from "react";
import Header from "./Header";
import { Ubuntu } from '@next/font/google'

const ubuntu = Ubuntu({
	weight: ['400', '500', '700'],
  	subsets: ['latin'],
})

function Layout({ children }) {
	return (
		<div className={ubuntu.className}>
			<Header />
			{ children }
		</div>
	);
}

export default Layout;

