'use client'

import { NewsHeader } from './news-header'
import { NewsCarousel } from './news-carousel'
import { WaveBackground } from './wave-background'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function NewsSection() {
	return (
		<section className='relative min-h-[400px] w-full overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-700'>
			{/* Wave Background */}
			<WaveBackground />

			{/* Content */}
			<div className='relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<NewsHeader />
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className='mt-4'
				>
					<NewsCarousel />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className='relative z-20 mt-2 flex justify-center pb-10'
				>
					<Button
						asChild
						size='lg'
						className='group relative bg-blue-500 text-white shadow-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-xl dark:bg-blue-600 dark:hover:bg-blue-700'
					>
						<Link href='/books' className='absolute flex items-center gap-2'>
							Ko&apos;proq ko&apos;rish
							<span className='transition-transform duration-300 group-hover:translate-x-1'>
								→
							</span>
						</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	)
}
