import React from "react";

import Navigation from "../common/Navigation";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-customblack-100">
        <Navigation />
        <main>{children}</main>
      </div>
    </>
  );
}
