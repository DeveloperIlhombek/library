'use client'
import React from 'react'
import { FloatingDock } from '@/components/ui/floating-dock'
import { FaTelegram, FaInstagramSquare } from 'react-icons/fa'
import { IoLogoYoutube, IoIosGlobe } from 'react-icons/io'

export function FloatingDockDemo() {
	const links = [
		{
			title: 'Telegram',
			icon: (
				<FaTelegram className='size-full text-neutral-500 dark:text-neutral-300' />
			),
			color: 'bg-blue-500',
			href: '#',
		},
		{
			title: 'Youtube',
			icon: (
				<IoLogoYoutube className='size-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '#',
			color: 'bg-red-500',
		},

		{
			title: 'Instagram',
			icon: (
				<FaInstagramSquare className='size-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '#',
			color: 'bg-pink-500',
		},

		{
			title: 'web-site',
			icon: (
				<IoIosGlobe className='size-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '#',
			color: 'bg-sky-500',
		},
	]
	return (
		<div className='flex h-[15vh] w-full  items-center justify-evenly '>
			<FloatingDock mobileClassName='translate-y-20' items={links} />
		</div>
	)
}
