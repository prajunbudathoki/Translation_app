import React from 'react'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const HomePage = (props) => {
  const {setFile,setAudioStream} = props

  function fileAccept(e){
    const tempFile = e.target.files[0]
    setFile(tempFile)
  }

  return (
        <main className='flex-1 p-4 flex flex-col gap-3 sm:gap-4 md:gap-5  justify-center text-center pb-20'>
          <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>
            Tran<span className='text-blue-400 bold'>Scribe</span></h1>
            <h3 className='font-medium md:text-lg'>Record <span className='text-blue-400'>
                &rarr;</span> Compile <span className='text-blue-400'>
                &rarr;</span> Translate</h3>
            <button className='cursor-pointer flex items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4 addBtn px-4 py-2 rounded-xl'>
                <p>Record</p>
                <KeyboardVoiceIcon titleAccess='record' />
            </button>
                <p>Or <label className='text-blue-400 cursor-pointer hover:text-blue-600 duration-200'><i>upload</i> <input onChange={fileAccept} className='hidden'
                type='file' accept='.mp3,.wave'/></label> a mp3 file</p>
        </main> 
  )
}

export default HomePage