import React from 'react'

const Transcribe = (props) => {
  const {downloading} = props
  return (
    <div className="flex items-center flex-1 flex-col justify-center gap-10 md:gap-14 pb-24 text-center">
        <div className="flex flex-col gap-4 ">
          <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>
            <span className='text-blue-300'>Transcribing</span>
          </h1>
          <p>{!downloading ? 'loading....🫸' : 'Engaged complete 👍'}</p>
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 max-w-[500px] mx-auto w-full">
          {[0,1,2].map(val => {
            return(
              <div key={val} className={'rounded-lg h-2 sm:h-3 bg-slate-300 loading' + `loading ${val}`}></div>
            )
          })}
        </div>
    </div>
  )
}

export default Transcribe