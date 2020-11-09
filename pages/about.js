import React from 'react'
import Layout from '../layouts/Layout'

export default function AboutPage() {
	return (
		<Layout>
			<div className="entry">
				<h1>About me 🙋‍♂️</h1>
				<p>
					Hey, I'm Kareem. I'm a recent Computer Science grad from
					Carleton University. My main intersts are in mobile and
					backend development, statistics, machine learning and a
					bit of music composition. I currently live in Ottawa -
					Canada's Capital.
				</p>

				<h3 id="contact-me">Get in touch</h3>
				<p>
					<a href="mailto:me@kareemarab.com">me@kareemarab.com</a>
				</p>
			</div>
		</Layout>
	)
}
