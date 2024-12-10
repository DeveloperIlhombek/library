'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Newspaper } from 'lucide-react'

export function NewsHeader() {
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	})

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	}

	return (
		<motion.div
			ref={ref}
			initial='hidden'
			animate={inView ? 'visible' : 'hidden'}
			variants={containerVariants}
			className='relative'
		>
			{/* Background decoration */}
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={inView ? { scale: 1, opacity: 1 } : {}}
				transition={{ duration: 0.8 }}
				className='pointer-events-none absolute inset-0'
			>
				<div className='absolute left-1/2 top-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/30 blur-3xl' />
			</motion.div>
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={inView ? { scale: 1, opacity: 1 } : {}}
				transition={{ duration: 0.8 }}
				className='pointer-events-none absolute inset-0'
			>
				<div className='absolute left-0 top-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-3xl' />
			</motion.div>

			{/* Header content */}
			<div className='relative flex items-center justify-center gap-3 px-4 sm:gap-4'>
				{/* Icon with animated background */}
				<motion.div variants={itemVariants} className='relative'>
					<div className='absolute inset-0 animate-pulse rounded-lg bg-blue-500/20 blur-lg' />
					<div className='relative rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-2 shadow-lg'>
						<Newspaper className='size-6 text-white sm:size-8' />
					</div>
				</motion.div>

				{/* Title with animated underline */}
				<div className='relative'>
					<motion.h2
						variants={itemVariants}
						className='text-2xl font-bold sm:text-3xl'
					>
						<span className='bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent'>
							Yangiliklar
						</span>
					</motion.h2>

					<motion.div
						initial={{ scaleX: 0 }}
						animate={inView ? { scaleX: 1 } : {}}
						transition={{ duration: 0.6, delay: 0.3 }}
						className='absolute inset-x-0 -bottom-2 h-0.5 origin-left bg-gradient-to-r from-blue-600 to-blue-400'
					/>
				</div>

				{/* Animated decorative elements */}
				<motion.div
					variants={itemVariants}
					className='absolute -right-4 top-1/2 size-8 -translate-y-1/2'
				>
					<div className='absolute inset-0 animate-ping rounded-full bg-blue-500/20' />
					<div className='absolute inset-0 animate-pulse rounded-full bg-blue-500/40' />
				</motion.div>
			</div>
		</motion.div>
	)
}
