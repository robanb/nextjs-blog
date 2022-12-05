function HomePage() {
	console.log("HOme page Rendered");
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<a href="/about">About</a>
						</li>
						{/* <li></li>
						<li></li> */}
					</ul>
				</nav>
			</header>
			<main>
				<h1>My Blog</h1>
			</main>
		</>
	);
}
export default HomePage;
