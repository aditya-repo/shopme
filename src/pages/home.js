import Slider from "../_comp/slider"
import Side1 from "../assets/side-1.jpg"
import Banner2 from "../assets/banner-2.jpg"
import { Link } from "react-router-dom"
import HomeItem from "../_comp/homeItem"
import category from "../data/category.json"
import categories from "../data/categories.json"

const HomePage = () => {
    return (
        <div className="mx-auto container mt-3">
            <div className="flex sm:hidden max-w-[640px] overflow-x-auto mb-3">
                <div className="flex gap-3 mb-2 px-4">
                    {category.map((item, index) => {
                        return (
                            <Link to={item.href} key={index}>
                                <div>
                                    <div key={item.id} className="h-20 w-20 bg-blue-600 rounded-full flex items-center justify-center text-xs">
                                        <img src={item.imageUrl} alt="Electronics" className="w-full rounded-full p-0.5" />
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
                    <img src={Side1} alt="Banner" className="max-w-[280]" />
                </div>
                <div className="bg-gray-200 flex-grow flex justify-center items-center">
                    <img src={Banner2} alt="Banner 2" className="w-full max-h-[394px] object-cover" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10 px-2">
                {categories.map((item, index) => <HomeItem key={index} categoryid={item.categoryid} data={item} />)}
            </div>
        </div>
    )
}

export default HomePage