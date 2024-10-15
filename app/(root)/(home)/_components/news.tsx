'use client'
import React, { useEffect, useRef, useState } from 'react'
import { LiaNewspaper } from 'react-icons/lia'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { news } from '@/constanta'
import Image from 'next/image'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import { Button } from '@/components/ui/button'

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
				threshold: 0.5, // yarmi ko'rinsa
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
			<div ref={newsRef}>
				<div className='flex items-center justify-center gap-3'>
					<LiaNewspaper className='text-4xl' />
					<h1 className='my-4 text-center font-serif text-4xl font-bold '>
						<RoughNotationGroup show={isVisible}>
							<RoughNotation type='highlight' show={isVisible} color='#2d90f3'>
								Yangiliklar
							</RoughNotation>
						</RoughNotationGroup>
					</h1>
				</div>

				<div className='grid grid-cols-4 gap-4'>
					<Carousel
						opts={{ align: 'start', loop: true }}
						className='col-span-3'
						plugins={[Autoplay({ delay: 3000 })]}
					>
						<CarouselContent>
							{news.map(newone => (
								<CarouselItem
									key={newone.title}
									className='basis-1/3 md:basis-1/2 lg:basis-1/3'
								>
									<Image
										src={newone.news_image}
										width={400}
										height={400}
										alt={newone.title}
									/>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
					<div>
						<Image
							src={'/images/student_svg.jpg'}
							alt='student'
							width={400}
							height={400}
						></Image>
					</div>
				</div>
			</div>
			<Button
				className='mx-auto my-10 flex shadow-[0px_0px_12px_#0959a9]'
				variant={'default'}
			>
				Ko&apos;roq ko&apos;rish uchun
			</Button>
		</>
	)
}

export default News
