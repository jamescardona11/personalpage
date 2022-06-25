import React from 'react'
import { PathAndTitle } from './PathAndTitle'

export const Skills = () => {
  const path =
    'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  return (
    <>
      <div className="grid">
        <div className="mb:-mx-4 md:flex md:items-start">
          <PathAndTitle path={path} />

          <div className="mt-4 md:mx-4 md:mt-0">
            <h3 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
              Skills
            </h3>
          </div>
        </div>

        <div className="mt-4 max-w-xs">
          <SkillsBar tag="Flutter" color="bg-blue-500" percentage="w-11/12" />
          <SkillsBar tag="Nodejs" color="bg-yellow-500" percentage="w-7/12" />
          <SkillsBar tag="Python" color="bg-orange-500" percentage="w-6/12" />
          <SkillsBar tag="Solidity & Web3" color="bg-indigo-500" percentage="w-5/12" />
          <SkillsBar tag="React & Next" color="bg-purple-500" percentage="w-4/12" />
          <SkillsBar tag="Clojure" color="bg-green-500" percentage="w-3/12" />
        </div>
      </div>
    </>
  )
}

const SkillsBar = ({ tag, color, percentage }) => {
  return (
    <>
      <p className="text-xs font-medium text-gray-700">{tag}</p>
      <div className="mt-2 mb-2 overflow-hidden rounded-full bg-gray-200">
        <div className={`h-2 ${percentage} rounded-full ${color}`}></div>
      </div>
    </>
  )
}
