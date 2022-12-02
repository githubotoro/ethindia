import React from "react";
import { useRouter } from "next/router";

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
        <div className="container my-5 text-xl font-medium">
          {pageName(pathname)}
        </div>
      ) : null}
    </div>
  );
}
