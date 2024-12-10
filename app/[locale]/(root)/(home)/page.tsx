import React from 'react'
import Categories from './_components/categories'
import { Separator } from '@/components/ui/separator'
import { Hero } from './_components/hero/hero'
import { NewsSection } from './_components/news/news-section'
import { BookSection } from './_components/books'
import { PostSection } from './_components/posts/post-section'

function Page() {
	return (
		<>
			<Hero />
			<div className='container'>
				<NewsSection />
				<Separator />
				<Categories />
				<BookSection />
				<Separator />
				<PostSection />
			</div>
		</>
	)
}

export default Page
