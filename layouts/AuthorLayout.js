import { useState } from 'react'

import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { stringToJSX } from '@/lib/utils/stringToJSX'
import { InsightsSection, InsightType } from './components/InsightsSection'
import { Skills } from './components/Skills'
import { BasicTimeLine } from './components/BasicTimeLine'
import { DownloadButton } from './components/DownloadButton'
import { TabsSection } from './components/TabsSection'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, aboutMe, thanksTo, routine } = frontMatter

  const aboutMeJSX = stringToJSX(aboutMe)
  const thanksToJSX = stringToJSX(thanksTo)

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />

      <section className="mt-10 bg-white dark:bg-gray-900">
        <div className="w-full space-y-12 ">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
              hello there! 👋
            </h1>
            <br />
            <a>`eat(🍜); code(👨🏻‍💻); code(👨🏻‍💻); sleep(😴); repeat(👁‍🗨);`</a>

            <div className="mt-2 mb-4">
              <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
              <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
              <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
            </div>

            <h2 className="mb-4 pt-3 text-gray-900  dark:text-white">{aboutMeJSX}</h2>

            <TabsSection githubStats={children} frontMatter={frontMatter} />
          </div>

          <h2 className="font-bold text-gray-900 dark:text-white">Gracias a:</h2>
          <h3 className="text-gray-900  dark:text-white">{thanksToJSX}</h3>

          <hr className="my-12 border-gray-200 dark:border-gray-700" />
        </div>
      </section>
    </>
  )
}

// <div className="mt-6 dark:bg-gray-900">
//           <div className="mx-auto max-w-screen-lg dark:bg-gray-900 md:flex">
//             <div className="p-2 md:flex md:w-1/3 md:justify-center">
//               <div className="md:fixed">
//                 <div className="flex items-center justify-center md:block">
//                   <Image
//                     src={siteMetadata.profileImage}
//                     loading="lazy"
//                     alt="me"
//                     width={80}
//                     height={80}
//                     he
//                     className="h-40 w-40 rounded-full shadow-xl md:h-60 md:w-60"
//                   />
//                   <div className="mx-7 mb-2 mt-4 items-center justify-center">
//                     <h1 className="text-2xl font-bold text-gray-800 dark:text-blue-100 md:text-3xl">
//                       {siteMetadata.author}
//                     </h1>
//                     <div className="text-gray-600 dark:text-blue-100 md:text-lg">
//                       {siteMetadata.position}
//                     </div>
//                     <a
//                       // href="`mailto:${siteMetadata.email}`"
//                       className="mt-1 text-gray-600 dark:text-blue-100 md:hidden"
//                     >
//                       {siteMetadata.email}
//                     </a>
//                   </div>
//                 </div>

//                 <div className="mx-7 hidden md:block">
//                   <div className="my-2 flex text-gray-600 dark:text-blue-100">
//                     {/* <Mail />
//         <a :href="`mailto:${siteMetadata.email}`"> {{ siteMetadata.email }}</a> */}
//                   </div>
//                   <div className="my-2 flex text-gray-600 dark:text-blue-100">
//                     {/* <Glob />
//         <p>{{ siteMetadata.location }}</p> */}
//                   </div>
//                   <div className="my-2 flex text-gray-600 dark:text-blue-200">
//                     {/* <Github />
//         <a :href="siteMetadata.github"> {{ siteMetadata.githubUser }}</a> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="px-8 md:w-2/3">
//               <div className="mb-6">
//                 <h2 className="mt-6 text-4xl font-bold capitalize text-gray-700 dark:text-blue-200">
//                   👋 Hola , Good Day !
//                 </h2>
//                 <p className="mt-8 mb-4 text-justify dark:bg-gray-800 dark:text-blue-200">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
//                   Ipsum has been the industry's standard dummy text ever since the 1500s, when an
//                   unknown printer took a galley of type and scrambled it to make a type specimen
//                   book. It has survived not only five centuries, but also the leap into electronic
//                   typesetting, remaining essentially unchanged. It was popularised in the 1960s with
//                   the release of Letraset sheets containing Lorem Ipsum passages, and more recently
//                   with desktop publishing software like Aldus PageMaker including versions of Lorem
//                   Ipsum.
//                 </p>
//               </div>
//               <BasicTimeLine />
//               {/* <AuthorIntro></AuthorIntro> */}
//               {/* <Expertise></Expertise> */}
//               {/* <TimeLine></TimeLine> */}
//             </div>
//           </div>
//         </div>
