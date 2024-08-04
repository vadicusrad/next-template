import { MenuItem } from "@/interfaces/menu.interface"
import { TopPageModel } from "@/interfaces/page.interface"
import { ProductModel } from "@/interfaces/product.interface"
import { withLayout } from "@/Layout/Layout"
import axios from "axios"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import { ParsedUrlQuery } from "querystring"
import React from "react"

const firstCategory = 0
const Cource = ({ menu, page, products }: CourceProps): JSX.Element => {
	return <>{products && products.length}</>
}

export default withLayout(Cource)

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
		{
			firstCategory,
		}
	)
	return {
		paths: menu.flatMap((m) => m.pages.map((p) => `/cources/${p.alias}`)),
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps<CourceProps> = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) return { notFound: true }

	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
		{
			firstCategory,
		}
	)

	const { data: page } = await axios.get<TopPageModel>(
		process.env.NEXT_PUBLIC_DOMAIN +
			"/api/top-page/byAlias/" +
			params?.alias
	)
	const { data: products } = await axios.post<ProductModel[]>(
		process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
		{
			category: page.category,
			limit: 10,
		}
	)
	return {
		props: {
			menu,
			firstCategory,
			page,
			products,
		},
	}
}

interface CourceProps extends Record<string, unknown> {
	menu: MenuItem[]
	firstCategory: number
	page: TopPageModel
	products: ProductModel[]
}
