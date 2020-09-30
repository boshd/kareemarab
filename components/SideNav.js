import React, { Component } from 'react'
import Link from 'next/link'
import config from '../data/config'

export default class SideNav extends Component {
	render() {
		return (
			<nav className="sidenav-container">
				<div className="links-container">
					<ul>
						{config.menuLinks.map((link) => (
							<li>
								<Link href={link.link}>
									<a>{link.name}</a>
								</Link>
							</li>
						))}
						<li>
							<a href="https://github.com/kareemarab">projects</a>
						</li>
						<li>
							<a href="https://vimeo.com/kareemarab">film</a>
						</li>
						<li>
							<a href="https://soundcloud.com/itsmeka">music</a>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}
