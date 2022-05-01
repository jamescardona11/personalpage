import Link from 'next/link'

const BlogPostCard = ({ title, date, slug }) => {
  const url = 'http://localhost:3002'
  return (
    <div className="mb-4 flex cursor-pointer rounded border border-gray-300 hover:border-gray-500 dark:border-gray-600 dark:hover:border-gray-400 lg:mb-0">
      <Link href={url} key={slug} passHref>
        
        <div className="overflow-hidden p-3 md:p-4 lg:p-4">
          <span className="bg-primary text-primary mb-4 inline-block rounded-md bg-opacity-25 py-1 px-3 text-xs font-medium">
                Portfolio
              </span>
          <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-bold leading-8 tracking-tight lg:text-2xl">
            {title}
          </h3>
          <p className="text-md mt-2 text-gray-700 dark:text-gray-400 lg:text-base">{date}</p>
        </div>
      </Link>
    </div>
  )
}

export default BlogPostCard
