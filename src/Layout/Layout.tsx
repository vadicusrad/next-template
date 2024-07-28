import React from "react"
import { LayoutProps } from "./Layout.props"
import styles from "./Layout.module.css"
import Sidebar from "./Sidebar/Sidebar"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div>{children}</div>
			</div>
			<Footer />
		</>
	)
}

export default Layout
