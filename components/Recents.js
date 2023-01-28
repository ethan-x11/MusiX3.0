import Nav from './nav'
import RecentList from './recentList'
import PlayerControls from './playerControls'
import Activity from './activity'
import { useState, useEffect } from 'react'
import UploadModal from './UploadModal'
import usemusix from '../hooks/usemusix'
import Head from 'next/head'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] no-scrollbar overflow-y-scroll`,
    searchbox: `bg-gray-200 rounded-lg p-2 text-black`,
    searchbutton: `bg-blue-500 text-white rounded-lg p-2`,
}

const Recents = () => {
    const [showUploadMusic, setShowUploadMusic] = useState(false)
    const [title, setTitle] = useState('')
    const [musicUrl, setMusicUrl] = useState('')
    const [showDiv, setShowDiv] = useState(false);


    const { newMusic, getSongs } = usemusix(
        musicUrl,
        title,
        setTitle,
        setMusicUrl,
        setShowUploadMusic,
    )

    const [songs, setSongs] = useState([])

    useEffect(() => {
        getSongs().then(songs => {
            setSongs(songs)
        })
    }, [])
    

    const query = ''

    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchTerm);
    }
    

    return (
        <div className={style.wrapper}>
            
            <RecentList songs={songs}/>

        </div>
    )
}

export default Recents