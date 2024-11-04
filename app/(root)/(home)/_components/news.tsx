'use client'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { news } from '@/constanta'
import { cn } from '@/lib/utils'
import { IoNewspaperOutline } from 'react-icons/io5'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
function News() {
	const [isVisible, setIsVisible] = useState(false)
	const newsRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const currentRef = newsRef.current
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setIsVisible(true)
					} else {
						setIsVisible(false)
					}
				})
			},
			{
				threshold: 0.5,
			}
		)

		if (currentRef) {
			observer.observe(currentRef)
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef)
			}
		}
	}, [])
	return (
		<div className='my-4 overflow-hidden'>
			<div className='flex items-center justify-center gap-3'>
				<IoNewspaperOutline
					className={cn(
						'h-20 text-5xl text-blue-500 transition-transform duration-1000 ease-in-out',
						isVisible ? 'translate-y-0' : '-translate-y-20'
					)}
				/>
				<h1
					className={cn(
						'h-20 bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-center font-serif text-5xl font-bold text-transparent transition-transform duration-1000 ease-in-out',
						isVisible
							? 'translate-x-0 translate-y-5'
							: '-translate-x-80 -translate-y-20'
					)}
				>
					Yangiliklar
				</h1>
			</div>
			<div ref={newsRef}>
				<InfiniteMovingCards
					items={news}
					className=''
					direction='left'
					speed='slow'
				/>
			</div>
			<Button
				className='mx-auto my-10 flex shadow-[0px_0px_12px_#0959a9]'
				variant={'default'}
			>
				<Link href={'/books'}>Ko&apos;proq ko&apos;rish</Link>
			</Button>
		</div>
	)
}

export default News
