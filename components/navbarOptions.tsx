import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import { IconType } from 'react-icons'

const style = {
    wrapper: `w-min flex items-center rounded-[100px] p-4 cursor-pointer hover:bg-[#333c45] transition-all hover:duration-200 hover:ease-in-out`,
    iconContainer: `text-xl mr-4`,
    textGeneral: `font-medium`,
    textActive: `font-bold`,
}

interface NavbarOptionProps {
    text: String
    Icon: IconType
    isActive?: Boolean
    setSelected?: Dispatch<SetStateAction<String>>
    redirect?: URL | string
}

function NavbarOption({ text, Icon,isActive, setSelected, redirect }: NavbarOptionProps) {
    const router = useRouter()

    const handleClick = (buttonText = text) => {
        if (buttonText !== 'More' && setSelected) {
            setSelected(buttonText)
        } else return
    }

    return (
        <div className={style.wrapper}
            onClick={() => {
                handleClick(text)
                if (redirect) {
                    router.push(redirect)
                } else return
            }}
        >
            <div className={style.iconContainer}>
                <Icon />
            </div>
            <div className={`${isActive ? style.textActive : style.textGeneral}`}>
                {text}
            </div>
        </div>
    )
}
    
export default NavbarOption