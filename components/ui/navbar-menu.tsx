/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const transition = {
	type: 'spring',
	mass: 0.5,
	damping: 11.5,
	stiffness: 100,
	restDelta: 0.001,
	restSpeed: 0.001,
}

export const MenuItem = ({
	setActive,
	active,
	item,
	children,
}: {
	setActive: (item: string) => void
	active: string | null
	item: string
	children?: React.ReactNode
}) => {
	const itemRef = useRef<HTMLParagraphElement>(null)
	const [lineWidth, setLineWidth] = useState(0)
	const [hovered, setHovered] = useState(false)

	useEffect(() => {
		if (itemRef.current) {
			setLineWidth(itemRef.current.offsetWidth)
		}
	}, [item])

	const handleMouseEnter = () => {
		setHovered(true)
		setActive(item)
	}

	const handleMouseLeave = () => {
		setHovered(false)
	}

	return (
		<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className='group relative'
		>
			<div className='flex flex-col items-center justify-center gap-1'>
				<motion.p
					ref={itemRef}
					transition={{ duration: 0.3 }}
					className='cursor-pointer font-bold hover:text-blue-500 hover:opacity-90'
				>
					{item}
				</motion.p>
				<motion.span
					animate={{
						width: hovered ? `${lineWidth}px` : '0px',
						opacity: hovered ? 1 : 0,
					}}
					transition={{
						type: 'spring',
						mass: 0.3,
						stiffness: 200,
						damping: 20,
					}}
					className='absolute bottom-0 h-[2px] bg-blue-500'
					style={{
						left: 0,
					}}
				/>
			</div>
			{active !== null && (
				<motion.div
					initial={{ opacity: 0, scale: 0.85, y: 10 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={transition}
				>
					{active === item && (
						<div className='fixed left-1/2 top-16 -translate-x-1/2 pt-4'>
							<motion.div
								transition={transition}
								layoutId='active'
								className='overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black'
							>
								<motion.div layout className='h-full w-max p-4'>
									{children}
								</motion.div>
							</motion.div>
						</div>
					)}
				</motion.div>
			)}
		</div>
	)
}

export const Menu = ({
	setActive,
	children,
}: {
	setActive: (item: string | null) => void
	children: React.ReactNode
}) => {
	return (
		<nav
			onMouseLeave={() => setActive(null)}
			className='relative flex justify-center space-x-4 border-transparent p-4'
		>
			{children}
		</nav>
	)
}

export const ProductforSections = ({ title, href, src }: any) => {
	return (
		<Link
			href={href}
			className='flex flex-col gap-3 space-x-2 rounded-b-xl rounded-t-lg border border-blue-500 p-2 ring-1 hover:bg-blue-300 hover:dark:bg-slate-400'
		>
			<Image
				src={src}
				alt={title}
				width={200}
				height={200}
				className='h-auto w-full max-w-[120px] shrink-0 rounded-md shadow-2xl sm:max-w-[180px]'
			/>
			<p className='mb-1 w-full max-w-[120px] text-sm text-black dark:text-white sm:max-w-[180px] sm:text-base'>
				{title}
			</p>
		</Link>
	)
}

export const HoveredLink = ({ children, ...rest }: any) => {
	return (
		<Link
			{...rest}
			className='flex flex-row items-center justify-start gap-2 font-serif text-lg font-bold capitalize text-blue-500 hover:text-black dark:text-neutral-200'
		>
			{children}
		</Link>
	)
}
