export default function Features(props) {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-5 gap-24">
        <div className="col-span-2">
          <div className="text-4xl font-bold drop-shadow-sm">
            Earn Without Selling
          </div>
          <div className="text-md sm:text-lg mt-3 text-gray-500">
            We are unlocking a new revenue model,
            <br />
            where you earn{" "}
            <span className="kbd kbd-sm text-md sm:text-lg">without</span>{" "}
            selling!
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 col-span-3">
          <div className="border-2 rounded-md p-4 border-gray-400">
            <div className="font-bold badge badge-error rounded text-lg px-5 py-5 shadow-md">
              Without ADNFT
            </div>
            <ul className="ml-6 list-disc mt-4 font-medium">
              <li>How do I sell this NFT to turn profits? 😅</li>
              <li>Anyone wants to buy, anyone? 🥺</li>
            </ul>
          </div>

          <div className="border-2 rounded-md p-4 border-gray-400">
            <div className="font-bold badge badge-success rounded text-lg px-5 py-5 shadow-md">
              With ADNFT
            </div>
            <ul className="ml-6 list-disc mt-4 font-medium">
              <li>Let advertisers show ads in your NFTs. 🤗</li>
              <li>HODL and earn from your NFTs. 💰</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
