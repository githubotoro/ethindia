import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

export default function Home() {
	const router = useRouter();

	const AdnftHero = () => {
		return (
			<>
				<div className="hero bg-base-200">
					<div className="hero-content text-center">
						<div className="max-w-3xl md:max-w-5xl lg:max-w-8xl">
							<h1 className="mt-2 sm:mt-14 md:mt-16 lg:mt-20 text-5xl md:text-6xl lg:text-7xl font-black drop-shadow-sm space-y-2">
								<div className="inline">
									Turn your NFTs into&nbsp;
								</div>
								<div className="py-2 px-4 badge font-extrabold text-5xl md:text-6xl lg:text-7xl rounded-lg shadow-lg w-fit h-fit items-center">
									Ad-Spaces
								</div>
							</h1>

							<div className="mt-5 md:mt-4 lg:mt-3 space-y-2 sm:space-y-2 md:space-y-3 lg:space-y-4 md:p-3 text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-sm">
								<div className="inline">
									We help you convert your audience to
									community.
								</div>
							</div>

							<div className="mt-8 md:mt-10">
								<Link
									href="/explore"
									className="btn btn-primary btn-sm h-fit w-fit px-3 lg:px-5 py-2 lg:py-3 text-xl lg:text-2xl items-center rounded-lg lg:rounded-lg font-black shadow-lg"
									type="button"
								>
									Get Started
								</Link>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	};

	const nftMarketing = () => {
		return (
			<>
				<div className="flex flex-col justify-center items-center bg-base-200 px-4">
					<center>
						<div className="text-3xl sm:text-4xl md:text-5xl font-black drop-shadow-sm">
							The Next Marketing Platform
						</div>
						<div className="text-md sm:text-lg mt-2">
							We are introducing the degen promotional platform,
							<br />
							where you can capture the{" "}
							<span className="kbd kbd-sm text-md sm:text-lg">
								audience
							</span>{" "}
							effectively!
						</div>
					</center>
				</div>

				<div className="flex flex-row lg:flex-row px-2 sm:px-4 bg-base-200 py-4 -mt-2 sm:mt-0 items-center justify-center">
					<div className="px-1 grid flex-grow h-28 w-full card bg-base-300 rounded-box place-items-center shadow-md text-md sm:text-lg font-bold">
						<center>
							<span className="font-black badge badge-error rounded-lg text-lg sm:text-xl p-4 shadow-md">
								Without ADNFT
							</span>
							<br />
							Twitter, Instagram, Discord, where do I promote
							next? 🤨
							<br />
							<span className="font-extrabold ">
								Promoting NFTs in non-NFT platforms, what? 😒
							</span>
						</center>
					</div>
					<div className="divider-horizontal font-black text-xl">
						vs
					</div>
					<div className="px-1 grid flex-grow h-28 w-full card bg-base-300 rounded-box place-items-center shadow-md text-md sm:text-lg font-bold">
						<center>
							<span className="font-black badge badge-success rounded-lg text-lg sm:text-xl p-4 shadow-md">
								With ADNFT
							</span>
							<br />
							Your ads, right in front of your NFTs. 👀
							<br />
							<span className="font-extrabold ">
								Your next ad-campaign starts here! 🚀
							</span>
						</center>
					</div>
				</div>
			</>
		);
	};

	const knowCommunity = () => {
		return (
			<>
				<div className="flex flex-col justify-center items-center bg-base-200 px-4">
					<center>
						<div className="text-3xl sm:text-4xl md:text-5xl font-black drop-shadow-sm">
							Know Your Community
						</div>
						<div className="text-md sm:text-lg mt-2">
							We are bringing audience analytics into NFTs,
							<br />
							where you know your{" "}
							<span className="kbd kbd-sm text-md sm:text-lg">
								organic
							</span>{" "}
							community!
						</div>
					</center>
				</div>

				<div className="flex flex-row lg:flex-row px-2 sm:px-4 bg-base-200 py-4 -mt-2 sm:mt-0 items-center justify-center">
					<div className="px-1 grid flex-grow h-28 w-full card bg-base-300 rounded-box place-items-center shadow-md text-md sm:text-lg font-bold">
						<center>
							<span className="font-black badge badge-error rounded-lg text-lg sm:text-xl p-4 shadow-md">
								Without ADNFT
							</span>
							<br />
							Yeah, they bought NFTs -- but are they still
							interested? 😬
							<br />
							<span className="font-extrabold ">
								Is my audience scaling or constant? 🧐
							</span>
						</center>
					</div>
					<div className="divider-horizontal font-black text-xl">
						vs
					</div>
					<div className="px-1 grid flex-grow h-28 w-full card bg-base-300 rounded-box place-items-center shadow-md text-md sm:text-lg font-bold">
						<center>
							<span className="font-black badge badge-success rounded-lg text-lg sm:text-xl p-4 shadow-md">
								With ADNFT
							</span>
							<br />
							Get behind the scenes and know conversions, bounce
							rate, etc. 👋
							<br />
							<span className="font-extrabold ">
								Build an organic community with real-time
								engagement! 💯
							</span>
						</center>
					</div>
				</div>
			</>
		);
	};

	const earnWhithoutSell = () => {
		return (
			<>
				<div className="flex flex-col justify-center items-center bg-base-200 px-4">
					<center>
						<div className="text-3xl sm:text-4xl md:text-5xl font-black drop-shadow-sm">
							Earn Without Selling
						</div>
						<div className="text-md sm:text-lg mt-2">
							We are unlocking a new revenue model,
							<br />
							where you earn{" "}
							<span className="kbd kbd-sm text-md sm:text-lg">
								without
							</span>{" "}
							selling!
						</div>
					</center>
				</div>

				<div className="flex flex-row lg:flex-row px-2 sm:px-4 bg-base-200 py-4 -mt-2 sm:mt-0 items-center justify-center">
					<div className="px-1 grid flex-grow h-28 w-full card bg-base-300 rounded-box place-items-center shadow-md text-md sm:text-lg font-bold">
						<center>
							<span className="font-black badge badge-error rounded-lg text-lg sm:text-xl p-4 shadow-md">
								Without ADNFT
							</span>
							<br />
							How do I sell this NFT to turn profits? 😅
							<br />
							<span className="font-extrabold ">
								Anyone wants to buy, anyone? 🥺
							</span>
						</center>
					</div>
					<div className="divider-horizontal font-black text-xl">
						vs
					</div>
					<div className="px-1 grid flex-grow h-28 w-full card bg-base-300 rounded-box place-items-center shadow-md text-md sm:text-lg font-bold">
						<center>
							<span className="font-black badge badge-success rounded-lg text-lg sm:text-xl p-4 shadow-md">
								With ADNFT
							</span>
							<br />
							Let advertisers show ads in your NFTs. 🤗
							<br />
							<span className="font-extrabold ">
								HODL and earn from your NFTs. 💰
							</span>
						</center>
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			<div className="bg-base-200">
				{AdnftHero()}
				<center>
					<div className="max-w-7xl">
						{nftMarketing()}
						<div className="blankDiv pt-5 bg-base-200" />
						{knowCommunity()}
						<div className="blankDiv pt-5 bg-base-200" />
						{earnWhithoutSell()}
					</div>
				</center>
			</div>
		</>
	);
}
