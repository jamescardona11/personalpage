import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'

export default function PostLayout({ frontMatter, next, prev, children }) {
  const { title } = frontMatter

  return (
    <SectionContainer>
      <PageSEO
        title={`Acerca de mi - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <article>
        <div>
          <header>
            <PageTitle>{title}</PageTitle>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
