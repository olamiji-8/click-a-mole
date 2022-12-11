import { useEffect } from 'react'
import mole2 from '../img/mole2.jpg'

export default function Mole(props){
    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img src={mole2} alt="mole2" onClick={props.moleClicked} className="image"/>
        </div>
    )
}