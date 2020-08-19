import Layout from '../../layouts/Layout'
import { getPostBySlug, getAllPosts } from '../../api/index'
// '../layouts/Layout'
export default function Post(props) {
	return <Layout title={props.title} content={props.content} />
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
		fallback: false,
	}
}