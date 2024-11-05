'use client'
import React from 'react'
import { FloatingDock } from '@/components/ui/floating-dock'
import {
	IconBrandX,
	IconExchange,
	IconNewSection,
	IconTerminal2,
} from '@tabler/icons-react'

export function FloatingDockDemo() {
	const links = [
		{
			title: 'Products',
			icon: (
				<IconTerminal2 className='size-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '#',
		},
		{
			title: 'Components',
			icon: (
				<IconNewSection className='size-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '#',
		},

		{
			title: 'Changelog',
			icon: (
				<IconExchange className='size-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '#',
		},

		{
			title: 'Twitter',
			icon: (
				<IconBrandX className='size-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '#',
		},
	]
	return (
		<div className='flex h-[20vh] w-full  items-center justify-evenly'>
			<FloatingDock mobileClassName='translate-y-20' items={links} />
		</div>
	)
}
