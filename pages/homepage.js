import Nav from '../components/nav'
import Player from '../components/player'
import Activity from '../components/activity'
import Head from 'next/head'  
import Mainscreen from '../components/mainscreen'

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Musix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex'>

        <Nav />
        <Mainscreen initialSelectedIcon={'Home'}/>
        <Activity />
        
      </div>
    </div>
  )
}

export default HomePage