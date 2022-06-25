import SocialIcon from '@/components/social-icons'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { InsightsSection, MiddleSectionTitleType } from './components/InsightsSection'
import { Skills } from './components/Skills'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, insight1, insightDesc1, insight2, insightDesc2, insight3, insightDesc3, routine } =
    frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <section className="bg-white dark:bg-gray-900">
        <div className="w-full space-y-12 ">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
              hello there! 👋
            </h1>
            <br />
            <a>{routine}</a>

            <div className="mt-2">
              <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
              <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
              <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
            </div>

            <h2 className="mb-4 pt-3 text-gray-900  dark:text-white">
              Mi nombre es <a className="font-semibold">{name},</a> {siteMetadata.aboutme}
            </h2>
          </div>

          <InsightsSection
            type={MiddleSectionTitleType.Insight1}
            title={insight1}
            description={insightDesc1}
          />
          <InsightsSection
            type={MiddleSectionTitleType.Insight2}
            title={insight2}
            description={insightDesc2}
          />
          <InsightsSection
            type={MiddleSectionTitleType.Insight3}
            title={insight3}
            description={insightDesc3}
          />

          <Skills />

          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>

          <hr className="my-12 border-gray-200 dark:border-gray-700" />
        </div>
      </section>
    </>
  )
}
