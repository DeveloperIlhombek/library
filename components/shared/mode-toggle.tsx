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
		<Button size={'icon'} variant={'ghost'} onClick={() => setTheme('light')}>
			<SunIcon />
		</Button>
	) : (
		<Button size={'icon'} onClick={() => setTheme('dark')} variant={'ghost'}>
			<MoonIcon />
		</Button>
	)
}

export default ModeToggle
