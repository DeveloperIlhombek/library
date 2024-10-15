import React from 'react'
import Hero from './_components/hero'
import News from './_components/news'
import Categories from './_components/categories'
import Books from './_components/books'
import Posts from './_components/posts'
import { Separator } from '@/components/ui/separator'
function Page() {
	return (
		<>
			<Hero />
			<div className='container'>
				<News />
				<Separator />
				<Categories />
				<Separator />
				<Books />
				<Posts />
			</div>
		</>
	)
}

export default Page
