import { useAccount } from "wagmi";

import Footer from "../../components/home/Footer";
import Link from "next/link";

export default function Dashboard() {
  const { address, isConnected } = useAccount();

  return (
    <div className="container h-screen">
      <div className="mt-14 flex items-center">
        <div className="h-44 w-44 mr-5 bg-white p-2 rounded-full overflow-hidden">
          <img
            src={`https://robohash.org/${address}`}
            className="bg-slate-50 rounded-full"
          />
        </div>
        <div className="flex justify-between flex-1">
          <div>
            <div className="mt-1 inline-block">
              <label className="text-sm font-semibold text-gray-500">
                Address
              </label>
              <div className="flex font-medium items-center border-2 border-gray-400 rounded-full text-base mt-2 p-1">
                <div className="text-gray-900 px-4 py-2 tracking-wider">
                  Hello There!
                </div>
                <div className="h-10 w-10 bg-success flex items-center justify-center rounded-full">
                  <img alt="arrow" src="/images/copy.svg" className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
          <Link href={"/dashboard/mint"} className="btn btn-primary">
            MINT NEW NFT
          </Link>
        </div>
      </div>

      <div className="mt-20">
        <div className="text-3xl font-bold drop-shadow-sm">
          User{" "}
          <span className="h-fit items-center badge badge-primary rounded text-3xl px-3 py-1">
            NFTs
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
