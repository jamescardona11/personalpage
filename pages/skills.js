// import Link from '@/components/Link'
// import { PageSEO } from '@/components/SEO'
// import Tag from '@/components/Tag'
// import siteMetadata from '@/data/siteMetadata'
// import { getAllTags } from '@/lib/tags'
// import { useState } from 'react'
// import kebabCase from '@/lib/utils/kebabCase'

// export async function getStaticProps() {
//   const skills = await getAllTags('blog')

//   return { props: { skills } }
// }

// export default function Skill({ skills }) {
//   return (
//     <>
//       <PageSEO title={`Skills - ${siteMetadata.author}`} description="Mis habilidades" />
//       <div className="flex flex-col items-start justify-start  md:items-start md:justify-start md:space-x-6 md:divide-y-0">
//         <div className="space-x-2 pt-6 pb-8 md:space-y-1">
//           <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:px-6 md:text-6xl md:leading-14">
//             Skill
//           </h1>
//         </div>
//         <div className="flex max-w-lg flex-wrap">
//         </div>
//       </div>
//     </>
//   )
// }
