'use client'

import Link from 'next/link'
import { FaBookOpen } from 'react-icons/fa6'
import { GiBookshelf, GiMaterialsScience, GiBookmarklet } from 'react-icons/gi'
import { SlBookOpen } from 'react-icons/sl'
import { GrDatabase } from 'react-icons/gr'
import { motion } from 'framer-motion'

const ebookItems = [
	{
		href: '/electron-library',
		icon: FaBookOpen,
		label: 'Adabiyotlar',
	},
	{
		href: '/',
		icon: GiBookshelf,
		label: 'Maqolalar',
	},
	{
		href: '/',
		icon: GiMaterialsScience,
		label: 'Dissertatsiyalar',
	},
	{
		href: '/',
		icon: SlBookOpen,
		label: 'Monografiyalar',
	},
	{
		href: '/',
		icon: GiBookmarklet,
		label: "Qo'lyozmalar",
	},
	{
		href: '/',
		icon: GrDatabase,
		label: "Xalqaro Ilmiy ma'lumotlar manbai",
	},
]

export const ProductItemEbook = () => {
	return (
		<div className='grid max-h-[600px] w-full max-w-[1000px] grid-cols-2 gap-1 overflow-y-auto p-3 sm:grid-cols-2 lg:grid-cols-3'>
			{ebookItems.map((item, index) => (
				<motion.div
					key={item.href}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.1 }}
					whileHover={{ scale: 1.02 }}
				>
					<Link
						href={item.href}
						className='group relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border bg-white p-4 shadow-lg transition-all hover:border-blue-500 hover:shadow-blue-100 dark:bg-slate-900 dark:hover:shadow-blue-900/20 sm:gap-6 sm:p-6'
					>
						<div className='absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-white opacity-0 transition-opacity group-hover:opacity-100 dark:from-blue-950 dark:to-slate-900'></div>
						<div className='relative flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-50 transition-transform group-hover:scale-110 dark:from-blue-900 dark:to-blue-950 sm:size-24'>
							<item.icon className='size-8 text-blue-500 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 sm:size-12' />
						</div>
						<p className='text-center text-sm font-medium text-slate-800 dark:text-slate-200 sm:text-lg'>
							{item.label}
						</p>
					</Link>
				</motion.div>
			))}
		</div>
	)
}
