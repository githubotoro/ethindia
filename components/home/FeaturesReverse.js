export default function Features(props) {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-5 gap-24">
        <div className="grid grid-cols-2 gap-8 col-span-3">
          <div className="border-2 rounded-md p-4 border-gray-400">
            <div className="font-bold badge badge-error rounded text-lg px-5 py-5 shadow-md">
              Without ADNFT
            </div>
            <ul className="ml-6 list-disc mt-4 font-medium">
              <li>
                Yeah, they bought NFTs -- but are they still interested? 😬
              </li>
              <li>Is my audience scaling or constant? 🧐</li>
            </ul>
          </div>

          <div className="border-2 rounded-md p-4 border-gray-400">
            <div className="font-bold badge badge-success rounded text-lg px-5 py-5 shadow-md">
              With ADNFT
            </div>
            <ul className="ml-6 list-disc mt-4 font-medium">
              <li>
                Get behind the scenes and know conversions, bounce rate, etc. 👋
              </li>
              <li>Build an organic community with real-time engagement! 💯</li>
            </ul>
          </div>
        </div>

        <div className="col-span-2 flex flex-col items-end">
          <div className="text-4xl font-bold drop-shadow-sm text-right">
            Know Your Community
          </div>
          <div className="text-md sm:text-lg mt-3 text-gray-500 text-right">
            We are bringing audience analytics into NFTs,
            <br />
            where you know your{" "}
            <span className="kbd kbd-sm text-md sm:text-lg">organic</span>{" "}
            community!
          </div>
        </div>
      </div>
    </div>
  );
}
