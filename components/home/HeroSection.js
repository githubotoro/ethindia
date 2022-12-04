import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="pb-20">
      <div className=" flex flex-col">
        <h1 className="text-8xl font-black mt-24">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            TURN YOUR NFT INTO <br /> Ad-Space
          </div>
        </h1>

        <div className="font-medium text-gray-600 text-2xl mt-10">
          We help you convert your audience to community.
        </div>

        <div className="mt-12 flex space-x-10">
          <Link
            href="/explore"
            className="border-2 border-gray-400 p-1 pl-6 rounded-full flex items-center"
            type="button"
          >
            <div className="mr-5 font-semibold">Explore</div>
            <div className="h-12 w-12 bg-accent flex items-center justify-center rounded-full">
              <img
                alt="arrow"
                src="/images/arrow-top-right.svg"
                className="h-6 w-6"
              />
            </div>
          </Link>

          <Link
            href="/dashboard/mint"
            className="border-2 border-gray-400 p-1 pl-6 rounded-full flex items-center"
            type="button"
          >
            <div className="mr-5 font-semibold">Get Started</div>
            <div className="h-12 w-12 bg-error flex items-center justify-center rounded-full">
              <img
                alt="arrow"
                src="/images/arrow-top-right.svg"
                className="h-6 w-6"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
