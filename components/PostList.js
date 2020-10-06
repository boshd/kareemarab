import Link from 'next/link'

export default function PostList({ posts }) {
	if (posts === 'undefined') return null

	return (
		<div>
			{!posts && <div>No posts (yet)!</div>}
			<ul>
				{posts &&
					posts.map((post) => {
						return (
							<li key={post.slug}>
								<Link href={{ pathname: `/post/${post.slug}` }}>
									<h2><a>{post.frontmatter.title}</a></h2>
									{/* <h4>{post.frontmatter.date}</h4> */}
								</Link>
							</li>
						)
					})}
			</ul>
		</div>
	)
}
