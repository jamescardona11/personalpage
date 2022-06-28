import { useRouter } from 'next/router'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Typewriter from 'typewriter-effect'

import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

import Image from 'next/image'
import CustomLink from './Link'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()

  const mapHeaderNavLinks = {
    '/': '/',
    '/blog': 'Blog',
    '/post': 'Post',
    '/tags': 'Tags',
    '/coming': 'Cursos',
    '/projects': 'Proyectos',
    '/about': 'Acerca de mi',
  }

  const asPath = router.asPath.includes('/blog/') ? '/post' : router.asPath

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <CustomLink href="/" aria-label={siteMetadata.headerTitle}>
              <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
                <Image
                  alt="logo"
                  height={22}
                  width={22}
                  src="/static/images/logo.png"
                  className="fill-white"
                />
                <a className="mr-2"></a>

                {`~${mapHeaderNavLinks[asPath] ?? '/'}`}
                <Typewriter
                  options={{
                    strings: [],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </CustomLink>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block ">
              {headerNavLinks.map((link) => (
                <CustomLink
                  key={link.title}
                  href={link.href}
                  className="link-underline-black link-underline rounded py-1 px-2 font-medium text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
                >
                  {link.title}
                </CustomLink>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        {/* <div className="bg fixed top-0 left-0 h-screen w-screen bg-cover bg-center opacity-40 xl:opacity-100" /> */}
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
