import Image from 'next/image'

export default function Home() {
  return (
  <>
    <div className='flex-col mx-auto bg-gray-900'>
      <div className='w-3/4 flex flex-row items-center mx-auto p-8 bg-gray-900'> <div className='px-3'> <span className='text-gray-300'>TAILWIND</span> <span className='text-gray-500 pr-2 font-bold'>CHEATSHEET</span> <span className='text-gray-300 px-2 font-light'>|</span>
          <span className='text-gray-500'>custom cheatsheets</span>
        </div>
        <div className='px-3'> 
          <input type="text" className='bg-gray-400 rounded-md w24'/> 
        </div>
        <div className='mx-3 px-2 border border-solid border-gray-300 rounded-md'>
          <button className='text-gray-500 p-1'>Expand All</button>
        </div>
        <div className='mx-3 px-2 border border-solid border-gray-300 rounded-md'>
          <button className='text-gray-500 p-1'>Collapse All</button>
        </div>
        <div className='mx-3 px-2 border border-solid border-gray-300 rounded-md'>
          <button className='text-gray-500 p-1'>Back to components</button>
        </div>
      </div>

      <div className='flex flex-col content-center items-center p-5 bg-gradient-to-b from-gray-900 to-gray-800'>
        <h2 className='text-2xl text-gray-500 p-2 font-bold'>Tailwind CSS Cheat Sheet</h2> 
        <p className='p-2 text-gray-500'>Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!
        </p>
        <p className='p-2 text-gray-500'>"Never memorize something that you can look up." - Albert Einstein</p>
      </div>

      <div className='w-3/4 max-w-fit mx-auto flex flex-row flex-wrap'>
        <div className="w-52 min-w-max flex flex-col flex-nowrap bg-gray-800 p-2 m-2 border-solid rounded-md border-gray-900">
          <h1 className="p-2 font-bold text-gray-100">shfoiahe sadsdfsifsffladf</h1>
          <p className="p-2 font-light text-gray-300">sjdflaf</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
        </div>
        <div className="w-52 min-w-max flex flex-col flex-nowrap bg-gray-800 p-2 m-2 border-solid rounded-md border-gray-900">
          <h1 className="p-2 font-bold text-gray-100">sadf asfjoiase ladf</h1>
          <p className="p-2 font-light text-gray-300">sjdflaf</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
        </div>
      <div className="w-52 min-w-max flex flex-col flex-nowrap bg-gray-800 p-2 m-2 border-solid rounded-md border-gray-900">
          <h1 className="p-2 font-bold text-gray-100">sadiiis shfuhsfladf</h1>
          <p className="p-2 font-light text-gray-300">sjdflaf</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
        </div>
        <div className="w-52 min-w-max flex flex-col flex-nowrap bg-gray-800 p-2 m-2 border-solid rounded-md border-gray-900">
          <h1 className="p-2 font-bold text-gray-100">sadflasdh fsusefdf</h1>
          <p className="p-2 font-light text-gray-300">sjdflaf</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
        </div>
      <div className="w-52 min-w-max flex flex-col flex-nowrap bg-gray-800 p-2 m-2 border-solid rounded-md border-gray-900">
          <h1 className="p-2 font-bold text-gray-100">sadfl sehfieuadf</h1>
          <p className="p-2 font-light text-gray-300">sjdflaf</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
        </div>
      <div className="w-52 min-w-max flex flex-col flex-nowrap bg-gray-800 p-2 m-2 border-solid rounded-md border-gray-900">
          <h1 className="p-2 font-bold text-gray-100">sadfl shfeufadf</h1>
          <p className="p-2 font-light text-gray-300">sjdflaf</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
        </div>
      <div className="w-52 min-w-max flex flex-col flex-nowrap bg-gray-800 p-2 m-2 border-solid rounded-md border-gray-900">
          <h1 className="p-2 font-bold text-gray-100">shfuehi sadfladf</h1>
          <p className="p-2 font-light text-gray-300">sjdflaf</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
        </div>
      </div>
      

<div className='w-3/4 mx-auto flex flex-row'>
        <div className="w-52 flex flex-col flex-nowrap bg-gray-800 p-2 m-2 border-solid rounded-md border-gray-900">
          <h1 className="p-2 font-bold text-gray-100">sadfladf</h1>
          <p className="p-2 font-light text-gray-300">sjdflaf</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
        </div>
        <div className="w-52 flex flex-col flex-nowrap bg-gray-800 p-2 m-2 border-solid rounded-md border-gray-900">
          <h1 className="p-2 font-bold text-gray-100">sadfladf</h1>
          <p className="p-2 font-light text-gray-300">sjdflaf</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
        </div>
      <div className="w-52 flex flex-col flex-nowrap bg-gray-800 p-2 m-2 border-solid rounded-md border-gray-900">
          <h1 className="p-2 font-bold text-gray-100">sadfladf</h1>
          <p className="p-2 font-light text-gray-300">sjdflaf</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
        </div>
        <div className="w-52 flex flex-col flex-nowrap bg-gray-800 p-2 m-2 border-solid rounded-md border-gray-900">
          <h1 className="p-2 font-bold text-gray-100">sadfladf</h1>
          <p className="p-2 font-light text-gray-300">sjdflaf</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
        </div>
      <div className="w-52 flex flex-col flex-nowrap bg-gray-800 p-2 m-2 border-solid rounded-md border-gray-900">
          <h1 className="p-2 font-bold text-gray-100">sadfladf</h1>
          <p className="p-2 font-light text-gray-300">sjdflaf</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
        </div>
      <div className="w-52 flex flex-col flex-nowrap bg-gray-800 p-2 m-2 border-solid rounded-md border-gray-900">
          <h1 className="p-2 font-bold text-gray-100">sadfladf</h1>
          <p className="p-2 font-light text-gray-300">sjdflaf</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
        </div>
      <div className="w-52 flex flex-col flex-nowrap bg-gray-800 p-2 m-2 border-solid rounded-md border-gray-900">
          <h1 className="p-2 font-bold text-gray-100">sadfladf</h1>
          <p className="p-2 font-light text-gray-300">sjdflaf</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
          <p className="p-2 font-light text-gray-300">asjdfajfd</p>
        </div>
      </div>
    </div> 
  </>
  )
}
