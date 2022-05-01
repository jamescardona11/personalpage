import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import Hero from './Hero'
import Me from './Me'
import ThemeSwitch from './ThemeSwitch'
import Image from '@/components/Image'

const data = {
  profileImage: '/static/images/avatar.png',
  name: 'James Cardona',
  role: 'Software Engineer | ',
  aboutme:
    'Tech Explorer | Apasionado por la tecnología, videojuegos y un entusiasta del mundo Cripto y NFTs.',
  toppics1: '#fluter, #python, #nodejs, #web3, #solidity, #clojure y #next.js.',
  toppics2: 'Creando aplicaciones, emprendiendo y aprendiendo.',
}

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 pb-16 dark:border-gray-700">
        <header className="flex items-center justify-between py-10">
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
              {data.name}
            </h1>
            <h2 className="mb-4 text-purple-700 dark:text-purple-600">
              {data.role} <span className="font-semibold">57Blocks</span>
            </h2>
            <p className="text-gray-800 dark:text-gray-200">{data.aboutme}</p>
            <p className="mb-16 text-sm text-gray-700 dark:text-gray-400">{data.toppics1}</p>
          </div>
          <div className="relative mb-8 mr-auto w-[80px] sm:mb-0 sm:w-[176px]">
            <Image
              alt="James Cardona"
              height={176}
              width={176}
              src={data.profileImage}
              className="rounded-full grayscale filter"
            />
          </div>
        </div>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
