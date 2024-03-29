export default function SectionContainer({ children }) {
  return <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-4xl xl:px-0">{children}</div>
  // return <div className="mx-auto">{children}</div>
}

// import Footer from './Footer'

// export default function SectionContainer({ children }) {
//   return (
//     <div className="flex h-screen  flex-col justify-between ">
//       <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>
//       <Footer />
//     </div>
//   )
// }
