import Head from "next/head"
import { useState } from "react"
import Rating from "@/components/Rating/Rating"
import { withLayout } from "@/Layout/Layout"
import { GetStaticProps } from "next"
import axios from "axios"
import { MenuItem } from "@/interfaces/menu.interface"
function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState(0)
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<ul>
				{menu.map((m) => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ul>
		</>
	)
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
		{
			firstCategory,
		}
	)
	return {
		props: {
			menu,
			firstCategory,
		},
	}
}

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[]
	firstCategory: number
}
