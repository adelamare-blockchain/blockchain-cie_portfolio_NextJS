"use client";
// Librairies
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitterX, BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

// MAIN FUNCTION
export default function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-800'>
            BLOCKCHAIN & AI INNOVATION PARTNER
          </p>

          <h1 className='py-4 text-gray-800'>
            <span className='text-[#5651e5]'>Blockchain & Cie</span>
          </h1>
          <h2 className='py-2 text-gray-800'>
            Your Blockchain & AI trusted partner
          </h2>
          <p className='py-4 text-gray-800 sm:max-w-[70%] m-auto'>
            At Blockchain & Cie, we combine blockchain expertise with
            artificial intelligence to deliver next-generation
            solutions for forward-thinking businesses.
            <br />
            <span className='font-medium text-[#5651e5]'>
              Our Services:
            </span>{" "}
            Smart Contract Audits, AI-Enhanced Blockchain Solutions,
            and Expert Training.
            <br />
            From secure smart contracts to intelligent automation
            systems, we transform challenges into opportunities with
            cutting-edge technology.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/company/blockchain-cie/'
              target='_blank'
              rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://x.com/blockchain_cie'
              target='_blank'
              rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsTwitterX />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            {/* <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
