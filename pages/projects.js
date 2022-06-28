import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { getAllProjectsFrontMatter } from '@/lib/mdx'

export async function getStaticProps() {
  const projects = await getAllProjectsFrontMatter()
  return { props: { projects } }
}
export default function Projects({ projects }) {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="mx-auto max-w-6xl divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Proyectos
          </h1>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Algunos de estos proyectos los he realizado para aprender y crecer mi portafolio. Esté
            es mi camino para aprender nuevas cosas
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projects.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                href={d.href}
                github={d.github}
                tags={d.tags}
                main={d.main}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
