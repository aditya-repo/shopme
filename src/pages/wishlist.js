import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductImage from '../assets/product.webp'
import MyAccountLayout from "../_comp/myaccount";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const WishlistPage = () => {
    const wishlistArray = [
        {
            name: "Realme 3 Buds 3",
            price: 1999,
            originalPrice: 5999,
            discount: "66%",
            deliveryDate: "22 Jan",
        },
        {
            name: "Redmi Note 12",
            price: 12999,
            originalPrice: 16999,
            discount: "24%",
            deliveryDate: "25 Jan",
        },
        {
            name: "OnePlus Nord CE",
            price: 24999,
            originalPrice: 29999,
            discount: "17%",
            deliveryDate: "23 Jan",
        },
        {
            name: "Samsung Galaxy M14",
            price: 11999,
            originalPrice: 14999,
            discount: "20%",
            deliveryDate: "21 Jan",
        },
        {
            name: "Vivo Y16",
            price: 8999,
            originalPrice: 10999,
            discount: "18%",
            deliveryDate: "24 Jan",
        },
        {
            name: "Oppo Enco Buds",
            price: 1499,
            originalPrice: 3499,
            discount: "57%",
            deliveryDate: "20 Jan",
        },
        {
            name: "Sony WH-1000XM4",
            price: 27999,
            originalPrice: 34999,
            discount: "20%",
            deliveryDate: "22 Jan",
        },
        {
            name: "JBL Flip 6",
            price: 11999,
            originalPrice: 14999,
            discount: "20%",
            deliveryDate: "26 Jan",
        },
        {
            name: "Apple AirPods Pro",
            price: 24999,
            originalPrice: 29999,
            discount: "17%",
            deliveryDate: "28 Jan",
        },
        {
            name: "Boat Rockerz 255",
            price: 999,
            originalPrice: 1999,
            discount: "50%",
            deliveryDate: "19 Jan",
        },
    ];

    return (
        <MyAccountLayout>
            <div className="bg-white md:basis-3/4 basis-full">
                <div className="flex px-4 py-2  items-center bg-white shadow">
                    <div className="px-5 py-2 text-lg text-gray-800 text-center"><span className="ml-2"> My Wishlist ( 5 )</span></div>
                </div>
                {wishlistArray.map((item) => (<WishlistSingleItem item={item} />))}
            </div>
        </MyAccountLayout>
    )
}

const WishlistSingleItem = ({ item, index }) => {
    const { name, originalPrice, discount, deliveryDate, price } = item
    console.log(item);

    return (
        <Link to={'/kjd/kjdf'}>
            <div key={index} className="flex justify-between shadow px-4 py-2 mt-2 bg-white">
                <div className="flex p-4">
                    <img src={ProductImage} className="max-w-20" alt="Phone Cover" />
                    <div className="px-3">
                        <h3 className="">{name}</h3>
                        <p className='text-gray-800 flex items-center'><span className='font-semibold text-xl pr-3'>₹ {price}</span> <span className='px-1 line-through text-gray-500 pr-3'> ₹ {originalPrice} </span><span className='text-green-600 text-sm'>{discount} off</span></p>
                        <p className="text-gray-800 text-xs  md:hidden">{deliveryDate}</p>
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