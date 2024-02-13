// Librairie
import Head from 'next/head';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

export default function LegalNotice() {
  // Rendu JSX
  return (
    <>
      <Head>
        <title>Legal Notice | Blockchain & Cie</title>
        <meta
          name='description'
          content='Legal information about Blockchain & Cie'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div
        id='legal-notice'
        className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Legal Notice
        </h2>
        <div className='my-4 p-4 w-full flex justify-between items-center col-span-3 lg:col-span-2 h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
          <h2 className='text-center'>Blockchain & Cie.</h2>
          <div className='flex'>
            <Link
              href='https://www.linkedin.com/company/blockchain-cie/'
              target='_blank'
              rel='noreferrer'>
              <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </Link>
          </div>
        </div>
        {/* RENSEIGNEMENTS JURIDIQUES */}
        <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 hidden sm:block'>
          {/* Renseignements */}
          <div className='text-xl tracking-widest uppercase py-4'>
            Renseignements
          </div>
          <div className='flex-col shadow-xl shadow-gray-400 py-4 p-4 rounded-xl'>
            <h3>Dénomination ou raison sociale</h3>
            <div className='py-6'>
              <p>BLOCKCHAIN & CIE.</p>
            </div>
            <h3>Forme Juridique</h3>
            <div className='py-6'>
              <p>EURL (Société à associé unique)</p>
            </div>
            <h3>Adresse de l&apos;établissement</h3>
            <div className='py-6'>
              <p>49 Grand Rue 29510 Edern, France</p>
            </div>
            <h3>Gérant</h3>
            <div className='py-6'>
              <p>DELAMARE Antoine, Jean, René</p>
            </div>
          </div>

          {/* Numéros d'identification */}
          <div className='text-xl tracking-widest uppercase py-4'>
            IDENTIFICATION
          </div>
          <div className='flex-col shadow-xl shadow-gray-400 py-4 p-4 rounded-xl'>
            <h3>N°SIREN</h3>
            <div className='py-6'>
              <p>983173428</p>
            </div>
            <h3>N°SIRET (siège)</h3>
            <div className='py-6'>
              <p>98317342800019</p>
            </div>
            <h3>N°TVA Intracommunautaire</h3>
            <div className='py-6'>
              <p>FR71983173428</p>
            </div>
            <h3>N°RCS</h3>
            <div className='py-6'>
              <p>Quimper B 983 173 428</p>
            </div>
          </div>

          {/* Infos commerciales */}
          <div className='text-xl tracking-widest uppercase py-4'>
            Informations commerciales
          </div>
          <div className='flex-col shadow-xl shadow-gray-400 py-4 p-4 rounded-xl'>
            <h3>Activité (Code NAF ou APE)</h3>
            <div className='py-6'>
              <p>Programmation informatique (6201Z)</p>
            </div>
            <h3>Convention collective</h3>
            <div className='py-6'>
              <p>Bureaux d&apos;études techniques SYNTEC (1486)</p>
            </div>
          </div>

          {/* Infos juridiques */}
          <div className='text-xl tracking-widest uppercase py-4'>
            Informations juridiques
          </div>
          <div className='flex-col shadow-xl shadow-gray-400 py-4 p-4 rounded-xl'>
            <h3>Date d&apos;immatriculation RCS</h3>
            <div className='py-6'>
              <p>09-01-2024</p>
            </div>
            <h3>Date d&apos;enregistrement INSEE</h3>
            <div className='py-6'>
              <p>03-01-2024</p>
            </div>
            <h3>Capital social</h3>
            <div className='py-6'>
              <p>1 000,00 €</p>
            </div>
          </div>
        </div>
        {/* FOOTER */}
        <div className='flex justify-center py-6'>
          <div className='flex flex-col items-center'>
            <p>
              &copy; <strong> Blockchain & Cie.</strong> | All Rights
              Reserved. | Last updated: {new Date().getFullYear()}
            </p>
          </div>
        </div>
        {/* BACK PAGE */}
        <div className='flex justify-center py-6'>
          <Link href='#legal-notice'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                className='text-[#5651e5]'
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
