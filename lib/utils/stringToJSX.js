import siteMetadata from '@/data/siteMetadata'

export const stringToJSX = (text) => {
  if (text == null) return <a />

  const separator = text.split('<>')

  return separator.map((item) => {
    if (item.includes('[')) {
      const parIndex = item.indexOf(']')

      let name = item.substring(1, parIndex).replace('/[/g', '').replace('/]/g', '')
      let url = ''
      let newItem = item.substring(parIndex + 1)

      if (newItem.includes('https')) {
        const dotIndex = newItem.indexOf('.')
        if (!name) name = newItem.substring(0, dotIndex).replace('https://', '')
        url = newItem
      } else {
        const element = newItem.replace('[', '').replace(']', '')
        url = siteMetadata[element]
      }

      return (
        <a
          className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
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
