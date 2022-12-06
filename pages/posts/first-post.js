import Head from "next/head";
import { getPost } from "../../lib/posts";

// Executed only in server side
export async function getStaticProps() {
	console.log("[FirstPostPage] getStaticProps()");
	const post = await getPost("first-post");

	return {
		props: {
			post,
		},
	};
}

// Executed in client side
function PostPage({ post }) {
	console.log("[FirstPostPage] render: ", post);
	return (
		<>
			<Head>
				<title>{post.title} -My Blog</title>
				<meta name="description" value="This is my about page" />
			</Head>
			<main>
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
