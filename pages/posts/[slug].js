import Layout from '../../layouts/Layout'
import Head from 'next/head'
import { getPostBySlug, getAllPosts } from '../../api/index'

export default function Post(props) {
	// return <PostLayout title={props.title} content={props.content}/>
	return (
		<Layout>
			<Head>
				<title>{props.title}</title>
			</Head>
			<article>
				<h1>{props.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: props.content }} />
			</article>
		</Layout>
	)
}

export async function getStaticProps(context) {
	return {
		props: await getPostBySlug(context.params.slug),
	}
}

export async function getStaticPaths() {
	let paths = await getAllPosts()
	paths = paths.map((post) => ({
		params: { slug: post.slug },
	}))
	return {
		paths: paths,
		fallback: false
	}
}