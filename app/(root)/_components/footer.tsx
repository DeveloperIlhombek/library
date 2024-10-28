import { navlink } from '@/constanta'
import Link from 'next/link'
import React from 'react'
import { FloatingDockDemo } from '@/components/shared/floating-dock'

function Footer() {
	return (
		<footer className='container my-12 grid h-[350px] grid-flow-col grid-cols-9 gap-2'>
			<div className='col-span-2'>
				<h1 className='size-full border-spacing-2 border border-white/10 text-4xl text-blue-500'>
					Silk Road Samarkand
				</h1>
			</div>
			<div className='col-span-4 grid size-full border-spacing-2 border'>
				<div className=''>
					<h1 className='text-4xl'>Havolalar</h1>
					{navlink.map(item => (
						<Link href={'/'} key={item.route} className='mb-1 block'>
							{item.label}
						</Link>
					))}
				</div>
				<div className='mt-6'>
					<FloatingDockDemo />
				</div>
			</div>
			<div className='col-span-3 border-spacing-3 border border-white/10 text-4xl'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.23345321683!2d66.95548167548847!3d39.64446030228089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19cb14364aa7%3A0x5744a105b44f5139!2s%22Ipak%20yo%E2%80%98li%22%20turizm%20va%20madaniy%20meros%20xalqaro%20universiteti!5e0!3m2!1sen!2s!4v1728451383312!5m2!1sen!2s'
					className='size-full border-spacing-0 p-6'
					loading='lazy'
					title='joylashuv'
				></iframe>
			</div>
		</footer>
	)
}

export default Footer
