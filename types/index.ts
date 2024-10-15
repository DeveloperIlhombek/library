import { ReactNode } from 'react'

export interface ChildProps {
	children: ReactNode
}

export interface IBook {
	title: string
	decription: string
	date: string
	img_url: string
	id: string
}
