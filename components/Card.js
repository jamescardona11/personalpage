import { useState, createRef } from 'react'
import Image from './Image'
import Link from './Link'
import Tag from '@/components/Tag'

import CustomLink from './Link'
import SkillIcon from './SkillIcon'

import External from '../public/static/icons/external.svg?inline'
import Github from '../public/static/icons/github.svg?inline'

const Card = ({ title, description, href, github, tags, main }) => {
  const finalIcon = main ?? 'folder'
  return (
    <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
      <div className="h-full transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-500 hover:scale-105 hover:rounded-xl hover:bg-gray-300 dark:border-gray-700 dark:hover:border-primary-500 dark:hover:bg-gray-800">
        <div className="p-6">
          <div className="flex flex-row items-center justify-between">
            <div className="my-2">
              <SkillIcon kind={finalIcon} />
            </div>
            <div className="flex flex-row justify-between">
              <div className="mx-1"></div>
              <div className="mx-1">
                {href ? (
                  <div className="my-2 flex cursor-pointer text-gray-600 dark:text-blue-100 ">
                    <External className="h-6 w-6" />
                    <a
                      className="font-semibold text-primary-500"
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </div>
                ) : null}
              </div>
              <div className="mx-1">
                {github ? (
                  <div className="my-2 flex cursor-pointer text-gray-600 dark:text-blue-100 ">
                    <Github className="h-6 w-6" />
                    <a
                      className="font-semibold text-primary-500"
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </div>
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
}

export default Card
