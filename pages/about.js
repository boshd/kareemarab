import React from 'react'
import Layout from '../layouts/Layout'

export default function AboutPage() {
	return (
		<Layout>
			<div class="entry">
				<h1>About me 🙋‍♂️</h1>
				<p>
					Hey, I'm Kareem. I'm a recent Computer Science grad from
					Carleton University. I currently work
					<a href="www.neurovine.ai"> @Neurovine</a> - where we're trying to
					leverage software and ai to aid concussion patients with
					their recovery process. My main intersts are in software
					engineering, statistics, machine learning and a bit of music
					composition. I currently live in Ottawa - Canada's Capital.
				</p>

				<h3 id="contact-me">Get in touch</h3>
				<p>
					<a href="mailto:me@kareemarab.com">me@kareemarab.com</a>
				</p>
			</div>
		</Layout>
	)
}
