// Librairies

// Components
import cloudFundImg from '@/public/assets/projects/cloudfund.png';
import carShowcaseImg from '@/public/assets/projects/carshowcase.png';
import pimpMyBlogImg from '@/public/assets/projects/pimpmyblog.png';

// MAIN FUNCTION
export const projectsData = [
  {
    title: 'Decentralized crowdfunding platform',
    backgroundImg: cloudFundImg,
    description: `This decentralized application was built to demonstrate knowledge working in ReactJS and accessing Solidity smart contracts ABI endpoints. This dApp is indeed hosted on Mumbai testnet blockchain. This application supports user authentication using Metamask wallet. While connected through their mumbai address on Metamask, users are able to donate and create a new crowdfunding campaign that can be fund with other users' donations instantly and securely. This is made possible by the decentralized storage database mechanism using blockchain technology. Another feature of this application is dynamic routing through the "React Router DOM" package. Moreover, this application was designed using TailwindCSS.`,
    projectUrl: 'https://cloud-fund.netlify.app/',
    resume: 'React | Solidity | Mumbai blockchain',
    language: 'JavaScript | Solidity',
    frontend: 'React',
    style: 'TailwindCSS',
    backend: 'Solidity',
    blockchain: 'Mumbai (Polygon testnet)',
  },
  {
    title: 'Car showcase catalogue app',
    backgroundImg: carShowcaseImg,
    description: `Wrote in TypeScript and hosted on Vercel, this app was built to demonstrate knowledge working in NextJS version 13 and
    accessing API endpoints. Users are able to filter car models from RapidAPI in order to show all characteristics of each car model for renting usecases.
    Another feature of this
    application is the powerful and dynamic routing through the Next version 13 package. Moreover, this application was designed with TailwindCSS and was built using the IMAGIN.studio API.`,
    projectUrl: 'https://web2-car-showcase.vercel.app/',
    resume: 'NextJS (TypeScript) | RapidAPI',
    language: 'JavaScript | TypeScript',
    frontend: 'NextJS',
    style: 'TailwindCSS',
    backend: 'RapidAPI | IMAGIN.studio API',
    blockchain: 'none',
  },
  {
    title: 'Blog application',
    backgroundImg: pimpMyBlogImg,
    description: `This app was built using React and is hosted on Firebase. An unregistered user will
    be able to view articles published on the blog. User
    authentication is available so you can signup and signin to your
    account with an email address in order to write, modify or delete articles. This dynamic data storage mechanism is made possible with Firebase.`,
    projectUrl: 'https://pimp-my-blog.netlify.app/',
    resume: 'React | Firebase',
    language: 'JavaScript',
    frontend: 'React',
    style: 'CSS',
    backend: 'Firebase',
    blockchain: 'none',
  },
];
