import React from 'react'

export default function Button({label, href}) {
  return (
    <div className='sm:mt-10 mt-5'>
        <a className="bg-purple-700 max-sm:text-sm py-2 px-6 rounded-full cursor-pointer font-semibold hover:bg-transparent hover:border-2 border-white transition hover:scale-110 duration-500 ease-in-out" href={href} target='_black'>{label}</a>
    </div>
  )
}
