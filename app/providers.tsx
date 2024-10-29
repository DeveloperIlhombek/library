'use client'

import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ChildProps } from '@/types'
export function Providers({ children }: ChildProps) {
	return <ParallaxProvider>{children}</ParallaxProvider>
}
