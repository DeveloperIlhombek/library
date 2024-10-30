'use client'
import React from 'react'
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
	return (
		<div onMouseEnter={() => setActive(item)} className='relative '>
			<motion.p
				transition={{ duration: 0.3 }}
				className='cursor-pointer text-black hover:opacity-90 dark:text-white'
			>
				{item}
			</motion.p>
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
								layoutId='active' // layoutId ensures smooth animation
								className='overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black'
							>
								<motion.div
									layout // layout ensures smooth animation
									className='h-full w-max p-4'
								>
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
			onMouseLeave={() => setActive(null)} // resets the state
			className='relative flex justify-center space-x-4 rounded-full border border-transparent px-8 py-4 shadow-[0px_0px_12px_#0959a9] dark:border-white/[0.5] '
		>
			{children}
		</nav>
	)
}

export const ProductforSections = ({ title, href, src }: IBookItems) => {
	return (
		<Link href={href} className='flex flex-col gap-3 space-x-2'>
			<Image
				src={src}
				width={180}
				height={70}
				alt={title}
				className='shrink-0 rounded-md shadow-2xl'
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