import Layout from '../../layouts/Layout'
import Head from 'next/head'
import { getPostBySlug, getAllPosts } from '../../api/index'

export default function Post(props) {
	// return <PostLayout title={props.title} content={props.content}/>
	return (
		<Layout>
			<Head>
				<title>{props.title}</title>
				dsdsdfsdfs
			</Head>
			{/* <style>body { max-width: 42em }</style> */}
			<article class='post' >
				<div class='post-heading'>
					<h1 class="post-title">{ props.title }</h1>
					<time datetime="{{ page.date | date_to_xmlschema }}" class="post-date">

					</time>
				</div>
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