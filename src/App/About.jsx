import takotaProfile from './assets/takota.png'

// eslint-disable-next-line react/prop-types
function AboutHeading({ title }) {
	return <p className='list-group-item heading'>{title}</p>
}

// eslint-disable-next-line react/prop-types
function AboutItem({ title, desc }) {
	return (
		<p className='list-group-item'>
			{title}: {desc}
		</p>
	)
}

export default function About() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-4 picture-box'>
					<img src={takotaProfile} className='pic' />
					<h3>Takota McConner</h3>
					<p className='list-group-item'>
						&quot;Laziness is nothing more than the habit of resting
						before you get tired.&quot; -Jules Renard
					</p>
				</div>

				<div className='col-7 offset-1 about-box'>
					<ul className='list-group'>
						<AboutHeading title='About' />
						<AboutItem title='Occupation' desc='Pet' />
						<AboutItem title='Education' desc='Wild Cat Academy' />
						<AboutItem
							title='Favorite Bands'
							desc='Cat Stevens, Def Leopard, Atomic Kitten, Lionel Ritchie'
						/>
						<AboutItem
							title='Contact Info'
							desc='Meow at me at the fence behind Burger King on 242nd and Broadway'
						/>
						<AboutItem title='Relationship Status' desc='Single' />
						<AboutItem
							title='Places Lived'
							desc='Paris, France and Bronx, New York'
						/>
					</ul>
				</div>
			</div>
		</div>
	)
}
