import React from "react"
import { FooterProps } from "./Footer.props"
import styles from "../Layout.module.css"
import { format } from "date-fns"
const Footer = ({ ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={styles.footer} {...props}>
			<div>
				OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены
			</div>
			<a href='#' target='_blank'>
				Пользовательское соглашение
			</a>
			<a href='#' target='_blank'>
				Политика конфиденциальности
			</a>
		</footer>
	)
}

export default Footer
