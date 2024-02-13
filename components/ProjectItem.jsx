// Librairies
import Image from 'next/image';
import { useRouter } from 'next/router';

// Components
import { useProjectContext } from '@/context/projectContext';

// MAIN FUNCTION
export default function ProjectItem({ project }) {
  // STATES
  // State 1 : setProject
  const { setProject } = useProjectContext();

  // VARIABLES
  // Variable 1 : useRouter()
  const router = useRouter();

  // METHODES
  // Méthode 1 : handleNavigate
  const handleNavigate = () => {
    // Stocker l'image dans le state avant la navigation
    setProject(project);
    router.push(
      {
        pathname: `/project-details/${encodeURIComponent(
          project.title
        )}`,
      },
      null,
      { shallow: true }
    );
  };

  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={project.backgroundImg}
        alt='/'
        priority={true}
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>
          {project.title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>
          {project.resume}
        </p>

        <p
          onClick={handleNavigate}
          className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
          More Info
        </p>
      </div>
    </div>
  );
}
