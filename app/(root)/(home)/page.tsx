import React from 'react'
import News from './_components/news'
import Categories from './_components/categories'
import Books from './_components/books'
import Posts from './_components/posts'
import { Separator } from '@/components/ui/separator'
import { HeroParallax } from './_components/hero'
import { products } from './product-hero'

function Page() {
	return (
		<>
			<HeroParallax products={products} />
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
