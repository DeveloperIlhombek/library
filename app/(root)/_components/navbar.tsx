import { navlink } from '@/constanta'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import ModeToggle from '@/components/shared/mode-toggle'

function Navbar() {
	return (
		<header className='sticky border-b border-white/15 bg-white/10 py-4 backdrop-blur-md backdrop-brightness-150 md:border-none md:backdrop-filter-none'>
			<div className='mx-8'>
				<div className='flex justify-between border-white/15 p-2.5'>
					<div>
						<h1 className='size-10 w-fit text-4xl font-bold text-orange-500'>
							Silk <span className='text-blue-500'>Road</span> Samarkand
						</h1>
					</div>
					<nav className='flex gap-8 rounded-lg border border-white/10 bg-transparent p-2 shadow-[0px_0px_12px_#FFA500] transition'>
						{navlink.map(item => (
							<Link
								key={item.route}
								href={item.route}
								className='text-xl hover:text-orange-500'
							>
								{item.label}
							</Link>
						))}
					</nav>
					<div className='flex items-center gap-4'>
						<ModeToggle />
						<Button className='relative rounded-lg bg-gradient-to-b from-[#fdb329] to-[#f9ab1b] px-3 py-2 text-sm font-medium text-black shadow-[0px_0px_12px_#FFA500]'>
							Til tanlash
						</Button>
						<Button className='relative rounded-lg bg-gradient-to-b from-[#fdb329] to-[#f9ab1b] px-3 py-2 text-sm font-medium text-black shadow-[0px_0px_12px_#FFA500]'>
							Kirish
						</Button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar
