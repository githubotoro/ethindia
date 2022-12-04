import React from "react";
import { useRouter } from "next/router";

import Navigation from "../common/Navigation";

export default function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <>
      <div>
        {pathname.split("/").includes("view") ? null : <Navigation />}

        <main>{children}</main>
      </div>
    </>
  );
}
