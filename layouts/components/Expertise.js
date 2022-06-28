import React from 'react'
import { useTheme } from 'next-themes'
import { PathType, SvgPathRounded } from '@/components/SvgPath'

import Android from '../../public/static/skills/android.svg?inline'
import Clojure from '../../public/static/skills/clojure.svg?inline'
import Flutter from '../../public/static/skills/flutter.svg?inline'
import Javascript from '../../public/static/skills/javascript.svg?inline'
import Node from '../../public/static/skills/node.svg?inline'
import Py from '../../public/static/skills/py.svg?inline'
import Reactjs from '../../public/static/skills/reactjs.svg?inline'
import Solidity from '../../public/static/skills/solidity.svg?inline'
import SolidityWhite from '../../public/static/skills/solidity_white.svg?inline'
import Git from '../../public/static/skills/git.svg?inline'
import Kotlin from '../../public/static/skills/kotlin.svg?inline'

export const Expertise = ({ githubStats }) => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <div className="mt-8">
      <div className="my-2 flex text-gray-600 dark:text-blue-200">
        <SvgPathRounded path={PathType.pathFire} path2={PathType.pathFire2} />
        <span className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
          Skills
        </span>
      </div>

      <ul className="flex flex-wrap items-center gap-4">
        <li className="flex items-center">
          <Flutter className="h-10 w-10"></Flutter>
        </li>
        <li className="flex items-center">
          <Clojure className="h-10 w-10"></Clojure>
        </li>
        <li className="flex items-center">
          <Javascript className="h-10 w-10"></Javascript>
        </li>
        <li className="flex items-center">
          <Node className="h-10 w-10"></Node>
        </li>
        <li className="flex items-center">
          <Py className="h-10 w-10"></Py>
        </li>
        <li className="flex items-center">
          <Reactjs className="h-10 w-10"></Reactjs>
        </li>
        <li className="flex items-center">
          <Android className="h-10 w-10"></Android>
        </li>
        <li className="flex items-center">
          {isDark ? (
            <SolidityWhite className="h-10 w-10"></SolidityWhite>
          ) : (
            <Solidity className="h-10 w-10"></Solidity>
          )}
        </li>
        <li className="flex items-center">
          <Kotlin className="h-10 w-10"></Kotlin>
        </li>
        <li className="flex items-center">
          <Git className="h-10 w-10"></Git>
        </li>
      </ul>

      <div className="prose max-w-none pt-8 pb-4 dark:prose-dark xl:col-span-2">{githubStats}</div>
    </div>
  )
}
