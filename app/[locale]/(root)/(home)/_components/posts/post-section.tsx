'use client'
import { FaBookOpen } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { PostCard } from './post-card'

const posts = [
	{
		id: 1,
		title: 'Modern JavaScript Concepts',
		description:
			'Explore the latest features and best practices in modern JavaScript development...',
		date: '2023-12-20',
		image: '/images/image3.avif',
	},
	{
		id: 2,
		title: 'Getting Started with React',
		description:
			'A comprehensive guide to building web applications with React...',
		date: '2023-12-19',
		image: '/images/image5.avif',
	},
	{
		id: 3,
		title: 'TypeScript Fundamentals',
		description:
			'Learn the basics of TypeScript and how it improves JavaScript development...',
		date: '2023-12-18',
		image: '/images/image3.avif',
	},
	{
		id: 4,
		title: 'Next.js Deep Dive',
		description:
			'Understanding the core concepts and features of Next.js framework...',
		date: '2023-12-17',
		image: '/images/image2.avif',
	},
]

const shapes = [
	{ color: 'bg-blue-500', size: 'w-12 h-12', position: 'top-10 left-10' },
	{ color: 'bg-red-500', size: 'w-8 h-8', position: 'top-20 right-20' },
	{ color: 'bg-green-500', size: 'w-10 h-10', position: 'bottom-10 left-20' },
	{ color: 'bg-yellow-500', size: 'w-6 h-6', position: 'bottom-20 right-10' },
]

export const PostSection = () => {
	return (
		<section className='relative overflow-hidden bg-gray-50 py-16 dark:bg-gray-900'>
			{/* Animated Shapes */}
			{shapes.map((shape, index) => (
				<motion.div
					key={index}
					className={`absolute rounded-full ${shape.color} ${shape.size} ${shape.position} opacity-20`}
					animate={{
						y: [0, 20, 0],
						rotate: [0, 180, 360],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'linear',
						delay: index * 0.5,
					}}
				/>
			))}

			<div className='container mx-auto px-4'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className='mb-12 flex items-center justify-center gap-3'
				>
					<FaBookOpen className='text-3xl text-blue-600 dark:text-blue-400' />
					<h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
						Postlar
					</h2>
				</motion.div>

				{/* Posts Grid */}
				<div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
					{posts.map((post, index) => (
						<motion.div
							key={post.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
						>
							<PostCard {...post} />
						</motion.div>
					))}
				</div>

				{/* Load More Button */}
				<div className='mt-12 text-center'>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className='rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white
                     transition-colors duration-200 hover:bg-blue-700
                     dark:bg-blue-500 dark:hover:bg-blue-600'
					>
						Koproq korish
					</motion.button>
				</div>
			</div>
		</section>
	)
}
