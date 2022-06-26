import { SvgPathRounded, SvgPathFlat, PathType } from '@/components/SvgPath'
import { useState } from 'react'
import { Skills } from './Skills'
import { TabMe } from './TabMe'

export const TabsSection = ({ githubStats, frontMatter }) => {
  const [openTab, setOpenTab] = useState(1)
  const border = 'border-b-2 border-primary-500'

  const handleTab = (e, index) => {
    e.preventDefault()
    setOpenTab(index)
  }

  return (
    <>
      <div className="flex border-b border-gray-100">
        <div className="w-full">
          <ul className="flex border-b border-gray-100">
            <li className="flex-1">
              <a
                className={'relative block p-4 ' + (openTab === 1 ? border : '')}
                onClick={(e) => handleTab(e, 1)}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <div className="flex items-center justify-center">
                  <svg className="h-8 w-8" viewBox="0 0 38 38" fill="none">
                    <g clipPath="url(#clip0)">
                      <path
                        d="M5.276 23.2c-.42 0-.823.105-1.182.302A13.853 13.853 0 011.172 15C1.172 7.375 7.375 1.172 15 1.172c.927 0 1.854.092 2.754.274a.586.586 0 00.232-1.149A15.111 15.111 0 0015 0C10.993 0 7.226 1.56 4.393 4.393A14.902 14.902 0 000 15c0 3.37 1.144 6.66 3.228 9.296-.268.4-.413.872-.413 1.365 0 .657.257 1.275.721 1.74a2.444 2.444 0 001.74.721c.658 0 1.276-.256 1.74-.721.465-.465.721-1.083.721-1.74s-.256-1.276-.72-1.74a2.445 2.445 0 00-1.74-.72zm.912 3.373a1.28 1.28 0 01-.912.377 1.28 1.28 0 01-.911-.377 1.28 1.28 0 01-.378-.912c0-.344.134-.668.378-.912a1.28 1.28 0 01.911-.377c.345 0 .668.134.912.378.243.243.377.567.377.911 0 .344-.134.668-.377.912zM26.772 5.703a2.465 2.465 0 00-.308-3.104 2.446 2.446 0 00-1.74-.721c-.658 0-1.276.256-1.74.72a2.445 2.445 0 00-.721 1.74c0 .658.256 1.276.72 1.741.465.465 1.083.72 1.74.72.42 0 .824-.104 1.183-.3A13.854 13.854 0 0128.828 15c0 7.625-6.203 13.828-13.828 13.828-.918 0-1.836-.09-2.728-.269a.586.586 0 00-.23 1.15c.968.193 1.963.291 2.958.291 4.007 0 7.773-1.56 10.607-4.393A14.902 14.902 0 0030 15c0-3.37-1.145-6.66-3.228-9.297zm-2.96-.452a1.28 1.28 0 01-.377-.912c0-.344.134-.668.377-.911a1.28 1.28 0 01.912-.378 1.29 1.29 0 010 2.578 1.28 1.28 0 01-.912-.377z"
                        fill="#2D3748"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" d="M0 0h30v30H0z" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="ml-3 text-sm font-medium text-gray-900"> @me </span>
                </div>
              </a>
            </li>

            <li className="flex-1">
              <a
                className={'relative block p-4 ' + (openTab === 2 ? border : '')}
                onClick={(e) => handleTab(e, 2)}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <div className="flex items-center justify-center">
                  <svg className="h-8 w-8" viewBox="0 0 36 36" fill="none">
                    <path
                      d="M29.6931 14.2283L22.7556 6.87823C22.3292 6.426 21.6175 6.40538 21.1652 6.83212C20.7137 7.25851 20.6927 7.9706 21.1195 8.42248L27.3284 15L21.1195 21.5783C20.6927 22.0302 20.7137 22.7419 21.1652 23.1687C21.3827 23.3738 21.6606 23.4754 21.9374 23.4754C22.2363 23.4754 22.5348 23.3569 22.7557 23.1233L29.6932 15.7729C30.1022 15.339 30.1023 14.6618 29.6931 14.2283Z"
                      fill="#2D3748"
                    />
                    <path
                      d="M8.88087 21.578L2.67236 15L8.88087 8.42215C9.30726 7.97028 9.28664 7.25812 8.83476 6.83179C8.38323 6.4054 7.67073 6.42603 7.2444 6.87791L0.306858 14.2279C-0.102245 14.6614 -0.102245 15.3391 0.306858 15.7726L7.24475 23.123C7.466 23.3574 7.76413 23.4755 8.06302 23.4755C8.33976 23.4755 8.61767 23.3735 8.83476 23.1684C9.28705 22.742 9.30726 22.0299 8.88087 21.578Z"
                      fill="#2D3748"
                    />
                    <path
                      d="M16.8201 3.08774C16.2062 2.99476 15.6317 3.41622 15.5379 4.03011L12.2379 25.6302C12.1441 26.2445 12.566 26.8186 13.1803 26.9124C13.238 26.921 13.295 26.9252 13.3516 26.9252C13.898 26.9252 14.3773 26.5266 14.4624 25.97L17.7624 4.3699C17.8562 3.7556 17.4343 3.1815 16.8201 3.08774Z"
                      fill="#4299E1"
                    />
                  </svg>

                  <span className="ml-3 text-sm font-medium text-gray-900"> Skills </span>
                </div>
              </a>
            </li>

            <li className="flex-1">
              <a
                className={'relative block p-4 ' + (openTab === 3 ? border : '')}
                onClick={(e) => handleTab(e, 3)}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <div className="flex items-center justify-center">
                  <svg className="h-8 w-8" viewBox="0 0 36 36" fill="none">
                    <path
                      d="M27.3633 7.08984H26.4844V6.21094C26.4844 4.75705 25.3015 3.57422 23.8477 3.57422H4.39453C2.94064 3.57422 1.75781 4.75705 1.75781 6.21094V21.1523H0.878906C0.393516 21.1523 0 21.5459 0 22.0312V23.7891C0 25.2429 1.18283 26.4258 2.63672 26.4258H27.3633C28.8172 26.4258 30 25.2429 30 23.7891V9.72656C30 8.27268 28.8172 7.08984 27.3633 7.08984ZM3.51562 6.21094C3.51562 5.72631 3.9099 5.33203 4.39453 5.33203H23.8477C24.3323 5.33203 24.7266 5.72631 24.7266 6.21094V7.08984H20.332C18.8781 7.08984 17.6953 8.27268 17.6953 9.72656V21.1523H3.51562V6.21094ZM1.75781 23.7891V22.9102H17.6953V23.7891C17.6953 24.0971 17.7489 24.3929 17.8465 24.668H2.63672C2.15209 24.668 1.75781 24.2737 1.75781 23.7891ZM28.2422 23.7891C28.2422 24.2737 27.8479 24.668 27.3633 24.668H20.332C19.8474 24.668 19.4531 24.2737 19.4531 23.7891V9.72656C19.4531 9.24193 19.8474 8.84766 20.332 8.84766H27.3633C27.8479 8.84766 28.2422 9.24193 28.2422 9.72656V23.7891Z"
                      fill="#2D3748"
                    />
                    <path
                      d="M24.7266 21.1523H22.9688C22.4834 21.1523 22.0898 21.5459 22.0898 22.0312C22.0898 22.5166 22.4834 22.9102 22.9688 22.9102H24.7266C25.212 22.9102 25.6055 22.5166 25.6055 22.0312C25.6055 21.5459 25.212 21.1523 24.7266 21.1523Z"
                      fill="#4299E1"
                    />
                    <path
                      d="M23.8477 12.3633C24.3331 12.3633 24.7266 11.9698 24.7266 11.4844C24.7266 10.999 24.3331 10.6055 23.8477 10.6055C23.3622 10.6055 22.9688 10.999 22.9688 11.4844C22.9688 11.9698 23.3622 12.3633 23.8477 12.3633Z"
                      fill="#4299E1"
                    />
                  </svg>

                  <span className="ml-3 text-sm font-medium text-gray-900"> TimeLine </span>
                </div>
              </a>
            </li>
          </ul>

          <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded">
            <div className="flex-auto px-4 py-5">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block space-y-12' : 'hidden'} id="link1">
                  <TabMe frontMatter={frontMatter} />
                </div>
                <div className={openTab === 2 ? 'block space-y-12' : 'hidden'} id="link2">
                  <Skills />
                  <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
                    {githubStats}
                  </div>
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
    </>
  )
}
