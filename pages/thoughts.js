import Layout from '../layouts/Layout'
import PostList from '@components/PostList'

import getPosts from '@utils/getPosts'

const ThoughtsPage = ({ posts, title, description, ...props }) => {
	return (
		<Layout title={props.title} description={props.description}>
			<div className="thoughts-container">
				<h1 className="title">miscellaneous thoughts</h1>
				<p>site still under construction</p>
				{/* <p className="description">{description}</p> */}
				{/* <main> */}
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
