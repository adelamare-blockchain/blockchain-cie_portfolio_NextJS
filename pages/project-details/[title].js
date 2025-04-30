// Librairies
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

// Components
import { projectsData } from "@/constants/projectsData";

/**
 * Génère les chemins statiques pour tous les projets
 * @returns {object} Les chemins pour la génération statique
 */
export async function getStaticPaths() {
  // Générer un chemin pour chaque projet disponible
  const paths = projectsData.map((project) => ({
    params: {
      // Convertir le titre en format URL (slug)
      title: project.title.toLowerCase().replace(/\s+/g, "-"),
    },
  }));

  return {
    paths,
    // fallback: false signifie que les autres routes renverront 404
    // fallback: 'blocking' permettrait de générer la page à la demande
    fallback: false,
  };
}

/**
 * Récupère les données du projet pour la génération statique
 * @param {object} context Contexte de la requête avec les paramètres
 * @returns {object} Props à passer au composant
 */
export async function getStaticProps({ params }) {
  // Récupérer le titre depuis les paramètres et le convertir
  const formattedTitle = params.title.replace(/-/g, " ");

  // Trouver le projet correspondant
  const project = projectsData.find(
    (p) => p.title.toLowerCase() === formattedTitle.toLowerCase()
  );

  // Si aucun projet n'est trouvé, rediriger vers la page des projets
  if (!project) {
    return {
      // notFound: true, // Renvoie une page 404
      // Alternative : redirection
      redirect: {
        destination: "/#projects",
        permanent: false,
      },
    };
  }

  return {
    props: {
      project,
    },
    // Revalidation toutes les 24 heures (en secondes)
    // Utile si les données des projets sont mises à jour périodiquement
    // revalidate: 86400,
  };
}

// MAIN FUNCTION
/**
 * Affiche les détails d'un projet spécifique
 * @param {object} props Props contenant les données du projet
 * @returns {JSX.Element} Page de détails du projet
 */
export default function ProjectDetails({ project }) {
  // Destructuration des données du projet
  const {
    title,
    description,
    backgroundImg,
    resume,
    language,
    frontend,
    style,
    backend,
    blockchain,
    projectUrl,
  } = project;

  // Variable : check URL address valid
  const isValidProjectUrl =
    typeof projectUrl === "string" && projectUrl.trim() !== "";

  return (
    <>
      {/* HEADER */}
      <Head>
        <title>{`${title} | Blockchain & Cie Project`}</title>
        <meta name='description' content={resume} />
        <meta
          property='og:title'
          content={`${title} | Blockchain & Cie`}
        />
        <meta property='og:description' content={resume} />
        <meta property='og:image' content={backgroundImg} />
      </Head>

      {/* DYNAMIC PAGE PROJECT */}
      <div className='w-full'>
        <div className='w-screen h-[50vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />

          <Image
            className='absolute z-1 object-cover'
            fill={true}
            priority={true}
            src={backgroundImg}
            alt={`${title} - Blockchain & Cie project`}
          />

          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>{title}</h2>
            <h3>{resume}</h3>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          <div className='col-span-4'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
              Project
            </p>
            <h2>Overview</h2>
            <p>{description}</p>

            {isValidProjectUrl && (
              <Link
                href={projectUrl}
                target='_blank'
                rel='noreferrer'>
                <button className='px-8 py-2 mt-4'>Demo</button>
              </Link>
            )}
          </div>

          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>
                Technologies
              </p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <TechItem label={language} />
                <TechItem label={frontend} />
                <TechItem label={backend} />
                <TechItem label={style} />
                <TechItem label={`Blockchain : ${blockchain}`} />
              </div>
            </div>
          </div>

          <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
          </Link>
        </div>
      </div>
    </>
  );
}

/**
 * Composant pour afficher un élément technologique
 * @param {object} props Props contenant le label de la technologie
 * @returns {JSX.Element} Élément technologique
 */
const TechItem = ({ label }) => (
  <p className='text-gray-600 py-2 flex items-center'>
    <RiRadioButtonFill className='pr-1' />
    {label}
  </p>
);
