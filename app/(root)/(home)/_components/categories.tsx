'use client'
import { BackgroundBeamsWithCollision } from '@/components/shared/category-card'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { TbCategoryFilled } from 'react-icons/tb'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

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
			<div className='flex items-center justify-center gap-2' ref={newsRef}>
				<TbCategoryFilled className='text-4xl' />
				<h1 className='my-4 text-center font-serif text-4xl font-bold'>
					<RoughNotationGroup show={isVisible}>
						<RoughNotation type='highlight' show={isVisible} color='#2d90f3'>
							Kategoriyalar
						</RoughNotation>
					</RoughNotationGroup>
				</h1>
			</div>

			<BackgroundBeamsWithCollision>
				<div className='mt-4 flex items-center justify-between'>
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
		</>
	)
}

export default Categories
