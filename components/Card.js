import { useState, createRef } from 'react'
import Image from './Image'
import Link from './Link'
import Tag from '@/components/Tag'

import Folder from '../public/static/icons/folder.svg?inline'
import Github from '../public/static/icons/github_social.svg?inline'
import External from '../public/static/icons/external.svg?inline'
import CustomLink from './Link'

const Card = ({ title, description, href, github, tags }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div className="h-full transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-500 hover:scale-105 hover:rounded-xl hover:border-primary-500 hover:bg-gray-300 dark:border-gray-700 dark:hover:border-primary-500 dark:hover:bg-gray-800">
      <div className="p-6">
        <div className="flex flex-row items-center justify-between">
          <div className="my-2">
            <Folder className="text-primary-color-500 dark:text-primary-color-dark-500 h-10 w-10" />
          </div>
          <div className="flex flex-row justify-between">
            <div className="mx-1"></div>
            <div className="mx-1">
              {href ? (
                <CustomLink
                  className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
                  href={href}
                >
                  <Image
                    alt={'external ' + title}
                    height={22}
                    width={22}
                    src="/static/icons/external.svg"
                    className="fill-white"
                  />
                </CustomLink>
              ) : null}
            </div>
            <div className="mx-1">
              {github ? (
                <CustomLink
                  className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
                  href={github}
                >
                  <Image
                    alt={'github ' + title}
                    height={22}
                    width={22}
                    src="/static/icons/github_social.svg"
                    className="fill-white"
                  />
                </CustomLink>
              ) : null}
            </div>
          </div>
        </div>
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>

        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex flex-row justify-start">
          {tags.map((tag) => (
            <div key={tag} className="mr-1 text-sm text-gray-400">
              {' '}
              &#8226; {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Card
