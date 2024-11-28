'use client'
import React from 'react'
import Breadcrumbbook from './_components/breadcrumbbook'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { GiFeather } from 'react-icons/gi'
import { toast } from 'sonner'
import { PiWarningOctagonBold } from 'react-icons/pi'

function Page() {
	return (
		<>
			<div className='mt-24 '>
				<Breadcrumbbook />
				<div className='container grid grid-cols-5 gap-4 p-4 '>
					<div className='col-span-2 flex flex-col items-start justify-center'>
						<Image
							src={'/books/book1.jpg'}
							alt='image'
							width={400}
							height={400}
							className=' m-2 aspect-9/12 rounded-xl  object-cover'
						/>
						<div className='m-2 flex gap-2'>
							<Button
								className='w-48 font-bold tracking-wide'
								onClick={() =>
									toast(
										<div className=' flex items-center justify-center gap-4 text-white'>
											<PiWarningOctagonBold className='text-2xl ' />
											<p>Yuklab olish uchun ro&apos;yxatdan o&apos;ting</p>
										</div>,
										{
											style: {
												backgroundColor: 'rgb(220, 38, 38)',
												fontSize: '1rem',
												fontWeight: 'initial',
											},
										}
									)
								}
							>
								Yuklab olish
							</Button>
							<Button className='w-48 font-bold tracking-wide'>
								Sevimlilarga Qo&apos;shish
							</Button>
						</div>
					</div>
					<div className='col-span-3'>
						<div className='flex flex-col  items-start justify-start gap-1'>
							<h3 className='font-serif text-5xl font-bold'>
								Farhod va Shirin
							</h3>
							<div className='flex items-center justify-start gap-2'>
								<GiFeather className='mb-2 text-4xl text-blue-500' />
								<p className='font-serif text-2xl font-semibold'>
									Alisher Navoiy
								</p>
							</div>

							<div className='relative mt-3 w-3/4'>
								<div className='flex items-center justify-start gap-2'>
									<p className='font-semibold'>ISBN</p>
									<span className='absolute left-60 w-60'>
										978-9943-10-128-9
									</span>
								</div>
								<div className='h-px border bg-zinc-500'></div>
							</div>
							<div className='relative mt-3 w-3/4'>
								<div className='flex items-center justify-start gap-2'>
									<p className='font-semibold'>UDK</p>
									<span className='absolute left-60  w-60'>634(575.1)</span>
								</div>
								<div className='h-px border bg-zinc-500'></div>
							</div>
							<div className='relative mt-3 w-3/4'>
								<div className='flex items-center justify-start gap-2'>
									<p className='font-semibold'>Tili</p>
									<span className='absolute left-60  w-60'>O&apos;zbek</span>
								</div>
								<div className='h-px border bg-zinc-500'></div>
							</div>
							<div className='relative mt-3 w-3/4'>
								<div className='flex items-center justify-start gap-2'>
									<p className='font-semibold'>Nashriyot</p>
									<span className='absolute left-60  w-60'>Sharq</span>
								</div>
								<div className='h-px border bg-zinc-500'></div>
							</div>
							<div className='relative mt-3 w-3/4'>
								<div className='flex items-center justify-start gap-2'>
									<p className='font-semibold'>Adadi</p>
									<span className='absolute left-60  w-60'>3000</span>
								</div>
								<div className='h-px border bg-zinc-500'></div>
							</div>
							<div className='relative mt-3 w-3/4'>
								<div className='flex items-center justify-start gap-2'>
									<p className='font-semibold'>Sahifalar soni </p>
									<span className='absolute left-60  w-60'>520</span>
								</div>
								<div className='h-px border bg-zinc-500'></div>
							</div>
							<div className='relative mt-3 w-3/4'>
								<div className='flex items-center justify-start gap-2'>
									<p className='font-semibold'>Teglar</p>
									<span className='absolute left-60  w-60'>
										badiiy adabiyot
									</span>
								</div>
								<div className='h-px border bg-zinc-500'></div>
							</div>
							<div className='relative mt-3 w-3/4'>
								<div className='flex items-center justify-start gap-2'>
									<p className='font-semibold'>Chop etilgan yili</p>
									<span className='absolute left-60 w-60'>2022</span>
								</div>
								<div className='h-px border bg-zinc-500'></div>
							</div>
							<div className='mt-3 flex flex-col items-start gap-2'>
								<h1 className='font-semibold'>Annotatsiya:</h1>
								<p className='w-4/5 text-wrap indent-8'>
									“Farhod va Shirin” haqiqiy sevgi-muhabbat, vafo va sadoqat,
									doʻstlik va insonparvarlik gʻoyalari qatorida, kasb-hunar
									oʻrganishning foydalari, shohlar va ularning saltanatlari,
									shohlik tartib-qoidalari haqidagi keng qamrovli, ibratli
									rivoyatlarga boy dostondir. Ikki oshiqning begʻubor sevgisi va
									sevishganlarning fojiali taqdiri nihoyatda mahzunlik bilan
									kuylangani uchun bu doston asrlar oshsa ham sevib oʻqib
									kelinmoqda.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
