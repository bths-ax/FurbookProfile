function PostTitle() {
	return (
		<a href='#' className='list-group-item list-group-item-action active'>
			<div>
				<h5>Recent Posts</h5>
			</div>
		</a>
	)
}

// eslint-disable-next-line react/prop-types
function Post({ author, timestamp, message }) {
	return (
		<a href='#' className='list-group-item list-group-item-action'>
			<div>
				<h5>{author} Says:</h5>
				<small className='text-muted'>{timestamp}</small>
			</div>
			<p>{message}</p>
			<input placeholder='comment..' />
		</a>
	)
}

export default function Posts() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12'>
					<div className='list-group'>
						<PostTitle />
						<Post
							author='Takota McConner'
							timestamp='3 days ago'
							message='Did nothing today, just layed around and ate food #bestdayever'
						/>
						<Post
							author='Takota McConner'
							timestamp='4 days ago'
							message="Didn't do much today, just layed around and ate food #yolo"
						/>
						<Post
							author='Takota McConner'
							timestamp='7 days ago'
							message='Nothing accomplished today, just layed around and ate food #livingmybestlife'
						/>
						<Post
							author='Takota McConner'
							timestamp='8 days ago'
							message='Slept all day and ate a few meals #killingthegame'
						/>
						<Post
							author='Takota McConner'
							timestamp='12 days ago'
							message='Was taken to the vet - considering puking in my owners shoes. Opinions?'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
