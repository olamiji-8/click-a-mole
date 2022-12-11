import { useEffect } from "react"; 
import molehill from "../img/molehill.png"
import mole1 from "../img/mole1.jpg"

export default function EmptySlot(props){

    useEffect(() =>{
        let randomSeconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })
    return(
        <div>
            <img src={mole1} alt="mole1" className="image"/>
        </div>
    )
}