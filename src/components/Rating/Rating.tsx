import React, { useEffect, useState } from "react"
import { RatingProps } from "./Rating.props"
import starIcon from "./star.svg"
import filledStarIcon from "./filledStar.svg"
import Image from "next/image"
import cn from "classnames"
import styles from "./Rating.module.css"
const Rating = ({
	isEditable = false,
	rating,
	setRating,
	...props
}: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
		new Array(5).fill(<>1</>)
	)

	useEffect(() => {
		constructRating(rating)
	}, [rating])

	const changeDisplay = (i: number) => {
		if (!isEditable) return
		constructRating(i)
	}

	const handleClick = (i: number) => {
		if (!isEditable || !setRating) return
		setRating(i)
	}

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => handleClick(i + 1)}
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e) => {
						if (e.code === "Space" || e.code === "Enter")
							handleClick(i + 1)
					}}
					className={cn(styles.star, {
						[styles.editable]: isEditable,
					})}
					key={i}
				>
					<Image
						src={i < currentRating ? filledStarIcon : starIcon}
						alt={"star"}
					/>
				</span>
			)
		})

		setRatingArray(updatedArray)
	}
	return (
		<div {...props}>
			{ratingArray.map((r, i) => (
				<span key={i}>{r}</span>
			))}
		</div>
	)
}

export default Rating
