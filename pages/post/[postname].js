import Link from 'next/link'
import matter from 'gray-matter'
import Layout from '@layouts/Layout'
import getSlugs from '@utils/getSlugs'

import MarkdownWithMath from './MarkdownWithMath'

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
	if (!frontmatter) return <></>

	return (
		<>
			<Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
				<div className="back-button">
					←{' '}
					<Link href="/thoughts">
						<a>back</a>
					</Link>
				</div>
				<article className="post-container">
					<span className="subtitle">~{frontmatter.readTime} min read • {frontmatter.date}</span>
					<h1>{frontmatter.title}</h1>
					{frontmatter.hero_image && (
						<img
							src={frontmatter.hero_image}
							className="hero"
							alt={frontmatter.title}
						/>
					)}
					<div>
						<MarkdownWithMath source={markdownBody} />
					</div>
				</article>
			</Layout>
		</>
	)
}

export async function getStaticProps({ ...ctx }) {
	const { postname } = ctx.params

	const content = await import(`../../posts/${postname}.md`)
	// const config = await import(`../../siteconfig.json`)
	const data = matter(content.default)

	return {
		props: {
			// siteTitle: config.title,
			frontmatter: data.data,
			markdownBody: data.content,
		},
	}
}

export async function getStaticPaths() {
	const blogSlugs = ((context) => {
		return getSlugs(context)
	})(require.context('../../posts', true, /\.md$/))

	const paths = blogSlugs.map((slug) => `/post/${slug}`)

	return {
		paths, // An array of path names, and any params
		fallback: false, // so that 404s properly appear if something's not matching
	}
}
