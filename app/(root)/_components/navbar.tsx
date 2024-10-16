'use client'
import { navlink } from '@/constanta'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import ModeToggle from '@/components/shared/mode-toggle'
import Image from 'next/image'
import { MdManageSearch } from 'react-icons/md'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import { usePathname } from 'next/navigation'

function Navbar() {
	const [isVisible, setIsVisible] = useState(false)
	const newsRef = useRef<HTMLDivElement | null>(null)
	const pathname = usePathname()
	useEffect(() => {
		const currentRef = newsRef.current
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setIsVisible(true)
					} else {
						setIsVisible(false)
					}
				})
			},
			{
				threshold: 1,
			}
		)

		if (currentRef) {
			observer.observe(currentRef)
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef)
			}
		}
	}, [])

	return (
		<header
			className={
				'fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-white/10 backdrop-blur-md backdrop-brightness-150'
			}
			ref={newsRef}
		>
			<div className='mx-8'>
				<div className='flex justify-between border-white/15 p-2.5'>
					<div>
						<Link href={'/'}>
							<Image
								src={'/assets/logo2.svg'}
								alt='logo'
								width={200}
								height={200}
								priority
							/>
						</Link>
					</div>
					<nav className='flex gap-8 rounded-lg border border-white/10 bg-transparent p-2 shadow-[0px_0px_12px_#0959a9] transition'>
						<RoughNotationGroup show={isVisible}>
							{navlink.map(item => (
								<Link
									key={item.route}
									href={item.route}
									className='font-serif text-xl font-bold'
								>
									{pathname === item.route ? (
										<RoughNotation
											type='highlight'
											show={isVisible}
											color='#2d90f3'
										>
											{item.label}
										</RoughNotation>
									) : (
										item.label
									)}
								</Link>
							))}
						</RoughNotationGroup>
					</nav>
					<div className='flex items-center gap-4'>
						<Button
							className='border-spacing-2 rounded-md border p-1 text-3xl shadow-[0px_0px_12px_#0959a9]'
							variant={'ghost'}
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
