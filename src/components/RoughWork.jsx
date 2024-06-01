const RoughWork = () => {
  return (
    <>
      {
        //card with image
      }
      <div className='inline-block px-3'>
        <div className="border border-custom-light-blue rounded-lg overflow-hidden w-96 h-96">
          <img
            src="https://t4.ftcdn.net/jpg/05/51/94/81/360_F_551948178_rcf4rEVLcVRCZXAPFIiZCYQmBqeD8sQD.jpg"
            className="w-[400px] h-[400px] rounded-t-lg"
          />
          <a href="/#" className="text-[24px] my-2 mx-2 font-bold font-mono">
            Managing at large scale
          </a>
          <p className="text-[16px] my-2 mx-2 font-mono">
            Read how we managed logistics for this MNC!
          </p>
          <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-dark-blue hover:text-white font-mono">
            Read More
          </button>
        </div>
      </div>
      {
        //card without image
      }
      {
        //card 1
      }
      <div>
        <div className="rounded-lg bg-white">
          <h3 className="text-[45px] font-mono font-bold mx-2 my-2 cursor-pointer hover:underline hover:text-[50px]">
            Logistics Management
          </h3>
          <p className="text-[23px] font-mono mx-2 my-2">
            We are excellent at{" "}
            <span className="font-bold">eCommerce Logestics</span>.
          </p>
          <p className="text-[23px] font-mono mx-2 my2">
            We have helped over 500 clients
          </p>
          <p className="text-[23px] font-mono mx-2 my2">
            with their ecommerce projects.
          </p>
          <button className="text-[23px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
            Read More
          </button>
        </div>
      </div>
      {
        //card 2
      }
      <div>
        <div className="rounded-lg bg-white">
          <h3 className="text-[45px] font-mono font-bold mx-2 my-2 cursor-pointer hover:underline hover:text-[50px]">
            Supply Chain Management
          </h3>
          <p className="text-[23px] font-mono mx-2 my-2">
            We are excellent at{" "}
            <span className="font-bold">eCommerce Logestics</span>.
          </p>
          <p className="text-[23px] font-mono mx-2 my2">
            We have helped over 500 clients
          </p>
          <p className="text-[23px] font-mono mx-2 my2">
            with their ecommerce projects.
          </p>
          <button className="text-[23px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};
