import { useState } from 'react'
import SocialIcon from '@/components/social-icons'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { InsightsSection, InsightType } from './components/InsightsSection'
import { Skills } from './components/Skills'
import { BasicTimeLine } from './components/BasicTimeLine'
import { DownloadButton } from './components/DownloadButton'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, insight1, insightDesc1, insight2, insightDesc2, insight3, insightDesc3, routine } =
    frontMatter

  const [openTab, setOpenTab] = useState(1)
  const border = 'border-b-2 border-primary-500'

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />

      <div className="flex border-b border-gray-100">
        <div className="w-full">
          <ul className="flex border-b border-gray-100">
            <li className="flex-1">
              <a
                className={'relative block p-4 ' + (openTab === 1 ? border : '')}
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-shrink-0 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>

                  <span className="ml-3 text-sm font-medium text-gray-900"> Settings </span>
                </div>
              </a>
            </li>

            <li className="flex-1">
              <a
                className={'relative block p-4 ' + (openTab === 2 ? border : '')}
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-shrink-0 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>

                  <span className="ml-3 text-sm font-medium text-gray-900"> Messages </span>
                </div>
              </a>
            </li>

            <li className="flex-1">
              <a
                className={'relative block p-4 ' + (openTab === 3 ? border : '')}
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(3)
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-shrink-0 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>

                  <span className="ml-3 text-sm font-medium text-gray-900"> Archive </span>
                </div>
              </a>
            </li>
          </ul>

          <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded">
            <div className="flex-auto px-4 py-5">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <p>
                    Collaboratively administrate empowered markets via plug-and-play networks.
                    Dynamically procrastinate B2C users after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence without
                    revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via premier niche markets.
                    Professionally cultivate one-to-one customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for state of the art
                    customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <p>
                    Efficiently unleash cross-media information without cross-media value. Quickly
                    maximize timely deliverables for real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions without functional
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            <DownloadButton href={siteMetadata.cv} />
          </div>

          <InsightsSection
            type={InsightType.Insight1}
            title={insight1}
            description={insightDesc1}
          />
          <InsightsSection
            type={InsightType.Insight2}
            title={insight2}
            description={insightDesc2}
          />
          <InsightsSection
            type={InsightType.Insight3}
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
