'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

interface InfiniteMovingCardsProps {
	items: {
		previewImage: string
		title: string
		date: string
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
	const scrollerRef = useRef<HTMLUListElement>(null)

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
				containerRef.current.style.setProperty('--animation-duration', '25s')
			} else if (speed === 'normal') {
				containerRef.current.style.setProperty('--animation-duration', '40s')
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
			<ul
				ref={scrollerRef}
				className={cn(
					' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
					start && 'animate-scroll ',
					pauseOnHover && 'hover:[animation-play-state:paused]'
				)}
			>
				{items.map(item => (
					<li className='' key={item.title}>
						<Image
							src={item.previewImage}
							alt={item.title}
							width={300}
							height={300}
						/>
						<span>{item.date}</span>
						<h1>{item.title}</h1>
					</li>
				))}
			</ul>
		</div>
	)
}
