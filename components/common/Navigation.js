import React from "react";
import { useRouter } from "next/router";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navigation() {
	const { pathname } = useRouter();

	const pageName = (pathname) => {
		let path = pathname.split("/");
		if (pathname === "/") {
			return "Home Page";
		} else if (path.includes("explore")) {
			return "Explore Page";
		} else if (path.includes("about")) {
			return "About Page";
		} else if (path.includes("dashboard")) {
			return "Dashboard Page";
		} else {
			return false;
		}
	};

	return (
		<div>
			{pageName(pathname) ? (
				<div className="container my-5 flex justify-between">
					<div className="text-xl font-medium">
						{pageName(pathname)}
					</div>

					<ConnectButton className />
				</div>
			) : null}
		</div>
	);
}
