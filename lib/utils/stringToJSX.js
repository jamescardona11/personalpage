import Link from 'node_modules/next/link'

export const stringToJSX = (text) => {
  if (text == null) return <a />

  const separator = text.split('<>')

  return separator.map((item) => {
    if (item.includes('https')) {
      const parIndex = item.indexOf(']')
      let name = ''
      let url = ''

      if (parIndex >= 0) {
        name = item.substring(0, parIndex).replace('[', '').replace(']', '')
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
      const k = `backspace${Math.floor(Math.random() * 20000)}`
      return <br key={k} />
    } else {
      return item
    }
  })
}
