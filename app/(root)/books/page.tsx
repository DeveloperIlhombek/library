'use client'
import Card from '@/components/shared/card-effect'
import { books } from '@/constanta'
import React, { useEffect, useRef, useState } from 'react'
import BreadcrumbBook from './_components/breadcrumb'
import PaginationBook from './_components/pagination-book'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import { GiBookshelf } from 'react-icons/gi'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { GoSearch } from 'react-icons/go'
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
		<div ref={newsRef} className='mt-24'>
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
			<div className='container grid h-screen grid-cols-7 gap-2'>
				<div className='container col-span-5 mx-auto grid grid-cols-4 gap-3'>
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
				<div className='col-span-2'>
					<div className='flex items-center justify-center '>
						<Input className='rounded-r-none ring-1' />
						<Button type='button' className='rounded-l-none'>
							<GoSearch />
						</Button>
					</div>
				</div>
			</div>
			<PaginationBook />
		</div>
	)
}

export default Page
