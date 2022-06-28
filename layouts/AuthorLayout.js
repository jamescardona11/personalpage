import { useState } from 'react'
import { RoughNotation } from 'react-rough-notation'

import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'

import { PageSEO } from '@/components/SEO'
import { stringToJSX } from '@/lib/utils/stringToJSX'

import { Skills } from './components/Skills'
import { BasicTimeLine } from './components/BasicTimeLine'
import { PathType, SvgPathRounded } from '@/components/SvgPath'
import { Expertise } from './components/Expertise'

import Mail from '../public/static/icons/mail.svg?inline'
import Glob from '../public/static/icons/glob.svg?inline'
import CV from '../public/static/icons/external.svg?inline'
import Github from '../public/static/icons/github_new.svg?inline'
import Link from 'node_modules/next/link'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, aboutMe, thanksTo, routine } = frontMatter
  const { insight1, insightDesc1, insight2, insightDesc2 } = frontMatter

  const aboutMeJSX = stringToJSX({ text: aboutMe })
  const thanksToJSX = stringToJSX({ text: thanksTo })
  const insightDesc1oJSX = stringToJSX({ text: insightDesc1 })

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />

      <section className="mt-2 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-lg dark:bg-gray-900 md:flex">
          <div className="p-2 md:flex md:w-1/3 md:justify-center">
            <div className="">
              <div className="flex items-center justify-center md:block">
                <div className="relative mb-8 mr-auto w-[80px] sm:mb-0 sm:w-[176px]">
                  <Image
                    alt={siteMetadata.author}
                    height={176}
                    width={176}
                    src={siteMetadata.profileImage}
                    className="rounded-full grayscale filter"
                  />
                </div>
                <div className="mx-7 mb-2 mt-4 items-center justify-center">
                  <h1 className="text-2xl font-bold text-gray-800 dark:text-blue-100 md:text-3xl">
                    James
                  </h1>
                </div>
              </div>

              <div className="mx-7 hidden md:block">
                <div className="my-2 flex text-gray-600 dark:text-blue-100">
                  <Mail /> <a href="`mailto:${siteMetadata.email}`"> {siteMetadata.email}</a>
                </div>
                <div className="my-2 flex text-gray-600 dark:text-blue-100">
                  <Image
                    alt="work James Cardona"
                    height={22}
                    width={22}
                    src="/static/icons/external.svg"
                    className="fill-white"
                  />{' '}
                  <a
                    className="font-semibold text-primary-500"
                    href={siteMetadata.cv}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Descargar CV
                  </a>
                </div>
                <div className="my-2 flex text-gray-600 dark:text-blue-100">
                  <Glob />
                  <a href={siteMetadata.company} target="_blank" rel="noreferrer">
                    {siteMetadata.company}
                  </a>
                </div>
                <div className="my-2 flex text-gray-600 dark:text-blue-200">
                  <Github />
                  <a href={siteMetadata.github} target="_blank" rel="noreferrer">
                    @Github
                  </a>
                </div>
                <div className="my-2 flex text-gray-600 dark:text-blue-200">
                  <Image
                    alt="linkedin James Cardona"
                    height={22}
                    width={22}
                    src="/static/icons/linkedin.svg"
                    className="fill-white"
                  />
                  <a href={siteMetadata.linkedin} target="_blank" rel="noreferrer">
                    @LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 md:w-2/3">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
                hello there! 👋
              </h1>
              <br />
              <a>`eat(🍜); code(👨🏻‍💻); code(👨🏻‍💻); sleep(😴); repeat(👁‍🗨);`</a>
              <div className="mt-2 mb-4">
                <span className="inline-block h-1 w-40 rounded-full bg-primary-500"></span>
                <span className="ml-1 inline-block h-1 w-3 rounded-full bg-primary-500"></span>
                <span className="ml-1 inline-block h-1 w-1 rounded-full bg-primary-500"></span>
              </div>

              <p className="mt-4 mb-4 text-justify dark:bg-gray-800 dark:text-blue-200">
                <RoughNotation
                  type="bracket"
                  brackets={['left', 'right']}
                  show={true}
                  color="#a955f7"
                  animationDelay={200}
                  animationDuration={1200}
                >
                  {aboutMeJSX}
                </RoughNotation>
              </p>

              <p className="mt-4 text-justify dark:bg-gray-800 dark:text-blue-200">
                - No parar de aprender
              </p>
              <p className="text-justify dark:bg-gray-800 dark:text-blue-200">
                - Jugador aficionado de poker ♠️
              </p>

              <br />
            </div>
            <Expertise githubStats={children} />
            <BasicTimeLine />
          </div>
        </div>

        <hr className="my-12 border-gray-200 dark:border-gray-700" />
        <h2 className="mb-4 font-bold text-gray-900 dark:text-white">Gracias a:</h2>
        <h3 className="mb-20 text-gray-900 dark:text-white">{thanksToJSX}</h3>
      </section>
    </>
  )
}
