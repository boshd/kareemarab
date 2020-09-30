import React from 'react'
import { getConfig, getAllPosts } from '../api/index'

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../layouts/Layout'

export default function ThoughtsPage(props) {
	return (
		<Layout title={props.title} description={props.description}>
			<div className='thoughts-container'>
				<h1>miscellaneous thoughts</h1>
				<ul>
					{props.posts.map(function (post, idx) {
						return (
							<li key={idx}>
								<Link href={'/posts/' + post.slug}>
									<a>{post.title}</a>
								</Link>
								<p>{post.content}</p>
							</li>
						)
					})}
				</ul>
			</div>
		</Layout>
	)
}

export async function getStaticProps() {
	const config = await getConfig()
	const allPosts = await getAllPosts()
	return {
		props: {
			posts: allPosts,
			title: config.title,
			description: config.description,
		},
	}
}
