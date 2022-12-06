import NavBar from "../components/NavBar";
import Head from "next/head";
import "../styles/globals.css";

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/cons/favicon.ico" />
			</Head>
			<header>
				<NavBar />
			</header>
			<Component {...pageProps} />
		</>
	);
}

export default App;
