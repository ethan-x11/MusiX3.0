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
    wrapper: ` bg-[#15202b] flex-[2] h-screen min-h-screen p-6 no-scrollbar overflow-y-scroll select-none h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100`,
    header: `sticky top-0 flex justify-between items-center mb-6`,
    searchbox: `sticky flex align-center justify-center w-full mb-6`,
    searchentry: `w-full bg-gray-200 rounded-lg p-2 text-black`,
    searchbutton: `bg-blue-500 text-white rounded-lg p-2 pl-4 ml-5`,
    playlist: `no-scrollbar overflow-y-scroll`,
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
        <>
        <div className={style.wrapper}>
            <Header setShowUploadMusic={setShowUploadMusic} className={style.header}/>

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
        
            <Playlist songs={songs} searchId={searchTerm} className={style.playlist}/>


            </div>
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
        </>
    )
}

export default Player