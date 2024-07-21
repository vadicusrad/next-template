import React from "react"
import { HTagProps } from "./HTag.props"
import styles from "./HTag.module.css"
import cn from "classnames"
export const HTag = ({
	tag,
	children,
	className = "",
}: HTagProps): JSX.Element => {
	switch (tag) {
		case "h1":
			return <h1 className={styles.h1}>{children}</h1>
		case "h2":
			return <h2 className={className}>{children}</h2>
		case "h3":
			return <h3 className={className}>{children}</h3>
		default:
			return <>{children}</>
	}
}
