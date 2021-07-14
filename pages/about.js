import React from 'react'
import Layout from '../layouts/Layout'

export default function AboutPage() {
	return (
		<Layout>
			<div className="entry">
				<h1>About me 🙋‍♂️</h1>
				<p>
					Hey, I'm Kareem. I'm currently a Full Stack Developer @ Amadeus. My mainly
					interested in iOS, backend, statistics, and machine
					learning. I currently reside in Ottawa - Canada's
					Capital.

					<br/><br/>

					I'm also currently building a really cool private events app. If you
					would like to test it out, you can sign up <a href='https://forms.gle/eoCN5hkBV9tPfLu37'>here</a>.
				</p>

				<h3 id="contact-me">Get in touch</h3>
				<p>
					<a href="mailto:me@kareemarab.com">me@kareemarab.com</a>
				</p>
			</div>
		</Layout>
	)
}
