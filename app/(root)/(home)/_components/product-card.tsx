import { MotionValue, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const ProductCard = ({
	product,
	translate,
}: {
	product: {
		title: string
		link: string
		thumbnail: string
	}
	translate: MotionValue<number>
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className='group/product relative h-96 w-[30rem] shrink-0'
		>
			<Link
				href={product.link}
				className='block group-hover/product:shadow-2xl '
			>
				<Image
					src={product.thumbnail}
					height='600'
					width='600'
					className='absolute inset-0 size-full object-cover object-left-top'
					alt={product.title}
				/>
			</Link>
			<div className='pointer-events-none absolute inset-0 size-full bg-black opacity-0 group-hover/product:opacity-80'></div>
			<h2 className='absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100'>
				{product.title}
			</h2>
		</motion.div>
	)
}
