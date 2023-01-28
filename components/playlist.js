import { useEffect, useState } from 'react'
import TableRow from './table/tableRow'

const styles = {
    table: `w-full text-left`,
    // tableWrapper: `max-w-7xl m-auto p-3 mt-5 mb-40`,
    tableWrapper: `max-w-7xl m-auto p-3 pb-0 flex-[2] border-r border-l border-[#38444d]`,
    tableHeader: `border-b border-gray-100/20 pb-5 opacity-50`,
}


const Playlist = ({songs,searchTerm}) => {
    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <tbody className={styles.tableHeader}>
                    <tr>
                        <th className='pb-3'>TITLE</th>
                        <th className='pb-3'>PLAYS</th>
                        <th className='pb-3'>
                            <img alt='' src='assets/time.svg' />
                        </th>
                    </tr>
                </tbody>
                
                <tbody className='mb-6 block'></tbody>
                
                {songs.map((song, searchTerm) => {
                    
                    console.log(song.id, song.account);
                            if(searchTerm.length == 0){
                                return <TableRow key={song.id} props={song.account} />
                            }
                })}

            </table>
        </div>
    )
}

export default Playlist