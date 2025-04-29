"use client";
// Librairies
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "@/public/assets/about.jpg";

// MAIN FUNCTION
export default function About() {
  return (
    <div
      id='about'
      className='w-full md:h-screen p-2 flex items-center py-24'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Where Blockchain Meets AI</h2>
          <p className='py-2 text-gray-800'>
            Blockchain & Cie is a French tech innovator at the intersection of blockchain and artificial intelligence. 
            We merge these powerful technologies to unlock new possibilities for forward-thinking businesses ready 
            to embrace the future of digital transformation.
          </p>
          <p className='py-2 text-gray-800 font-medium'>
            <span className='text-[#5651e5]'>Our Core Expertise:</span>
          </p>
          <ul className='list-disc pl-6 py-2 text-gray-800 space-y-1'>
            <li><span className='font-medium'>Smart Contract Security</span> — Comprehensive audits and vulnerability assessments</li>
            <li><span className='font-medium'>AI-Enhanced Blockchain Solutions</span> — Intelligent dApps and automated systems</li>
            <li><span className='font-medium'>Strategic Consulting</span> — Guidance for blockchain and AI integration</li>
            <li><span className='font-medium'>Expert Training</span> — Specialized workshops for technical teams</li>
          </ul>
          <p className='py-2 text-gray-800'>
            Our certified developers combine Solidity, JavaScript, and modern AI frameworks to create 
            secure, scalable applications. We leverage advanced tools like Mistral AI and Claude Sonnet, 
            with Make.com automation to deliver intelligence at every layer of your blockchain solution.
          </p>
          <p className='py-3 text-gray-800 font-medium'>
            Partner with us to develop future-proof systems that transform challenges into opportunities 
            in today's rapidly evolving digital landscape.  
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-800 underline cursor-pointer'>
              Check out some of our latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            src={AboutImg}
            className='rounded-xl'
            alt='Blockchain & Cie - About section'
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
}
