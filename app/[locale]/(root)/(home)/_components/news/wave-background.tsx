'use client'

import { motion } from 'framer-motion'

export function WaveBackground() {
	return (
		<div className='absolute inset-0 overflow-hidden'>
			{/* Animated blobs */}
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 0.2 }}
				transition={{
					duration: 2,
					repeat: Infinity,
					repeatType: 'reverse',
				}}
				className='absolute -right-40 size-80 rounded-full bg-blue-100 mix-blend-multiply blur-3xl dark:bg-blue-900'
			/>
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 0.2 }}
				transition={{
					duration: 2,
					delay: 1,
					repeat: Infinity,
					repeatType: 'reverse',
				}}
				className='absolute -bottom-40 -left-80 size-80 rounded-full bg-blue-400 mix-blend-multiply blur-3xl dark:bg-blue-800'
			/>

			{/* Responsive Wave SVG */}
			<svg
				className='absolute bottom-0 w-full text-blue-300 dark:text-blue-900 sm:h-[120px] md:h-[180px] lg:h-[320px]'
				viewBox='0 0 1440 320'
				preserveAspectRatio='none'
			>
				<motion.path
					initial={{ d: 'M0,320L1440,320L1440,320L0,320Z' }}
					animate={{
						d: 'M0,320L48,304.7C96,289,192,259,288,240C384,221,480,213,576,229.3C672,245,768,283,864,277.3C960,272,1056,224,1152,202.7C1248,181,1344,187,1392,192L1440,197L1440,320L0,320Z',
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut',
					}}
					fill='currentColor'
					fillOpacity='0.2'
				/>
				<motion.path
					initial={{ d: 'M0,320L1440,320L1440,320L0,320Z' }}
					animate={{
						d: 'M0,320L48,298.7C96,277,192,235,288,213.3C384,192,480,192,576,208C672,224,768,256,864,261.3C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L0,320Z',
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut',
						delay: 0.5,
					}}
					fill='currentColor'
					fillOpacity='0.3'
				/>
			</svg>
		</div>
	)
}
