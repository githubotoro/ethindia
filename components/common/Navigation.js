import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navigation() {
  const { pathname } = useRouter();

  return (
    <div>
      <div className="container py-5 flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-bold text-2xl mr-20">OwnAd</div>
          <ul className="font-medium text-gray-500 flex space-x-10">
            <Link href="/">
              <li
                className={
                  pathname === "/" ? "text-gray-900 font-semibold" : ""
                }
              >
                Home
              </li>
            </Link>
            <Link href="/explore">
              <li
                className={
                  pathname === "/explore" ? "text-gray-900 font-semibold" : ""
                }
              >
                Explore
              </li>
            </Link>
            <Link href="/dashboard">
              <li
                className={
                  pathname === "/dashboard" ||
                  pathname === "/dashboard/mint" ||
                  pathname === "/update"
                    ? "text-gray-900 font-semibold"
                    : ""
                }
              >
                Dashboard
              </li>
            </Link>
          </ul>
        </div>

        <ConnectButton className="rounded py-3 font-thin" />
      </div>
    </div>
  );
}
