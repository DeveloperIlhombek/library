'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

interface NewsCardProps {
	item: {
		previewImage: string
		title: string
		date?: string
		description?: string
	}
}

export function NewsCard({ item }: NewsCardProps) {
	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			className='group relative w-[300px] overflow-hidden rounded-xl'
		>
			<Link href='/' className='block'>
				<div className='relative aspect-[3/4]'>
					<Image
						src={item.previewImage}
						alt={item.title}
						fill
						className='object-cover transition duration-300 group-hover:scale-110'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90' />
				</div>

				<div className='absolute inset-x-0 bottom-0 p-6 text-white'>
					<div className='mb-3 flex items-center gap-2 text-sm text-blue-200'>
						<Calendar className='size-4' />
						<span>{item.date}</span>
					</div>

					<h3 className='mb-4 line-clamp-2 text-lg font-semibold'>
						{item.title}
					</h3>

					<div className='translate-y-8 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
						<span className='inline-flex items-center gap-2 font-medium text-blue-300'>
							Batafsil
							<svg
								className='size-4 transition-transform duration-300 group-hover:translate-x-1'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M13 7l5 5m0 0l-5 5m5-5H6'
								/>
							</svg>
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	)
}
