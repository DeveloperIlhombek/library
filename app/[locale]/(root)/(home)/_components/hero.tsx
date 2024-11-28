import React from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
function Hero() {
	const t = useTranslations('HomePage')
	return (
		<div className='mt-24'>
			<h1>{t('title')}</h1>
			<Link href='/center-about'>{t('about')}</Link>
		</div>
	)
}

export default Hero
