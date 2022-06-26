import Link from 'node_modules/next/link'
import { SvgPath, PathType } from '@/components/SvgPath'

export const InsightType = {
  Insight1: Symbol('insight1'),
  Insight2: Symbol('insight2'),
  Insight3: Symbol('insight3'),
}

export const InsightsSection = ({ type, title, description }) => {
  const descObject = stringToJSX(description)
  let path = ''
  let path2 = ''

  if (type == InsightType.Insight1) {
    path = PathType.pathWork
  } else if (type == InsightType.Insight2) {
    path = PathType.pathFire
    path2 = PathType.pathFire2
  } else {
    path2 = PathType.pathBlock
  }

  return (
    <>
      <div className="grid">
        <div className="mb:-mx-4 md:flex md:items-start">
          <div className="md:-mx-4 md:flex md:items-start">
            <SvgPath path={path} path2={path2} />
          </div>
          <div className="mt-4 md:mx-4 md:mt-0">
            <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
              {title}
            </h1>
          </div>
        </div>
        <p className="mt-3 text-gray-500 dark:text-gray-300">{descObject}</p>
      </div>
    </>
  )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

const stringToJSX = (text) => {
  if (text == null) return <a />

  const separator = text.split('<>')

  return separator.map((item) => {
    if (item.includes('https')) {
      const parIndex = item.indexOf('(')
      let name = ''
      let url = ''

      if (parIndex > 0) {
        name = item.substring(parIndex).replace('(', '').replace(')', '')
        url = item.substring(0, parIndex)
      } else {
        const dotIndex = item.indexOf('.')
        name = item.substring(0, dotIndex).replace('https://', '')
        url = item
      }

      return (
        <Link key={name} href={url}>
          <a className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
            {name}
          </a>
        </Link>
      )
    } else if (item.includes('<br>')) {
      const k = `backspace${getRandomInt(20000)}`
      return <br key={k} />
    } else {
      return item
    }
  })
}
