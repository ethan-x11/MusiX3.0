import { useContext } from 'react'
import { Context } from '../context/context'
import Login from '../components/login'
import Head from 'next/head'

export default function Home() {
  const { updateProgress, updateVolume } = useContext(Context)
  return (
    <div>
      <Head>
        <title>Musix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <audio
        id='audio-element'
        hidden
        playsInline
        onVolumeChange={e => updateVolume(e)}
        onTimeUpdate={e => updateProgress(e)}
      />
      <Login />
    </div>
  )
}