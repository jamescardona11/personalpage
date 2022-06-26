import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { stringToJSX } from '../lib/utils/stringToJSX'

const Me = () => {
  const roleToJSX = stringToJSX(siteMetadata.role)

  return (
    <div>
      <div className="flex flex-col-reverse items-start sm:flex-row">
        <div className="flex flex-col pr-8">
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
            {siteMetadata.author}
          </h1>
          <h2 className="mb-4 text-gray-900 dark:text-white">{roleToJSX}</h2>
          <p className="text-gray-800 dark:text-gray-200">{siteMetadata.aboutMe}</p>
          <p className="text-sm text-gray-700 dark:text-gray-400">{siteMetadata.topic2}</p>
          <p className="text-sm text-gray-700 dark:text-gray-400">{siteMetadata.topic1}</p>
        </div>
        <div className="relative mb-8 mr-auto w-[80px] sm:mb-0 sm:w-[176px]">
          <Image
            alt={siteMetadata.author}
            height={176}
            width={176}
            src={siteMetadata.profileImage}
            className="rounded-full grayscale filter"
          />
        </div>
      </div>
      {/* <div className="flex text-base text-sm leading-6">
        <Link
          href={siteMetadata.cv}
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="download cv"
        >
          Descargar CV
        </Link>
      </div> */}
      {/* <button className="mt-3 mb-16 inline-flex items-center rounded bg-primary-600 py-3 px-6 font-bold text-white hover:bg-primary-800">
        <svg
          className="mr-2 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download CV</span>
      </button> */}
    </div>
  )
}

export default Me
