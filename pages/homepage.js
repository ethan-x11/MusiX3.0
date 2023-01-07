import Nav from '../components/nav'
import Activity from '../components/activity'

const HomePage = () => {
  return (
    <div className='flex'>
      <Nav />
      <div className='w-full'>{/* Start point*/}</div>
      <Activity />
    </div>
  )
}

export default HomePage
