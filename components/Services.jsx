// Librairies
import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";

// Components
import CalendlyModal from "./UI/CalendlyModal";

// MAIN FUNCTION
export default function Services() {
  // State pour le modal Calendly
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] =
    useState(false);

  // Fonction pour ouvrir le modal
  const openCalendlyModal = () => setIsCalendlyModalOpen(true);

  // Fonction pour fermer le modal
  const closeCalendlyModal = () => setIsCalendlyModalOpen(false);

  return (
    <div id='services' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-24'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Services
        </p>
        <h2 className='py-4'>Our Blockchain & AI Solutions</h2>
        <p className='text-gray-800 mb-8'>
          Discover our comprehensive range of blockchain and AI
          services designed to accelerate your digital transformation.
          Our expert team delivers tailored solutions for businesses
          seeking to leverage cutting-edge technologies.
        </p>

        {/* Service Cards */}
        <div className='grid md:grid-cols-3 gap-8'>
          {/* Card 1 - Audit */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative border border-gray-200'>
            <div className='absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold'>
              20% OFF
            </div>
            <div className='h-full flex flex-col'>
              <div>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                  Audit
                </p>
                <h3 className='py-2 text-xl'>
                  Smart-Contract & Security
                </h3>
                <div className='border-b border-gray-300 my-4'></div>
              </div>
              <div className='flex-grow'>
                <p className='py-2 text-gray-800'>
                  Our comprehensive{" "}
                  <span className='font-semibold'>100% remote</span>{" "}
                  audit service evaluates your smart contracts for
                  security vulnerabilities, code quality issues, and
                  compliance with best practices.
                </p>
                <ul className='list-disc pl-5 py-2 text-gray-800'>
                  <li>
                    Code review by security experts via secure cloud
                    repositories
                  </li>
                  <li>Gas optimization recommendations</li>
                  <li>
                    Vulnerability assessment with detailed reports
                  </li>
                  <li>Video conferencing presentation of findings</li>
                  <li className='text-[#5651e5] font-semibold'>
                    + FREE follow-up consultation (60-min video call)
                  </li>
                </ul>
              </div>
              <div className='mt-auto'>
                <div className='flex justify-center items-center gap-3 py-4'>
                  <p className='text-lg text-gray-500 line-through'>
                    3 125 €
                  </p>
                  <p className='text-3xl font-bold text-[#5651e5]'>
                    2 500 €
                  </p>
                </div>
                <p className='text-center text-sm mb-3 text-gray-600'>
                  Limited time offer
                </p>
                <div className='flex justify-center'>
                  <button
                    onClick={openCalendlyModal}
                    className='w-full p-4 text-gray-100 mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:from-[#4b46d1] hover:to-[#5e85e3] transition-all'>
                    <IoCalendarOutline size={20} />
                    Book Security Audit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - POC */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative border border-gray-200'>
            <div className='absolute top-4 right-4 bg-[#5651e5] text-white px-2 py-1 rounded-full text-xs font-bold'>
              POPULAR CHOICE
            </div>
            <div className='h-full flex flex-col'>
              <div>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                  POC
                </p>
                <h3 className='py-2 text-xl'>Blockchain × AI</h3>
                <div className='border-b border-gray-300 my-4'></div>
              </div>
              <div className='flex-grow'>
                <p className='py-2 text-gray-800'>
                  Harness the power of blockchain and AI with our
                  <span className='font-semibold'>
                    {" "}
                    fully remote
                  </span>{" "}
                  proof-of-concept development service. We build
                  functional prototypes that demonstrate the viability
                  of your innovative ideas.
                </p>
                <ul className='list-disc pl-5 py-2 text-gray-800'>
                  <li>
                    Custom solution architecture via collaborative
                    platforms
                  </li>
                  <li>
                    AI integration with blockchain using cloud
                    infrastructure
                  </li>
                  <li>
                    Remote delivery of functional prototype with
                    access credentials
                  </li>
                  <li>
                    Comprehensive technical documentation and virtual
                    walkthrough
                  </li>
                  <li className='text-[#5651e5] font-semibold'>
                    + FREE business case development
                  </li>
                  <li className='text-[#5651e5] font-semibold'>
                    + 2 revision cycles with live screen sharing
                    sessions
                  </li>
                </ul>
              </div>
              <div className='mt-auto'>
                <div className='flex justify-center items-center gap-3 py-4'>
                  <p className='text-lg text-gray-500 line-through'>
                    7 000 €
                  </p>
                  <p className='text-3xl font-bold text-[#5651e5]'>
                    5 000 €
                  </p>
                </div>
                <p className='text-center text-sm mb-3 text-gray-600'>
                  Save 2 000 € with our {new Date().getFullYear()}{" "}
                  offer
                </p>
                <div className='flex justify-center'>
                  <button
                    onClick={openCalendlyModal}
                    className='w-full p-4 text-gray-100 mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:from-[#4b46d1] hover:to-[#5e85e3] transition-all shadow-lg'>
                    <IoCalendarOutline size={20} />
                    Start Your POC Project
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Training */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 relative border border-gray-200'>
            <div className='absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold'>
              NEW
            </div>
            <div className='h-full flex flex-col'>
              <div>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                  Training
                </p>
                <h3 className='py-2 text-xl'>
                  1-Day &quot;Blockchain + AI&quot;
                </h3>
                <div className='border-b border-gray-300 my-4'></div>
              </div>
              <div className='flex-grow'>
                <p className='py-2 text-gray-800'>
                  Our intensive{" "}
                  <span className='font-semibold'>virtual</span> 1-day
                  training program offers a deep dive into the
                  intersection of blockchain and AI technologies.
                  Perfect for distributed teams seeking to quickly
                  build expertise.
                </p>
                <ul className='list-disc pl-5 py-2 text-gray-800'>
                  <li>Live interactive virtual classroom via Zoom</li>
                  <li>
                    Hands-on exercises with real-time instructor
                    feedback
                  </li>
                  <li>
                    Screen sharing and collaborative coding sessions
                  </li>
                  <li>
                    Customized curriculum delivered to your global
                    team
                  </li>
                  <li className='text-[#5651e5] font-semibold'>
                    + FREE digital resource pack with 30-day access to
                    recorded sessions
                  </li>
                </ul>
              </div>
              <div className='mt-auto'>
                <div className='flex flex-col items-center py-4'>
                  <p className='text-lg text-gray-500 line-through'>
                    1 500 €
                  </p>
                  <p className='text-3xl font-bold text-[#5651e5]'>
                    990 €
                  </p>
                  <p className='text-center text-sm text-gray-700 font-semibold mt-1'>
                    Group discount: 750 €/person for 3+ attendees
                  </p>
                </div>
                <p className='text-center text-sm mb-3 text-gray-600'>
                  Includes all digital materials & worldwide access
                </p>
                <div className='flex justify-center'>
                  <button
                    onClick={openCalendlyModal}
                    className='w-full p-4 text-gray-100 mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:from-[#4b46d1] hover:to-[#5e85e3] transition-all'>
                    <IoCalendarOutline size={20} />
                    Schedule Training
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial/Trust section */}
        <div className='mt-16 p-6 rounded-xl bg-gray-50 border border-gray-200'>
          <h3 className='text-center text-xl mb-6'>
            Trusted by Industry Leaders Worldwide
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-4 rounded-lg shadow-sm'>
              <p className='text-gray-800 italic'>
                &quot;Blockchain & Cie&apos;s remote security audit
                saved us from potential vulnerabilities. The distance
                was never an issue—their thorough approach and
                expertise are unmatched.&quot;
              </p>
              <p className='text-right text-sm mt-4 text-gray-600'>
                — CTO, FinTech Startup, Singapore
              </p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-sm'>
              <p className='text-gray-800 italic'>
                &quot;The POC they developed exceeded our expectations
                despite working entirely remotely. Their collaboration
                tools made the process seamless and helped us secure
                additional funding for our blockchain project.&quot;
              </p>
              <p className='text-right text-sm mt-4 text-gray-600'>
                — Innovation Director, Enterprise Client, Germany
              </p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-sm'>
              <p className='text-gray-800 italic'>
                &quot;Our globally distributed team gained valuable
                insights during the virtual training. The interactive
                exercises were particularly helpful for our developers
                across different time zones.&quot;
              </p>
              <p className='text-right text-sm mt-4 text-gray-600'>
                — Lead Developer, Web3 Company, Canada
              </p>
            </div>
          </div>
        </div>

        {/* Remote Work Banner */}
        <div className='mt-8 p-4 bg-[#5651e5]/10 rounded-xl border border-[#5651e5]/20'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='mb-4 md:mb-0 md:mr-6'>
              <h3 className='text-lg font-semibold text-[#5651e5]'>
                100% Remote Services
              </h3>
              <p className='text-gray-700'>
                All our services are delivered remotely, allowing us
                to work with clients worldwide while maintaining the
                highest quality standards.
              </p>
            </div>
            <button
              onClick={openCalendlyModal}
              className='whitespace-nowrap px-6 py-3 bg-[#5651e5] text-white rounded-lg hover:bg-[#4b46d1] transition-colors flex items-center gap-2'>
              <IoCalendarOutline size={20} />
              Schedule Your Free Consultation
            </button>
          </div>
        </div>

        {/* Calendly Modal */}
        <CalendlyModal
          isOpen={isCalendlyModalOpen}
          onClose={closeCalendlyModal}
        />

        {/* Back to top button */}
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                className='m-auto text-[#5651e5]'
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
