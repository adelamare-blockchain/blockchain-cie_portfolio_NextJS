// Librairies
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// MAIN FUNCTION
export default function ProjectItem({ project }) {
  // VARIABLES
  // Créer une URL conviviale en convertissant le titre en format URL
  const urlFriendlyTitle = project.title
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <div className='relative overflow-hidden w-full h-auto shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={project.backgroundImg}
        alt={project.title}
        loading='lazy'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50'>
        <h3 className='text-center text-xl sm:text-2xl text-white font-bold tracking-wide mb-2'>
          {project.title}
        </h3>

        <p className='text-white text-center text-sm sm:text-base mb-4'>
          {project.resume}
        </p>

        <Link
          href={`/project-details/${urlFriendlyTitle}`}
          className='bg-white text-gray-800 font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors duration-300'>
          More Info
        </Link>
      </div>
    </div>
  );
}
