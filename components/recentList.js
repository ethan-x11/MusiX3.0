import { useEffect, useState } from 'react'
import TableRow from './table/tableRow'

const styles = {
    table: `w-full text-left`,
    // tableWrapper: `max-w-7xl m-auto p-3 mt-5 mb-40`,
    tableWrapper: `max-w-7xl m-auto p-3 pb-0 flex-[2] border-r border-l border-[#38444d]`,
    tableHeader: `border-b border-gray-100/20 pb-5 opacity-50`,
    end: `text-center text-gray-100/50 text-sm mt-5 flex justify-center`,
}

const RecentList = ({songs,searchId}) => {
    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <tbody className='mb-6 block'></tbody>
                
                {songs.map((song) => {
                    const title = song.account.title.toLowerCase();
                    const sId = searchId.toLowerCase();

                    console.log(title, sId);
                    console.log(typeof title, typeof sId);
                    if(searchId.length == 0){
                        return <TableRow key={song.id} props={song.account} />
                    }
                    else if(sId.length > 0 && !title.includes(sId)){
                        return
                    }
                    else if(sId.length > 0 && title.includes(sId)){
                        return <TableRow key={song.id} props={song.account} />
                    }
                })}

            </table>
        </div>
    )
}

export default RecentList