import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Link} from 'react-router-dom'
const GetInTouch = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-white h-[50px] ">
        <Header
          background={"bg-white"}
          homeview={""}
          servicesview={""}
          aboutusview={""}
        />
      </div>
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <div className="w-full h-[50%] bg-custom-light-blue"></div>
        <div className="w-full h-[50%] bg-custom-lighter-blue"></div>
        <div className="absolute bg-white lg:w-[50%] lg:h-[75%] w-[75%] h-[75%]">
          <h2 className="text-center lg:text-4xl text-lg font-mono font-bold">
            Get In Touch!
          </h2>
          <div className="w-full h-auto flex justify-center mt-10">
            <div className="lg:w-1/3 rounded-md w-[80%]">
              <form>
                <div>
                <input placeHolder="Company Name" className='border-2 border-gray-200 rounded-md w-full font-mono '/>
                </div>
                <div className='mt-2'>
                <input placeHolder='Company Email'className="rounded-md border-2 border-gray-200  w-full font-mono" />
                </div>
                <div className='mt-2'>
                <input placeHolder='Address Line 1'className="rounded-md border-2 border-gray-200  w-full font-mono" />
                </div>
                <div className='mt-2'>
                <input placeHolder='Address Line 2'className="rounded-md border-2 border-gray-200  w-full font-mono" />
                </div>
                <div className='flex w-full mt-2'>
                <input placeHolder='State'className="rounded-md border-2 border-gray-200 w-[calc(70%)] font-mono" />
                <input placeHolder='City'className="rounded-md border-2 border-gray-200 w-[calc(30%-5px)] ml-[5px] font-mono" />
                </div>
                <div className='mt-2'>
                    <input placeHolder='Pincode' className='border-2 border-gray-200 rounded-md w-full font-mono'/>
                </div>
                <div className='mt-2'>
                    <textarea placeHolder='Message' className='w-full lg:h-[150px] h-[100px] border-2 border-gray-200  rounded-md font-mono'/>
                </div>
                <div className='flex justify-between mt-2'>
                    <Link to='/' className='px-7 py-1 font-mono text-gray-500 border-gray-500 border-2 rounded-l-full rounded-r-full hover:bg-gray-500 hover:text-white'>Back</Link>
                    <button className='px-7 py-1 text-white font-mono bg-custom-light-blue rounded-l-full rounded-r-full hover:bg-blue-500'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default GetInTouch;
