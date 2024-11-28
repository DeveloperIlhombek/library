import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ['en', 'uz', 'ru'],

	// Used when no locale matches
	defaultLocale: 'uz',
})
export const { Link, redirect, usePathname, useRouter } =
	createNavigation(routing)
