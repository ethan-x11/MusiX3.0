import { useContext } from 'react'
import { Context } from '../../context/context'

const styles = {
    tr: `hover:text-yellow-400`,
    th: `pb-5 cursor-pointer`,
    table: ``,
}

const TableRow = ({ props }) => {
    const { playOnSelect } = useContext(Context)

    return (
        <tbody>
            <tr className={styles.tr} onClick={() => playOnSelect(props)}>
                <th className={styles.th}>
                    <div>
                        <p className="font-bold">{props.title}</p>
                        <p className="opacity-50">{'artist'}</p>
                        {/* <p className="opacity-50">{props.artiste}</p> */}
                    </div>
                </th>
                <th className={styles.th}>{'10,000'}</th>
                {/* <th className={styles.th}>{props.plays}</th> */}
                <th className={styles.th}>{'2:43'}</th>
                {/*<th className={styles.th}>{props.songLength}</th> */}
            </tr>
        </tbody>
    )
}

export default TableRow