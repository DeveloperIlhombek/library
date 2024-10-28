'use client'

import * as React from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

function ModeToggle() {
	const [mount, setMount] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => setMount(true), [])

	return mount && resolvedTheme === 'dark' ? (
		<Button
			size={'icon'}
			variant={'ghost'}
			onClick={() => setTheme('light')}
			className='shadow-[0px_0px_12px_#0959a9]'
			aria-label='light'
		>
			<SunIcon />
		</Button>
	) : (
		<Button
			size={'icon'}
			onClick={() => setTheme('dark')}
			variant={'ghost'}
			className='shadow-[0px_0px_12px_#0959a9]'
			aria-label='dark'
		>
			<MoonIcon />
		</Button>
	)
}

export default ModeToggle
