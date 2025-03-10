import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom';
import category from '../data/category';


const Navigation = () => {
    return (
        <nav className="bg-white hidden md:block text-gray-800 border border-b-gray-200 z-10">
            <div className="container mx-auto py-2 flex items-center gap-3 px-5">
                {category.map((item, index) => (
                    <div key={index} className="flex items-center space-x-1">
                    {<Link to={item.href} className='hover:text-blue-700 px-5'>
                        <span>{item.name}</span>
                        <FontAwesomeIcon icon={faCaretDown} className="h-2.5 w-2.5" />
                    </Link>}
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Navigation




// create a div list of all the categories:
