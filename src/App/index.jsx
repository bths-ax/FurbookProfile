import takotaProfile from './assets/takota.png'
import './index.css'

export default function App() {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<a className='navbar-brand' href='#'>
					Furbook
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarTogglerDemo02'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div
					className='collapse navbar-collapse'
					id='navbarTogglerDemo02'
				>
					<ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
						<li className='nav-item active'>
							<a className='nav-link' href='#'>
								Home <span className='sr-only'>(current)</span>
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Post
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Pet
							</a>
						</li>
					</ul>
					<form className='form-inline my-2 my-lg-0'>
						<input
							className='form-control mr-sm-2'
							type='search'
							placeholder='Find friends...'
						/>
						<button
							className='btn btn-outline-secondary my-2 my-sm-0'
							type='submit'
						>
							Sniff
						</button>
					</form>
				</div>
			</nav>

			<div className='container'>
				<div className='row'>
					<div className='col-4 picture-box'>
						<img src={takotaProfile} className='pic' />
						<h3>Takota McConner</h3>
						<p className='list-group-item'>
							&quot;Laziness is nothing more than the habit of
							resting before you get tired.&quot; -Jules Renard
						</p>
					</div>

					<div className='col-7 offset-1 about-box'>
						<ul className='list-group'>
							<p className='list-group-item heading'>About</p>
							<p className='list-group-item'>Age: 12</p>
							<p className='list-group-item'>Occupation: Pet</p>
							<p className='list-group-item'>
								Education: Wild Cat Academy
							</p>
							<p className='list-group-item'>
								Favorite Bands: Cat Stevens, Def Leopard, Atomic
								Kitten, Lionel Ritchie
							</p>
							<p className='list-group-item'>
								Contact Info: Meow at me at the fence behind
								Burger King on 242nd and Broadway
							</p>
							<p className='list-group-item'>
								Relationship Status: Single
							</p>
							<p className='list-group-item'>
								Places Lived: Paris, France and Bronx, New York
							</p>
						</ul>
					</div>
				</div>

				<div className='row'>
					<div className='col-12'>
						<div className='list-group'>
							<a
								href='#'
								className='list-group-item list-group-item-action active'
							>
								<div>
									<h5>Recent Posts</h5>
								</div>
							</a>
							<a
								href='#'
								className='list-group-item list-group-item-action'
							>
								<div>
									<h5>Takota McConner Says:</h5>
									<small className='text-muted'>
										3 days ago
									</small>
								</div>
								<p>
									Did nothing today, just layed around and ate
									food #bestdayever
								</p>
								<input placeholder='comment..' />
							</a>
							<a
								href='#'
								className='list-group-item list-group-item-action'
							>
								<div>
									<h5>Takota McConner Says:</h5>
									<small className='text-muted'>
										4 days ago
									</small>
								</div>
								<p>
									Didn&apos;t do much today, just layed around
									and ate food #yolo
								</p>
								<input placeholder='comment..' />
							</a>
							<a
								href='#'
								className='list-group-item list-group-item-action'
							>
								<div>
									<h5>Takota McConner Says:</h5>
									<small className='text-muted'>
										7 days ago
									</small>
								</div>
								<p>
									Nothing accomplished today, just layed
									around and ate food #livingmybestlife
								</p>
								<input placeholder='comment..' />
							</a>
							<a
								href='#'
								className='list-group-item list-group-item-action'
							>
								<div>
									<h5>Takota McConner Says:</h5>
									<small className='text-muted'>
										8 days ago
									</small>
								</div>
								<p>
									Slept all day and ate a few meals
									#killingthegame
								</p>
								<input placeholder='comment..' />
							</a>
							<a
								href='#'
								className='list-group-item list-group-item-action'
							>
								<div>
									<h5>Takota McConner Says:</h5>
									<small className='text-muted'>
										12 days ago
									</small>
								</div>
								<p>
									Was taken to the vet - considering puking in
									my owners shoes. Opinions?
								</p>
								<input type='text' placeholder=' comment..' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
