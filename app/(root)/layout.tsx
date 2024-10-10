import { ChildProps } from '@/types'
import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'
import { Separator } from '@/components/ui/separator'

function Layout({ children }: ChildProps) {
	return (
		<main className='relative h-screen'>
			<div className='sticky top-0 z-10'>
				<Navbar />
			</div>
			<div className='overflow-y-hidden'>{children}</div>
			<Separator className='my-2' />
			<Footer />
		</main>
	)
}

export default Layout
