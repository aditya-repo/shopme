import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom';

const categories = [
    "Electronics",
    "TVs & Appliances",
    "Men",
    "Women",
    "Baby & Kids",
    "Home & Furniture",
    "Sports, Books & More",
    "Flights",
    "Offer Zone",
];

const Navigation = () => {
    return (
        <nav className="bg-white text-gray-800 border border-b-gray-200 hidden md:flex z-10">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                {categories.map((category, index) => (
                    <div key={index} className="flex items-center space-x-1">
                    <Link to={'/products'}>
                        <span>{category}</span>
                        <FontAwesomeIcon icon={faCaretDown} className="text-gray-700 h-2.5 w-2.5" />
                    </Link>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Navigation




// create a div list of all the categories:
