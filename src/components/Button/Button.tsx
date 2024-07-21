import React from "react"
import styles from "./Button.module.css"
import { ButtonProps } from "./Button.props"
import cn from "classnames"

export const Button = ({ appearance, children }: ButtonProps): JSX.Element => {
	const buttonClass = cn(styles.button, {
		[styles.primary]: appearance === "primary",
		[styles.ghost]: appearance === "ghost",
	})
	return <button className={buttonClass}>{children}</button>
}
