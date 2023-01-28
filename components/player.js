import Header from './header'
import Nav from './nav'
import Playlist from './playlist'
import PlayerControls from './playerControls'
import Activity from './activity'
import { useState, useEffect } from 'react'
import UploadModal from './UploadModal'
import usemusix from '../hooks/usemusix'
import Head from 'next/head'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] no-scrollbar overflow-y-scroll`,
    search: `flex`,
    searchbox: `bg-gray-200 rounded-lg p-2 text-black`,
    searchbutton: `bg-blue-500 text-white rounded-lg p-2`,
}

const Player = () => {
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

    useEffect(() => {
        if (showDiv) {
          // load the new division here
        }
    }, [showDiv]);
    

    const query = ''

    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchTerm);
    }
    

    return (
        <div className={style.wrapper}>
            <Header setShowUploadMusic={setShowUploadMusic} />

            <div className={style.search}>
                <form onSubmit={handleSubmit}>
                    <input
                        className={style.searchbox}
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className={style.searchbutton}
                        onClick={handleSubmit}
                    >Search</button>
                </form>
            </div>

            if(searchTerm == ''){
                <Playlist songs={songs} />
            } 

            <PlayerControls songs={songs} />
            {showUploadMusic && (
                <UploadModal
                title={title}
                setTitle={setTitle}
                setShowUploadMusic={setShowUploadMusic}
                musicUrl={musicUrl}
                setMusicUrl={setMusicUrl}
                newMusic={newMusic}
                />
            )}
        </div>
    )
}

export default Player