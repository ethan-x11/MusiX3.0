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
    wrapper: `flex-[2] h-screen min-h-screen p-6 no-scrollbar overflow-y-scroll select-none`,
    searchbox: `flex align-center justify-center w-full mb-6`,
    searchentry: `w-full bg-gray-200 rounded-lg p-2 text-black`,
    searchbutton: `bg-blue-500 text-white rounded-lg p-2 pl-4 ml-5`,
};

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

            <form className={style.searchbox} onSubmit={handleSubmit}>
                <input
                    className={style.searchentry}
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                <button className={style.searchbutton} onClick={handleSubmit}>
                    Search
                </button>
            </form>
        
            <Playlist songs={songs} searchId={searchTerm} />

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