'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import { Layers } from 'lucide-react'
import CategoryCard from '@/components/ui/category-card'
import { categories } from '@/constanta'

export default function Categories() {
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					setIsVisible(entry.isIntersecting)
				})
			},
			{ threshold: 0.5 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<section className='relative overflow-hidden py-12'>
			<div className='absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950' />

			<div className='container relative mx-auto px-4'>
				{/* Header */}
				<div className='mb-12 flex items-center justify-center'>
					<div className='relative'>
						<div
							className={cn(
								'absolute -left-8 -top-8 h-16 w-16 rounded-full bg-indigo-500/20 transition-all duration-1000 sm:h-24 sm:w-24 dark:bg-indigo-400/10',
								isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
							)}
						/>
						<div
							className={cn(
								'absolute -right-4 -top-4 h-8 w-8 rounded-full bg-violet-500 transition-all duration-1000 delay-300 sm:h-12 sm:w-12 dark:bg-violet-400/20',
								isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
							)}
						/>
						<Layers
							className={cn(
								'relative h-12 w-12 transition-all duration-1000 sm:h-20 sm:w-20',
								isVisible
									? 'translate-y-0 rotate-0 text-indigo-500 opacity-100 dark:text-indigo-400'
									: '-translate-y-20 rotate-180 text-transparent opacity-0'
							)}
						/>
					</div>
					<h1
						className={cn(
							'bg-gradient-to-r from-indigo-700 to-violet-500 bg-clip-text text-center font-serif text-3xl font-bold text-transparent transition-transform duration-1000 sm:text-5xl dark:from-indigo-400 dark:to-violet-400',
							isVisible ? 'translate-y-0 block' : '-translate-y-40 '
						)}
					>
						Kategoriyalar
					</h1>
				</div>

				{/* Grid */}
				<div
					ref={sectionRef}
					className='grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-5'
				>
					{categories.map(item => (
						<CategoryCard
							key={item.title}
							image={item.image}
							title={item.title}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
