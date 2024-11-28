import React from 'react'
import News from './_components/news'
import Categories from './_components/categories'
import Books from './_components/books'
import Posts from './_components/posts'
import { Separator } from '@/components/ui/separator'
import Hero from './_components/hero'

function Page() {
	return (
		<>
			<Hero />
			<div className='container'>
				<Separator className='my-4' />
				<News />
				<Separator />
				<Categories />
				<Books />
				<Separator />
				<Posts />
			</div>
		</>
	)
}

export default Page
