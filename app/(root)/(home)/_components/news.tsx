import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { news } from '@/constanta'
import React from 'react'
function News() {
	return (
		<div className='my-4'>
			<h1 className='h-20 bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-center font-serif text-5xl font-bold text-transparent '>
				Yangiliklar
			</h1>
			<InfiniteMovingCards
				items={news}
				className=''
				direction='left'
				speed='slow'
			/>
		</div>
	)
}

export default News
