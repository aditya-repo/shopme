import { faBox, faCaretRight, faContactBook, faPowerOff, faUserCircle, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyAccountLayout = ({children}) => {
    return (
        <div className="container mx-auto md:px-4 py-2">
            <div className="flex gap-4">
                <div className="hidden md:inline md:basis-1/4">
                    <div className="bg-white flex items-center shadow p-4">
                        <div><FontAwesomeIcon icon={faUserCircle} className="text-5xl px-3" /></div>
                        <div className="px-2">
                            <div className="text-sm">Hello</div>
                            <div className="text-xl">Aditya Raj</div>
                        </div>
                    </div>
                    <div className="bg-white shadow">

                        <div className=" flex items-center justify-between  mt-3 border-b border-gray-200">
                            <div className="p-4"><FontAwesomeIcon icon={faBox} className="text-2xl px-3 text-blue-600" /><span className="text-xl text-gray-600"> MY ORDER</span>
                            </div>
                            <FontAwesomeIcon icon={faCaretRight} className="text-lg px-3 text-gray-500" />
                        </div>
                        <div>
                            <div className=" flex items-center py-4">
                                <div className="px-4"><FontAwesomeIcon icon={faBox} className="text-xl px-3 text-blue-600" /><span className="text-lg text-gray-600"> ACCOUNT SETTINGS</span>
                                </div>
                            </div>
                            <div className="border-b border-gray-200">
                                <div className="py-3 px-4 pl-16 hover:bg-blue-50 hover:text-blue-600 text-sm">Profile Information</div>
                                <div className="py-3 px-4 pl-16 hover:bg-blue-50 hover:text-blue-600 text-sm">Manage Addresses</div>
                                <div className="py-3 px-4 mb-2 pl-16 hover:bg-blue-50 hover:text-blue-600 text-sm">PAN Card Information</div>
                            </div>
                        </div>
                        <div>
                            <div className=" flex items-center py-4">
                                <div className="px-4"><FontAwesomeIcon icon={faWallet} className="text-xl px-3 text-blue-600" /><span className="text-lg text-gray-600"> PAYMENTS</span>
                                </div>
                            </div>
                            <div className="border-b border-gray-200">
                                <div className="py-3 px-4 pl-16 hover:bg-blue-50 hover:text-blue-600 text-sm">Gift Cards</div>
                                <div className="py-3 px-4 pl-16 hover:bg-blue-50 hover:text-blue-600 text-sm">Saved UPI</div>
                                <div className="py-3 px-4 mb-2 pl-16 hover:bg-blue-50 hover:text-blue-600 text-sm">Saved Cards</div>
                            </div>
                        </div>
                        <div>
                            <div className=" flex items-center py-4">
                                <div className="px-4"><FontAwesomeIcon icon={faContactBook} className="text-xl px-3 text-blue-600" /><span className="text-lg text-gray-600"> My Stuff</span>
                                </div>
                            </div>
                            <div className="border-b border-gray-200">
                                <div className="py-3 px-4 pl-16 hover:bg-blue-50 hover:text-blue-600 text-sm">My Coupons</div>
                                <div className="py-3 px-4 pl-16 hover:bg-blue-50 hover:text-blue-600 text-sm">My Reviews & Ratings</div>
                                <div className="py-3 px-4 pl-16 hover:bg-blue-50 hover:text-blue-600 text-sm">All Notifications</div>
                                <div className="py-3 px-4 mb-2 pl-16 hover:bg-blue-50 hover:text-blue-600 text-sm">My Wishlist</div>
                            </div>
                        </div>

                        <div className=" flex items-center py-4">
                            <div className="px-4"><FontAwesomeIcon icon={faPowerOff} className="text-xl px-3 text-blue-600" /><span className="text-lg text-gray-600"> Logout</span>
                            </div>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>

    )
}

export default MyAccountLayout;