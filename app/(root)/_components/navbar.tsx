'use client'
import { sections } from '@/constanta'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ModeToggle from '@/components/shared/mode-toggle'
import Image from 'next/image'
import { MdManageSearch } from 'react-icons/md'
import {
	HoveredLink,
	Menu,
	MenuItem,
	ProductforSections,
} from '@/components/ui/navbar-menu' // Import Menu and MenuItem
import { useState } from 'react'
import { ProductItemCenter } from '@/components/ui/product-item-center'
import { ProductItemEbook } from '@/components/ui/productitem-ebook'

function Navbar() {
	const [active, setActive] = useState<string | null>(null) // State to track active item

	return (
		<header className='fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-white/10 backdrop-blur-md backdrop-brightness-150'>
			<div className='mx-8'>
				<div className='flex justify-between border-white/15 p-2.5'>
					<div>
						<Link href={'/'}>
							<Image
								src={'/assets/tourism-logo.png'}
								alt='logo'
								width={200}
								height={200}
								priority
							/>
						</Link>
					</div>

					{/* Use Menu with navlink items */}
					<Menu setActive={setActive}>
						<MenuItem setActive={setActive} active={active} item='Bosh sahifa'>
							<div className='flex flex-col gap-3'>
								<HoveredLink href='/'>Link1</HoveredLink>
								<HoveredLink href='/'>Link2</HoveredLink>
							</div>
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
					<div className='flex items-center gap-4'>
						<Button
							className='border-spacing-2 rounded-md border p-1 text-3xl shadow-[0px_0px_12px_#0959a9]'
							variant={'ghost'}
							aria-label='search'
						>
							<MdManageSearch />
						</Button>
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
