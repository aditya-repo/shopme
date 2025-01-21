import Slider1 from "../assets/slider1.webp"

const Slider = () => {
    return (
        <div className="slider relative z-0">
            <div>
                <img src={Slider1} alt="Slider 1" className="w-full min-h-[160px]"/>
            </div>
            <div className="left-button absolute left-0 top-1/2 transform -translate-y-1/2 h-20 md:w-8 w-4 bg-pink-200"></div>
            <div className="right-button absolute right-0 top-1/2 transform -translate-y-1/2 h-20 md:w-8 w-4 bg-pink-200"></div>
        </div>
    )
}

export default Slider