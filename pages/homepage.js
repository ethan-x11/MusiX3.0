import Nav from '../components/nav'
import Player from '../components/player'
import Activity from '../components/activity'
import Head from 'next/head'  
import Mainscreen from '../components/mainscreen'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
}

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Musix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.wrapper}>
          <Nav />
          <Mainscreen initialSelectedIcon={'Home'}/>
          <Activity />
        </div>
        
      </div>
  )
}

export default HomePage