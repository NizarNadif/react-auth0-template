import React from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import "./style.css";

export function App() {
	return (
		<div className="app">
			<LoginButton />
			<LogoutButton />
			<Profile />
		</div>
	);
}
