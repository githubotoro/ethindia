import React from "react";
import { useRouter } from "next/router";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navigation() {
	const { pathname } = useRouter();

	const pageName = (pathname) => {
		let path = pathname.split("/");
		if (pathname === "/") {
			return "Home";
		} else if (path.includes("explore")) {
			return "Explore";
		} else if (path.includes("about")) {
			return "About";
		} else if (path.includes("dashboard")) {
			return "Dashboard";
		} else {
			return false;
		}
	};

	return (
		<div className="bg-base-200">
			{pageName(pathname) ? (
				<div className="container my-5 flex justify-between bg-base-200">
					<div className="text-xl font-medium bg-base-200">
						<div className="font-extrabold">
							{pageName(pathname)}
						</div>
					</div>

					<ConnectButton className="btn btn-primary rounded-sm btn-sm h-fit w-fit px-2 py-0 sm:px-3 sm:py-1 items-center capitalize font-black text-md sm:text-lg border-4 border-accent shadow-sm shadow-accent-focus" />
				</div>
			) : null}
		</div>
	);
}
