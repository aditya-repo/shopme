import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductImage from '../assets/product.webp'
import MyAccountLayout from "../_comp/myaccount";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../config/url";

const WishlistPage = () => {

    const [products, setProducts] = useState([])
    const [errors, setErrors] = useState(null)

    const [searchParams] = useSearchParams();
    const sort = searchParams.get("sort");

    useEffect(() => {
        const fetch = async () => {
            
            try {
                let response
                if (!sort) {
                    response = await axios.get(API.PRODUCTIDSEARCH())
                } else {
                    response = await axios.get(API.PRODUCTIDSEARCH(sort))
                }
               
                setProducts(response.data)
            } catch (error) {
                setErrors(errors)
            }
        }
        fetch()
    }, [sort, errors])

    return (
        <MyAccountLayout>
            <div className="bg-white md:basis-3/4 basis-full">
                <div className="flex px-4 py-2  items-center bg-white shadow">
                    <div className="px-5 py-2 text-lg text-gray-800 text-center"><span className="ml-2"> My Wishlist ( 5 )</span></div>
                </div>
                {products.map((item) => (<WishlistSingleItem item={item} />))}
            </div>
        </MyAccountLayout>
    )
}

const WishlistSingleItem = ({ item, index }) => {
    const { name, originalPrice, discount, deliveryDate, price } = item
    console.log(item);

    return (
        <Link to={`/product/${item.id}`}>
            <div key={index} className="flex justify-between shadow px-4 py-2 mt-2 bg-white">
                <div className="flex p-4">
                    <img src={item.image} className="max-w-20" alt="Phone Cover" />
                    <div className="px-3">
                        <h3 className="">{item.title}</h3>
                        <p className='text-gray-800 flex items-center'><span className='font-semibold text-xl pr-3'>₹ {price}</span> <span className='px-1 line-through text-gray-500 pr-3'> ₹ {originalPrice} </span><span className='text-green-600 text-sm'>{discount} off</span></p>
                        <p className="text-gray-800 text-xs  md:hidden">22 Jan</p>
                    </div>
                </div>
                <div className="px-3 p-4">
                    <p className="text-gray-500 text-lg"><FontAwesomeIcon icon={faTrash} /></p>
                </div>
            </div>
        </Link>
    )
}

export default WishlistPage;