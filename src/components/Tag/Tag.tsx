import React from "react"
import { TagProps } from "./Tag.props"
import styles from "./Tag.module.css"
import cn from "classnames"
export const Tag = ({
	size = "s",
	color = "ghost",
	children,
	className = "",
	href,
	...props
}: TagProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, className, styles[size], styles[color])}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	)
}
