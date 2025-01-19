import { faBell, faBox, faClose, faGift, faHeart, faLanguage, faList, faSliders, faSun, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="flex">
                <button className="text-white pr-6" onClick={()=> setIsOpen(true)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div
                    className="overlay h-screen w-full z-10 absolute top-0 left-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)} // Close the sidebar when clicking outside
                >
                    <div
                        className="sidebar bg-white h-full max-w-[300px] text-gray-800 z-50 transition-transform duration-300 ease-in-out transform translate-x-[-100%]"                         style={{
                            transform: isOpen ? "translateX(0)" : "translateX(-100%)",
                            opacity: isOpen ? "1" : "0",
                        }}
                        // onClick={(e) => e.stopPropagation()} // Prevent click propagation to close the sidebar
                    >
                        <div className="px-4 py-5 flex items-center justify-between border-b border-gray-20 bg-blue-600 text-white">
                        <div className="flex items-center"><FontAwesomeIcon icon={faUserCircle} className="mr-5 text-2xl" />Login & Signup</div>
                        <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={() => setIsOpen(false)} />
                        </div>
                        <div className="px-4 py-2"><FontAwesomeIcon icon={faUser} className="pr-3"/> Supercoin</div>
                        <div className="px-4 py-2"><FontAwesomeIcon icon={faSun} className="pr-3"/> Flipkart Plus</div>
                        <Link to={'/products'}>
                        <div className="px-4 py-2"><FontAwesomeIcon icon={faSliders} className="pr-3"/> All Category</div></Link>
                        <div className="px-4 py-2 border-y border-gray-200"><FontAwesomeIcon icon={faLanguage} className="pr-3"/> Choose Language</div>
                        <div className="px-4 py-2"><FontAwesomeIcon icon={faList} className="pr-3"/> More on Flipkart</div>
                        <Link to={'/order'}><div className="px-4 py-2 border-t border-gray-200"><FontAwesomeIcon icon={faBox} className="pr-3"/> My Orders</div></Link>
                        <div className="px-4 py-2"><FontAwesomeIcon icon={faGift} className="pr-3"/> My Coupon</div>
                        <Link to={'/wishlist'}><div className="px-4 py-2"><FontAwesomeIcon icon={faHeart} className="pr-3"/> My Wishlist</div></Link>
                        <Link to={'/account'}><div className="px-4 py-2"><FontAwesomeIcon icon={faUser} className="pr-3"/> My Account</div></Link>
                        <div className="px-4 py-2 border-b border-gray-200"><FontAwesomeIcon icon={faBell} className="pr-3"/> My Notification</div>
                        <div className="px-4 py-2">Notification Preferences</div>
                        <div className="px-4 pb-2">Help Center</div>
                        <div className="px-4 pb-2">Legal</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sidebar;