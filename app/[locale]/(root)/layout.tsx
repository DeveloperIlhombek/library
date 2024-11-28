import { ChildProps } from '@/types'
import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'

function Layout({ children }: ChildProps) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
