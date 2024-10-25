'use client'
import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ProductCard } from './product-card'
import { Header } from './header'

export const HeroParallax = ({
	products,
}: {
	products: {
		title: string
		link: string
		thumbnail: string
	}[]
}) => {
	const firstRow = products.slice(0, 5)
	const secondRow = products.slice(5, 10)
	const thirdRow = products.slice(10, 15)
	const ref = React.useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, 1000]),
		springConfig
	)
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig
	)
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig
	)
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig
	)
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [10, 4]),
		springConfig
	)
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
		springConfig
	)
	return (
		<div
			ref={ref}
			className='relative flex h-[300vh]  flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]'
		>
			<Header />
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
				className=''
			>
				<motion.div className='mb-20 flex flex-row-reverse space-x-20 space-x-reverse'>
					{firstRow.map(product => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className='mb-20 flex  flex-row space-x-20 '>
					{secondRow.map(product => (
						<ProductCard
							product={product}
							translate={translateXReverse}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className='flex flex-row-reverse space-x-20 space-x-reverse'>
					{thirdRow.map(product => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	)
}
