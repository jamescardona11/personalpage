import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text, isEnable }) => {
  if (isEnable === 'false') {
    return (
      <a className="rounded bg-gray-600 px-3 py-0.5 text-sm font-semibold text-gray-100 transition-colors duration-200 ">
        {text}
      </a>
    )
  } else {
    return (
      <Link className="mt-2 flex items-center justify-between" href={`/tags/${kebabCase(text)}`}>
        <a className="transform cursor-pointer rounded bg-gray-600 px-3 py-0.5 text-sm font-semibold text-gray-100 transition-colors duration-200 ">
          #{text}
        </a>
      </Link>
    )
  }
}

export default Tag
