'use client'
import PostCard from '@/components/ui/post-card'
import { postItems } from '@/constanta'

function Posts() {
	return (
		<>
			<div className='my-4 overflow-hidden' id='posts'>
				<div>
					<h1 className='text-center text-5xl text-blue-500'> Postlar</h1>
				</div>

				<div className='flex items-center justify-center gap-3 border p-6'>
					{postItems.map(item => (
						<PostCard
							description={item.description}
							key={item.title}
							imagesrc={item.imagesrc}
							title={item.title}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default Posts
