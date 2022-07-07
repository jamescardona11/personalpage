import Image from '@/components/Image'
import Link from '@/components/Link'
import { PostCard } from '@/components/PostCard'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { BasicTimeLine } from '@/layouts/components/BasicTimeLine'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Me from '../components/Me'

const MAX_DISPLAY = 4

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const now = new Date()
  const newPosts = posts.filter((post) => now >= new Date(post.date))
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <Me />
        <div className="space-y-2 pt-4 pb-4 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Últimos Posts
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!newPosts.length && 'Ningún posts encontrado.'}
          {newPosts.slice(0, MAX_DISPLAY).map((frontMatter) => (
            <PostCard key={frontMatter.title} frontMatter={frontMatter} />
          ))}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            Todos los post &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
