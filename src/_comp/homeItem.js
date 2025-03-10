import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


const HomeItem = ({data, categoryid}) => {
   
    return(
        <div className="bg-white h-200 border border-gray-200">
        <div className="heading py-2 px-5 flex justify-between items-center w-[100%] border-b border-gray-200">
            <div className="">
                <div className="text-xl font-bold text-gray-700">{data.title}</div>
                <div className="text-gray-500">Similar to item you viewed</div>
            </div>
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </div>
        <div className="content flex items-centre">
            <div className="flex-grow border-r border-gray-200 flex items-centre">
                <div className="py-8 my-auto">
                    <div>
                        <Link to={`/product/${categoryid}`}>
                        <img src={data.items[0].imageUrl} alt="Phone" className=" px-10" /></Link>
                        <div className="px-5">
                            <div className="text-center font-bold text-sm">{data.items[0].name}</div>
                            <div className="text-center text-gray-600 text-xs">{data.items[0].price}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-4/6  flex items-centre justify-centre flex-col">
                <div className="py-4 border-b border-gray-200">
                    <Link to={`/product/${categoryid+1}`}><img src={data.items[1].imageUrl} alt="Phone" className="px-10" /></Link>
                    <div className="px-5">
                        <div className="text-center font-bold text-sm">BIYLACLESEN 3-in-1 Jacket</div>
                        <div className="text-center text-gray-600 text-xs">Rs. 999</div>
                    </div>
                </div>
                <div className="py-4">
                    <Link to={`/product/${categoryid+2}`}>
                    <img src={data.items[2].imageUrl} alt="Phone" className="px-10" /></Link>
                    <div className="px-5">
                        <div className="text-center font-bold text-sm">BIYLACLESEN 3-in-1 Jacket</div>
                        <div className="text-center text-gray-600 text-xs">Rs. 999</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomeItem