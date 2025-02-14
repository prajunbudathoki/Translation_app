import React from 'react'

const FileDisplay = (props) => {
    const {handleAudio,file,setAudioStream} = props
  return (
    <main className='flex-1 p-4 flex flex-col gap-3 sm:gap-4 md:gap-5  justify-center text-center pb-20'>
          <h1 className='font-semibold text-3xl sm:text-6xl md:text-5xl'>
            Uploaded<span className='text-blue-400 bold'>File</span></h1>
        <div className="mx-auto flex flex-col text-left">
            <h3 className='font-semibold'>Name</h3>
            <p>{file.name}</p>
        </div>
    </main>
  )
}

export default FileDisplay