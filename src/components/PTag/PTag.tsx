import React from "react"
import { PHTagProps } from "./PTag.props"
import cn from "classnames"
import styles from "./PTag.module.css"
const PTag = ({
	children,
	className = "",
	size,
	...props
}: PHTagProps): JSX.Element => {
	const classes = cn(className, {
		[styles.small]: size === "small",
		[styles.medium]: size === "medium",
		[styles.large]: size === "large",
	})
	return (
		<p className={classes} {...props}>
			{children}
		</p>
	)
}

export default PTag
