import React from 'react'

export const PathAndTitle = ({ path, path2 }) => {
  return (
    <>
      <div className="md:-mx-4 md:flex md:items-start">
        <span className="inline-block rounded-xl bg-blue-100 p-2 text-blue-500 dark:bg-blue-500 dark:text-white md:mx-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
            (path2 != '' &&
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path2} />)
          </svg>
        </span>
      </div>
    </>
  )
}
