import { useState, useEffect } from 'react'
import usemusix from '../hooks/usemusix'
import RecentList from './recentList'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] no-scrollbar overflow-y-scroll`,
    search: `flex`,
    searchbox: `bg-gray-200 rounded-lg p-2 text-black`,
    searchbutton: `bg-blue-500 text-white rounded-lg p-2`,
}

const Recents = () => {
    const [showUploadMusic, setShowUploadMusic] = useState(false)
    const [title, setTitle] = useState('')
    const [musicUrl, setMusicUrl] = useState('')


    const { newMusic, getSongs } = usemusix(
        musicUrl,
        title,
        setTitle,
        setMusicUrl,
        setShowUploadMusic,
    )

    const [songs, setSongs] = useState([])
    

    return (
        <div className={style.wrapper}>
            <RecentList songs={songs} />
        </div>
    )
}

export default Recents