import Slider from "../_comp/slider"
import Side1 from "../assets/side-1.jpg"
import Banner2 from "../assets/banner-2.jpg"
import Phone from "../assets/phone.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import axios from "axios"
import { API } from "../config/url"

const HomePage = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(API.CATEGORY())
            setCategory(response.data)
        }
        fetch()
    }, [])

    console.log(category);


    return (
        <div className="mx-auto container mt-3">
            <div className="flex sm:hidden max-w-[640px] overflow-x-auto mb-3">
                <div className="flex gap-3 mb-2 px-4">
                    {category.map((item, index) => {
                        return (
                            <div>
                            <div key={index} className="h-20 w-20 bg-red-200 rounded-full flex items-center justify-center text-xs">
                                
                            </div>
                            <p className="text-xs text-center capitalize mt-2">{item}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Slider />
            <div className="md:flex flex-col gap-4 py-4">
                <div className="bg-pink-200 basis-1/6"><img src={Side1} alt="Banner" /></div>
                <div className="bg-pink-200 flex-grow flex items-centre"><img src={Banner2} alt="Banner" className="w-[100%] max-h-[394px]" /></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10 px-2">
                <div className="bg-white h-200 border border-gray-200">
                    <div className="heading py-2 px-5 flex justify-between items-center w-[100%] border-b border-gray-200">
                        <div className="">
                            <div className="text-xl font-bold text-gray-700">Suggested for You</div>
                            <div className="text-gray-500">Similar to item you viewed</div>
                        </div>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </div>
                    <div className="content flex items-centre">
                        <div className="flex-grow border-r border-gray-200 flex items-centre">
                            <div className="py-8 my-auto">
                                <div>
                                    <img src={Phone} alt="Phone" className=" px-10" />
                                    <div className="px-5">
                                        <div className="text-center font-bold text-sm">Edge 50 (Junglie Edition)</div>
                                        <div className="text-center text-gray-600 text-xs">Rs. 999</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-4/6  flex items-centre justify-centre flex-col">
                            <div className="py-4 border-b border-gray-200">
                                <img src={Phone} alt="Phone" className="px-10" />
                                <div className="px-5">
                                    <div className="text-center font-bold text-sm">Edge 50 (Junglie Edition)</div>
                                    <div className="text-center text-gray-600 text-xs">Rs. 999</div>
                                </div>
                            </div>
                            <div className="py-4">
                                <img src={Phone} alt="Phone" className="px-10" />
                                <div className="px-5">
                                    <div className="text-center font-bold text-sm">Edge 50 (Junglie Edition)</div>
                                    <div className="text-center text-gray-600 text-xs">Rs. 999</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-200 border border-gray-200">
                    <div className="heading py-2 px-5 flex justify-between items-center w-[100%] border-b border-gray-200">
                        <div className="">
                            <div className="text-xl font-bold text-gray-700">Handpicked for You</div>
                            <div className="text-gray-500">Similar to item you viewed</div>
                        </div>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </div>
                    <div className="content flex items-centre">
                        <div className="flex-grow border-r border-gray-200 flex items-centre">
                            <div className="py-8 my-auto">
                                <div>
                                    <img src={Phone} alt="Phone" className=" px-10" />
                                    <div className="px-5">
                                        <div className="text-center font-bold text-sm">Edge 50 (Junglie Edition)</div>
                                        <div className="text-center text-gray-600 text-xs">Rs. 999</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-4/6  flex items-centre justify-centre flex-col">
                            <div className="py-4 border-b border-gray-200">
                                <img src={Phone} alt="Phone" className="px-10" />
                                <div className="px-5">
                                    <div className="text-center font-bold text-sm">Edge 50 (Junglie Edition)</div>
                                    <div className="text-center text-gray-600 text-xs">Rs. 999</div>
                                </div>
                            </div>
                            <div className="py-4">
                                <img src={Phone} alt="Phone" className="px-10" />
                                <div className="px-5">
                                    <div className="text-center font-bold text-sm">Edge 50 (Junglie Edition)</div>
                                    <div className="text-center text-gray-600 text-xs">Rs. 999</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-200 border border-gray-200">
                    <div className="heading py-2 px-5 flex justify-between items-center w-[100%] border-b border-gray-200">
                        <div className="">
                            <div className="text-xl font-bold text-gray-700">Discounts for you</div>
                            <div className="text-gray-500">Similar to item you viewed</div>
                        </div>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </div>
                    <div className="content flex items-centre">
                        <div className="flex-grow border-r border-gray-200 flex items-centre">
                            <div className="py-8 my-auto">
                                <div>
                                    <img src={Phone} alt="Phone" className=" px-10" />
                                    <div className="px-5">
                                        <div className="text-center font-bold text-sm">Edge 50 (Junglie Edition)</div>
                                        <div className="text-center text-gray-600 text-xs">Rs. 999</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-4/6  flex items-centre justify-centre flex-col">
                            <div className="py-4 border-b border-gray-200">
                                <img src={Phone} alt="Phone" className="px-10" />
                                <div className="px-5">
                                    <div className="text-center font-bold text-sm">Edge 50 (Junglie Edition)</div>
                                    <div className="text-center text-gray-600 text-xs">Rs. 999</div>
                                </div>
                            </div>
                            <div className="py-4">
                                <img src={Phone} alt="Phone" className="px-10" />
                                <div className="px-5">
                                    <div className="text-center font-bold text-sm">Edge 50 (Junglie Edition)</div>
                                    <div className="text-center text-gray-600 text-xs">Rs. 999</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-200 border border-gray-200">
                    <div className="heading py-2 px-5 flex justify-between items-center w-[100%] border-b border-gray-200">
                        <div className="">
                            <div className="text-xl font-bold text-gray-700">Handpicked for You</div>
                            <div className="text-gray-500">Similar to item you viewed</div>
                        </div>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </div>
                    <div className="content flex items-centre">
                        <div className="flex-grow border-r border-gray-200 flex items-centre">
                            <div className="py-8 my-auto">
                                <div>
                                    <img src={Phone} alt="Phone" className=" px-10" />
                                    <div className="px-5">
                                        <div className="text-center font-bold text-sm">Edge 50 (Junglie Edition)</div>
                                        <div className="text-center text-gray-600 text-xs">Rs. 999</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-4/6  flex items-centre justify-centre flex-col">
                            <div className="py-4 border-b border-gray-200">
                                <img src={Phone} alt="Phone" className="px-10" />
                                <div className="px-5">
                                    <div className="text-center font-bold text-sm">Edge 50 (Junglie Edition)</div>
                                    <div className="text-center text-gray-600 text-xs">Rs. 999</div>
                                </div>
                            </div>
                            <div className="py-4">
                                <img src={Phone} alt="Phone" className="px-10" />
                                <div className="px-5">
                                    <div className="text-center font-bold text-sm">Edge 50 (Junglie Edition)</div>
                                    <div className="text-center text-gray-600 text-xs">Rs. 999</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage