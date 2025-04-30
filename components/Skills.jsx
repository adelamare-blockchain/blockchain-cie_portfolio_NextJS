// Librairies
import Image from "next/image";
import React from "react";

// Blockchain & Dev Skills
import Solidity from "@/public/assets/skills/solidity.png";
import Hardhat from "@/public/assets/skills/hardhat.png";
import Openzeppelin from "@/public/assets/skills/openzeppelin.png";
import NodeJS from "@/public/assets/skills/node.png";
import Wagmi from "@/public/assets/skills/wagmi.png";
import NextJS from "@/public/assets/skills/nextjs.png";
import MistralAI from "@/public/assets/skills/mistral-ai.png";
import MakeLogo from "@/public/assets/skills/make-logo.svg";

// MAIN FUNCTION
export default function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 py-24'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Technologies
        </p>
        <h2 className='py-4'>Our Blockchain & AI Expertise</h2>

        {/* Technology Categories */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <div>
            <h3 className='text-xl font-semibold mb-2 text-[#5651e5]'>
              Blockchain Technologies
            </h3>
            <p className='mb-4 text-gray-800'>
              We build secure and scalable blockchain solutions with
              industry-leading frameworks and best practices.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-2 text-[#5651e5]'>
              AI Integration
            </h3>
            <p className='mb-4 text-gray-800'>
              We leverage cutting-edge AI technologies to enhance
              blockchain applications with intelligence and
              automation.
            </p>
          </div>
        </div>

        {/* Tech skills grid */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Section: Blockchain Technologies */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-t-4 border-[#5651e5]'>
            {/* Solidity Logo */}
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Solidity}
                  width={64}
                  height='auto'
                  alt='Solidity'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='truncate whitespace-nowrap max-w-full font-medium'>
                  Solidity
                </h3>
                <p className='text-xs text-gray-500'>
                  Smart Contracts
                </p>
              </div>
            </div>
          </div>

          {/* Hardhat Logo */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-t-4 border-[#5651e5]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Hardhat}
                  width={64}
                  height='auto'
                  alt='Hardhat'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='truncate whitespace-nowrap max-w-full font-medium'>
                  Hardhat
                </h3>
                <p className='text-xs text-gray-500'>
                  Development Framework
                </p>
              </div>
            </div>
          </div>

          {/* Openzeppelin Logo */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-t-4 border-[#5651e5]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Openzeppelin}
                  width={64}
                  height='auto'
                  alt='OpenZeppelin'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='truncate whitespace-nowrap max-w-full font-medium'>
                  OpenZeppelin
                </h3>
                <p className='text-xs text-gray-500'>
                  Security Standards
                </p>
              </div>
            </div>
          </div>

          {/* Wagmi Logo */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-t-4 border-[#5651e5]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Wagmi}
                  width={64}
                  height='auto'
                  alt='Wagmi'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='truncate whitespace-nowrap max-w-full font-medium'>
                  Wagmi/Viem
                </h3>
                <p className='text-xs text-gray-500'>
                  Web3 Interaction
                </p>
              </div>
            </div>
          </div>

          {/* Section: AI Technologies */}
          {/* Mistral AI Logo */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-t-4 border-[#709dff]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={MistralAI}
                  width={64}
                  height='auto'
                  alt='AI Integration'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='truncate whitespace-nowrap max-w-full font-medium'>
                  AI Integration
                </h3>
                <p className='text-xs text-gray-500'>
                  Mistral & Claude
                </p>
              </div>
            </div>
          </div>

          {/* Make.com Logo */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 border-t-4 border-[#709dff]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={MakeLogo}
                  width={64}
                  height='auto'
                  alt='Automation'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='truncate whitespace-nowrap max-w-full font-medium'>
                  Make.com
                </h3>
                <p className='text-xs text-gray-500'>AI Automation</p>
              </div>
            </div>
          </div>

          {/* Section: Development Technologies */}
          {/* Next.js Logo */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={NextJS}
                  width={64}
                  height='auto'
                  alt='Next.js'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='truncate whitespace-nowrap max-w-full font-medium'>
                  Next.js
                </h3>
                <p className='text-xs text-gray-500'>
                  React Framework
                </p>
              </div>
            </div>
          </div>

          {/* Node.js Logo */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={NodeJS}
                  width={64}
                  height='auto'
                  alt='Node.js'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='truncate whitespace-nowrap max-w-full font-medium'>
                  Node.js
                </h3>
                <p className='text-xs text-gray-500'>
                  JavaScript Runtime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
