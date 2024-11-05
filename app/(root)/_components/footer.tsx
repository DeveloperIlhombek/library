import { navlink } from '@/constanta'
import Link from 'next/link'
import React from 'react'
import { FloatingDockDemo } from '@/components/shared/floating-dock'
import Image from 'next/image'
import { FaPhoneVolume } from 'react-icons/fa6'
import { TfiEmail } from 'react-icons/tfi'

function Footer() {
	return (
		<footer className='group container relative my-12 grid  grid-flow-col grid-cols-9 gap-2 overflow-hidden rounded-t-3xl bg-sky-100 p-6 text-gray-50 shadow-inner shadow-gray-50 ring-2 group-hover:duration-500 dark:bg-slate-900 dark:ring-0'>
			<div className='col-span-2'>
				<Image
					src={'/assets/logo.png'}
					alt='logo'
					width={200}
					height={200}
					className='object-cover'
					loading='lazy'
				/>
				<h1 className='ml-2 font-space-grotesk font-bold'>
					International <span className='text-blue-500'>University</span> of{' '}
					<br />
					Tourism and Cultural Heritage
				</h1>
			</div>
			<div className='col-span-4 grid grid-cols-2 gap-2 border'>
				<div className='col-span-1 ml-2 flex flex-col gap-4 font-serif'>
					<h2 className='text-center text-3xl font-bold text-blue-500'>
						Havolalar
					</h2>
					{navlink.map(item => (
						<Link href={item.route} key={item.label}>
							{item.label}
						</Link>
					))}
				</div>
				<div className='col-span-1'>
					<h2 className='text-center text-3xl font-bold text-blue-500'>
						Contact
					</h2>
					<div className='flex flex-col items-start gap-2 p-2'>
						<div className='flex items-center justify-center gap-2'>
							<FaPhoneVolume />
							<span>+998 99 123 45 67</span>
						</div>
						<div className='flex items-center justify-center gap-2'>
							<TfiEmail />
							<span>ilxomdeveloper@gmail.com</span>
						</div>
					</div>
					<FloatingDockDemo />
				</div>
			</div>
			<div className='col-span-3 text-4xl'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.23345321683!2d66.95548167548847!3d39.64446030228089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19cb14364aa7%3A0x5744a105b44f5139!2s%22Ipak%20yo%E2%80%98li%22%20turizm%20va%20madaniy%20meros%20xalqaro%20universiteti!5e0!3m2!1sen!2s!4v1728451383312!5m2!1sen!2s'
					className='size-full rounded-2xl'
					loading='lazy'
					title='joylashuv'
				></iframe>
			</div>
		</footer>
	)
}

export default Footer
