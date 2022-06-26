import { useState } from 'react'
import SocialIcon from '@/components/social-icons'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { stringToJSX } from '@/lib/utils/stringToJSX'
import { InsightsSection, InsightType } from './components/InsightsSection'
import { Skills } from './components/Skills'
import { BasicTimeLine } from './components/BasicTimeLine'
import { DownloadButton } from './components/DownloadButton'
import { TabsSection } from './components/TabsSection'
import Link from 'node_modules/next/link'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, aboutMe, thanksTo, routine } = frontMatter

  const aboutMeJSX = stringToJSX(aboutMe)
  const thanksToJSX = stringToJSX(thanksTo)

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />

      <section className="bg-white dark:bg-gray-900">
        <div className="w-full space-y-12 ">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
              hello there! 👋
            </h1>
            <br />
            <a>{routine}</a>

            <div className="mt-2">
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
