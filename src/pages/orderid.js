import { faBox, faCaretRight, faCircle, faComments, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProductImage from '../assets/product.webp'
import { Link } from "react-router-dom"

const OrderIdPage = () => {
    return (
        <div className="container mx-auto pb-20">
            <div className="md:flex flex-cols gap-3">
                <div className="basis-3/5">
                    <div className="bg-white mt-3 p-6 pb-4">
                        <div className="flex border-b border-gray-200">
                            <div className="mb-3">
                                <div className="text-gray-800">Order can be tracked by 8936860616.</div>
                                <div className="text-gray-800">Tracking link is shared via SMS.</div>
                            </div>
                        </div>
                        <div className="text-gray-900 text-sm mt-3 font-bold">Manage who can access</div>
                    </div>
                    <div className="bg-white mt-3 mb-2 p-6 pb-2">
                        <Link to={'/product/1'}>
                        <div className="flex justify-between pb-8 border-b border-gray-200">
                            <div className="">
                                <div className="text-gray-800">UGAOO Neem Cake Powder for Plants- Organic Fertilizer & Pest Repellent Fertilizer </div>
                                <div className="text-xs text-gray-500 mt-3">Seller: Ugaao</div>
                                <p className="text-xl my-1">₹488</p>
                            </div>
                            <img src={ProductImage} alt="Neem Cake" className="w-20" />
                        </div>
                        </Link>
                        <div className="bg-white border-b border-gray-200 py-6">
                            <p className="mb-4"><FontAwesomeIcon icon={faCircle} className="text-green-600 text-xs mr-3" />Order Confirmed</p>
                            <p className="mb-4"><FontAwesomeIcon icon={faCircle} className="text-green-600 text-xs mr-3" />Order Delivered</p>
                        </div>
                        <div className="bg-white border-b border-gray-200">
                            <div className="flex justify-around py-3 mx-20">
                                <div><FontAwesomeIcon icon={faStar} className="text-3xl text-yellow-400" /></div>
                                <div><FontAwesomeIcon icon={faStar} className="text-3xl text-yellow-400" /></div>
                                <div><FontAwesomeIcon icon={faStar} className="text-3xl text-yellow-400" /></div>
                                <div><FontAwesomeIcon icon={faStar} className="text-3xl text-gray-400" /></div>
                                <div><FontAwesomeIcon icon={faStar} className="text-3xl text-gray-400" /></div>
                            </div>
                        </div>
                        <div className="bg-white my-3">
                            <div className="flex justify-center mx-20 mt-2">
                                <div><FontAwesomeIcon icon={faComments} className="text-xl pr-3 text-gray-900" />Chat With Us</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-2/5">
                    <div className="bg-white mb-2 mt-3">
                        <div className="flex items-center justify-between">
                            <div className="px-4 py-3"><FontAwesomeIcon icon={faBox} className="text-xl px-3 text-blue-600" /><span className="text-lg text-gray-600"> Invoice Download</span>
                            </div>
                            <FontAwesomeIcon icon={faCaretRight} className="text-lg px-3 text-gray-500" />
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-200">
                            <div className="px-6 pt-1 pb-2"><span className="text-xs text-gray-400 font-bold"> Shipping details</span></div>
                        </div>
                        <div className="px-6">
                            <p className="text-sm pt-2">Billi saw ji tola</p>
                            <p className="text-sm pt-2">Billi, Billi</p>
                            <p className="text-sm pt-2">JAMUI</p>
                            <p className="text-sm pt-2 pb-3"><span className="font-semibold">Phone number</span>: 7903222587</p>
                        </div>
                        <div className="flex items-center justify-between border-y border-gray-200">
                            <div className="px-6 pt-2 pb-2"><span className="text-xs text-gray-400 font-bold"> Price Details</span></div>
                        </div>
                        <div className="flex justify-between items-center px-6">
                            <p className="text-sm py-2">List price</p>
                            <p className="text-sm line-through py-2">₹1,099</p>
                        </div>
                        <div className="flex justify-between items-center px-6">
                            <p className="text-sm py-2">Selling price</p>
                            <p className="text-sm line-through py-2">₹833</p>
                        </div>
                        <div className="flex justify-between items-center px-6 border-b border-gray-200">
                            <p className="text-sm py-2 font-bold">Total Amount</p>
                            <p className="text-sm py-2 font-bold">₹833</p>
                        </div>
                        <li className="text-sm pt-3 pb-3 px-6"><span className="font-semibold">UPI</span>: ₹549.0</li>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderIdPage