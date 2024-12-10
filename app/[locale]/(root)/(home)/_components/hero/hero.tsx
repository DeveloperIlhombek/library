import React from 'react'
import { BookOpen, Search, Users, Download, ShoppingCart } from 'lucide-react'
import { ParallaxImage } from './parallax-image'
import { DecorativePattern } from './decorative-pattern'

export const Hero: React.FC = () => {
	return (
		<div className='relative min-h-screen overflow-hidden'>
			{/* Background Images with Parallax */}
			<ParallaxImage alt='Library Interior' speed={0.3} className='z-0' />

			{/* Oriental Pattern Overlay */}
			<DecorativePattern />

			{/* Content */}
			<div className='relative z-10 flex min-h-screen items-center bg-black/50'>
				<div className='mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h1 className='mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl'>
							<span className='block font-serif'>Turizm Universiteti</span>
							<span className='mt-2 block text-3xl sm:text-4xl md:text-5xl'>
								Kutubxonasi
							</span>
						</h1>

						<p className='mx-auto mt-6 max-w-lg text-xl text-gray-200'>
							Ming yillik ilm-fan va madaniyat durdonalari bir joyda
						</p>

						{/* Action Buttons */}
						<div className='mt-8 flex flex-col justify-center gap-4 sm:flex-row'>
							<button className='group inline-flex items-center rounded-full bg-amber-500 px-8 py-3 text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-amber-600'>
								<ShoppingCart className='mr-2 size-5 group-hover:animate-bounce' />
								<span className='font-medium'>Kitobga buyurtma berish</span>
							</button>
							<button className='group inline-flex items-center rounded-full border border-white/30 bg-white/20 px-8 py-3 text-white shadow-lg backdrop-blur-sm transition duration-300 hover:scale-105 hover:bg-white/30'>
								<Download className='mr-2 size-5 group-hover:animate-bounce' />
								<span className='font-medium'>Mobil ilovani yuklab olish</span>
							</button>
						</div>

						{/* Search Bar */}
						<div className='mx-auto mt-10 max-w-xl'>
							<div className='relative'>
								<input
									type='text'
									className='w-full rounded-full bg-white/90 px-6 py-4 text-gray-900 backdrop-blur-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500'
									placeholder='Kitob, maqola yoki muallif qidirish...'
								/>
								<button className='absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-amber-500 p-3 text-white transition duration-300 hover:bg-amber-600'>
									<Search className='size-5' />
								</button>
							</div>
						</div>

						{/* Features */}
						<div className='mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3'>
							{[
								{
									icon: <BookOpen className='size-8' />,
									title: '1,000,000+ Kitoblar',
									description: "Sharq va G'arb adabiyotining noyob to'plami",
								},
								{
									icon: <Users className='size-8' />,
									title: '24/7 Xizmat',
									description: "Qulay o'qish zonalari va malakali xodimlar",
								},
								{
									icon: <Search className='size-8' />,
									title: 'Online Katalog',
									description: 'Zamonaviy qidiruv tizimi orqali oson kirish',
								},
							].map((feature, index) => (
								<div
									key={index}
									className='rounded-xl bg-white/10 p-6 backdrop-blur-sm transition duration-300 hover:bg-white/20'
								>
									<div className='mb-4 inline-block text-amber-400'>
										{feature.icon}
									</div>
									<h3 className='mb-2 text-xl font-bold text-white'>
										{feature.title}
									</h3>
									<p className='text-gray-200'>{feature.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Decorative Bottom Wave */}
			<div className='absolute inset-x-0 bottom-0'>
				<svg
					viewBox='0 0 1440 120'
					className='h-12 w-full fill-current text-white'
					preserveAspectRatio='none'
				>
					<path d='M0 0l48 8c48 8 144 24 240 32s192 8 288 0 192-24 288-32 192-8 288 0 144 24 192 32l48 8v72H0V0z' />
				</svg>
			</div>
		</div>
	)
}
