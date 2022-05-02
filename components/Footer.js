import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Link from '@/components/Link'
import Image from '@/components/Image'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-start ">
        <div className="mb-3 flex flex-wrap">
          <Link
            href={siteMetadata.github}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="download cv"
          >
            <>
              <Image
                alt="github James Cardona"
                height={30}
                width={30}
                src="/static/icons/github.svg"
                className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
              />
            </>
          </Link>
          <div className="mr-2 ml-2" />
          <Link
            href={siteMetadata.linkedin}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="download cv"
          >
            <>
              <Image
                alt="linkedin James Cardona"
                height={30}
                width={30}
                src="/static/icons/linkedin.svg"
                className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
              />
            </>
          </Link>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          {/* <div>{` • `}</div> */}
          {/* <Link href="/">{siteMetadata.title}</Link> */}
        </div>
        {/* <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div> */}
      </div>
    </footer>
  )
}
