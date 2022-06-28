import React from 'react'

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
import SkillIcon from '@/components/SkillIcon'

export const Expertise = ({ githubStats }) => {
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
          <SkillIcon kind="flutter" />
        </li>
        <li className="flex items-center">
          <SkillIcon kind="Clojure" />
        </li>
        <li className="flex items-center">
          <SkillIcon kind="Javascript" />
        </li>
        <li className="flex items-center">
          <SkillIcon kind="node" />
        </li>
        <li className="flex items-center">
          <SkillIcon kind="python" />
        </li>
        <li className="flex items-center">
          <SkillIcon kind="Reactjs" />
        </li>
        <li className="flex items-center">
          <SkillIcon kind="Android" />
        </li>
        <li className="flex items-center">
          <SkillIcon kind="web3" />
        </li>
        <li className="flex items-center">
          <SkillIcon kind="Kotlin" />
        </li>
        <li className="flex items-center">
          <SkillIcon kind="git" />
        </li>
      </ul>

      <div className="prose max-w-none pt-8 pb-4 dark:prose-dark xl:col-span-2">{githubStats}</div>
    </div>
  )
}
