import Head from "next/head"
import { useState } from "react"
import Rating from "@/components/Rating/Rating"
import { withLayout } from "@/Layout/Layout"
function Home(): JSX.Element {
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

			<Rating rating={rating} isEditable={true} setRating={setRating} />
		</>
	)
}

export default withLayout(Home)
