import React, { useContext } from "react"
import styles from "./Menu.module.css"
import { AppContext } from "@/context/app.context"
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface"
import courcesSvg from "./icons/cources.svg"
import booksSvg from "./icons/books.svg"
import servicesSvg from "./icons/services.svg"
import productsSvg from "./icons/products.svg"
import { TopLevelCategory } from "@/interfaces/page.interface"
import Image from "next/image"
import cn from "classnames"

const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: "cources",
		name: "Курсы",
		id: TopLevelCategory.Courses,
		icon: courcesSvg,
	},
	{
		route: "books",
		name: "Книги",
		id: TopLevelCategory.Books,
		icon: booksSvg,
	},
	{
		route: "services",
		name: "Сервисы",
		id: TopLevelCategory.Services,
		icon: servicesSvg,
	},
	{
		route: "products",
		name: "Товары",
		id: TopLevelCategory.Products,
		icon: productsSvg,
	},
]

const Menu = (): JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext(AppContext)

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map((menu) => (
					<div key={menu.route}>
						<a href={`/${menu.route}`}>
							<div
								className={cn(styles.firstLevel, {
									[styles.firstLevelActive]:
										menu.id === firstCategory,
								})}
							>
								<Image
									src={menu.icon}
									width={24}
									height={24}
									alt='icon'
								/>
								{/* {menu.icon} */}
								{menu.route}
							</div>
						</a>
						{menu.id === firstCategory && buildSecondLevel(menu)}
					</div>
				))}
			</>
		)
	}

	const buildSecondLevel = (m: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map((menuItem) => {
					return (
						<div key={menuItem._id.secondCategory}>
							<div
								className={styles.secondLevel}
								// onClick={() =>
								// 	setMenu(menuItem._id.secondCategory)
								// }
							>
								{menuItem._id.secondCategory}
							</div>
							<div
								className={cn(styles.secondLevelBlock, {
									[styles.secondLevelBlockOpened]:
										menuItem.isOpened,
								})}
							>
								{buildThirdLevel(menuItem.pages, m.route)}
							</div>
						</div>
					)
				})}
			</div>
		)
	}

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			<div className={styles.thirdLevel}>
				{pages.map((page) => (
					<a
						key={page._id}
						href={`/${route}/${page.alias}`}
						className={cn(styles.thirdLevel, {
							[styles.thirdLevelActive]: false,
						})}
					>
						{page.category}
					</a>
				))}
			</div>
		)
	}

	return <div className={styles.menu}>{buildFirstLevel()}</div>
}

export default Menu
