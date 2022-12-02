import React, { useState } from "react";

import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { fetchNFTData } from "../../utils/firebase/functions";

export default function Viewport() {
  const router = useRouter();
  const { tokenId } = router.query;
  const { isLoading, isError, data, error } = useQuery(
    "nft",
    () => fetchNFTData(tokenId),
    {
      enabled: !!tokenId,
    }
  );

  return (
    <>
      <button onClick={() => setData()}>{JSON.stringify(data)}</button>
      <h1>Viewport</h1>
    </>
  );
}
