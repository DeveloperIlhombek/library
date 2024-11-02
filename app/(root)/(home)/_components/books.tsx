'use client'
import Card from '@/components/shared/card-effect'
import { Button } from '@/components/ui/button'
import { books } from '@/constanta'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { GiBookshelf } from 'react-icons/gi'
function Books() {
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
				threshold: 0.9,
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
					<GiBookshelf
						className={cn(
							'h-20 text-5xl text-blue-500 transition-transform duration-500 ease-in-out',
							isVisible ? 'translate-y-0' : '-translate-y-20'
						)}
					/>
					<h1
						className={cn(
							'h-20 bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-center font-serif text-5xl font-bold text-transparent transition-transform duration-1000 ease-in-out',
							isVisible ? 'translate-y-4' : '-translate-y-20'
						)}
					>
						Kitoblar
					</h1>
				</div>

				<div className='grid grid-cols-4 gap-4' ref={newsRef}>
					<div className='col-span-1'>
						<div className=''>
							<p>Elektron kitoblar biror ta&apos;rif </p>
							<Image
								src={'/images/camels.svg'}
								alt='camels'
								width={400}
								height={400}
							/>
						</div>
					</div>
					<div className='col-span-3 grid grid-cols-4 gap-3'>
						{books.map(book => (
							<Card
								key={book.title}
								image={book.img_url}
								color='#2d90f3'
								data={book.date}
								description={book.decription}
								title={book.title}
							/>
						))}
					</div>
				</div>
				<Button
					className='mx-auto my-10 flex shadow-[0px_0px_12px_#0959a9]'
					variant={'default'}
				>
					<Link href={'/books'}>Ko&apos;proq ko&apos;rish</Link>
				</Button>
			</div>
		</>
	)
}

export default Books
