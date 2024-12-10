import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface CategoryProps {
	image: string
	title: string
}

function CategoryCard({ image, title }: CategoryProps) {
	return (
		<div className='group relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white via-slate-50 to-indigo-50 ring-1 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:from-slate-800 dark:via-slate-800/50 dark:to-indigo-950'>
			{/* Decorative Background Elements */}
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute -right-4 -top-4 size-24 rounded-full bg-gradient-to-br from-violet-400/80 to-blue-500 blur-2xl transition-all duration-700 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:scale-150 dark:from-violet-400/10 dark:to-blue-500' />
				<div className='absolute -bottom-4 -left-4 size-24 rounded-full bg-gradient-to-br from-violet-400/80 to-blue-500 blur-2xl transition-all duration-700 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:scale-150 dark:from-violet-400/10 dark:to-blue-500' />
				<div className='absolute -left-4 -top-4 size-24 rounded-full bg-gradient-to-br from-indigo-400/20 to-blue-500/50 blur-2xl transition-all duration-700 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:scale-150 dark:from-indigo-400/10 dark:to-blue-500/50' />
			</div>

			{/* Image Container */}
			<div className='relative mx-auto mt-6 aspect-square w-3/4'>
				<div className='absolute inset-0 rounded-xl bg-gradient-to-br from-white to-slate-100 shadow-inner dark:from-slate-800 dark:to-slate-900' />
				<Image
					src={image}
					alt={title}
					fill
					className='scale-90 object-contain transition-all duration-500 group-hover:scale-100'
					sizes='(max-width: 640px) 150px, (max-width: 1024px) 200px, 250px'
				/>
			</div>

			{/* Content Container */}
			<div className='absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-white/90 to-white/80 p-1 backdrop-blur-sm transition-all duration-500 group-hover:from-white group-hover:to-white/90 dark:from-slate-900/90 dark:to-slate-900/80 dark:group-hover:from-slate-900 dark:group-hover:to-slate-900/90 sm:p-4'>
				<div className='flex items-center justify-between'>
					<h3 className='bg-gradient-to-r from-indigo-950 to-violet-800 bg-clip-text font-serif text-xs font-bold text-transparent transition-colors dark:from-indigo-200 dark:to-violet-300 sm:text-lg'>
						{title}
					</h3>
					<span className='flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-700 shadow transition-all duration-500 group-hover:shadow-lg dark:from-indigo-900/50 dark:to-violet-900/50 dark:text-indigo-300 dark:group-hover:from-indigo-900/70 dark:group-hover:to-violet-900/70'>
						<ArrowUpRight className='size-4 transition-transform duration-500 group-hover:rotate-45' />
					</span>
				</div>

				{/* Progress Bar Animation */}
				<div className='mt-2 h-0.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700/50'>
					<div className='h-full w-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-1000 group-hover:w-full dark:from-indigo-400 dark:to-violet-400' />
				</div>
			</div>
		</div>
	)
}

export default CategoryCard
