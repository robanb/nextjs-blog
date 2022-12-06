import Head from "next/head";
import { getPost } from "../../lib/posts";

// adding dynamic path to different pages
export async function getStaticPaths() {
	return {
		paths: [
			{ params: { slug: "first-post" } },
			{ params: { slug: "second-post" } },
		],
		fallback: false,
	};
}

// Executed only in server side
export async function getStaticProps({ params: { slug } }) {
	console.log("[PostPage] getStaticProps(): ", slug);
	const post = await getPost(slug);

	return {
		props: {
			post,
		},
	};
}

// Executed in client side
function PostPage({ post }) {
	console.log("[PostPage] render: ", post);
	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta name="description" value="This is my about page" />
			</Head>
			<main>
				<p>{post.date}</p>
				<h1>{post.title}</h1>
				<article
					dangerouslySetInnerHTML={{
						__html: post.body,
					}}
				/>
			</main>
		</>
	);
}
export default PostPage;
