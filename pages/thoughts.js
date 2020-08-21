import React from 'react'
import PostLayout from '../layouts/Layout'
import { getConfig, getAllPosts } from '../api/index'

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../layouts/Layout'

export default function ThoughtsPage(props) {
	return (
		<Layout title={props.title} description={props.description}>
			<ul>
				{props.posts.map(function (post, idx) {
					return (
						<li key={idx}>
							<Link href={'/posts/' + post.slug}>
								<a>{post.title}</a>
							</Link>
						</li>
					)
				})}
			</ul>
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
