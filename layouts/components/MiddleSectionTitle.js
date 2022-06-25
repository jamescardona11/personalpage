import Link from 'node_modules/next/link'

export const MiddleSectionTitleType = {
  Insight1: Symbol('insight1'),
  Insight2: Symbol('insight2'),
  Insight3: Symbol('insight3'),
}

export const MiddleSectionTitle = ({ type, title, description }) => {
  const descObject = stringToJSX(description)
  let path = ''
  let path2 = ''

  if (type == MiddleSectionTitleType.Insight1) {
    path =
      'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
    path2 = 'M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
  } else if (type == MiddleSectionTitleType.Insight2) {
    path =
      'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
  } else {
    path =
      'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
  }

  return (
    <>
      <div className="md:-mx-4 md:flex md:items-start">
        <div className="md:-mx-4 md:flex md:items-start">
          <span className="inline-block rounded-xl bg-blue-100 p-2 text-blue-500 dark:bg-blue-500 dark:text-white md:mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
              (path2 != '' &&
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path2} />)
            </svg>
          </span>
        </div>

        <div className="mt-4 md:mx-4 md:mt-0">
          <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
            {title}
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-300">{descObject}</p>
        </div>
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
        const name = item.substring(parIndex).replace('(', '').replace(')', '')
        console.log('NAME', name)
        url = item.substring(0, parIndex)
        console.log('NAME', url)
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
