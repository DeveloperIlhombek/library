'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { boshsahifa, sections } from '@/constanta'
import Image from 'next/image'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { motion, AnimatePresence } from 'framer-motion'
import { ProductItemCenter } from '@/components/ui/product-item-center'
import { ProductItemEbook } from '@/components/ui/productitem-ebook'
import { Button } from '@/components/ui/button'

export default function MobileMenu() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost' className='md:hidden'>
					<Menu className='size-6' />
				</Button>
			</SheetTrigger>
			<SheetContent
				side='left'
				className='w-[300px] overflow-y-auto sm:w-[400px]'
			>
				<div className='flex flex-col gap-4 py-4'>
					<div className='flex items-center gap-2'>
						<Image
							src='/assets/logo.png'
							alt='logo'
							width={40}
							height={40}
							priority
						/>
						<span className='font-space-grotesk font-bold'>
							International University
						</span>
					</div>

					<Accordion type='single' collapsible className='w-full'>
						<AccordionItem value='bosh-sahifa'>
							<AccordionTrigger className='font-bold text-blue-500'>
								Bosh sahifa
							</AccordionTrigger>
							<AccordionContent>
								<AnimatePresence>
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: 'auto' }}
										exit={{ opacity: 0, height: 0 }}
										className='flex flex-col space-y-2'
									>
										{boshsahifa.map(item => (
											<motion.div
												key={item.id}
												initial={{ x: -20, opacity: 0 }}
												animate={{ x: 0, opacity: 1 }}
												transition={{ delay: 0.1 }}
											>
												<Link
													href={item.url}
													className='block py-2 pl-4 transition-colors hover:text-blue-500'
												>
													{item.name}
												</Link>
											</motion.div>
										))}
									</motion.div>
								</AnimatePresence>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value='bolimlar'>
							<AccordionTrigger className='font-bold text-blue-500'>
								Bo&apos;limlar
							</AccordionTrigger>
							<AccordionContent>
								<AnimatePresence>
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: 'auto' }}
										exit={{ opacity: 0, height: 0 }}
										className='grid grid-cols-1 gap-4'
									>
										{sections.map((item, index) => (
											<motion.div
												key={item.title}
												initial={{ x: -20, opacity: 0 }}
												animate={{ x: 0, opacity: 1 }}
												transition={{ delay: index * 0.1 }}
											>
												<Link
													href={item.href}
													className='flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-blue-50'
												>
													<Image
														src={item.src}
														width={50}
														height={50}
														alt={item.title}
														className='rounded-md'
													/>
													<span className='text-sm font-medium'>
														{item.title}
													</span>
												</Link>
											</motion.div>
										))}
									</motion.div>
								</AnimatePresence>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value='markaz'>
							<AccordionTrigger className='font-bold text-blue-500'>
								Markaz
							</AccordionTrigger>
							<AccordionContent>
								<div className='space-y-2 pl-4'>
									<ProductItemCenter />
								</div>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value='elektron-kitoblar'>
							<AccordionTrigger className='font-bold text-blue-500'>
								Elektron kitoblar
							</AccordionTrigger>
							<AccordionContent>
								<div className='space-y-2 pl-4'>
									<ProductItemEbook />
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</SheetContent>
		</Sheet>
	)
}
