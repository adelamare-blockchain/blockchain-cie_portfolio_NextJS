// Librairies
import Head from 'next/head';

// Components
import Main from '@/components/Main';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

// MAIN FUNCTION
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Head>
        <title>
          Blockchain & Cie | Fullstack Blockchain Development Company
          | Antoine Delamare
        </title>
        <meta
          name='description'
          content='Blockchain & Cie is specializing in building (and occasionally designing) exceptional decentralized digital experiences using web3/blockchain technologies.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
