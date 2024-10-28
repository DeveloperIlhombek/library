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
			className='relative h-[340px] w-full max-w-[300px] overflow-hidden rounded-2xl border border-blue-500 text-center md:max-w-[250px] lg:max-w-[200px]'
			style={{ '--clr': color } as React.CSSProperties}
		>
			{/* Gradient background and brighter hover effect */}
			<div className='absolute left-[var(--x)] top-[var(--y)] size-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(var(--clr),rgba(255,255,255,0.1),transparent)] opacity-50 transition-opacity duration-500 hover:opacity-100'></div>
			<div className='relative z-10'>
				<Image
					src={image}
					alt={title}
					height={160}
					width={200}
					className='rounded-md p-3 md:p-4 lg:p-5'
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
			<div className='absolute inset-1 rounded-2xl bg-[rgba(255,255,255,0.1)]'></div>
		</div>
	)
}

export default Card
