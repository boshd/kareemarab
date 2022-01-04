import Layout from '../layouts/Layout'
import PostList from '@components/PostList'

import getPosts from '@utils/getPosts'

const ThoughtsPage = ({ posts, title, description, ...props }) => {
	return (
		<Layout title={props.title} description={props.description}>
			<div className="thoughts-container">
				<h1 className="title">miscellaneous thoughts</h1>

				<p>
					Welcome to mind 🧠. In this incoherent series of notes I try to explain things to myself in an attempt
					to develop a profound understanding of different subjects shallow or otherwise. My thoughts are
					highly irrational and riddled with flaws and biases so read at your own risk.
				</p>

				{/* <p>site still under construction</p> */}
				{/* <p className="description">{description}</p> */}

				{/* <main> */}
				<PostList posts={posts} />
				{/* </main> */}
			</div>
		</Layout>
	)
}

export default ThoughtsPage

export async function getStaticProps() {
	// const configData = await import(`../siteconfig.json`)

	const posts = ((context) => {
		return getPosts(context)
	})(require.context('../posts', true, /\.md$/))

	return {
		props: {
			posts,
		},
	}
}
