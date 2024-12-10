'use client'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaArrowRight, FaBookmark } from 'react-icons/fa'

interface PostCardProps {
	id: number
	title: string
	description: string
	date: string
	image: string
}

export const PostCard = ({
	id,
	title,
	description,
	date,
	image,
}: PostCardProps) => {
	return (
		<Link href={`/posts/${id}`}>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{
					y: -8,
					transition: { duration: 0.2 },
				}}
				className='h-full cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg 
                   transition-all duration-300 hover:shadow-2xl dark:bg-gray-800'
			>
				<div className='group relative h-48 overflow-hidden sm:h-56 md:h-64'>
					<Image
						src={image}
						alt={title}
						fill
						className='object-cover transition-transform duration-300 group-hover:scale-110'
					/>
					<div
						className='absolute inset-0 flex items-center justify-center bg-black/40 
                         opacity-0 transition-opacity duration-300 group-hover:opacity-100'
					>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							whileHover={{ scale: 1, opacity: 1 }}
							className='flex items-center gap-2 text-white'
						>
							<span className='font-medium'>Read More</span>
							<motion.div
								animate={{ x: [0, 5, 0] }}
								transition={{ repeat: Infinity, duration: 1.5 }}
							>
								<FaArrowRight className='text-xl' />
							</motion.div>
						</motion.div>
					</div>
				</div>

				<div className='p-4'>
					<div className='mb-2 flex items-center gap-2'>
						<FaBookmark className='text-blue-500 dark:text-blue-400' />
						<h3 className='line-clamp-2 text-lg font-semibold text-gray-900 dark:text-white sm:text-xl'>
							{title}
						</h3>
					</div>

					<p className='mb-4 line-clamp-3 text-sm text-gray-600 dark:text-gray-300 sm:text-base'>
						{description}
					</p>

					<div className='flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400'>
						<FaCalendarAlt className='text-blue-500 dark:text-blue-400' />
						<time>{format(new Date(date), 'dd MMM, yyyy')}</time>
					</div>
				</div>
			</motion.div>
		</Link>
	)
}
