import type { Metadata } from 'next'
import './globals.css'
import { Roboto, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/provider/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import React from 'react'

// Google Fonts
const roboto = Roboto({
	subsets: ['latin', 'cyrillic'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-roboto',
})

const spaceGrotesk = SpaceGrotesk({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-space-grotesk',
})

// Metadata
export const metadata: Metadata = {
	title: 'Tourism University',
	description: 'Generated by create next app',
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: { locale: string }
}) {
	// Tilni tasdiqlash va topish
	const { locale } = params
	let messages
	try {
		messages = await getMessages(locale)
	} catch {
		notFound() // Agar noto‘g‘ri til kiritilsa, notFound ni chaqiramiz
	}

	return (
		<html lang={locale}>
			<body
				className={`${roboto.variable} ${spaceGrotesk.variable} overflow-x-hidden antialiased`}
			>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						<Toaster position='top-center' />
						{children}
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}