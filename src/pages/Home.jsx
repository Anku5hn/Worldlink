import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Sidebar1 from "../assets/Ankush - Worldlink - Sidebar1.svg";
import Sidebar2 from "../assets/Ankush - Worldlink - Sidebar2.svg";
import Sidebar3 from "../assets/Ankush - Worldlink - Sidebar3.svg";
import Sidebar4 from "../assets/Ankush - Worldlink - Sidebar4.svg";
import Sidebar5 from "../assets/Ankush - Worldlink - Sidebar5.svg";
import {
  ArrowDownOutlined,
  LeftOutlined,
  RightOutlined,
  TwitchOutlined,
  SpotifyOutlined,
  TikTokOutlined,
  PinterestOutlined,
  XOutlined,
  DiscordOutlined,
  OpenAIOutlined,
  RedditOutlined,
  InstagramOutlined,
  GoogleOutlined,

} from "@ant-design/icons";
import NewsletterSVG from "../assets/Ankush - WorldLink - SVG.svg";
import TruckSVG from "../assets/Ankush - Truck - SVG.svg";
import AirplaneSVG from "../assets/Ankush - Airplane - SVG.svg";
const Home = () => {
  //states
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrollValue, setScrollValue] = useState(0);
  const [headerBg, setHeaderBg] = useState("bg-white");
  const [headerList, setHeaderList] = useState("");
  const [sidebar, setSideBar] = useState(Sidebar1);
  const [twoHeadingAni, setTwoHeadingAni] = useState('');
  const [twoCard1, setTwoCard1] = useState('');
  const [twoCard2, setTwoCard2] = useState('')
  const [twoH3, setTwoH3] = useState('');
  //referance hooks
  const sectionOne = useRef(null);
  const sectionTwo = useRef(null);
  const sectionThree = useRef(null);
  const sectionFour = useRef(null);
  const sectionFive = useRef(null);
  const sectionTwoHeading = useRef(null);
  const twoCardOne = useRef(null);
  const sectionTwoH3 = useRef(null);
  //mouse location hook
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  //scroll hook
  useEffect(() => {
    const headerState = () => {
      if (window.scrollY + 50 >= 5 * window.innerHeight) {
        setHeaderBg("bg-transparent");
        setHeaderList("hidden");
      } else if (window.scrollY + 50 >= 4 * window.innerHeight) {
        setHeaderBg("bg-transparent");
        setHeaderList("hidden");
      } else if (window.scrollY + 50 >= 3 * window.innerHeight) {
        setHeaderBg("bg-transparent");
      } else if (window.scrollY + 50 >= 2 * window.innerHeight) {
        setHeaderBg("bg-white");
        setHeaderList("hidden");
      } else if (window.scrollY + 50 >= window.innerHeight) {
        setHeaderBg("bg-custom-lighter-blue");
        setHeaderList("hidden");
      } else {
        setHeaderBg("bg-white");
        setHeaderList("");
      }
    };
    const sideBarChange = () => {
      if(window.scrollY == 0){
        setSideBar(Sidebar1)
      }else if (
        window.scrollY + window.innerHeight >=
        sectionFive.current.offsetTop
      ) {
        setSideBar(Sidebar5);
      } else if (
        window.scrollY + window.innerHeight >=
        sectionFour.current.offsetTop
      ) {
        setSideBar(Sidebar4);
      } else if (
        window.scrollY + window.innerHeight >=
        sectionThree.current.offsetTop
      ) {
        setSideBar(Sidebar3);
      } else if (
        window.scrollY + window.innerHeight >=
        sectionTwo.current.offsetTop
      ) {
        setSideBar(Sidebar2);
      }else {
        setSideBar(Sidebar1);
      }
    };
    const changeScrollValue = () => { //scroll value for rotation animations on scroll.
      setScrollValue(window.scrollY);
    };
    const setSecondHeading = () =>{
      if(window.innerHeight + window.scrollY >= sectionTwoHeading.current.offsetTop){
        setTwoHeadingAni('animate-up');
      }else{
        setTwoHeadingAni('')
      }
    }
    const setTwoCards = () =>{
      if(window.innerHeight + window.scrollY >= twoCardOne.current.offsetTop){
        setTwoCard1('animate-right');
        setTwoCard2('animate-left');
      }else{
        setTwoCard1('');
        setTwoCard2('');
      }
    }
    const twoH3Animation = () =>{
      if(window.innerHeight + window.scrollY >= sectionTwoH3.current.offsetTop){
        setTwoH3('animate-up');
      }else{
        setTwoH3('');
      }
    }
    window.addEventListener("scroll", () => {
      headerState();
      changeScrollValue();
      sideBarChange();
      setSecondHeading();
      setTwoCards();
      twoH3Animation();
    });
  
    return () => {
      window.removeEventListener("scroll", () => {
        headerState();
        changeScrollValue();
        sideBarChange();
        setSecondHeading();
        setTwoCards();
        twoH3Animation();
      });
    };
  }, []);
  //return
  return (
    <>
      {
        //section 1
      }
      <div className="fixed left-10 bottom-10 lg:block hidden" ref={sectionOne}>
        <img src={sidebar} className="w-[60px] h-[432px]" />
      </div>
      <div className="w-full h-screen flex justify-center ">
        <div
          className={`w-6 h-6 absolute rounded-full bg-custom-light-blue z-50 lg:block hidden`}
          style={{
            top: `${cursorPos.y + window.scrollY}px`, 
            left: `${cursorPos.x + window.scrollX}px`,
          }}
        />
        <div className="">
          <Header
            background={headerBg}
            homeview={`border-b-2 border-custom-light-blue ${headerList}`}
            servicesview={headerList}
            aboutusview={headerList}
          />
          <div className="w-full h-5/6 flex justify-center items-center flex-col">
            <div className="absolute">
              <img
                src={TruckSVG}
                className="lg:w-[250px] lg:h-[250px] w-[150px] h-[150px] z-0 clockwise-spin"
                style={{ transform: `rotate(${scrollValue}deg)` }}
              />
            </div>
            <div className="absolute">
              <img
                src={AirplaneSVG}
                className="lg:w-[400px] lg:h-[400px] h-[250px] w-[250px] z-0 clockwise-spin"
                style={{ transform: `rotate(${scrollValue}deg)` }}
              />
            </div>

            <h1 className="z-10 lg:text-[90px] text-[45px] text-center font-mono">
              Making{" "}
              <span className="border-b-2 border-custom-light-blue">
                Logistics
              </span>{" "}
              Simple
            </h1>
            <p className="lg:text-[45px] text-[12px] font-mono z-10">
              Serving You with Unparalleled Efficiency.
            </p>
            <p className="font-mono text-[23px] absolute bottom-[100px]">
              Scroll
            </p>
            <ArrowDownOutlined className="text-custom-light-blue text-[45px] absolute bottom-[50px] animate-pulse" />
          </div>
        </div>
      </div>
      {
        //section 2
      }
      <div
        className="w-full h-screen bg-custom-lighter-blue flex  items-center flex-col"
        ref={sectionTwo}
      >
        <div className="w-5/6">
          <h3 className={`lg:text-[24px] text-[18px] font-mono my-10 text-center ${twoHeadingAni}`} ref={sectionTwoHeading}>
            Our Services:
          </h3>
        </div>
        <div className="w-5/6 flex justify-center gap-5 lg:flex-row flex-col">
          {
            //card 1
          }
          <div>
            <div className={`rounded-lg bg-white ${twoCard1}`} ref={twoCardOne}>
              <h3 className="lg:text-[45px] text-[18px] font-mono font-bold mx-2 my-2 cursor-pointer hover:underline hover:text-[50px]">
                Logistics Management
              </h3>
              <p className="lg:text-[23px] text-[12px] font-mono mx-2 my-2">
                We are excellent at{" "}
                <span className="font-bold">eCommerce Logestics</span>.
              </p>
              <p className="lg:text-[23px] text-[12px] font-mono mx-2 my2">
                We have helped over 500 clients
              </p>
              <p className="lg:text-[23px] text-[12px] font-mono mx-2 my2">
                with their ecommerce projects.
              </p>
              <button className="lg:text-[23px] text-[12px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                Read More
              </button>
            </div>
          </div>
          {
            //card 2
          }
          <div>
            <div className={`rounded-lg bg-white ${twoCard2}`}>
              <h3 className="lg:text-[45px] text-[18px] font-mono font-bold mx-2 my-2 cursor-pointer hover:underline hover:text-[50px]">
                Supply Chain Management
              </h3>
              <p className="lg:text-[23px] text-[12px] font-mono mx-2 my-2">
                We are excellent at{" "}
                <span className="font-bold">eCommerce Logestics</span>.
              </p>
              <p className="lg:text-[23px] text-[12px] font-mono mx-2 my2">
                We have helped over 500 clients
              </p>
              <p className="lg:text-[23px] text-[12px] font-mono mx-2 my2">
                with their ecommerce projects.
              </p>
              <button className="lg:text-[23px] text-[12px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="w-5/6 my-10 ">
          <h3 className={`lg:text-[45px] text-[12px] text-center font-semibold ${twoH3}`} ref={sectionTwoH3}>
            We Have The Best Experts.
          </h3>
          <p className={`lg:text-[23px] text-[12px] hover:underline text-center ${twoH3}`} >
            Connect with them now!
          </p>
        </div>
      </div>
      {
        //section 3 auto text Marquee animation remaining
      }
      <div
        className="w-full h-auto flex flex-col items-center justify-center"
        ref={sectionThree}
      >
        <div cassName="w-5/6">
          <h3 className="lg:text-[24px] text-center text-[18px] font-mono my-10">Our Stories:</h3>
        </div>
        <div className="w-5/6 flex gap-5 my-10 lg:flex-row flex-col">
          <div className="lg:w-3/4">
            <div className="rounded-xl overflow-x-scroll flex gap-5 flex-row hide-scroll-bar">
              {
                //Cards
              }
              <div className="inline-block px-3">
                <div className="border border-custom-light-blue rounded-lg overflow-hidden w-[360px] h-[640px]">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/51/94/81/360_F_551948178_rcf4rEVLcVRCZXAPFIiZCYQmBqeD8sQD.jpg"
                    className="w-[400px] h-[400px] rounded-t-lg"
                  />
                  <a
                    href="/#"
                    className="text-[24px] my-2 mx-2 font-bold font-mono"
                  >
                    Managing at large scale
                  </a>
                  <p className="text-[16px] my-2 mx-2 font-mono">
                    Read how we managed logistics for this MNC!
                  </p>
                  <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                    Read More
                  </button>
                </div>
              </div>

              <div className="inline-block px-3">
                <div className="border border-custom-light-blue rounded-lg overflow-hidden w-[360px] h-[640px]">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/51/94/81/360_F_551948178_rcf4rEVLcVRCZXAPFIiZCYQmBqeD8sQD.jpg"
                    className="w-[400px] h-[400px] rounded-t-lg"
                  />
                  <a
                    href="/#"
                    className="text-[24px] my-2 mx-2 font-bold font-mono"
                  >
                    Managing at large scale
                  </a>
                  <p className="text-[16px] my-2 mx-2 font-mono">
                    Read how we managed logistics for this MNC!
                  </p>
                  <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                    Read More
                  </button>
                </div>
              </div>

              <div className="inline-block px-3">
                <div className="border border-custom-light-blue rounded-lg overflow-hidden w-[360px] h-[640px]">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/51/94/81/360_F_551948178_rcf4rEVLcVRCZXAPFIiZCYQmBqeD8sQD.jpg"
                    className="w-[400px] h-[400px] rounded-t-lg"
                  />
                  <a
                    href="/#"
                    className="text-[24px] my-2 mx-2 font-bold font-mono"
                  >
                    Managing at large scale
                  </a>
                  <p className="text-[16px] my-2 mx-2 font-mono">
                    Read how we managed logistics for this MNC!
                  </p>
                  <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                    Read More
                  </button>
                </div>
              </div>

              <div className="inline-block px-3">
                <div className="border border-custom-light-blue rounded-lg overflow-hidden w-[360px] h-[640px]">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/51/94/81/360_F_551948178_rcf4rEVLcVRCZXAPFIiZCYQmBqeD8sQD.jpg"
                    className="w-[400px] h-[400px] rounded-t-lg"
                  />
                  <a
                    href="/#"
                    className="text-[24px] my-2 mx-2 font-bold font-mono"
                  >
                    Managing at large scale
                  </a>
                  <p className="text-[16px] my-2 mx-2 font-mono">
                    Read how we managed logistics for this MNC!
                  </p>
                  <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                    Read More
                  </button>
                </div>
              </div>
              {
                //cards end here
              }
            </div>
          </div>

          <div className="lg:w-1/4">
            <div className="inline-block px-3">
              <div className=" rounded-lg overflow-hidden w-[360px] h-[640px]">
                <a
                  href="/#"
                  className="lg:text-[24px] text-[18px] my-2 mx-2 font-bold font-mono"
                >
                  Managing at large scale
                </a>
                <p className="lg:text-[16px] text-[10px] my-2 mx-2 font-mono">
                  Read how we managed logistics for this MNC!
                </p>
                <div className="flex flex-nowrap gap-1">
                  <button className="text-[16px] px-1 py-1 rounded-full border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                    <LeftOutlined />
                  </button>
                  <button className="text-[16px] px-1 py-1 rounded-full border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                    <RightOutlined />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-5/6 h-[150px] mb-10 flex items-center gap-2'>
          <div>
            <h3 className='lg:text-[24px] text-[18px]'>Our Clients: </h3>
          </div>
              <div className='w-full mr-2 h-auto overflow-hidden flex justify-start whitespace-nowrap'>
                <div className='animate-marquee'>
              <TwitchOutlined className='text-[64px] mx-[100px] '/>
              <SpotifyOutlined className='text-[64px] mx-[100px] '/>
              <TikTokOutlined className='text-[64px] mx-[100px] '/>
              <PinterestOutlined className='text-[64px] mx-[100px] '/>
              <XOutlined className='text-[64px] mx-[100px] '/>
              <DiscordOutlined className='text-[64px] mx-[100px] '/>
              <OpenAIOutlined className='text-[64px] mx-[100px] '/>
              <RedditOutlined className='text-[64px] mx-[100px] '/>
              <InstagramOutlined className='text-[64px] mx-[100px] '/>
              <GoogleOutlined className='text-[64px] mx-[100px] '/>
              </div>
              </div>
        </div>
      </div>
      {
        //section 4
      }
      <div
        className="w-full h-[50rem] bg-custom-dark-blue flex items-center flex-col "
        ref={sectionFour}
      >
        <div className="w-5/6 my-10 ">
          <h2 className="lg:text-[45px] text-[24px] text-white font-mono">
            Subscribe to our Newsletter!
          </h2>
        </div>
        <div className="w-5/6 flex h-[520px]">
          <div className="w-3/4 h-full flex-col justify-between flex">
            <ul className="text-white font-mono lg:text-[23px] text-[12px]">
              <li>
                Get the latest updates on{" "}
                <span className="text-custom-light-blue">Logestics.</span>
              </li>
              <li>
                Best source of{" "}
                <span className="text-custom-light-blue">
                  Supply Chaing News.
                </span>
              </li>
              <li>
                Stay updated on our{" "}
                <span className="text-custom-light-blue">offers!</span>
              </li>
            </ul>
            <img
              src={NewsletterSVG}
              className="lg:w-64 lg:h-64 w-24 h-24 bg-black rounded-full"
              style={{ transform: `rotate(${scrollValue}deg)` }}
            />
          </div>
          <div className="w-1/4 flex flex-col items-end h-full justify-end">
            <ArrowDownOutlined className="text-white lg:text-[45px] text-[24px]  animate-bounce text-center my-5" />
            <div className="flex gap-2 lg:flex-row flex-col">
              <input
                defaultValue="Enter Your Email"
                className="bg-custom-dark-blue border-2 border-white text-white rounded-lg font-mono"
              ></input>
              <button className="rounded-l-3xl rounded-r-3xl border-2 border-white px-1 py-1 bg-white font-mono">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      {
        //section 5
      }
      <div
        className="w-full h-auto lg:flex flex-col items-center justify-center hidden"
        ref={sectionFive}
      >
        <div cassName="w-5/6">
          <h3 className="text-[24px] font-mono my-10">Our Stories:</h3>
        </div>
        <div className="w-5/6 flex gap-10 my-10">
          {
            //this div down
          }
          <div className="w-1/4">
            <div className="inline-block px-3">
              <div className=" rounded-lg overflow-hidden w-[360px] h-[640px]">
                <a
                  href="/#"
                  className="text-[24px] my-2 mx-2 font-bold font-mono"
                >
                  Managing at large scale
                </a>
                <p className="text-[16px] my-2 mx-2 font-mono">
                  Read how we managed logistics for this MNC!
                </p>
                <div className="flex flex-nowrap gap-1">
                  <button className="text-[16px] px-1 py-1 rounded-full border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                    <LeftOutlined />
                  </button>
                  <button className="text-[16px] px-1 py-1 rounded-full border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                    <RightOutlined />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4">
            <div className="rounded-xl overflow-x-scroll flex gap-5 flex-row hide-scroll-bar">
              {
                //Cards
              }
              <div className="inline-block px-3">
                <div className="border border-custom-light-blue rounded-lg overflow-hidden w-[360px] h-[640px]">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/51/94/81/360_F_551948178_rcf4rEVLcVRCZXAPFIiZCYQmBqeD8sQD.jpg"
                    className="w-[400px] h-[400px] rounded-t-lg"
                  />
                  <a
                    href="/#"
                    className="text-[24px] my-2 mx-2 font-bold font-mono"
                  >
                    Managing at large scale
                  </a>
                  <p className="text-[16px] my-2 mx-2 font-mono">
                    Read how we managed logistics for this MNC!
                  </p>
                  <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                    Read More
                  </button>
                </div>
              </div>

              <div className="inline-block px-3">
                <div className="border border-custom-light-blue rounded-lg overflow-hidden w-[360px] h-[640px]">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/51/94/81/360_F_551948178_rcf4rEVLcVRCZXAPFIiZCYQmBqeD8sQD.jpg"
                    className="w-[400px] h-[400px] rounded-t-lg"
                  />
                  <a
                    href="/#"
                    className="text-[24px] my-2 mx-2 font-bold font-mono"
                  >
                    Managing at large scale
                  </a>
                  <p className="text-[16px] my-2 mx-2 font-mono">
                    Read how we managed logistics for this MNC!
                  </p>
                  <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                    Read More
                  </button>
                </div>
              </div>

              <div className="inline-block px-3">
                <div className="border border-custom-light-blue rounded-lg overflow-hidden w-[360px] h-[640px]">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/51/94/81/360_F_551948178_rcf4rEVLcVRCZXAPFIiZCYQmBqeD8sQD.jpg"
                    className="w-[400px] h-[400px] rounded-t-lg"
                  />
                  <a
                    href="/#"
                    className="text-[24px] my-2 mx-2 font-bold font-mono"
                  >
                    Managing at large scale
                  </a>
                  <p className="text-[16px] my-2 mx-2 font-mono">
                    Read how we managed logistics for this MNC!
                  </p>
                  <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                    Read More
                  </button>
                </div>
              </div>

              <div className="inline-block px-3">
                <div className="border border-custom-light-blue rounded-lg overflow-hidden w-[360px] h-[640px]">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/51/94/81/360_F_551948178_rcf4rEVLcVRCZXAPFIiZCYQmBqeD8sQD.jpg"
                    className="w-[400px] h-[400px] rounded-t-lg"
                  />
                  <a
                    href="/#"
                    className="text-[24px] my-2 mx-2 font-bold font-mono"
                  >
                    Managing at large scale
                  </a>
                  <p className="text-[16px] my-2 mx-2 font-mono">
                    Read how we managed logistics for this MNC!
                  </p>
                  <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                    Read More
                  </button>
                </div>
              </div>
              {
                //cards end here
              }
            </div>
          </div>
        </div>
      </div>
      {
        //footer
      }
      <Footer />
    </>
  );
};
export default Home;
