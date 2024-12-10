'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface ParallaxImageProps {
	alt: string
	className?: string
	speed?: number
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
	alt,
	className = '',
	speed = 0.5,
}) => {
	const [offset, setOffset] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setOffset(window.pageYOffset)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div className={`absolute size-full overflow-hidden ${className}`}>
			<div className='relative size-full'>
				<Image
					src={'/assets/hero.avif'}
					alt={alt}
					width={1920}
					height={1080}
					quality={100}
					priority
					className='object-cover'
					style={{
						transform: `translateY(${offset * speed}px)`,
						transition: 'transform 0.1s ease-out',
					}}
					sizes='100vw'
				/>
			</div>
		</div>
	)
}
