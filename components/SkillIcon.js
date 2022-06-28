import { useTheme } from 'next-themes'

import Folder from '../public/static/icons/folder.svg?inline'
import Android from '../public/static/skills/android.svg?inline'
import Clojure from '../public/static/skills/clojure.svg?inline'
import Flutter from '../public/static/skills/flutter.svg?inline'
import Javascript from '../public/static/skills/javascript.svg?inline'
import Node from '../public/static/skills/node.svg?inline'
import Python from '../public/static/skills/py.svg?inline'
import Reactjs from '../public/static/skills/reactjs.svg?inline'
import Solidity from '../public/static/skills/solidity.svg?inline'
import SolidityWhite from '../public/static/skills/solidity_white.svg?inline'
import Git from '../public/static/skills/git.svg?inline'
import Kotlin from '../public/static/skills/kotlin.svg?inline'

const SkillIcon = ({ kind }) => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const isDark = theme === 'dark'
  kind = kind.toLowerCase()

  if (kind == 'flutter') return <Flutter className=" h-10 w-10" />
  if (kind == 'clojure') return <Clojure className=" h-10 w-10" />

  if (kind == 'node') return <Node className=" h-10 w-10" />

  if (kind == 'python') return <Python className=" h-10 w-10" />

  if (kind == 'react' || kind == 'reactjs') return <Reactjs className=" h-10 w-10" />

  if (kind == 'android') return <Android className=" h-10 w-10" />

  if (kind == 'kotlin') return <Kotlin className=" h-10 w-10" />

  if (kind == 'javascript') return <Javascript className=" h-10 w-10" />

  if (kind == 'git') return <Git className=" h-10 w-10" />

  if (kind == 'web3' && isDark) {
    return <SolidityWhite className=" h-10 w-10" />
  } else if (kind == 'web3') return <Solidity className=" h-10 w-10" />

  return <Folder className="text-primary-color-500 dark:text-primary-color-dark-500 h-10 w-10" />
}

export default SkillIcon
