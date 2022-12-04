export default function Features(props) {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-5 gap-24">
        <div className="col-span-2">
          <div className="text-4xl font-bold drop-shadow-sm">
            The Next Marketing Platform
          </div>
          <div className="text-md sm:text-lg mt-3 text-gray-500">
            We are introducing the degen promotional platform,
            <br />
            where you can capture the{" "}
            <span className="kbd kbd-sm text-md sm:text-lg">audience</span>{" "}
            effectively!
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 col-span-3">
          <div className="border-2 rounded-md p-4 border-gray-400">
            <div className="font-bold badge badge-error rounded text-lg px-5 py-5 shadow-md">
              Without ADNFT
            </div>
            <ul className="ml-6 list-disc mt-4 font-medium">
              <li>Twitter, Instagram, Discord, where do I promote next? 🤨</li>
              <li> Promoting NFTs in non-NFT platforms, what? 😒</li>
            </ul>
          </div>

          <div className="border-2 rounded-md p-4 border-gray-400">
            <div className="font-bold badge badge-success rounded text-lg px-5 py-5 shadow-md">
              With ADNFT
            </div>
            <ul className="ml-6 list-disc mt-4 font-medium">
              <li>Your ads, right in front of your NFTs. 👀</li>
              <li>Your next ad-campaign starts here! 🚀</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
