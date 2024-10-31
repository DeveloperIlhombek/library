import Link from 'next/link'
import { FaBookOpen } from 'react-icons/fa6'
import { GiBookshelf, GiMaterialsScience, GiBookmarklet } from 'react-icons/gi'
import { SlBookOpen } from 'react-icons/sl'
import { GrDatabase } from 'react-icons/gr'
import React from 'react'

interface ProductLinkProps {
	href: string
	icon: React.ReactNode
	label: string
}

const ProductLink: React.FC<ProductLinkProps> = ({ href, icon, label }) => (
	<Link
		href={href}
		className='flex h-52 w-44  flex-col items-center justify-center gap-2 space-y-1 rounded-md border ring-2 hover:bg-blue-200 hover:dark:bg-slate-800'
	>
		<div className='size-36'>{icon}</div>
		<p className='mb-1 text-center font-serif font-semibold'>{label}</p>
	</Link>
)

export const ProductItemEbook = () => {
	return (
		<div className='flex items-center justify-center gap-4'>
			<ProductLink
				href='/electron-library'
				icon={<FaBookOpen className='mx-auto size-3/4 text-blue-400' />}
				label='Adabiyotlar'
			/>
			<ProductLink
				href='/'
				icon={<GiBookshelf className='mx-auto size-3/4 text-blue-400' />}
				label='Maqolalar'
			/>
			<ProductLink
				href='/'
				icon={<GiMaterialsScience className='mx-auto size-3/4 text-blue-400' />}
				label='Dissertatsiyalar'
			/>
			<ProductLink
				href='/'
				icon={<SlBookOpen className='mx-auto size-3/4 text-blue-400' />}
				label='Monografiyalar'
			/>
			<ProductLink
				href='/'
				icon={<GiBookmarklet className='mx-auto size-3/4 text-blue-400' />}
				label="Qo'lyozmalar"
			/>
			<ProductLink
				href='/'
				icon={<GrDatabase className='mx-auto mt-2 size-3/4 text-blue-400' />}
				label="Xalqaro Ilmiy ma'lumotlar manbai"
			/>
		</div>
	)
}
