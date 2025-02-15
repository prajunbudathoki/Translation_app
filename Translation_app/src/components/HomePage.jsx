import React, { useState,useEffect,useRef } from 'react'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const HomePage = (props) => {
  const {setFile,setAudioStream} = props

  const [recordStatus,setRecordStatus] = useState('inactive')
  const [audioChunks,setAudioChunks] = useState([])
  const [duration,setDuration] = useState(0)

  const mediaRecorder = useRef(null)

  const mimeType = 'audio/webm'

  async function startRecording() {
    let tempStream;
    console.log('start recording')
    try{
      const streamData = navigator.mediaDevices.getUserMedia({
        audio: true,
        video:false
      })
      tempStream = streamData
    } catch(err){
      console.log(err.message)
      return
    }
    setRecordStatus('Recording....')

    const media = new MediaRecorder(tempStream,{type:mimeType})
    mediaRecorder.current = media

    mediaRecorder.current.start()
    let localAudioChunks = []
    mediaRecorder.current.ondataavailable = (e) => {
      if(typeof e.data === 'undefined'){
        return
      }
      if(typeof e.data.size === 0){
        return
      }
      localAudioChunks.push(e.data)
    }
    setAudioChunks(localAudioChunks)
  }
  async function stopRecording(){
    setRecordStatus('inactive')
    console.log('stop recording')

    mediaRecorder.current.stop()
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks,{type:mimeType})
      setAudioStream(audioBlob)
      setAudioChunks([])
      setDuration(0)
    }
  }
  useEffect(() => {
    if(recordStatus === 'inactive'){
      return
    }
    const interval = setInterval(() => {
      setDuration(curr => curr + 1)
    },1000)
    return () => clearInterval(interval)
  },[])

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
            <button onClick={recordStatus === 'recording' ? stopRecording : startRecording} className='cursor-pointer flex items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4 addBtn px-4 py-2 rounded-xl'>
                <p>{recordStatus === 'inactive'?'Record':`Stop recording`}</p> 
                <div className="flex items-center gap-2">
                  {duration !==0 && (
                    <p className='text-sm'>{duration}s</p>
                  )}
                <KeyboardVoiceIcon className={recordStatus === 'recording' ? 'text-rose-300' : ''} titleAccess='record' />
                </div>
            </button>
                <p>Or <label className='text-blue-400 cursor-pointer hover:text-blue-600 duration-200'><i>upload</i> <input onChange={fileAccept} className='hidden'
                type='file' accept='.mp3,.wave'/></label> a mp3 file</p>
        </main> 
  )
}

export default HomePage