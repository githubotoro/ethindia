import React, { useState } from "react";

import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { fetchNFTData } from "../../utils/firebase/functions";

export default function Viewport() {
	// const router = useRouter();
	// const { tokenId } = router.query;
	// const { isLoading, isError, data, error } = useQuery(
	// 	"nft",
	// 	() => fetchNFTData(tokenId),
	// 	{
	// 		enabled: !!tokenId,
	// 	}
	// );

	const data = {
		logoURL:
			"https://github.com/githubotoro/formsify-web3-app/raw/main/Images/formsify-logo.png",
		linkUrl: "https://formsify.vercel.app/",
		headline: "Let's Create Better Forms!",
		ipfsUrl:
			"https://i.seadn.io/gae/RTa7mSxuHPVI5H151f-ZMpQ9wKputI0BqW3lmmP6tLI9PtNVhe-_voP3BHk0ko8i3hc5dFHj-xueTqYVlpkMh2UyWN3EOA-U8hHD?auto=format&w=1000",
		title: "Formsify",
		linkText: "To know more, visit our page.",
	};

	return (
		<>
			<center>
				<div className="max-w-2xl">
					<img className="z-10" src={data.ipfsUrl} />

					<div className="p-4 -mt-28">
						<div className="p-2 w-full h-20 rounded-md drop-shadow-md border-2 bg-base-100 border-base-100">
							<img
								className="float-left max-h-full rounded-md"
								src={data.logoURL}
							/>

							<div className="pl-4 float-left align-middle content-center max-w-fit">
								<div className="font-bold text-lg text-left">
									{data.title}
								</div>

								<div className="font-medium text-md text-left">
									{data.headline}
								</div>
							</div>

							<div className="p-2">
								<a
									href={data.linkUrl}
									target="_blank"
									className="float-right btn btn-sm btn-primary h-fit w-fit px-5 py-3 capitalize font-bold text-md shadow-md rounded-md"
								>
									Explore!
								</a>
							</div>
						</div>
					</div>
				</div>
			</center>

			<br />
		</>
	);
}
