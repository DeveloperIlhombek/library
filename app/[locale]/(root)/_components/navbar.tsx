'use client'
import { boshsahifa, sections } from '@/constanta'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ModeToggle from '@/components/shared/mode-toggle'
import Image from 'next/image'
import {
	HoveredLink,
	Menu,
	MenuItem,
	ProductforSections,
} from '@/components/ui/navbar-menu'
import { useState } from 'react'
import { ProductItemCenter } from '@/components/ui/product-item-center'
import { ProductItemEbook } from '@/components/ui/productitem-ebook'
import SearchSheet from '@/components/shared/search-sheet'

function Navbar() {
	const [active, setActive] = useState<string | null>(null)

	return (
		<header className='fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-white/10 backdrop-blur-md backdrop-brightness-150'>
			<div className='mx-8'>
				<div className='flex justify-between border-white/15 p-2.5'>
					<div>
						<Link href={'/'} className='flex items-center justify-center'>
							<Image
								src={'/assets/logo.png'}
								alt='logo'
								width={60}
								height={60}
								priority
							/>
							<h1 className='ml-2 font-space-grotesk font-bold max-md:hidden'>
								International <span className='text-blue-500'>University</span>{' '}
								of <br />
								Tourism and Cultural Heritage
							</h1>
						</Link>
					</div>
					<div className='max-md:hidden'>
						<Menu setActive={setActive}>
							<MenuItem
								setActive={setActive}
								active={active}
								item='Bosh sahifa'
							>
								{boshsahifa.map(item => (
									<HoveredLink key={item.id} href={item.url}>
										{item.name}
									</HoveredLink>
								))}
							</MenuItem>
							<MenuItem setActive={setActive} active={active} item='Markaz'>
								<ProductItemCenter />
							</MenuItem>
							<MenuItem setActive={setActive} active={active} item="Bo'limlar">
								<div className='grid grid-cols-5 gap-3'>
									{sections.map(item => (
										<ProductforSections
											key={item.title}
											title={item.title}
											href={item.href}
											src={item.src}
										/>
									))}
								</div>
							</MenuItem>
							<MenuItem
								setActive={setActive}
								active={active}
								item='Elektron kitoblar'
							>
								<ProductItemEbook />
							</MenuItem>
						</Menu>
					</div>
					<div className='flex items-center gap-4'>
						<SearchSheet />
						<ModeToggle />
						<Button
							className='font-serif shadow-[0px_0px_12px_#0959a9]'
							variant={'ghost'}
						>
							Til tanlash
						</Button>
						<Button
							className='font-serif shadow-[0px_0px_12px_#0959a9]'
							variant={'ghost'}
						>
							Kirish
						</Button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar
