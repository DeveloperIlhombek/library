'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

interface BookCardProps {
	image: string
	title: string
	date: string
	description: string
	onClick?: () => void
}

export const BookCard: React.FC<BookCardProps> = ({
	image,
	title,
	date,
	description,
	onClick,
}) => {
	const cardRef = useRef<HTMLDivElement>(null)
	const { theme } = useTheme()

	useEffect(() => {
		const card = cardRef.current
		if (!card) return

		const handleMouseMove = (e: MouseEvent) => {
			const rect = card.getBoundingClientRect()
			const x = e.clientX - rect.left
			const y = e.clientY - rect.top

			card.style.setProperty('--mouse-x', `${x}px`)
			card.style.setProperty('--mouse-y', `${y}px`)
		}

		card.addEventListener('mousemove', handleMouseMove)
		return () => card.removeEventListener('mousemove', handleMouseMove)
	}, [])

	return (
		<motion.div
			ref={cardRef}
			className={cn(
				'group relative ring-1 cursor-pointer overflow-hidden rounded-2xl transition-all duration-500',
				// Responsive widths with better proportions
				'w-[160px] h-[280px] sm:w-[180px] sm:h-[320px] md:w-[200px] md:h-[360px] lg:w-[220px] lg:h-[400px]',
				// Background colors
				theme === 'dark'
					? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white'
					: 'bg-gradient-to-br from-white via-blue-100 to-white text-gray-900'
			)}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			whileHover={{ scale: 1.05 }}
			onClick={onClick}
		>
			{/* Shine Effect */}
			<div
				className={cn(
					'pointer-events-none absolute left-[var(--mouse-x)] top-[var(--mouse-y)] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100',
					theme === 'dark'
						? 'h-[400px] w-[400px] bg-[radial-gradient(circle_300px_at_center,rgba(56,189,248,0.55),transparent_40%)]'
						: 'h-[400px] w-[400px] bg-[radial-gradient(circle_300px_at_center,rgba(59,130,246,0.5),transparent_40%)]'
				)}
			/>

			{/* Book Cover */}
			<div className='relative h-3/4 overflow-hidden'>
				<Image
					src={image}
					alt={title}
					width={400}
					height={600}
					className='size-full object-cover transition-transform duration-500 group-hover:scale-110'
					priority
				/>
			</div>

			{/* Content Container */}
			<div
				className={cn(
					'relative z-10 flex h-[25%] flex-col justify-between p-3',
					theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
				)}
			>
				{/* Title and Description Container */}
				<div className='flex flex-col gap-1'>
					<motion.h3
						className='line-clamp-1 font-serif text-xs font-bold sm:text-sm'
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
					>
						{title}
					</motion.h3>

					<motion.p
						className={cn(
							'line-clamp-2 text-[10px] sm:text-xs',
							theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
						)}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
					>
						{description}
					</motion.p>
				</div>

				{/* Date Container */}
				<motion.div
					className='flex items-center gap-1'
					initial={{ opacity: 0, x: -10 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.4 }}
				>
					<Calendar
						className={cn(
							'h-3 w-3 sm:h-4 sm:w-4',
							theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
						)}
					/>
					<span
						className={cn(
							'text-[10px] sm:text-xs',
							theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
						)}
					>
						{date}
					</span>
				</motion.div>
			</div>
		</motion.div>
	)
}
