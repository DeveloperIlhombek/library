import Image from 'next/image'

interface Props {
	imagesrc: string
	title: string
	description: string
}

function PostCard({ description, imagesrc, title }: Props) {
	return (
		<>
			<div className='relative flex flex-col items-center justify-center gap-2'>
				<div className='h-1/2'>
					<Image src={imagesrc} alt={title} width={200} height={200} />
				</div>
				<div>{title}</div>
				<div>{description}</div>
			</div>
		</>
	)
}

export default PostCard
