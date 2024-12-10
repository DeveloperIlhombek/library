'use client'

import { books } from '@/constanta'
import BreadcrumbBook from './_components/breadcrumb'
import PaginationBook from './_components/pagination-book'
import { GiBookshelf } from 'react-icons/gi'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { GoSearch } from 'react-icons/go'
import { BookCard } from '@/components/shared/card-effect'

function Page() {
	return (
		<div className='mt-24 '>
			{/* Breadcrumb */}
			<BreadcrumbBook />

			{/* Header */}
			<div className='flex items-center justify-center gap-4'>
				<GiBookshelf className='text-4xl' />
				<h1 className='my-4 text-center text-4xl'>Barcha Kitoblar</h1>
			</div>

			{/* Main Content */}
			<div className='container grid grid-cols-7 gap-4'>
				{/* Books Grid */}
				<div className='col-span-5 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4'>
					{books.map(book => (
						<Link href={`/books/${book.id}`} key={book.id}>
							<BookCard
								image={book.img_url}
								title={book.title}
								date={book.date}
								description={book.decription}
							/>
						</Link>
					))}
				</div>

				{/* Search Section */}
				<div className='col-span-2'>
					<div className='flex items-center gap-2'>
						<Input
							placeholder='Kitob nomini qidiring...'
							className='rounded-r-none ring-1'
						/>
						<Button type='button' className='rounded-l-none'>
							<GoSearch />
						</Button>
					</div>
				</div>
			</div>

			{/* Pagination */}
			<PaginationBook />
		</div>
	)
}

export default Page
