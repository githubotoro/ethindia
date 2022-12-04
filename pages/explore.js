import React, { useState } from "react";

import { getCount } from "../utils/web3/connector";
import { useQuery } from "react-query";
import Footer from "../components/home/Footer";
import AllNfts from "../components/explore/AllNfts";
import Loading from "../components/common/Loading";

export default function Explore() {
  const { isLoading, isError, data, error } = useQuery(
    "count",
    async () => {
      const id = await getCount();
      return id;
    },
    {
      staleTime: Infinity,
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <center className="mt-14">
        <h1 className="font-bold text-3xl md:text-2xl lg:text-3xl">
          NFTs&nbsp;
          <div className="ml-1 h-fit items-center badge badge-accent font-bold text-3xl px-3 py-1 rounded content-center shadow-md">
            Converted
          </div>
          &nbsp;to&nbsp;
          <div className="ml-1 h-fit items-center badge badge-primary font-bold text-3xl px-3 py-1 rounded content-center shadow-md">
            Ad-Spaces
          </div>
          &nbsp;so far
        </h1>
      </center>

      <AllNfts count={data} />

      <Footer />
    </div>
  );
}
