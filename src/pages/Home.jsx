import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Sidebar1 from "../assets/Ankush - Worldlink - Sidebar1.svg";
import Sidebar2 from "../assets/Ankush - Worldlink - Sidebar2.svg";
import Sidebar3 from "../assets/Ankush - Worldlink - Sidebar3.svg";
import Sidebar4 from "../assets/Ankush - Worldlink - Sidebar4.svg";
import Sidebar5 from "../assets/Ankush - Worldlink - Sidebar5.svg";
import {Link} from 'react-router-dom'
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
  const [twoHeadingAni, setTwoHeadingAni] = useState("");
  const [twoCard1, setTwoCard1] = useState("");
  const [twoCard2, setTwoCard2] = useState("");
  const [twoH3, setTwoH3] = useState("");
  //referance hooks
  const sectionOne = useRef(null);
  const sectionTwo = useRef(null);
  const sectionThree = useRef(null);
  const sectionFour = useRef(null);
  const sectionFive = useRef(null);
  const sectionTwoHeading = useRef(null);
  const twoCardOne = useRef(null);
  const sectionTwoH3 = useRef(null);
  const firstCaro = useRef(null);
  const secondCaro = useRef(null);
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
      if (window.scrollY == 0) {
        setSideBar(Sidebar1);
      } else if (
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
      } else {
        setSideBar(Sidebar1);
      }
    };
    const changeScrollValue = () => {
      //scroll value for rotation animations on scroll.
      setScrollValue(window.scrollY);
    };
    const setSecondHeading = () => {
      if (
        window.innerHeight + window.scrollY >=
        sectionTwoHeading.current.offsetTop
      ) {
        setTwoHeadingAni("animate-up");
      } else {
        setTwoHeadingAni("");
      }
    };
    const setTwoCards = () => {
      if (window.innerHeight + window.scrollY >= twoCardOne.current.offsetTop) {
        setTwoCard1("animate-right");
        setTwoCard2("animate-left");
      } else {
        setTwoCard1("");
        setTwoCard2("");
      }
    };
    const twoH3Animation = () => {
      if (
        window.innerHeight + window.scrollY >=
        sectionTwoH3.current.offsetTop
      ) {
        setTwoH3("animate-up");
      } else {
        setTwoH3("");
      }
    };
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
  //functions
  const firstScroll = (value) => {
    firstCaro.current.scrollLeft += value;
  };
  const secondScroll = (value) => {
    secondCaro.current.scrollLeft += value;
  };
  //return
  return (
    <>
      {
        //section 1
      }
      <div
        className={`w-6 h-6 absolute rounded-full bg-custom-light-blue z-50 lg:block hidden`}
        style={{
          top: `${cursorPos.y + window.scrollY}px`,
          left: `${cursorPos.x + window.scrollX}px`,
        }}
      ></div>
      <div className="fixed left-10 bottom-10 lg:block hidden" ref={sectionOne}>
        <img src={sidebar} className="w-[60px] h-[432px]" />
      </div>
      <div className="w-full h-screen flex justify-center ">
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
      {
        //section 2
      }
      <div
        className="w-full h-screen bg-custom-lighter-blue flex  items-center flex-col"
        ref={sectionTwo}
      >
        <div className="w-5/6">
          <h3
            className={`lg:text-[24px] text-[18px] font-mono my-10 text-center ${twoHeadingAni}`}
            ref={sectionTwoHeading}
          >
            Our Services:
          </h3>
        </div>
        <div className="w-5/6 flex justify-center gap-5 lg:flex-row flex-col">
          {
            //card 1
          }
          <div>
            <div className={`rounded-lg bg-white ${twoCard1}`} ref={twoCardOne}>
              <Link to="/services">
                <h3 className="lg:text-[45px] text-[18px] font-mono font-bold mx-2 my-2 cursor-pointer hover:underline hover:text-[50px]">
                  Logistics Management
                </h3>
              </Link>
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
              <Link to="/services">
                <button className="lg:text-[23px] text-[12px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                  Read More
                </button>
              </Link>
            </div>
          </div>
          {
            //card 2
          }
          <div>
            <div className={`rounded-lg bg-white ${twoCard2}`}>
              <Link to="/services">
                <h3 className="lg:text-[45px] text-[18px] font-mono font-bold mx-2 my-2 cursor-pointer hover:underline hover:text-[50px]">
                  Supply Chain Management
                </h3>
              </Link>
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
              <Link to="/services">
                <button className="lg:text-[23px] text-[12px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-5/6 my-10 ">
          <h3
            className={`lg:text-[45px] text-[12px] text-center font-semibold ${twoH3}`}
            ref={sectionTwoH3}
          >
            We Have The Best Experts.
          </h3>
          <p
            className={`lg:text-[23px] text-[12px] hover:underline text-center ${twoH3}`}
          >
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
          <h3 className="lg:text-[24px] text-center text-[18px] font-mono my-10">
            Our Stories:
          </h3>
        </div>
        <div className="w-5/6 flex gap-5 my-10 lg:flex-row flex-col">
          <div className="lg:w-3/4">
            <div
              className="rounded-xl overflow-x-scroll flex gap-5 flex-row hide-scroll-bar"
              ref={firstCaro}
            >
              {
                //Cards
              }
              <div className="inline-block px-3">
                <div className="border border-custom-light-blue rounded-lg overflow-hidden w-[360px] h-[640px]">
                  <img
                    src="https://www.marketingmag.com.au/wp-content/uploads/2022/09/https___hypebeast.com_image_2017_04_patagonia-earth-day-feature-01.jpg"
                    className="w-[400px] h-[400px] rounded-t-lg"
                  />
                  <a
                    href="https://www.zunocarbon.com/blog/patagonia-supply-chain#:~:text=Patagonia%20places%20a%20strong%20emphasis,that%20align%20with%20its%20values."
                    className="text-[24px] my-2 font-bold font-mono hover:underline"
                  >
                    Patagonia's Sustainable Supply Chain
                  </a>
                  <p className="text-[16px] my-2 font-mono">
                    Patagonia places a strong emphasis on sourcing materials
                    that minimize environmental impact and uphold ethical
                    standards.
                  </p>
                  <a
                    href="https://www.zunocarbon.com/blog/patagonia-supply-chain#:~:text=Patagonia%20places%20a%20strong%20emphasis,that%20align%20with%20its%20values."
                    className="text-[24px] my-2 font-bold font-mono hover:underline"
                  >
                    <hr />
                    <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                      Read More
                    </button>
                  </a>
                </div>
              </div>

              <div className="inline-block px-3">
                <div className="border border-custom-light-blue rounded-lg overflow-hidden w-[360px] h-[640px]">
                  <img
                    src="https://img.freepik.com/premium-psd/logistics-transport-square-banner-template-design_810462-837.jpg?w=740"
                    className="w-[400px] h-[400px] rounded-t-lg"
                  />
                  <a
                    href="https://www.logisticsinsider.in/innovation-amidst-congestion-future-of-urban-logistics-in-india/#:~:text=URBAN%20LOGISTICS%3A%20CHALLENGES%20OF%20DELIVERING,and%20more%20efficient%20delivery%20services."
                    className="text-[24px] my-2 font-bold font-mono hover:underline"
                  >
                    Urban Logistics
                  </a>
                  <p className="text-[16px] my-2  font-mono">
                    Challenges of delivering to the denser population.
                  </p>
                  <hr />
                  <a
                    href="https://www.logisticsinsider.in/innovation-amidst-congestion-future-of-urban-logistics-in-india/#:~:text=URBAN%20LOGISTICS%3A%20CHALLENGES%20OF%20DELIVERING,and%20more%20efficient%20delivery%20services."
                    className="text-[24px] my-2 font-bold font-mono hover:underline"
                  >
                    <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                      Read More
                    </button>
                  </a>
                </div>
              </div>

              <div className="inline-block px-3">
                <div className="border border-custom-light-blue rounded-lg overflow-hidden w-[360px] h-[640px]">
                  <img
                    src="https://m.media-amazon.com/images/I/51HCHFclmmL.jpg"
                    className="w-[400px] h-[400px] rounded-t-lg"
                  />
                  <a
                    href="https://www.linkedin.com/pulse/case-study-amazons-supply-chain-optimization-pang-k--yio4e"
                    className="text-[24px] my-2 font-bold font-mono hover:underline"
                  >
                    Amazon's One-Day Delivery
                  </a>
                  <p className="text-[16px] my-2 font-mono">
                    Amazon's journey toward optimizing its supply chain through
                    predictive analytics has tremendously impacted cost savings
                    and delivery times.
                  </p>
                  <hr />
                  <a
                    href="https://www.linkedin.com/pulse/case-study-amazons-supply-chain-optimization-pang-k--yio4e"
                    className="text-[24px] my-2 font-bold font-mono hover:underline"
                  >
                    <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                      Read More
                    </button>
                  </a>
                </div>
              </div>

              <div className="inline-block px-3">
                <div className="border border-custom-light-blue rounded-lg overflow-hidden w-[360px] h-[640px]">
                  <img
                    src="data:image/jpeg;base64,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"
                    className="w-[400px] h-[400px] rounded-t-lg"
                  />
                  <a
                    href="https://hbswk.hbs.edu/item/fed-up-workers-and-supply-woes-whats-next-for-dollar-stores"
                    className="text-[24px] my-2 font-bold font-mono hover:underline"
                  >
                    What's next for Dollar Stores?
                  </a>
                  <p className="text-[16px] my-2 font-mono">
                    Willy Shih discusses how higher costs, shipping delays, and
                    worker shortages.
                  </p>
                  <hr />
                  <a href="https://hbswk.hbs.edu/item/fed-up-workers-and-supply-woes-whats-next-for-dollar-stores">
                    <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                      Read More
                    </button>
                  </a>
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
                <p className="lg:text-[24px] text-[18px] my-2 mx-2 font-bold font-mono">
                  Supply Chain Insights
                </p>
                <p className="lg:text-[16px] text-[10px] my-2 mx-2 font-mono">
                  Unpacking the latest trends and innovations shaping the future
                  of logistics.
                </p>
                <div className="flex flex-nowrap gap-1">
                  <button
                    className="text-[16px] px-2 py-1 rounded-full border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono"
                    onClick={() => {
                      firstScroll(-100);
                    }}
                  >
                    <LeftOutlined />
                  </button>
                  <button
                    className="text-[16px] px-2 py-1 rounded-full border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono"
                    onClick={() => {
                      firstScroll(100);
                    }}
                  >
                    <RightOutlined />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 h-[150px] mb-10 flex items-center gap-2">
          <div>
            <h3 className="lg:text-[24px] text-[18px]">Our Clients: </h3>
          </div>
          <div className="w-full mr-2 h-auto overflow-hidden flex justify-start whitespace-nowrap">
            <div className="animate-marquee flex">
              <TwitchOutlined className="text-[64px] mx-[100px] " />
              <SpotifyOutlined className="text-[64px] mx-[100px] " />
              <TikTokOutlined className="text-[64px] mx-[100px] " />
              <PinterestOutlined className="text-[64px] mx-[100px] " />
              <XOutlined className="text-[64px] mx-[100px] " />
              <DiscordOutlined className="text-[64px] mx-[100px] " />
              <OpenAIOutlined className="text-[64px] mx-[100px] " />
              <RedditOutlined className="text-[64px] mx-[100px] " />
              <InstagramOutlined className="text-[64px] mx-[100px] " />
              <GoogleOutlined className="text-[64px] mx-[100px] " />
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
          <h3 className="text-[24px] font-mono my-10">Our Blogs:</h3>
        </div>
        <div className="w-5/6 flex gap-10 my-10">
          <div className="w-1/4">
            <div className="inline-block px-3">
              <div className=" rounded-lg overflow-hidden w-[360px] h-[640px]">
                <p className="text-[24px] my-2 mx-2 font-bold font-mono">
                  Route Ready!
                </p>
                <p className="text-[16px] my-2 mx-2 font-mono">
                  Tips & tricks to optimize your deliveries.
                </p>
                <div className="flex flex-nowrap gap-1">
                  <button
                    className="text-[16px] px-2 py-1 rounded-full border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono"
                    onClick={() => {
                      secondScroll(-100);
                    }}
                  >
                    <LeftOutlined />
                  </button>
                  <button
                    className="text-[16px] px-2 py-1 rounded-full border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono"
                    onClick={() => {
                      secondScroll(100);
                    }}
                  >
                    <RightOutlined />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4">
            <div
              className="rounded-xl overflow-x-scroll flex gap-5 flex-row hide-scroll-bar"
              ref={secondCaro}
            >
              {
                //Cards
              }
              <div className="inline-block px-3">
                <div className="border border-custom-light-blue rounded-lg overflow-hidden w-[360px] h-[640px]">
                  <img
                    src="https://mllcnzvqahci.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://www.acu.edu/wp-content/uploads/2022/01/SupplyChainCrisis-scaled.jpg"
                    className="w-[400px] h-[400px] rounded-t-lg"
                  />
                  <a
                    href="https://www.inboundlogistics.com/articles/5-tips-for-an-efficient-supply-chain-management/"
                    className="text-[24px] my-2 hover:underline font-bold font-mono"
                  >
                    5 Tips for Efficient Supply Chain Management
                  </a>
                  <p className="text-[16px] my-2 font-mono">
                    Foundational tips for an efficient supply chain, including
                    finding dependable suppliers, and building a robust returns
                    management process.
                  </p>
                  <hr />
                  <a
                    href="https://www.inboundlogistics.com/articles/5-tips-for-an-efficient-supply-chain-management/"
                    className="text-[24px] my-2 hover:underline font-bold font-mono"
                  >
                    <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                      Read More
                    </button>
                  </a>
                </div>
              </div>

              <div className="inline-block px-3">
                <div className="border border-custom-light-blue rounded-lg overflow-hidden w-[360px] h-[640px]">
                  <img
                    src="https://www.vtechcms.com/assets/e0fced55-cea6-4b0e-87a5-e0975e2e9320/Screen%20Shot%202020-11-20%20at%2011.40.43.png"
                    className="w-[400px] h-[400px] rounded-t-lg"
                  />
                  <a
                    href="https://6river.com/expert-tips-on-supply-chain-management/"
                    className="text-[24px] my-2 hover:underline font-bold font-mono"
                  >
                    Inside 50 expert tips on supply chain
                  </a>
                  <p className="text-[16px] my-2 font-mono">
                    This comprehensive resource offers 50 expert tips on various
                    aspects of supply chain management, and fostering strong
                    supplier relationships.
                  </p>
                  <hr />
                  <a
                    href="https://6river.com/expert-tips-on-supply-chain-management/"
                    className="text-[24px] my-2 hover:underline font-bold font-mono"
                  >
                    <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                      Read More
                    </button>
                  </a>
                </div>
              </div>

              <div className="inline-block px-3">
                <div className="border border-custom-light-blue rounded-lg overflow-hidden w-[360px] h-[640px]">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTd_2BBIG3_n0-SdTH7H5qDQBw0qpa8xStl4l4_7bgs1GOyoWDnaiwiat18YkRJ"
                    className="w-[400px] h-[400px] rounded-t-lg"
                  />
                  <a
                    href="https://www.slimstock.com/blog/supply-chain-management/"
                    className="text-[24px] my-2 hover:underline font-bold font-mono"
                  >
                    Supply Chain Management: Strategies
                  </a>
                  <p className="text-[16px] my-2 font-mono">
                    Learn how to minimize planning errors, control costs,
                    improve customer service, and optimize your supply chain for
                    better profit margins.
                  </p>
                  <hr />
                  <a
                    href="https://www.slimstock.com/blog/supply-chain-management/"
                    className="text-[24px] my-2 hover:underline font-bold font-mono"
                  >
                    <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                      Read More
                    </button>
                  </a>
                </div>
              </div>

              <div className="inline-block px-3">
                <div className="border border-custom-light-blue rounded-lg overflow-hidden w-[360px] h-[640px]">
                  <img src="https://st2.depositphotos.com/1826664/8298/i/950/depositphotos_82989670-stock-photo-scm-supply-chain-management-four.jpg" />
                  <a
                    href="https://www.manh.com/en-in/our-solutions/supply-chain-management-software/warehouse-management-system"
                    className="text-[24px] my-2 hover:underline font-bold font-mono"
                  >
                    Ultimate Guide to Warehouse Automation
                  </a>
                  <p className="text-[16px] my-2 font-mono">
                    Delve into different automation technologies, their
                    benefits, and how to choose the right solutions for your
                    needs.
                  </p>
                  <hr />
                  <a
                    href="https://www.manh.com/en-in/our-solutions/supply-chain-management-software/warehouse-management-system"
                    className="text-[24px] my-2 hover:underline font-bold font-mono"
                  >
                    <button className="text-[16px] px-1 py-1 rounded-l-3xl rounded-r-3xl border border-custom-light-blue text-custom-light-blue bg-white my-2 mx-2 hover:bg-custom-light-blue hover:text-white font-mono">
                      Read More
                    </button>
                  </a>
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
