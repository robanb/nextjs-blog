import { useState } from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode() {
	if (typeof localStorage === "undefined") {
		return false;
	}
	const value = localStorage.getItem("darkMode");
	return value === null ? false : JSON.parse(value);
}

function ThemeSwitch() {
	const [darkMode, setDarkMode] = useState(loadDarkMode);
	const mode = darkMode ? "Light Mode" : "Dark Mode";

	const handleClick = () => {
		setDarkMode(!darkMode);
		localStorage.setItem("darkMode", JSON.stringify(!darkMode));
	};
	return (
		<>
			<button onClick={handleClick} suppressHydrationWarning>
				{mode}
			</button>
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
