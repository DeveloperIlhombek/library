'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { IBookItems } from '@/app/(root)/types'

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
			onMouseEnter={() => handleMouseEnter()}
			onMouseLeave={handleMouseLeave}
			className='relative'
		>
			<div className='flex flex-col items-center justify-center gap-1 '>
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
						boxShadow: hovered ? '3px 2px 10px rgba(0, 0, 256, 0.5)' : 'none',
					}}
					transition={{
						duration: 0.5,
						ease: 'easeInOut',
					}}
				>
					<hr
						className='h-[2px] border border-blue-500 bg-blue-500'
						style={{
							width: hovered ? `${lineWidth}px` : '0px',
							boxShadow: hovered
								? '30px 2px 20px  rgba(0, 0, 256, 0.5)'
								: 'none',
						}}
					></hr>
				</motion.span>
			</div>
			{active !== null && (
				<motion.div
					initial={{ opacity: 0, scale: 0.85, y: 10 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={transition}
				>
					{active === item && (
						<div className='absolute left-1/2 top-[calc(100%_+_1.2rem)] -translate-x-1/2 pt-4'>
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
			className='relative flex justify-center space-x-4 rounded-full border border-transparent px-8 py-4 shadow-[0px_0px_12px_#0959a9] dark:border-white/[0.5]  '
		>
			{children}
		</nav>
	)
}

export const ProductforSections = ({ title, href, src }: IBookItems) => {
	return (
		<Link
			href={href}
			className='flex flex-col gap-3 space-x-2 rounded-b-xl rounded-t-lg border border-blue-500 ring-1 hover:bg-blue-300 hover:dark:bg-slate-400'
		>
			<Image
				src={src}
				width={180}
				height={70}
				alt={title}
				className='shrink-0 rounded-md shadow-2xl '
				priority
			/>
			<p className='mb-1 w-40 text-black dark:text-white'>{title}</p>
		</Link>
	)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HoveredLink = ({ children, ...rest }: any) => {
	return (
		<Link
			{...rest}
			className='text-neutral-700 hover:text-black dark:text-neutral-200 '
		>
			{children}
		</Link>
	)
}
