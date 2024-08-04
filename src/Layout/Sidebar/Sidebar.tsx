import React from "react"
import { SidebapProps } from "./Sidebar.props"
import Menu from "../Menu/Menu"

const Sidebar = ({ ...props }: SidebapProps): JSX.Element => {
	return (
		<div {...props}>
			Sidebar
			<Menu />
		</div>
	)
}

export default Sidebar
