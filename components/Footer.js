import Link from './Link'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from '@/components/NewsletterForm'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-row justify-around">
        <div className="mt-16 flex flex-col items-start ">
          <div className="mb-3 flex flex-wrap">
            <Link href={siteMetadata.github} aria-label="github">
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
            <Link href={siteMetadata.linkedin} aria-label="linkedin">
              <Image
                alt="linkedin James Cardona"
                height={30}
                width={30}
                src="/static/icons/linkedin.svg"
                className="fill-white"
              />
            </Link>
            <div className="mr-2 ml-2" />
            <Link href={siteMetadata.notion} aria-label="notion">
              <>
                <Image
                  alt="notion James Cardona"
                  height={30}
                  width={30}
                  src="/static/icons/notion.svg"
                  className="fill-white"
                />
              </>
            </Link>
          </div>
          <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>{siteMetadata.author}</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
          </div>
          <div className="mt-2 text-sm italic text-gray-500 dark:text-gray-400">
            Fortuna audaces iuvat
          </div>
        </div>

        {siteMetadata.newsletter.provider !== '' && (
          <div className="flex items-center justify-center pt-4">
            <NewsletterForm />
          </div>
        )}
      </div>
    </footer>
  )
}
