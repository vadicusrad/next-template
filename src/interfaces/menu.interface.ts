export interface PageItem {
	alias: string
	title: string
	_id: string
	category: string
}

export interface MenuItem {
	_id: {
		secondCategory: string
	}
	pages: PageItem[]
	isOpened?: boolean
}

export interface FirstLevelMenuItem {
	route: string
	name: string
	id: number
	icon: string

	// secondCategory: string
}
