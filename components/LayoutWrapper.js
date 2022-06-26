import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'

import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block ">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="rounded-2xl pr-1 font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-black sm:pr-3 sm:pl-3"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <div className="bg fixed top-0 left-0 h-screen w-screen bg-cover bg-center opacity-40 xl:opacity-100" />
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper

// import headerNavLinks from '@/data/headerNavLinks'
// import Link from './Link'
// import SectionContainer from './SectionContainer'
// import Footer from './Footer'
// import MobileNav from './MobileNav'
// import ThemeSwitch from './ThemeSwitch'

// const LayoutWrapper = ({ children }) => {
//   return (
//     <SectionContainer>
//       <div className="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 pb-16 dark:border-gray-700">
//         <header className="flex items-center justify-between py-10">
//           <div className="flex items-center text-base leading-5">
//             <div className="hidden sm:block">
//               {headerNavLinks.map((link) => (
//                 <Link
//                   key={link.title}
//                   href={link.href}
//                   className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
//                 >
//                   {link.title}
//                 </Link>
//               ))}
//             </div>
//             <ThemeSwitch />
//             <MobileNav />
//           </div>
//         </header>
//         <main className="mb-auto">{children}</main>
//         <div className="bg fixed top-0 left-0 h-screen w-screen bg-cover bg-center opacity-40 xl:opacity-100" />
//         <Footer />
//       </div>
//     </SectionContainer>
//   )
// }

// export default LayoutWrapper
