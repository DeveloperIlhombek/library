'use client'

import { useRef, useEffect } from 'react'
import { NewsCard } from './news-card'
import { cn } from '@/lib/utils'
import { news } from '@/constanta'

export function NewsCarousel() {
	const containerRef = useRef<HTMLDivElement>(null)
	const innerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const container = containerRef.current
		const inner = innerRef.current
		if (!container || !inner) return

		// Clone items for seamless loop
		const cloneItems = () => {
			const items = Array.from(inner.children)
			items.forEach(item => {
				// Prevent duplicate cloning
				if (!item.hasAttribute('data-cloned')) {
					const clone = item.cloneNode(true) as HTMLElement
					clone.setAttribute('data-cloned', 'true')
					inner.appendChild(clone)
				}
			})
		}

		cloneItems()

		// Cleanup to avoid memory leaks
		return () => {
			Array.from(inner.children).forEach(item => {
				if (item.hasAttribute('data-cloned')) {
					item.remove()
				}
			})
		}
	}, [])

	return (
		<div
			ref={containerRef}
			className='relative max-w-full overflow-hidden'
			aria-label='News Carousel'
		>
			{/* Gradient overlays */}
			<div className='pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-gray-900 dark:via-gray-900/70' />
			<div className='pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white via-white/70 to-transparent dark:from-gray-900 dark:via-gray-900/70' />

			{/* Carousel content */}
			<div
				ref={innerRef}
				className={cn(
					'flex gap-6 py-4 px-8',
					'hover:pause-animation animate-scroll'
				)}
			>
				{news.length > 0 ? (
					news.map((item, index) => (
						<div key={index} className='flex-none'>
							<NewsCard item={item} />
						</div>
					))
				) : (
					<p className='text-center'>No news available</p>
				)}
			</div>
		</div>
	)
}
