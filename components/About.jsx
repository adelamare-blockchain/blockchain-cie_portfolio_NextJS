'use client';
// Librairies
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '@/public/assets/about.jpg';

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
          <h2 className='py-4'>Who We Are</h2>
          <p className='py-2 text-gray-600'>
            Blockchain & Cie is a french company specialized in
            building back-end technologies such as blockchain inside
            mobile responsive front-end UI applications. Blockchain &
            Cie represents a group of passionate developers
            understanding there is more than one way to accomplish a
            task. Though we are most proficient in building front-end
            applications using HTML, CSS, Javascript, React & Next.js,
            we bring expertise as well in smart contracts development
            using advanced Solidity in order to bring blockchain
            solutions and solve complex data management problems for
            businesses and organizations.
          </p>
          <p className='py-2 text-gray-600'>
            Created by Antoine Delamare, a fullstack blockchain
            developer graduated with the{' '}
            <Link
              className='text-[#5651e5]'
              href='https://www.francecompetences.fr/recherche/rs/5000/'
              target='_blank'
              rel='noreferrer'>
              RS5000 certificate{' '}
              <b>
                &quot;Leveraging blockchain in applications
                development&quot;
              </b>
            </Link>{' '}
            from{' '}
            <Link
              className='text-[#5651e5]'
              href='https://www.acadee-formation.com/nos-formations/formation-developpeur-blockchain-solidity-web3/'
              target='_blank'
              rel='noreferrer'>
              The Acadee I.A. & Web3 Academy
            </Link>
            , Blockchain & Cie brings its expertise to provide
            innovative solutions like supply chain tracking, online
            voting systems, and even property registries, showcasing
            versatility and applicability across various domains.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of our latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            src={AboutImg}
            className='rounded-xl'
            alt='/'
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
