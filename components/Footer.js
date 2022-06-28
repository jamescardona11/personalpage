import Link from './Link'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from '@/components/NewsletterForm'
import CustomLink from './Link'

import Github from '../public/static/icons/github.svg?inline'
import Linkedin from '../public/static/icons/linkedin.svg?inline'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-row justify-start">
        <div className="mt-16 flex flex-col items-start ">
          <div className="mb-3 flex flex-wrap">
            <CustomLink href={siteMetadata.github} aria-label="github">
              <Github className="h-6 w-6" />
            </CustomLink>
            <div className="mr-2 ml-2" />
            <Link href={siteMetadata.linkedin} aria-label="linkedin">
              <Linkedin className="h-6 w-6" />
            </Link>
            <div className="mr-2 ml-2" />
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
      <div className="flex flex-col items-center pb-8">
        <nav className="mx-auto mt-4 flex w-full max-w-2xl flex-col justify-between gap-4 pb-8 sm:flex-row sm:gap-0 xl:max-w-3xl">
          <div className="flex flex-col space-y-4 md:items-start">
            <p className="text-sm font-bold">Portfolio</p>
            <CustomLink
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href="/"
            >
              Home
            </CustomLink>
            <CustomLink
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href="/about"
            >
              Acerca de mí
            </CustomLink>
            <CustomLink
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href="/projects"
            >
              Proyectos
            </CustomLink>
          </div>
          <div className="flex flex-col space-y-4 md:items-start">
            <p className="text-sm font-bold">Writing</p>
            <CustomLink
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href="/blog"
            >
              Blog
            </CustomLink>
            <CustomLink
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href="/tags"
            >
              Tags
            </CustomLink>
          </div>
          <div className="flex flex-col space-y-4 md:items-start">
            <p className="text-sm font-bold">Misc</p>
            {/* <CustomLink
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href={siteMetadata.siteRepo}
            >
              OpenSource
            </CustomLink> */}
            <CustomLink
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href={siteMetadata.cv}
            >
              CV
            </CustomLink>
            <CustomLink
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href={siteMetadata.notion}
            >
              Notion
            </CustomLink>
          </div>
          <div className="flex flex-col space-y-4 md:items-start">
            <p className="text-sm font-bold">Social</p>

            <CustomLink
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href={siteMetadata.github}
            >
              GitHub
            </CustomLink>

            <CustomLink
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href={siteMetadata.instagram}
            >
              Instagram
            </CustomLink>

            <CustomLink
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href={siteMetadata.linkedin}
            >
              LinkedIn
            </CustomLink>
          </div>
        </nav>
        <div className="flex w-full justify-between">
          <div className="w-full truncate">
            <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <div>Copyright</div>
              <div>{`© ${new Date().getFullYear()}`}</div>
              <CustomLink
                className="text-black hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
                href="/"
              >
                {siteMetadata.title}
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
