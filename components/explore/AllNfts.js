export default function getAllNfts(props) {
	let tokenList = [];
	for (let i = 0; i < props.count; i++) {
		tokenList.push(i + 1);
	}

<<<<<<< HEAD
	return (
		<div>
			<div className="w-full bg-base-200 min-h-screen">
				<div className="grid grid-flow-row-dense grid-cols-3 gap-8 overflow-hidden mt-16">
					{tokenList.map((token) => {
						return (
							<div className="drop-shadow-md bg-white rounded-md overflow-hidden">
								<iframe
									height="90%"
									scrolling="no"
									className="w-full h-[450px] overflow-hidden"
									src={`https://ethindia-one.vercel.app/view/${token}`}
								></iframe>
								{/* <div className="p-3 flex items-center">
=======
  return (
    <div>
      <div className="w-full bg-base-200 min-h-screen">
        <div className="grid grid-flow-row-dense grid-cols-3 gap-8 overflow-hidden mt-16">
          {tokenList.map((token) => {
            return (
              <div className="drop-shadow-md bg-white rounded-md overflow-hidden">
                <iframe
                  height="90%"
                  scrolling="no"
                  className="w-full h-[450px] overflow-hidden"
                  src={`https://ethindia-one.vercel.app/view/${token}`}
                ></iframe>
                {/* <div className="p-3 flex items-center">
>>>>>>> 57418a5315fef4c2171a201cb478a93b7c1fea02
                  <img
                    src="/images/opensea.png"
                    alt="open sea"
                    className="h-12 w-12 object-cover rounded-full shadow mr-3"
                  />
                  <a
                    href={`https://testnets.opensea.io/assets/mumbai/0x97983903d9c2D624C5d3D581d894277740f3d602/${token}`}
                    className="text-sm font-medium"
                  >
                    Go to OpenSea
                  </a>
                </div> */}
<<<<<<< HEAD
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
=======
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
>>>>>>> 57418a5315fef4c2171a201cb478a93b7c1fea02
}
