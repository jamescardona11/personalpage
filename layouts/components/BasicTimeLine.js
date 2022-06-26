import { SvgSpan } from '@/components/SvgPath'
import { stringToJSX } from '@/lib/utils/stringToJSX'

export const BasicTimeLine = () => {
  return (
    <>
      <h3 className="mb-8 text-gray-900  dark:text-white">
        Si quieres ver todo el timeline visita mi LinkedIn
      </h3>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-6">
          <SvgSpan />
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            Flutter Developer - 57Blocks
            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
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
            Web3 Engineer - EXA
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Entre Junio 2021 - Junio 2022
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            En conjunto de varios amigos decidimos emprender en el mundo de los NFT, lanzando
            colecciones. Adicional comprando y vendiendo diferentes NFT's en etapas tempranas.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <SvgSpan />
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Tech Lead - GeekDevelopers
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Entre Agosto 2016 - Mayo 2018
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Tuve la oportunidad de aprender diferentes cosas como desarrollador y como líder de
            equipo, fue una primera etapa llena de diferentes retos y errores. Pero que me ayudaron
            a crecer como persona.
          </p>
        </li>
      </ol>
    </>
  )
}
