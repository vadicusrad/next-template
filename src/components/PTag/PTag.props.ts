import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface PHTagProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	size?: "small" | "medium" | "large"
	children: React.ReactNode
	className?: string
}
