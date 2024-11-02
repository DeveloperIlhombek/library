'use client'
import { BackgroundBeamsWithCollision } from '@/components/shared/category-card'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { TbCategoryFilled } from 'react-icons/tb'

function Categories() {
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
		<>
			<div className='my-4 overflow-hidden'>
				<div className='flex items-center justify-center gap-3'>
					<TbCategoryFilled
						className={cn(
							'h-20 text-5xl text-blue-500 transition-transform duration-1000 ease-in-out',
							isVisible ? 'translate-y-0' : 'translate-y-20'
						)}
					/>
					<h1
						className={cn(
							'h-20 bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-center font-serif text-5xl font-bold text-transparent transition-transform duration-1000 ease-in-out',
							isVisible ? 'translate-y-4' : '-translate-y-20'
						)}
					>
						Kategoriyalar
					</h1>
				</div>
				<BackgroundBeamsWithCollision>
					<div className='mt-4 flex items-center justify-between' ref={newsRef}>
						<div className=' '>
							<Image
								src={'/category/article-category.svg'}
								alt='book'
								width={200}
								height={200}
								className='mx-auto'
							/>
						</div>
						<div className=' '>
							<Image
								src={'/category/monolog.svg'}
								alt='book'
								width={200}
								height={200}
								className='mx-auto'
							/>
						</div>
						<div className=''>
							<Image
								src={'/category/science-category.svg'}
								alt='book'
								width={200}
								height={200}
								className='mx-auto'
							/>
						</div>
						<div className='  '>
							<Image
								src={'/category/book-category.svg'}
								alt='book'
								width={200}
								height={200}
								className='mx-auto'
							/>
						</div>
					</div>
				</BackgroundBeamsWithCollision>
			</div>
		</>
	)
}

export default Categories
