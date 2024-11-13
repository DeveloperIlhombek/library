// SearchSheet.tsx

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MdManageSearch, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Input } from '../ui/input'
import { IoIosSearch } from 'react-icons/io'
import Link from 'next/link'
import { searchCenterLink, searchLink, searchSectionLink } from '@/constanta'
import { GrLinkNext } from 'react-icons/gr'

function SearchSheet() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					className='border-spacing-2 rounded-md border p-1 text-3xl shadow-[0px_0px_12px_#0959a9]'
					variant='ghost'
					aria-label='search'
				>
					<MdManageSearch />
				</Button>
			</SheetTrigger>
			<SheetContent
				className='h-3/4 bg-sky-50 p-6 text-gray-50 opacity-90 shadow-gray-50 ring-2 backdrop-blur-sm group-hover:duration-500 dark:bg-slate-900 dark:ring-0'
				side={'bottom'}
			>
				<SheetHeader>
					<SheetTitle className='text-center font-serif text-2xl text-blue-500 '>
						Qidirayotgan bo&apos;limingizni bosing yoki mavjud adabiyot nomini
						kiriting !
					</SheetTitle>
					<SheetDescription>
						<div className='container flex flex-col items-center justify-center gap-4'>
							<div className='mt-12 flex w-full items-center justify-center'>
								<Input
									className='w-1/2 rounded-r-none ring-1'
									placeholder='Adabiyotlarni nomi orqali qidirish...'
								/>
								<Button className='rounded-l-none'>
									<IoIosSearch size={30} />
								</Button>
							</div>
							<div className='grid w-full grid-cols-4 gap-4'>
								<div className='col-span-1'>
									<div className='group my-6 flex items-center justify-start gap-3'>
										<h3 className='font-serif text-2xl font-bold text-sky-500'>
											Bosh Sahifa
										</h3>
										<span className='rounded-full border border-blue-500 bg-blue-300 p-1 text-xl text-black duration-300 ease-in group-hover:rotate-90 dark:bg-sky-900 dark:text-white'>
											<MdKeyboardDoubleArrowRight />
										</span>
									</div>
									<div className='flex flex-col items-start justify-start gap-2'>
										{searchLink.map(item => (
											<Link
												key={item.id}
												href={item.url}
												className='group flex items-center justify-start gap-3 text-sm font-bold tracking-widest text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-300'
											>
												{item.name}
												<span className='w-20 transition-transform duration-300 group-hover:translate-x-2'>
													<GrLinkNext className='transition-colors duration-300 group-hover:text-blue-500' />
												</span>
											</Link>
										))}
									</div>
								</div>
								<div className='col-span-1'>
									<div className='group my-6 flex items-center justify-start gap-3'>
										<h3 className='font-serif text-2xl font-bold text-sky-500'>
											Markaz
										</h3>
										<span className='rounded-full border border-blue-500 bg-blue-300 p-1 text-xl text-black duration-300 ease-in group-hover:rotate-90 dark:bg-sky-900 dark:text-white'>
											<MdKeyboardDoubleArrowRight />
										</span>
									</div>
									<div className='flex flex-col items-start justify-start gap-2'>
										{searchCenterLink.map(item => (
											<Link
												key={item.id}
												href={item.url}
												className='group flex items-center justify-start gap-3 text-sm font-bold tracking-widest text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-300'
											>
												{item.name}
												<span className='w-20 transition-transform duration-300 group-hover:translate-x-2'>
													<GrLinkNext className='transition-colors duration-300 group-hover:text-blue-500' />
												</span>
											</Link>
										))}
									</div>
								</div>
								<div className='col-span-1'>
									<div className='group my-6 flex items-center justify-start gap-3'>
										<h3 className='font-serif text-2xl font-bold text-sky-500'>
											Bo&apos;limlar
										</h3>
										<span className='rounded-full border border-blue-500 bg-blue-300 p-1 text-xl text-black duration-300 ease-in group-hover:rotate-90 dark:bg-sky-900 dark:text-white'>
											<MdKeyboardDoubleArrowRight />
										</span>
									</div>
									<div className='flex flex-col items-start justify-start gap-2'>
										{searchSectionLink.map(item => (
											<Link
												key={item.id}
												href={item.url}
												className='group flex items-center justify-start gap-3 text-sm font-bold tracking-wider text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-300'
											>
												{item.name.length > 60
													? `${item.name.slice(0, 60)}...`
													: item.name}

												<span className='w-20 transition-transform duration-300 group-hover:translate-x-2'>
													<GrLinkNext className='transition-colors duration-300 group-hover:text-blue-500' />
												</span>
											</Link>
										))}
									</div>
								</div>
								<div className='col-span-1'>
									<div className='group my-6 flex items-center justify-start gap-3'>
										<h3 className='font-serif text-2xl font-bold text-sky-500'>
											Elektron Kitoblar
										</h3>
										<span className='rounded-full border border-blue-500 bg-blue-300 p-1 text-xl text-black duration-300 ease-in group-hover:rotate-90 dark:bg-sky-900 dark:text-white'>
											<MdKeyboardDoubleArrowRight />
										</span>
									</div>
									<div className='flex flex-col items-start justify-start gap-2'>
										{searchLink.map(item => (
											<Link
												key={item.id}
												href={item.url}
												className='group flex items-center justify-start gap-3 text-sm font-bold tracking-widest text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-300'
											>
												{item.name}
												<span className='w-20 transition-transform duration-300 group-hover:translate-x-2'>
													<GrLinkNext className='transition-colors duration-300 group-hover:text-blue-500' />
												</span>
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}

export default SearchSheet
