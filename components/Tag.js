import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag

// import Link from 'next/link'
// import kebabCase from '@/lib/utils/kebabCase'

// const Tag = ({ text, isEnable }) => {
//   if (isEnable === 'false') {
//     return (
//       <a className="mr-3 text-sm font-medium text-black hover:text-black dark:text-white dark:hover:text-white">
//         {text.split(' ').join('-')}
//       </a>
//     )
//   } else {
//     return (
//       <Link href={`/tags/${kebabCase(text)}`}>
//         <a className="mr-3 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
//           #{text.split(' ').join('-')}
//         </a>
//       </Link>
//     )
//   }
// }

// export default Tag
