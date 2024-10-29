'use client'
import React from 'react'
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax'

function Test() {
	const background: BannerLayer = {
		image:
			'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
		translateY: [0, 50],
		opacity: [1, 0.3],
		scale: [1.05, 1, 'easeOutCubic'],
		shouldAlwaysCompleteAnimation: true,
	}
	const headline: BannerLayer = {
		translateY: [0, 30],
		scale: [1, 2.5, 'easeOutCubic'],
		shouldAlwaysCompleteAnimation: true,
		expanded: false,
		speed: 2,
		children: (
			<div className='absolute inset-0 flex items-center justify-center'>
				<h1 className='text-6xl font-thin text-white md:text-8xl'>
					Hello World!
				</h1>
			</div>
		),
	}
	const foreground: BannerLayer = {
		image:
			'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png',
		translateY: [0, 15],
		scale: [1, 1.1, 'easeOutCubic'],
		shouldAlwaysCompleteAnimation: true,
	}

	const gradientOverlay: BannerLayer = {
		opacity: [0, 0.9],
		shouldAlwaysCompleteAnimation: true,
		expanded: false,
		children: (
			<div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900' />
		),
	}
	return (
		<ParallaxBanner
			layers={[background, headline, foreground, gradientOverlay]}
			className='aspect-[2/1] bg-gray-900'
		/>
	)
}

export default Test
