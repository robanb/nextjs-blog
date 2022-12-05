import NavBar from "../components/NavBar";
function HomePage() {
	console.log("HOme page Rendered");
	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<h1>My Blog</h1>
			</main>
		</>
	);
}
export default HomePage;
