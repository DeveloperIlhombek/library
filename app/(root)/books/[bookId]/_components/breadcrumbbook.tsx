'use client'
import React from 'react'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useTheme } from 'next-themes'

function Breadcrumbbook() {
	const { resolvedTheme } = useTheme()
	return (
		<>
			<div
				className={cn(
					`h-14 border p-2 font-semibold`,
					resolvedTheme === 'dark'
						? 'bg-gradient-to-r from-blue-900/90 to-sky-300'
						: 'bg-gradient-to-r from-pink-500/50 to-blue-500'
				)}
			>
				<Breadcrumb className='container'>
					<BreadcrumbList className='font-serif text-2xl'>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href='/'>Home</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href='/books'>Books</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href='/books/slug'>Current book</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
		</>
	)
}

export default Breadcrumbbook
