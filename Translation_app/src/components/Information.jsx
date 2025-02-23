import React,{useState} from 'react'


const Information = () => {
  const [tab,setTab] = useState('transcription')
  return (
    <main className='flex-1 p-4 flex flex-col gap-3 sm:gap-4 md:gap-5  justify-center text-center pb-20 max-w-full mx-auto w-fit'>
      <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>
        <span className='text-blue-400 bold'>Transcription</span>
        File
      </h1>
      <div className="flex mx-auto bg-white borderd-3 border-solid border-blue-400 shadow rounded-full overflow-hidden items-center gap-2">
        <button onClick={() => setTab('transcription')} className={`px-4 py-1 font-medium duration-200 text-blue-400 ${tab === 'transcription' ? 'bg-blue-300 text-white' : 'text-blue-400 hover:text-blue-600'}`}>Transcription</button>
        <button onClick={() => setTab('translation')} className={`px-4 py-1 font-medium duration-200 text-blue-400 ${tab === 'translation  ' ? 'bg-blue-300 text-white' : 'text-blue-400 hover:text-blue-600'}`}>Translation</button>
      </div> 
    </main>
  )
}

export default Information