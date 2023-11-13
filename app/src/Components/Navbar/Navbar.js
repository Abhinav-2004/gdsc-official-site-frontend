import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {AiOutlineMenu} from 'react-icons/ai';
import {RxCrossCircled} from 'react-icons/rx';
const Navbar = () => {
  const [hamburger,setHamburger]=useState(true);
  const [cross, setCross]=useState(false);
  return (
    <>
      <div className="dekstop-navbar">
        <div className="flex flex-row justify-between item-center w-[100vw] pt-4 pl-10 pr-10">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <img
                src="https://i.imgur.com/LzRvg4b.png"
                className="w-16"
                alt="GDSC"
              />
            </div>
            <div className="flex flex-col justify-between items-left pl-6 text-[#72777e]">
              <div className="text-xl font-Roboto">Developer Student Clubs</div>
              <div className="text-sm font-medium  ">
                Silicon Insitute of Technology
              </div>
            </div>
          </div>

          <div className="text-lg font-semibold flex justify-center items-center gap-12 pr-0">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/about">About Us</Link>
            </div>
            <div>
              <Link to="/projects">Projects</Link>
            </div>
            <div>
              <Link to="/team">Team</Link>
            </div>
            <div>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Link to="/join/community">
              <Button colorScheme="messenger">Join our Community</Button>
            </Link>
            <Link to="/join/faq">
              <Button colorScheme="messenger">FAQ ?</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mobile-navbar">
        <div className="flex justify-between items-center pl-2 pr-2 pt-4">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <img
                src="https://i.imgur.com/LzRvg4b.png"
                className="w-12"
                alt="GDSC"
              />
            </div>
            <div className="flex flex-col justify-between items-left pl-4 text-[#72777e]">
              <div className="text-l font-Roboto">Developer Student Clubs</div>
              <div className="text-xs font-medium  ">
                Silicon Insitute of Technology
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <AiOutlineMenu size={25} className={`${hamburger?"show":"hide"}`} onClick={()=>
              {setHamburger(false);
                setCross(true);
                console.log('hide');
              }}/>
            <RxCrossCircled size={25} className={`${cross?"show":"hide"}`} onClick={()=>
              {setHamburger(true);
                setCross(false);
                console.log('cross')
              }}/>
          </div>

        </div>
        {cross?<>
            <div className="hamburger-option entry text-xl font-semibold">
              <Link to='/'><div className="option-css">Home</div></Link>
              <Link to='/about'><div className="option-css">About Us</div></Link>
              <Link to='/projects'><div className="option-css">Projects</div> </Link>
              <Link to='/team'><div className="option-css">Team</div></Link>
              <Link to='/contact'><div className="option-css">Contact Us</div></Link>
            </div>
              
            </>:<></>}
      </div>
    </>
  );
};

export default Navbar;
