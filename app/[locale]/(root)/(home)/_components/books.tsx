'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Library } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { BookCard } from '@/components/shared/card-effect'
import { books } from '@/constanta'

const categories = [
	{ text: 'Yangi Kitoblar', size: 'text-5xl', color: 'text-blue-600' },
	{ text: 'Bestseller', size: 'text-4xl', color: 'text-purple-500' },
	{ text: 'Audio Kitoblar', size: 'text-3xl', color: 'text-green-500' },
	{ text: 'E-books', size: 'text-2xl', color: 'text-red-500' },
	{ text: 'Klassiklar', size: 'text-xl', color: 'text-yellow-600' },
	{ text: "She'riyat", size: 'text-lg', color: 'text-pink-500' },
	{ text: 'Romanlar', size: 'text-base', color: 'text-indigo-500' },
	{ text: 'Ilmiy', size: 'text-sm', color: 'text-teal-500' },
]

export const BookSection: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef<HTMLDivElement>(null)
	const { theme } = useTheme()

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setIsVisible(true)
					}
				})
			},
			{ threshold: 0.3 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<div
			ref={sectionRef}
			className={cn(
				'min-h-screen w-full py-16 transition-colors duration-300',
				theme === 'dark'
					? 'bg-gray-900'
					: 'bg-gradient-to-br from-blue-50 via-white to-blue-50'
			)}
		>
			<div className='container mx-auto px-4'>
				{/* Title Section */}
				<motion.div
					className='mb-16 flex items-center justify-center gap-4'
					animate={isVisible ? 'visible' : 'hidden'}
				>
					<motion.div
						variants={{
							hidden: { opacity: 0, rotate: -180, scale: 0.5 },
							visible: {
								opacity: 1,
								rotate: 0,
								scale: 1,
								transition: { duration: 0.8, type: 'spring' },
							},
						}}
					>
						<Library
							className={cn(
								'h-12 w-12',
								theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
							)}
						/>
					</motion.div>

					<motion.h1
						className={cn(
							'relative font-serif text-5xl font-bold',
							theme === 'dark' ? 'text-white' : 'text-gray-900'
						)}
						variants={{
							hidden: { opacity: 0, y: -20 },
							visible: {
								opacity: 1,
								y: 0,
								transition: { duration: 0.8, type: 'spring' },
							},
						}}
					>
						Kitoblar
						<motion.div
							className='absolute -bottom-2 left-0 h-1 w-full bg-blue-500'
							initial={{ scaleX: 0 }}
							animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
							transition={{ delay: 0.5, duration: 0.8 }}
						/>
					</motion.h1>
				</motion.div>

				{/* Main Content */}
				<div className='flex flex-col lg:flex-row'>
					{/* Categories Sidebar - Only visible on desktop */}
					<div className='hidden lg:block lg:w-1/4 lg:pr-8'>
						<div className='sticky top-24'>
							<AnimatePresence>
								{isVisible && (
									<ul className='space-y-4'>
										{categories.map((item, index) => (
											<motion.li
												key={index}
												className={cn(
													'cursor-pointer font-serif transition-all hover:scale-105',
													item.size,
													item.color
												)}
												initial={{ x: -50, opacity: 0 }}
												animate={{ x: 0, opacity: 1 }}
												transition={{ delay: index * 0.1 }}
												whileHover={{ x: 10 }}
											>
												{item.text}
											</motion.li>
										))}
									</ul>
								)}
							</AnimatePresence>
						</div>
					</div>

					{/* Books Grid Container */}
					<div className='w-full lg:w-3/4'>
						<div
							className={cn(
								'grid gap-4 sm:gap-6 md:gap-8',
								// 2 columns on mobile
								'grid-cols-2',
								// 3 columns on tablet
								'md:grid-cols-3',
								// 4 columns on desktop
								'lg:grid-cols-4'
							)}
						>
							{/* Example BookCards - Replace with your actual data */}
							{books.map((book, index) => (
								<div key={index} className='flex justify-center'>
									<BookCard
										key={book.id}
										image={book.img_url}
										title={book.title}
										date={book.date}
										description={book.decription} // Corrected key here
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
