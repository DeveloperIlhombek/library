'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { MdOutlineDateRange } from 'react-icons/md'

interface CardProps {
	image: string
	title: string
	data: string
	description: string
	color: string
}

const Card: React.FC<CardProps> = ({
	image,
	title,
	data,
	description,
	color,
}) => {
	const cardRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const card = cardRef.current

		if (card) {
			const handleMouseMove = (e: MouseEvent) => {
				const x = e.pageX - card.offsetLeft
				const y = e.pageY - card.offsetTop
				card.style.setProperty('--x', `${x}px`)
				card.style.setProperty('--y', `${y}px`)
			}

			card.addEventListener('mousemove', handleMouseMove)
			return () => {
				card.removeEventListener('mousemove', handleMouseMove)
			}
		}
	}, [])

	return (
		<div
			ref={cardRef}
			className='group relative flex h-[400px] w-full max-w-[300px] cursor-pointer flex-col items-center justify-between overflow-hidden rounded-2xl border border-blue-500 bg-sky-100 text-center text-black shadow-inner shadow-gray-50  ring-2 group-hover:duration-500 dark:bg-slate-900 dark:text-white dark:ring-0'
			style={{ '--clr': color } as React.CSSProperties}
		>
			<div className='absolute left-[var(--x)] top-[var(--y)] size-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(var(--clr),rgba(255,255,255,0.1),transparent)] opacity-50 transition-opacity duration-500 hover:opacity-100'></div>
			<div className=' z-10'>
				<Image
					src={image}
					alt={title}
					height={180}
					width={252}
					className='aspect-5/7 rounded-md  md:p-3 md:pb-2 lg:p-4 lg:pb-2'
				/>
				<div className='ml-2 flex items-center justify-start gap-2 md:ml-3 lg:ml-4'>
					<MdOutlineDateRange className='size-4 text-yellow-500 md:size-5' />
					<p className='font-serif text-xs md:text-sm'>{data}</p>
				</div>
				<h2 className='ml-2 text-start font-serif text-xs font-bold md:ml-3 md:text-sm lg:ml-4'>
					{title}
				</h2>
				<p className='ml-2 text-start font-serif text-xs font-bold md:ml-3 md:text-sm lg:ml-4'>
					{description}
				</p>
			</div>
		</div>
	)
}

export default Card
