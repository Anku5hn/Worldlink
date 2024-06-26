import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom'
const Header = (props) => {
  const [mMenuState, setMMenuState] = useState(false);
  return (
    <>
      <nav className={`fixed lg:w-5/6 w-screen top-0 z-40 ${props.background} rounded-l-xl rounded-r-xl px-1 py-1`}>
        {
          //Desktop Laptop
        }
        <div className="justify-between items-center hidden lg:flex">
          <div>
            <Link to='/'>
            <h3 className={`text-[24px] font-semibold text-custom-light-blue text-shadow font-mono ${props.logoview}`}>
              WorldLink
            </h3>
            </Link>
          </div>
          <div>
            <ul className="flex flex-row text-[18px] gap-5 items-center">
              <li>
                <Link to='/' className={`font-mono hover:font-bold hover:border-b-2 hover:border-custom-light-blue  ${props.homeview}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/services' className={`font-mono hover:font-bold hover:border-b-2 hover:border-custom-light-blue ${props.servicesview}`}>
                  Services
                </Link>
              </li>
              <li>
                <Link to='/aboutus' className={`font-mono hover:font-bold hover:border-b-2 hover:border-custom-light-blue ${props.aboutusview}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/getintouch' className="text-custom-white rounded-r-3xl rounded-l-3xl bg-custom-light-blue px-2 hover:bg-custom-dark-blue box-shadow font-mono">
                  Get a quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {
          //Mobile Tablet
        }
        <div className="justify-between items-center flex lg:hidden">
          <div>
            <Link to='/'>
            <h3 className="text-[18px] font-semibold text-custom-light-blue text-shadow font-mono">
              WorldLink
            </h3>
            </Link>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Link to='/getintouch' className="text-custom-white rounded-r-3xl rounded-l-3xl bg-custom-light-blue px-1 box-shadow font-mono text-sm">
              Get a quote
            </Link>
            <button
              onClick={() => {
                setMMenuState(!mMenuState);
              }}
            >
              {mMenuState ? (
                <MenuFoldOutlined className="text-2xl" />
              ) : (
                <MenuUnfoldOutlined className="text-2xl " />
              )}
            </button>
          </div>
        </div>
        <div
          className={`absolute bg-custom-white inset-x-0 inset-y-0 top-10 ${
            mMenuState ? "block" : "hidden"
          }`}
        >
          <ul className="text-center bg-custom-lighter-blue">
            <li>
              <Link to='/' className="font-mono hover:font-bold hover:border-b-2 hover:border-custom-light-blue">
                Home
              </Link>
            </li>
            <li>
              <Link to='/services' className="font-mono hover:font-bold hover:border-b-2 hover:border-custom-light-blue">
                Services
              </Link>
            </li>
            <li>
              <Link to='/aboutus' className="font-mono hover:font-bold hover:border-b-2 hover:border-custom-light-blue">
                About US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {
        // <div className="w-full h-screen flex justify-center items-center">
        //<img src={Truck} className="w-[100px] clockwise-spin absolute z-10 " />
        //<img src={Airplane} className="w-[250px] anticlockwise-spin hover:w-[300px]"/>
        //</div>
      }

      {
        //<h1 className='absolute z-50 text-[96px] text-center'>Serving You with Unparalleled Efficiency</h1>
      }
    </>
  );
};
export default Header;
