import Image from 'next/image'
import React from 'react'

function Hero() {
	return (
		<div>
			<Image src={'/assets/hero.png'} alt='hero' width={500} height={400} />
		</div>
	)
}

export default Hero
