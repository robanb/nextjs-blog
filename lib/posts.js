import { readFile } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getPost(slug) {
	const source = await readFile(`content/posts/${slug}.md`, "utf-8");
	const {
		data: { date, title },
		content,
	} = matter(source);
	const body = marked(content);
	return { date, title, body };
}
