import React from 'react'
import Breadcrumbbook from './_components/breadcrumbbook'
import Image from 'next/image'

function Page() {
	return (
		<>
			<Breadcrumbbook />
			<div className='container grid grid-cols-5 gap-4 border'>
				<div className='col-span-2'>
					<Image
						src={'/books/book5.png'}
						alt='image'
						width={400}
						height={400}
						className=' m-2 rounded-lg object-cover'
					/>
				</div>
				<div className='col-span-3'>
					<div className='flex items-center justify-start gap-4'>
						<h3>Abdulla Qahhor</h3>
						<p>Dahshat</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
