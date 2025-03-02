import Slider from "../_comp/slider"
import Side1 from "../assets/side-1.jpg"
import Banner2 from "../assets/banner-2.jpg"
import { useState } from "react"
// import axios from "axios"
// import { API } from "../config/url"
import { Link } from "react-router-dom"
import HomeItem from "../_comp/homeItem"

const HomePage = () => {

    const [category, setCategory] = useState([
        {
            id: 1,
            name: "All Category",
            imgurl: "https://rukminim2.flixcart.com/fk-p-flap/125/125/image/280e9f3a4d60b598.jpg?q=60",
            href: "/products"
        },
        {
            id: 2,
            name: "Electronics",
            imgurl: "https://rukminim2.flixcart.com/fk-p-flap/125/125/image/4002c69694823695.jpg?q=60",
            href: "/product/13"
        },
        {
            id: 3,
            name: "Men",
            imgurl: "https://rukminim2.flixcart.com/fk-p-flap/125/125/image/82942fda01daf9d4.jpg?q=60",
            href: "/product/3"
        },
        {
            id: 4,
            name: "Women",
            imgurl: "https://rukminim2.flixcart.com/fk-p-flap/125/125/image/43be6ab872688e44.jpg?q=60",
            href: "/product/16"
        },
    ])

    return (
        <div className="mx-auto container mt-3">
            <div className="flex sm:hidden max-w-[640px] overflow-x-auto mb-3">
                <div className="flex gap-3 mb-2 px-4">
                    {category.map((item, index) => {
                        return (
                            <Link to={item.href} key={index}>
                                <div>
                                    <div key={item.id} className="h-20 w-20 bg-blue-600 rounded-full flex items-center justify-center text-xs">
                                        <img src={item.imgurl} alt="Electronics" className="w-full rounded-full p-0.5" />
                                    </div>
                                    <p className="text-xs text-center capitalize mt-2">{item.name}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <Slider />
            <div className="md:flex items-center gap-4 py-4">
                <div className="basis-1/6 flex justify-center">
                    <img src={Side1} alt="Banner" className="max-w-[280] " />
                </div>
                <div className="bg-gray-200 flex-grow flex justify-center items-center">
                    <img src={Banner2} alt="Banner 2" className="w-full max-h-[394px] object-cover" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10 px-2">

                {['Suggested for You', "Discounts for you", 'Handpicked for You', 'Top Selection'].map((item, index) => <HomeItem key={index} title={item} /> )}

            </div>

        </div>
    )
}

export default HomePage