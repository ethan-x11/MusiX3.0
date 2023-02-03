import { activities } from '../data/activities'
import ActivityCard from './activityCard'

const styles = {
  activity: `w-96 h-screen p-5 py-10 text-white`,
  title: `flex items-center justify-between mb-10 text-xl font-bold`,
  profileAvatarContainer: `w-14 h-14 rounded-full -ml-2 mr-3`,
  activityCard: `flex mb-6`,
}

const Activity = () => {
  return (
    <div className={styles.activity}>
      <div className={styles.title}>
        Current Hits
      </div>

      <div className='mb-10'>
        {activities.map((activity, index) => {
          return (
            <ActivityCard
              avatar={activity.avatar}
              title={activity.title}
              subTitle={activity.subTitle}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Activity
