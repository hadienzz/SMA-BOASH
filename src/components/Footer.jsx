import logoBoash from '../assets/boashArab 1.png'
import kurmer from '../assets/Merdeka Mengajar 1.png'
import kammer from '../assets/kammer 1.png'

const Footer = () => {
    return (
        <footer className="w-full h-[124px] flex justify-center items-center gap-[140.52px] ">
            <img src={logoBoash} alt="" className=''/>
            <img src={kurmer} alt="" className=''/>
            <img src={kammer} alt="" className=''/>
        </footer>
    )
}

export default Footer