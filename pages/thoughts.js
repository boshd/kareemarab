import React from 'react'
import PostLayout from '../layouts/post'
import { getConfig, getAllPosts } from '../api/index'

import Head from 'next/head'
import Link from 'next/link'

export default function ThoughtsPage(props) {
	return (
		<PostLayout title={props.title} description={props.description}>
			kareem's apprehension
			<p>List of posts:</p>
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
			<article>
				<h1>{props.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: props.content }} />
				<div>
					<Link href="/">
						<a>Home</a>
					</Link>
				</div>
			</article>
		</PostLayout>
	)
}

export async function getStaticProps() {
	const config = await getConfig()
	const allPosts = await getAllPosts()
	return {
	  props: {
		posts: allPosts,
		title: config.title,
		description: config.description
	  }
	}
}
