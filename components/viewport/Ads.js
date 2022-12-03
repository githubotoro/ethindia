import React, { useState } from "react";

export default function Ads({ data }) {
	const [showAd, setShowAd] = useState(true);

	return data && showAd ? (
		<div className="m-2 p-1 rounded drop-shadow-md bg-base-100 flex justify-between items-center">
			<div className="flex items-center">
				<div className="h-16 w-16  rounded shadow overflow-hidden shadow-sm mr-2">
					<img
						className="h-full object-cover"
						src={data.logoUrl}
						alt="ad logo"
					/>
				</div>
				<div className="">
					<div className="font-semibold text-base text-left">
						{data.title}
					</div>
					<div className="text-sm text-gray-500 text-left">
						{data.headline}
					</div>
				</div>
			</div>
			<div className="flex flex-col items-end">
				<button>
					<img
						src="/images/close.png"
						alt="close button"
						className="h-3 w-3 absolute top-1 right-1"
						onClick={() => setShowAd(false)}
					/>
				</button>
				<a
					href={data.linkUrl}
					target="_blank"
					rel="noreferrer"
					className="btn btn-sm btn-primary px-4 h-10 capitalize font-medium rounded-sm mr-4"
				>
					Explore Now
				</a>
			</div>
		</div>
	) : null;
}
