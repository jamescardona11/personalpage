import siteMetadata from '@/data/siteMetadata'
import Link from 'node_modules/next/link'

export const stringToJSX = ({ text, color = 'text-primary-500' }) => {
  const classNameLink = 'text-base font-medium leading-6 ' + color
  if (text == null) return <a />

  const separator = text.split('<>')

  return separator.map((item) => {
    if (item.includes('[')) {
      const parIndex = item.indexOf(']')

      let name = item.substring(1, parIndex).replace('/[/g', '').replace('/]/g', '')
      let url = ''
      let newItem = item.substring(parIndex + 1)
      let target = '_blank'

      if (newItem.includes('https')) {
        const dotIndex = newItem.indexOf('.')
        if (!name) name = newItem.substring(0, dotIndex).replace('https://', '')
        url = newItem
      } else if (newItem.includes('/')) {
        const element = newItem.replace('[', '').replace(']', '')
        url = element
        let target = ''

        return (
          <Link key={name} href={url}>
            <span className={classNameLink + ' cursor-pointer	'}>{name}</span>
          </Link>
        )
      } else {
        const element = newItem.replace('[', '').replace(']', '')
        url = siteMetadata[element]
      }

      return (
        <a
          className={'text-base font-medium leading-6 ' + color}
          key={name}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
      )
    } else if (item.includes('<br>')) {
      const k = `backspace${Math.floor(Math.random() * 20000)}`
      return <br key={k} />
    } else {
      return item
    }
  })
}
