import React from 'react'
import useSWR from 'swr'
import formatDate from '@/lib/utils/formatDate'
import Tag from '@/components/Tag'

import fetcher from 'lib/fetcher'
import CustomLink from '@/components/Link'
import { ViewCountElement } from '@/lib/utils/viewCount'

export const PostCard = ({ frontMatter }) => {
  const { slug, date, title, summary, tags, readingTime } = frontMatter

  // const { data } = useSWR(`/api/views/${slug}`, fetcher)
  // const viewCount = data?.total

  return (
    <div
      key={slug}
      className="h-full transform cursor-pointer overflow-hidden rounded-md border-gray-200 bg-transparent bg-opacity-20 transition duration-500 hover:scale-105 hover:rounded-xl hover:bg-gray-300 hover:pl-2 dark:border-gray-700 dark:hover:border-primary-500 dark:hover:bg-gray-800"
    >
      <CustomLink
        href={`/blog/${slug}`}
        key={slug}
        className="bg-opacity-20 transition duration-100 hover:rounded-xl hover:bg-gray-300 dark:hover:bg-gray-800"
      >
        <li key={slug} className="py-4">
          <article className="space-y-2 xl:grid  xl:items-baseline xl:space-y-0">
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={date}>{formatDate(date)}</time>
              </dd>
            </dl>
            <div className="space-y-3 xl:col-span-3">
              <div>
                <h4 className="text-2xl font-bold leading-8 tracking-tight">
                  <CustomLink
                    href={`/blog/${slug}`}
                    className="text-gray-900 transition   duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                  >
                    {title}
                  </CustomLink>
                </h4>
                {/* <ViewCountElement viewCount={viewCount} /> */}
                <div className="flex flex-wrap pt-3">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
            </div>
          </article>
        </li>
      </CustomLink>
    </div>
  )
}
