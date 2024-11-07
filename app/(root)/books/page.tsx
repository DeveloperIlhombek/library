'use client'
import Card from '@/components/shared/card-effect'
import { books } from '@/constanta'
import BreadcrumbBook from './_components/breadcrumb'
import PaginationBook from './_components/pagination-book'
import { GiBookshelf } from 'react-icons/gi'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { GoSearch } from 'react-icons/go'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
function Page() {
	const { resolvedTheme } = useTheme()
	return (
		<div className='mt-24 '>
			<BreadcrumbBook />
			<div className='flex items-center justify-center gap-4'>
				<GiBookshelf className='text-4xl' />
				<h1 className='my-4 text-center text-4xl'>Barcha Kitoblar</h1>
			</div>
			<div className='container grid h-screen grid-cols-7 gap-2'>
				<div className='container col-span-5 mx-auto grid grid-cols-4 gap-3'>
					{books.map(book => (
						<Link href={`/books/${book.id}`} key={book.id}>
							<Card
								image={book.img_url}
								color={cn(
									resolvedTheme === 'dark'
										? 'hsl(187, 92%, 69%)'
										: 'hsl(50, 100%, 50%)'
								)}
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
