import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { stringToJSX } from '../lib/utils/stringToJSX'
import { RoughNotation } from 'react-rough-notation'
import Link from 'next/link'
import CustomLink from './Link'

const Me = () => {
  const roleToJSX = stringToJSX({ text: siteMetadata.role })

  return (
    <div>
      <div className="flex flex-col-reverse items-start sm:flex-row">
        <div className="flex flex-col pr-8">
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-gray-700 dark:text-white md:text-5xl">
            {siteMetadata.author}
          </h1>

          <h2 className="mb-4 text-gray-900 dark:text-white">{roleToJSX}</h2>
          <p className="w-4/5 text-gray-800 dark:text-gray-200">
            Bienvenidos a mi personal website, donde comparto un poco más acerca de mí. Tech
            Explorer | Apasionado por la tecnología, videojuegos y un entusiasta del mundo Cripto y
            NFTs.
          </p>
          <br />
          <p className="w-2/3 text-gray-800 dark:text-gray-200">
            En mi tiempo libre{' '}
            <RoughNotation
              type="box"
              show={true}
              color="#a955f7"
              animationDelay={800}
              animationDuration={2500}
            >
              me gusta aprender nuevas cosas,&nbsp;
            </RoughNotation>
            hacer algunos {''}
            <CustomLink href="/projects">
              <span className="cursor-pointer text-base font-medium leading-6 text-primary-500">
                side-projects
              </span>
            </CustomLink>
            {''} y recientemente crear algunos post para este{' '}
            <CustomLink href="/blog">
              <span className="cursor-pointer text-base font-medium leading-6 text-primary-500">
                blog.
              </span>
            </CustomLink>
          </p>

          <p className="text-sm text-gray-700 dark:text-gray-400">{siteMetadata.topic2}</p>
          {/* <p className="text-sm text-gray-700 dark:text-gray-400">{siteMetadata.topic1}</p> */}
        </div>
      </div>
    </div>
  )
}

export default Me
