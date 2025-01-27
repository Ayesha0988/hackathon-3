"use client";
import React from "react";
import Image from "next/image";
import { FaSearch,FaHome,FaStore,FaPlus,} from "react-icons/fa";
import { MdPersonAdd } from 'react-icons/md';
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {/* Top */}

      <div className="w-full bg-[#F5F5F5] h-full flex justify-center items-center flex-row">
        <div className="w-[90%] text-[#111111] h-[30px] md:h-[46px] flex justify-between items-center ">
          <div>
          <Link 
               href="/#"
               >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={34}
              height={34}
              className="h-[20px] w-[20px] md:h-[34px] md:w-[34px]"
            />
            </Link>
          </div>
          <div className="md:relative md:left-[130px] hidden md:flex">
            <Link
            href="/Products"
            >
            <h1 className="text-[13px] font-medium p-1 md:p-2  bg-white rounded-sm">
              Skip to the main content
            </h1>
            </Link>
          </div>
          <div className="md:flex hidden justify-center  items-center gap-3">
            <div className="flex gap-1 text-[10px] md:text-[14px] ">
               <Link 
               href="/help"
               >
              <div className="border-r-black border-r-2 pr-2">
               
                <h1 className="border-r-black">Help</h1>
              </div>
              </Link>
              <Link 
              href="/Products"
              >
              <div className="border-r-black border-r-2 pr-2">
                <h1 className="border-r-black">Products</h1>
              </div>
              </Link>
              <Link
              href="Sign"
              >
              <div className="border-r-black border-r-2 pr-2">
                <h1 className="border-r-black">Sign In</h1>
              </div>
              </Link>
              <Link 
              href="Store"
              >
              <div className="border-r-black border-r-2 pr-2">
                <h1 className="border-r-black">Find a Store</h1>
              </div>
              </Link>
            </div>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden">
              <Menu className="size-[25px]" />
            </SheetTrigger>
            <SheetContent>
             
              <div className="flex  flex-col gap-1 mt-8 text-[14px] md:text-[14px] ">
                 <Link
                 href="/help"
                 onClick={handleLinkClick}
                 >
                  <div>
                  
                  <h1 className="border-b-black border-b flex items-center gap-1">Help<FaHome/></h1>
                </div>
                </Link>
                <Link
                href="/Products"
                onClick={handleLinkClick}
                >
                <div className="flex justify-start items-center gap-1 border-b-black border-b">
                  <h1 >Become A Nike</h1>
                  <div>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={34}
              height={34}
              className="h-[10px] w-[10px]"
            />
          </div>
                </div>
                </Link >
               <Link 
               href="/Sign"
               onClick={handleLinkClick}
               >
                
                <div >
                  <h1 className="border-b-black border-b flex items-center gap-1 ">Sign In<MdPersonAdd/></h1>
                </div>
                </Link>
               <Link 
               href="/Login"
               onClick={handleLinkClick}
               >
                
                <div >
                  <h1 className="border-b-black border-b flex items-center gap-1 ">Join Us<FaPlus/></h1>
                </div>
                </Link>
                <Link 
                href="/Store"
                onClick={handleLinkClick}
                >
                <div >
                  <h1 className="border-b-black border-b flex items-center gap-1">Find a Store<FaStore/></h1>
                </div>
               </Link>
                
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Header */}

      <div className="w-full h-auto flex justify-center items-center flex-row">
        <div className="w-[90%] text-[#111111] h-[45px] md:h-[76px] flex justify-between items-center ">
          <div>
            <Image
              src="/Nike.svg"
              alt="Logo"
              width={34}
              height={34}
              className="h-[25px] w-[25px] md:h-[74px] md:w-[74px]"
            />
          </div>

          <div className="md:relative justify-center relative left-9 items-center hidden md:flex">
            <h1 className="text-[18px]  font-medium p-1 md:p-2  bg-white rounded-sm">
              New & Featured
            </h1>
            <h1 className="text-[18px]  font-medium p-1 md:p-2  bg-white rounded-sm">
              Men
            </h1>
            <h1 className="text-[18px]  font-medium p-1 md:p-2  bg-white rounded-sm">
              Women
            </h1>
            <h1 className="text-[18px]  font-medium p-1 md:p-2  bg-white rounded-sm">
              Kids
            </h1>
            <h1 className="text-[18px]  font-medium p-1 md:p-2  bg-white rounded-sm">
              Sale
            </h1>
            <h1 className="text-[18px]  font-medium p-1 md:p-2  bg-white rounded-sm">
              SNKRS
            </h1>
          </div>

          <div className="flex justify-center items-center gap-2">
            <div className="flex gap-2 justify-center items-center p-1 md:p-[6px] rounded-full bg-[#F5F5F5] ">
              <FaSearch />
              <input
                type="text"
                placeholder="Search"
                className="text-black outline-none bg-[#F5F5F5] "
              />
            </div>
            <div>
              <Image
                src="/heart.svg"
                alt="Logo"
                width={34}
                height={34}
                className="h-[25px] w-[25px] md:h-[36px] md:w-[36px]"
              />
            </div>
            <div>
      {/* Cart Icon */}
      <Link
        href="/cart"
        onClick={() => console.log('Cart icon clicked')}
      >
        <Image
          src="/cart.svg"
          alt="Cart"
          width={36}
          height={36}
          className="cursor-pointer"
        />
      </Link>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;