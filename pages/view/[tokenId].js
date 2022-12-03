import React from "react";

import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { fetchNFTData } from "../../utils/firebase/functions";

import Loading from "../../components/common/Loading";
import Ads from "../../components/viewport/Ads";
import AdLogo from "../../components/viewport/AdLogo";

export default function Viewport() {
  const router = useRouter();
  const { tokenId } = router.query;
  const { isLoading, isError, data, error } = useQuery(
    "nft",
    async () => {
      const res = await fetchNFTData(tokenId);
      return res;
    },
    {
      enabled: !!tokenId,
      staleTime: Infinity,
    }
  );

  if (!tokenId || isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="viewport">
      <img className="relative w-full" src={data.ipfsUrl} alt="nft" />
      <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0">
        <AdLogo data={data} />
        <Ads data={data} />
      </div>
    </div>
  );
}
