'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { CgCalendarDates } from 'react-icons/cg'

interface InfiniteMovingCardsProps {
	items: {
		previewImage: string
		title: string
		date?: string
		description?: string
	}[]
	direction?: 'left' | 'right'
	speed?: 'fast' | 'normal' | 'slow'
	pauseOnHover?: boolean
	className?: string
}

export const InfiniteMovingCards = ({
	items,
	direction = 'left',
	speed = 'fast',
	pauseOnHover = true,
	className,
}: InfiniteMovingCardsProps) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const scrollerRef = useRef<HTMLDivElement>(null)

	const [start, setStart] = useState(false)

	const getDirection = useCallback(() => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'forwards'
				)
			} else {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'reverse'
				)
			}
		}
	}, [direction])

	const getSpeed = useCallback(() => {
		if (containerRef.current) {
			if (speed === 'fast') {
				containerRef.current.style.setProperty('--animation-duration', '100s')
			} else if (speed === 'normal') {
				containerRef.current.style.setProperty('--animation-duration', '100s')
			} else {
				containerRef.current.style.setProperty('--animation-duration', '100s')
			}
		}
	}, [speed])

	const addAnimation = useCallback(() => {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children)

			scrollerContent.forEach(item => {
				const duplicatedItem = item.cloneNode(true)
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem)
				}
			})

			getDirection()
			getSpeed()
			setStart(true)
		}
	}, [getDirection, getSpeed])

	useEffect(() => {
		addAnimation()
	}, [addAnimation])
	return (
		<div
			ref={containerRef}
			className={cn(
				'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
				className
			)}
		>
			<div
				ref={scrollerRef}
				className={cn(
					'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
					start && 'animate-scroll ',
					pauseOnHover && 'hover:[animation-play-state:paused]'
				)}
			>
				{items.map(item => (
					<Link
						className='group relative overflow-hidden rounded-lg shadow-lg hover:scale-105'
						key={item.title}
						href={'/'}
					>
						<Image
							src={item.previewImage}
							alt={item.title}
							width={300}
							height={400}
							className='aspect-4/6 transition duration-300 ease-in-out'
						/>
						<div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-4 opacity-60 transition duration-300 ease-in-out group-hover:opacity-100'>
							<div className='flex items-center justify-start gap-2'>
								<CgCalendarDates className='text-lg text-white' />
								<span className='text-sm text-white'>{item.date}</span>
							</div>
							<h1 className='mb-4 font-semibold text-white'>{item.title}</h1>
							<div className='relative flex items-center justify-start text-sm font-bold text-blue-600'>
								<div className='flex cursor-pointer items-center gap-0 bg-transparent p-2 shadow-md duration-300 group-hover:gap-2'>
									<svg
										fill='none'
										viewBox='0 0 24 24'
										height='20px'
										width='20px'
										xmlns='http://www.w3.org/2000/svg'
										className='fill-blue-600'
									>
										<path
											strokeLinejoin='round'
											strokeLinecap='round'
											d='M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z'
										></path>
									</svg>
									<span className='text-[0px] duration-300 group-hover:text-sm'>
										Batafsil...
									</span>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
