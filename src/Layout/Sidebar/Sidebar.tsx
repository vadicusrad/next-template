import React from "react"
import { SidebapProps } from "./Sidebar.props"

const Sidebar = ({ ...props }: SidebapProps): JSX.Element => {
	return <div {...props}>Sidebar</div>
}

export default Sidebar
