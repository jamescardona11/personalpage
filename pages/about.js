import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])

  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails
  // const { mdxSource: routine } = routineDetails

  return (
    <MDXLayoutRenderer
      layout={DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
      // routine={routine}
    />
  )
}
