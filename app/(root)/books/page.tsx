'use client'
import Card from '@/components/shared/card-effect'
import { books } from '@/constanta'
import React, { useEffect, useRef, useState } from 'react'
import BreadcrumbBook from './_components/breadcrumb'
import PaginationBook from './_components/pagination-book'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import { GiBookshelf } from 'react-icons/gi'
import Link from 'next/link'

function Page() {
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
		<div ref={newsRef}>
			<BreadcrumbBook />
			<div className='flex items-center justify-center gap-4'>
				<GiBookshelf className='text-4xl' />
				<h1 className='my-4 text-center text-4xl'>
					<RoughNotationGroup show={isVisible}>
						<RoughNotation type='highlight' show={isVisible} color='#2d90f3'>
							Barcha Kitoblar
						</RoughNotation>
					</RoughNotationGroup>
				</h1>
			</div>
			<div className='container mx-auto grid grid-cols-5 gap-3'>
				{books.map(book => (
					<Link href={`/books/${book.id}`} key={book.id}>
						<Card
							image={book.img_url}
							color='#2d90f3'
							data={book.date}
							description={book.decription}
							title={book.title}
						/>
					</Link>
				))}
			</div>
			<PaginationBook />
		</div>
	)
}

export default Page
