import { navlink } from '@/constanta'
import Link from 'next/link'
import React from 'react'
import { FloatingDockDemo } from '@/components/shared/floating-dock'
import Image from 'next/image'
import { FaPhoneVolume } from 'react-icons/fa6'
import { TfiEmail } from 'react-icons/tfi'
import { SlLocationPin } from 'react-icons/sl'

function Footer() {
	return (
		<footer className='group container relative my-12 grid  grid-flow-col grid-cols-9 gap-2   overflow-hidden rounded-t-3xl bg-sky-100 p-6 text-gray-50 shadow-inner shadow-gray-50 ring-2 backdrop-blur-sm group-hover:duration-500 dark:bg-slate-900 dark:ring-0'>
			<div className='col-span-2'>
				<Image
					src={'/assets/logo.png'}
					alt='logo'
					width={200}
					height={200}
					className='object-cover'
					loading='lazy'
				/>
				<h1 className='ml-2 font-space-grotesk font-bold text-black dark:text-white'>
					International <span className='text-blue-500'>University</span> of{' '}
					<br />
					Tourism and Cultural Heritage
				</h1>
			</div>
			<div className='col-span-4 grid grid-cols-2 gap-2'>
				<div className='col-span-1 ml-2 flex flex-col gap-4 font-serif'>
					<h2 className='text-start text-3xl font-bold text-blue-500'>
						Havolalar
					</h2>
					<div className='z-10 flex flex-col text-6xl font-extrabold duration-500 before:absolute before:left-56 before:top-20 before:-z-10 before:size-20 before:rounded-full before:bg-sky-400 before:blur-xl before:duration-500 after:absolute after:bottom-44 after:left-96 after:-z-10 after:size-20 after:rounded-full after:bg-green-400 after:blur-xl after:duration-500 group-hover:before:-translate-y-11 group-hover:before:translate-x-11 group-hover:after:translate-x-24 group-hover:after:translate-y-16'></div>
					<div className='z-10 flex flex-col text-6xl font-extrabold duration-500 before:absolute before:right-96 before:top-28 before:-z-10 before:size-32 before:rounded-full before:bg-blue-200 before:blur-2xl before:duration-700 after:absolute after:bottom-32 after:left-10 after:-z-10 after:size-12 after:rounded-full after:bg-sky-400 after:blur-xl after:duration-500 group-hover:before:-translate-y-11 group-hover:before:translate-x-11 group-hover:after:translate-x-11 group-hover:after:translate-y-16'></div>
					{navlink.map(item => (
						<Link
							href={item.route}
							key={item.label}
							className='font-semibold text-black dark:text-white'
						>
							{item.label}
						</Link>
					))}
				</div>
				<div className='col-span-1'>
					<div className='z-10 flex flex-col text-6xl font-extrabold duration-500 before:absolute before:right-1/2 before:top-10 before:-z-10 before:size-32 before:rounded-full before:bg-yellow-200 before:blur-2xl before:duration-700 after:absolute after:bottom-32 after:left-40 after:-z-10 after:size-20 after:rounded-full after:bg-red-400 after:blur-xl after:duration-500 group-hover:before:-translate-x-9 group-hover:before:-translate-y-11 group-hover:after:translate-x-32 group-hover:after:translate-y-16'></div>
					<h2 className='text-start text-3xl font-bold text-blue-500'>
						Contact
					</h2>
					<div className='flex flex-col items-start gap-2 p-2 font-semibold text-black dark:text-white'>
						<div className='flex items-center justify-center gap-2'>
							<FaPhoneVolume />
							<span>+99866 240-67-68</span>
						</div>
						<div className='flex items-center justify-center gap-2'>
							<TfiEmail />
							<Link href={'info@univ-silkroad.uz'}>info@univ-silkroad.uz</Link>
						</div>
					</div>
					<div className='mt-10 flex flex-col items-center justify-center gap-0 font-bold'>
						<span className='text-black dark:text-white '>
							Ijtimoiy Tarmoqlar:
						</span>
						<FloatingDockDemo />
					</div>
				</div>
			</div>
			<div className='col-span-3 text-4xl'>
				<h2 className='text-start text-3xl font-bold text-blue-500'>Manzil</h2>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.23345321683!2d66.95548167548847!3d39.64446030228089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19cb14364aa7%3A0x5744a105b44f5139!2s%22Ipak%20yo%E2%80%98li%22%20turizm%20va%20madaniy%20meros%20xalqaro%20universiteti!5e0!3m2!1sen!2s!4v1728451383312!5m2!1sen!2s'
					className='h-44 w-full rounded-2xl'
					loading='lazy'
					title='joylashuv'
				></iframe>
				<div className='mt-4 flex items-center justify-center gap-2 font-serif text-black dark:text-white'>
					<span>
						<SlLocationPin className='text-blue-500' />
					</span>
					<p className='text-sm'>
						University Boulevard 17 str, 140104, Samarqand Region
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
