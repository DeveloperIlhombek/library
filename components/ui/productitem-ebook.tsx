import Link from 'next/link'
import { FaBookOpen } from 'react-icons/fa6'
import { GiBookshelf, GiMaterialsScience, GiBookmarklet } from 'react-icons/gi'
import { SlBookOpen } from 'react-icons/sl'
import { GrDatabase } from 'react-icons/gr'
export const ProductItemEbook = () => {
	return (
		<div className='flex items-center justify-center gap-4 '>
			<Link
				href={'/'}
				className='flex h-52 w-44  flex-col items-center justify-center gap-2 space-y-1 rounded-md border ring-2 hover:bg-blue-200 hover:dark:bg-slate-800'
			>
				<div className='size-36'>
					<FaBookOpen className='mx-auto flex size-3/4 items-center justify-center text-blue-400' />
				</div>
				<p className='mb-1 text-center'>Adabiyotlar</p>
			</Link>
			<Link
				href={'/'}
				className='flex h-52 w-44  flex-col items-center justify-center gap-2 space-y-1 rounded-md border text-center ring-2 hover:bg-blue-200 hover:dark:bg-slate-800'
			>
				<div className='size-36'>
					<GiBookshelf className='mx-auto flex size-3/4 items-center justify-center text-blue-400' />
				</div>
				<p className='mb-1 text-center'>Maqolalar</p>
			</Link>
			<Link
				href={'/'}
				className='flex h-52 w-44 flex-col items-center justify-center gap-2 space-y-1 rounded-md border ring-2 hover:bg-blue-200 hover:dark:bg-slate-600  '
			>
				<div className='size-36'>
					<GiMaterialsScience className='mx-auto flex size-3/4 items-center justify-center text-blue-400' />
				</div>
				<p className='mb-1  text-center'>Dissertatsiyalar</p>
			</Link>
			<Link
				href={'/'}
				className='flex h-52 w-44 flex-col items-center justify-center gap-2 space-y-1 rounded-md border ring-2 hover:bg-blue-200 hover:dark:bg-slate-600  '
			>
				<div className='size-36'>
					<SlBookOpen className='mx-auto flex size-3/4 items-center justify-center text-blue-400' />
				</div>
				<p className='mb-1  text-center'>Monografiyalar</p>
			</Link>

			<Link
				href={'/'}
				className='flex h-52 w-44 flex-col items-center justify-center gap-2 space-y-1 rounded-md border ring-2 hover:bg-blue-200 hover:dark:bg-slate-600  '
			>
				<div className='size-36'>
					<GiBookmarklet className='mx-auto flex size-3/4 items-center justify-center text-blue-400' />
				</div>
				<p className='mb-1  text-center'>Qo&apos;lyozmalar</p>
			</Link>
			<Link
				href={'/'}
				className='flex h-52 w-44 flex-col items-center justify-center gap-2 space-y-1 rounded-md border ring-2 hover:bg-blue-200 hover:dark:bg-slate-600  '
			>
				<div className='size-36'>
					<GrDatabase className='mx-auto flex size-3/4 items-center justify-center text-blue-400' />
				</div>
				<p className='mb-1  text-center'>
					Xalqaro Ilmiy ma&apos;lumotlar manbai
				</p>
			</Link>
		</div>
	)
}
