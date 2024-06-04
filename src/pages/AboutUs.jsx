import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
const AboutUs = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-white h-[50px] ">
        <Header
          background={"bg-white"}
          homeview={""}
          servicesview={""}
          aboutusview={"border-b-2 border-custom-light-blue"}
        />
      </div>
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <div className="w-full h-[50%] bg-custom-light-blue"></div>
        <div className="w-full h-[50%] bg-custom-lighter-blue"></div>
        <div className="absolute bg-white lg:w-[50%] lg:h-[75%] w-[75%] h-[75%]">
          <h2 className="text-center lg:text-4xl text-lg font-mono font-bold">About Us</h2>
          <p className='lg:text-lg text-xs font-mono mt-2 mx-2'>
            Welcome to WorldLink Solutions, your trusted partner in delivering
            comprehensive and innovative supply chain services. With a
            commitment to excellence and a focus on tailored solutions, we
            streamline your operations from start to finish. Our experienced
            team leverages cutting-edge technology and industry expertise to
            optimize every aspect of your logistics process, ensuring timely,
            cost-effective, and reliable delivery. Whether it's transportation,
            warehousing, inventory management, or distribution, we are dedicated
            to enhancing your business efficiency and competitiveness. At
            Efficient Logistics Solutions, we move your world.
          </p>
          <p className='mt-2 mx-2 lg:text-lg text-xs font-mono'><span className='font-bold'>Note:</span>
This website was made by using React and Tailwind. No other component libraries were used. 
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AboutUs;
