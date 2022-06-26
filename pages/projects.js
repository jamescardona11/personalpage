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
      <PageSEO
        title={`Proyectos - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      {/* <div>
        <div className="lg:flex">
          <div className="flex w-full items-center justify-center px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
                Construye Esa Nueva <span className="text-blue-600 dark:text-blue-400">Idea</span>
              </h2>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum
                cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem
                tempora voluptates.
              </p>

              <div className="mt-6 flex flex-col space-y-3 lg:flex-row lg:space-y-0">
                <a
                  href="mailto:elcorreoquequieres@correo.com"
                  className="block transform rounded-md bg-gray-900 px-3 py-2 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-gray-700"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="block transform rounded-md bg-gray-200 px-3 py-2 text-center text-sm font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-300 lg:mx-4"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="h-64 w-full lg:h-auto lg:w-1/2">
            <div
              className="h-full w-full bg-cover"
              style="background-image: url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)"
            >
              <div className="h-full w-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Proyectos
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Algunos de estos proyectos los he realizado para aprender y crecer mi portafolio.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projects.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                tag={d.tag}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
