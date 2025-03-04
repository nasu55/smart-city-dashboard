"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomePage = () => {
  return (
    <>
      <div>
        <div className="relative">
          <Link href={"/admin-login"}>
            <button
              className="absolute text-center left-[14.5rem] top-[24rem] z-50 h-10  w-[10%] items-start rounded-full bg-[#31511E] hover:bg-white hover:text-[#31511E]  text-white dark:bg-white dark:text-black"
              type="submit"
            >
             <div className="flex justify-center gap-1 hover:gap-3 transition-all duration-200"><p> Admin Login</p> <span><ArrowForwardIcon/></span></div>
            </button>
          </Link>
          <Link href={"/shop-login"}>
            <button
              className="absolute left-[14.5rem] top-[28rem] z-50 h-10  w-[10%] items-start rounded-full bg-[#31511E] hover:bg-white hover:text-[#31511E]  text-white dark:bg-white dark:text-black"
              type="submit"
            >
             <div className="flex justify-center gap-1 hover:gap-3 transition-all duration-200"><p> Shop Login</p> <span><ArrowForwardIcon/></span></div>
            </button>
          </Link>

          <span className="h-[40rem] w-[100%] rounded-full">
            <div className="relative h-screen w-full">
              <Image
                fill
                src="/images/login/User-01.png"
                alt="User"
                className="object-cover"
              />
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default HomePage;
