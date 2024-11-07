import Link from 'next/link'
import { HiMiniInformationCircle } from 'react-icons/hi2'
import { MdHistoryEdu } from 'react-icons/md'
import { PiStudentBold } from 'react-icons/pi'

export const ProductItemCenter = () => {
	return (
		<div className='flex items-center justify-center gap-4 '>
			<Link
				href={'/center-about'}
				className='flex h-52 w-44  flex-col items-center justify-center gap-2 space-y-1 rounded-md border ring-2 hover:bg-blue-200 hover:dark:bg-slate-800'
			>
				<div className='size-36'>
					<HiMiniInformationCircle className='mx-auto flex size-3/4 items-center justify-center text-blue-400' />
				</div>
				<p className='mb-1 text-center'>Markaz haqida</p>
			</Link>
			<Link
				href={'/center-history'}
				className='flex h-52 w-44  flex-col items-center justify-center gap-2 space-y-1 rounded-md border text-center ring-2 hover:bg-blue-200 hover:dark:bg-slate-800'
			>
				<div className='size-36'>
					<MdHistoryEdu className='mx-auto flex size-3/4 items-center justify-center text-blue-400' />
				</div>
				<p className='mb-1 text-center'>Markazning tarixi</p>
			</Link>
			<Link
				href={'/arm-terms'}
				className='flex h-52 w-44 flex-col items-center justify-center gap-2 space-y-1 rounded-md border ring-2 hover:bg-blue-200 hover:dark:bg-slate-600  '
			>
				<div className='size-36'>
					<PiStudentBold className='mx-auto flex size-3/4 items-center justify-center text-blue-400' />
				</div>
				<p className='mb-1  text-center'>ARM dan foydalanish qoidalari</p>
			</Link>
		</div>
	)
}
