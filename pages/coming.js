import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function ComingPage() {
  return (
    <>
      <PageSEO title={`Coming - ${siteMetadata.title}`} />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <img src="https://media.giphy.com/media/q9CS6tp1oM45pmj19U/giphy.gif" alt="coming" />
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            Pronto tendremos está sección habilitada.
          </p>
          <p className="mb-8">
            Por el momento te invito a leer nuestros post, puedes ir al homepage.
          </p>
          <Link href="/">
            <button className="focus:shadow-outline-primary inline rounded-lg border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-primary-700 focus:outline-none dark:hover:bg-primary-500">
              Vuelve al homepage
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
