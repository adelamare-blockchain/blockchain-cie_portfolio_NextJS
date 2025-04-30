// Librairies
import Head from "next/head";
import Script from "next/script";

// Components
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Services from "@/components/Services";

// MAIN FUNCTION
export default function Home() {
  // Données structurées JSON-LD pour les moteurs de recherche
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://blockchain-cie.com/#organization",
        name: "Blockchain & Cie",
        url: "https://blockchain-cie.com",
        logo: {
          "@type": "ImageObject",
          "@id": "https://blockchain-cie.com/#logo",
          url: "https://blockchain-cie.com/fav.png",
          contentUrl: "https://blockchain-cie.com/fav.png",
          width: 112,
          height: 112,
          caption:
            "Blockchain & Cie - Blockchain & AI trusted partner",
        },
        description:
          "Blockchain & Cie provides expert blockchain and AI consulting services, including smart contract audits, blockchain POCs, and AI integration training for businesses worldwide.",
        sameAs: [
          "https://www.linkedin.com/company/blockchain-cie/",
          "https://x.com/blockchain_cie",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://blockchain-cie.com/#website",
        url: "https://blockchain-cie.com",
        name: "Blockchain & Cie",
        description: "Blockchain & AI trusted partner",
        publisher: {
          "@id": "https://blockchain-cie.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://blockchain-cie.com/#webpage",
        url: "https://blockchain-cie.com",
        name: "Blockchain & Cie | Blockchain & AI trusted partner",
        isPartOf: {
          "@id": "https://blockchain-cie.com/#website",
        },
        about: {
          "@id": "https://blockchain-cie.com/#organization",
        },
        description:
          "Blockchain & Cie specializes in blockchain AI consulting, smart contract audits, decentralized application development, and blockchain training. We offer remote solutions worldwide including security audits (2,500€), AI-blockchain POCs (3,500€), and virtual training sessions (990€).",
      },
      {
        "@type": "Service",
        "@id": "https://blockchain-cie.com/services/#service-audit",
        name: "Smart-Contract & Security Audit",
        description:
          "Remote security audits for smart contracts, including vulnerability assessment and code review by blockchain security experts.",
        provider: {
          "@id": "https://blockchain-cie.com/#organization",
        },
        offers: {
          "@type": "Offer",
          price: "2500",
          priceCurrency: "EUR",
        },
      },
      {
        "@type": "Service",
        "@id": "https://blockchain-cie.com/services/#service-poc",
        name: "Blockchain × AI POC Development",
        description:
          "Custom proof-of-concept development integrating blockchain with AI technologies, delivered remotely with comprehensive documentation.",
        provider: {
          "@id": "https://blockchain-cie.com/#organization",
        },
        offers: {
          "@type": "Offer",
          price: "5000",
          priceCurrency: "EUR",
        },
      },
      {
        "@type": "Service",
        "@id":
          "https://blockchain-cie.com/services/#service-training",
        name: "Blockchain + AI Training",
        description:
          "Virtual 1-day intensive training program on blockchain and AI integration, with hands-on exercises and recorded sessions.",
        provider: {
          "@id": "https://blockchain-cie.com/#organization",
        },
        offers: {
          "@type": "Offer",
          price: "990",
          priceCurrency: "EUR",
        },
      },
    ],
  };
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Head>
        {/* Charset & Language */}
        <meta charSet='UTF-8' />
        <meta httpEquiv='Content-Language' content='en' />
        <title>
          Blockchain & Cie | Blockchain & AI trusted partner |
          Blockchain & AI Consulting Services | Smart Contract Audit
        </title>

        {/* Meta SEO */}
        <meta
          name='description'
          content='Blockchain & Cie provides expert blockchain AI consulting services, including smart contract audits (2500€), Blockchain×AI POCs (3500€), and virtual training (990€). Remote solutions worldwide.'
        />
        <meta
          name='keywords'
          content='Blockchain, Web3, DApps, Smart Contracts, B2B, Decentralized Applications, Blockchain AI Consulting, Smart Contract Audit, Blockchain POC, AI Integration, Remote Blockchain Services, Virtual Blockchain Training, Blockchain Security'
        />
        <meta name='robots' content='index, follow' />
        <meta
          name='author'
          content='https://linkedin.com/in/adelamare-blockchain'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://blockchain-cie.com'
        />
        <meta
          property='og:title'
          content='Blockchain & Cie | Blockchain & AI Consulting'
        />
        <meta
          property='og:description'
          content='Expert blockchain AI consulting services including smart contract audits, blockchain POCs, and integration training for businesses worldwide.'
        />
        <meta
          property='og:image'
          content='https://blockchain-cie.com/fav.png'
        />
        <meta
          property='og:image:alt'
          content='Blockchain & Cie - Your web3 trusted partner'
        />
        <meta property='og:site_name' content='Blockchain & Cie' />
        <meta property='og:locale' content='en_US' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://blockchain-cie.com/'
        />
        <meta
          property='twitter:title'
          content='Blockchain & Cie | Blockchain & AI Consulting'
        />
        <meta
          property='twitter:description'
          content='Expert blockchain and AI consulting, including smart contract audits, blockchain×AI POCs and virtual training worldwide.'
        />
        <meta
          name='twitter:image'
          content='https://blockchain-cie.com/fav.png'
        />
        <meta
          name='twitter:image:alt'
          content='Blockchain & Cie - Your web3 trusted solutions'
        />
        <meta name='twitter:site' content='@blockchain_cie' />

        {/* Fav Icon */}
        <link
          rel='icon'
          href='https://blockchain-cie.com/fav.png'
          type='image/png'
        />

        {/* Canonical URL */}
        <link rel='canonical' href='https://blockchain-cie.com' />

        {/* JSON-LD structured data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Main />
      <Services />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
