import { SvgSpan } from '@/components/SvgPath'
import { stringToJSX } from '@/lib/utils/stringToJSX'

export const BasicTimeLine = () => {
  return (
    <>
      <h3 className="mb-8 mt-8 text-gray-900  dark:text-white">
        Si quieres ver todo el historial profesional visita mi LinkedIn
      </h3>
      <ol className="relative ml-4 border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-6">
          <SvgSpan />
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            Flutter Developer - 57Blocks
            <span className="mr-2 ml-3 rounded bg-primary-100 px-2.5 py-0.5 text-sm font-medium text-primary-800 dark:bg-primary-200 dark:text-primary-800">
              Actual
            </span>
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Inicio: Sep 16th, 2020
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Mi rol principal es guiar a un equipo de Flutter en el desarrollo de una aplicación
            crypto. Somos la mejor aplicación para hacer seguimientos a tus criptos y portafolios
            Defi's.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <SvgSpan />
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Web3 Engineer - Deew
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Entre Mayo 2019 - Dec 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Mi rol principalmente a encontrar soluciones a problemas para empresas en la nueva ola
            de web3.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <SvgSpan />
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Tech Lead/ Software Developer - GeekDevelopers
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Entre Jun 2014 - Jul 2018
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Mi rol se convirtió en Tech Lead. En este rol mi función principal era dirigir la
            operativa de la empresa y asegurar el delivery de los diferentes requisitos. Estuve
            desarrollando, como Android Developer y Backend Developer
          </p>
        </li>
      </ol>
    </>
  )
}
