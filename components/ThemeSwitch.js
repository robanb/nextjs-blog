import { useState } from "react";

function ThemeSwitch() {
	const [darkMode, setDarkMode] = useState(false);
	const mode = darkMode ? "Light Mode" : "Dark Mode";
	return (
		<>
			<button onClick={() => setDarkMode(!darkMode)}>{mode}</button>
			<style jsx>
				{`
					button {
						background: none;
						border: none;
						cursor: pointer;
						font-weight: bold;
						color: inherit;
					}
				`}
			</style>
		</>
	);
}

export default ThemeSwitch;
