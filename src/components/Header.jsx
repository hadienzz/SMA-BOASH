import Button from "./UI/Button"

const Header = () => {
    return (
        <header className="flex text-primaryGreen items-center justify-between pr-[140px]">
            <h1 className="text-darkGreen text-3xl font-bold ">SMA <span className="text-lightGreen">BOASH</span></h1>
            <ul className="inline-flex gap-11 text-[23px] pl-[173px] pr-[141px]">
                <li>Home</li>
                <li>About Us</li>
                <li>Gallery</li>
                <li>Activities</li>
            </ul>
            <Button w={'195px'} h={'62px'}>Explore</Button>
        </header>
    )
}

export default Header