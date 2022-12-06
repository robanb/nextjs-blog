import { useState } from "react";
import DarkTheme from "./DarkTheme";

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
			{darkMode && <DarkTheme />}
		</>
	);
}

export default ThemeSwitch;
