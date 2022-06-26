import Link from 'node_modules/next/link'
import { SvgPathRounded, PathType } from '@/components/SvgPath'
import { stringToJSX } from '@/lib/utils/stringToJSX'

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
            <SvgPathRounded path={path} path2={path2} />
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
