import React, { useEffect, useState } from 'react'
import HomePage from './components/HomePage';
import Header from './components/Header';
import FileDisplay from './components/FileDisplay';
import Information from './components/Information';
import Transcribe from './components/Transcribe';


const App = () => {
  const [file, setFile] = useState(null)
  const [audioStream,setAudioStream] = useState(null)
  const [output,setOutput] = useState(null)
  const [loading,setLoading] = useState(false)
  const [finished,setFinished] = useState(false)

  const isAudioAvailable = file || audioStream

  function handleAudio(){
    setFile(null)
    setAudioStream(null)
  }

  const worker = useRef(null)

  useEffect(() => {
    if(!worker.current){
      worker.current = new Worker(new URL('./utils/whisper.worker.js',import.meta.url),{
        type:'module'
      })
    }
    const onMessageReceived = async (e) => {
      
    }
  },[])


    return (
    <div className='flex flex-col max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header />
        {output ? (
          <Information/>
          ) : loading ? (
          <Transcribe />
          ) : isAudioAvailable ? (
          <FileDisplay handleAudio={handleAudio}
           file={file} audioStream={setAudioStream} />
           ) : (
           <HomePage setFile={setFile} setAudioStream={setAudioStream} /> 
           )}
        {/* {isAudioAvailable ? 
        (<FileDisplay file={file} setAudioStream={setAudioStream} handleAudio={handleAudio} />) : 
        (<HomePage setFile={setFile} setAudioStream={setAudioStream} />)} */}
      </section>
      <h1 className='text-green-400'>App</h1>
      <footer>
      </footer>
    </div>
  )
}

export default App