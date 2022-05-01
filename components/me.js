import Image from '@/components/Image'
import Link from '@/components/Link'

const data = {
  profileImage: '/static/images/avatar.png',
  name: 'James Cardona',
  role: 'Software Engineer',
  description:
    "I'm a frontend developer based in Bekasi, Indonesia. I'm passionate about building web applications with Reactjs",
}

const Me = () => {
  return (
    <section className="min-w-screen grid items-center justify-between py-8 lg:grid-cols-2 lg:grid-rows-1">
      <div className="mb-10 flex h-full w-full flex-col items-start justify-center pr-8 xl:mb-0">
        <div className="flex flex-col items-center justify-start md:flex-row">
          {/* <Image
            src="/static/images/avatar.png"
            alt="An image about James Cardona"
            className="h-32 w-32 rounded-full border-2 border-gray-200 shadow-md"
            width={72}
            height={72}
            layout="fixed"
            quality={60}
            priority
            loading="eager"
          /> */}

          <figure className="relative mb-4 h-32 w-32 rounded-full sm:h-44 sm:w-44 md:mb-0 md:mr-12 lg:mr-32">
            <Image
              src={data.profileImage}
              quality={80}
              width={200}
              height={200}
              alt="Andrian Fadhilla"
              layout="intrinsic"
              loading="eager"
              className="h-full w-full rounded-full"
            />
          </figure>
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl sm:leading-none md:text-5xl lg:text-5xl xl:text-5xl">
            {data.name}
          </h2>
        </div>
        <h2 className="text-primary my-2 font-semibold text-purple-400">{data.role}</h2>
        <p className="mt-2 text-lg ">
          Tech Explorer | Apasionado por la tecnología, videojuegos y un entusiasta del mundo Cripto
          y NFTs.
        </p>
        <p className="mt-3 text-sm text-gray-400 dark:text-gray-400">
          Fluter, python, nodejs, web3, Solidity, Entusiasta de Clojure y Next.js.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-400">
          Creando algunas aplicaciones, emprendiendo y aprendiendo.
        </p>
        <button className="mt-3 inline-flex items-center rounded bg-purple-600 py-3 px-6 font-bold text-white hover:bg-purple-800">
          <svg
            className="mr-2 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download CV</span>
        </button>
      </div>
    </section>
  )
}

export default Me
