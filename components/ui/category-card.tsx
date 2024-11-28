import Image from 'next/image'
import React from 'react'

interface CategoryProps {
	image: string
	title: string
}

function CategoryCard({ image, title }: CategoryProps) {
	return (
		<>
			<div className='group relative mb-8 flex h-80 w-60 cursor-pointer flex-col items-center justify-around overflow-hidden  rounded-2xl bg-sky-100 text-gray-50  shadow-inner shadow-gray-50 ring-2 group-hover:duration-500 dark:bg-slate-900 dark:ring-0'>
				<div className='absolute left-2 top-2 z-10'>
					<span className=' absolute left-[-25px] top-[15px] flex h-8 w-52 -rotate-27 items-center justify-center overflow-hidden  rounded-md bg-gradient-to-r from-yellow-600 via-yellow-200 to-pink-500 p-1 font-serif font-semibold uppercase tracking-tighter  text-black shadow-md '>
						{title}
					</span>
					<div className='ml-10 mt-16 flex  size-full items-center justify-center group-hover:scale-105'>
						<Image
							src={image}
							alt={title}
							width={150}
							height={150}
							className='object-cover'
						/>
					</div>
				</div>

				<div className='z-10 flex flex-col text-6xl font-extrabold duration-500 before:absolute before:right-16 before:top-20 before:-z-10 before:size-20 before:rounded-full before:bg-indigo-300 before:blur-xl before:duration-500 after:absolute after:bottom-32 after:right-16 after:-z-10 after:size-12 after:rounded-full after:bg-blue-400 after:blur-xl after:duration-500 group-hover:before:-translate-y-11 group-hover:before:translate-x-11 group-hover:after:translate-x-11 group-hover:after:translate-y-16'></div>
				<div className='absolute bottom-0 left-0 flex cursor-pointer items-center gap-0 rounded-tr-full bg-blue-400 p-2 shadow-md duration-300 group-hover:gap-2 dark:bg-blue-800'>
					<svg
						fill='none'
						viewBox='0 0 24 24'
						height='30px'
						width='30px'
						xmlns='http://www.w3.org/2000/svg'
						className='fill-black group-hover:scale-110 dark:fill-white'
					>
						<path
							strokeLinejoin='round'
							strokeLinecap='round'
							d='M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z'
						></path>
					</svg>
					<span className='font-serif text-[0px] text-black duration-300 group-hover:text-lg dark:text-white'>
						Batafsil...
					</span>
				</div>
			</div>
		</>
	)
}

export default CategoryCard
