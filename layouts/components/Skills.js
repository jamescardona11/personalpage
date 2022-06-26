import React from 'react'
import { SvgPathRounded, PathType } from '@/components/SvgPath'

export const Skills = () => {
  return (
    <>
      <div className="grid">
        <div className="mb:-mx-4 md:flex md:items-start">
          <div className="md:-mx-4 md:flex md:items-start">
            <SvgPathRounded path={PathType.pathGraph} />
          </div>

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
      <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{tag}</p>
      <div className="mt-2 mb-2 overflow-hidden rounded-full bg-gray-200 ">
        <div className={`h-2 ${percentage} rounded-full ${color}`}></div>
      </div>
    </>
  )
}
