import Image from './Image'
import Link from './Link'
import Tag from '@/components/Tag'

const Card = ({ title, description, imgSrc, href, tag }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div className="overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
      <div className="p-6">
        <h2 className="mb-1 text-2xl font-bold leading-8 tracking-tight hover:underline">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <div className="mb-3 flex flex-wrap">
          <Tag key={tag} text={tag} isEnable="false" />
        </div>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Ver imágenes
            </Link>
          )}
          <div className="flex items-center">
            {imgSrc &&
              (href ? (
                <Link href={href} aria-label={`Link to ${title}`}>
                  <Image
                    alt={title}
                    src={imgSrc}
                    className="mx-4 hidden h-10 w-10 rounded-full object-cover sm:block"
                    width={80}
                    height={80}
                  />
                </Link>
              ) : (
                <Image
                  alt={title}
                  src={imgSrc}
                  className="mx-4 hidden h-10 w-10 rounded-full object-cover sm:block"
                  width={80}
                  height={80}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card
