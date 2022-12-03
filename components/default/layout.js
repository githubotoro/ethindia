import React from "react";

import Navigation from "../common/Navigation";

export default function Layout({ children }) {
	return (
		<>
			<div className="bg-base-200">
				<Navigation />
				<main>{children}</main>
			</div>
		</>
	);
}
