import Head from "next/head";
import { readFile } from "fs/promises";

// Executed only in server side
export async function getStaticProps() {
	console.log("[FirstPostPage] getStaticProps()");
	const data = await readFile("content/posts/first-post.json", "utf-8");
	const post = JSON.parse(data);
	return {
		props: {
			post
		},
	};
}

// Executed in client side
function PostPage({post}) {
	console.log("[FirstPostPage] render: ", post);
	return (
		<>
			<Head>
				<title>{post.title} -My Blog</title>
				<meta name="description" value="This is my about page" />
			</Head>
			<main>
				<h1>{post.title}</h1>
				<p>{post.body}</p>
			</main>
		</>
	);
}
export default PostPage;
