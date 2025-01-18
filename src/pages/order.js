import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProductImage from '../assets/product.webp'
import MyAccountLayout from "../_comp/myaccount"
import { Link } from "react-router-dom"

const OrderPage = () => {
    const orderArray = [
        {
            name: "Realme 3 Buds 3",
            color: "Black",
            deliveryDate: "22 Jan",
            price: 1058,
        },
        {
            name: "Redmi Note 12 Cover",
            color: "Blue",
            deliveryDate: "25 Jan",
            price: 299,
        },
        {
            name: "OnePlus Nord CE Case",
            color: "Transparent",
            deliveryDate: "23 Jan",
            price: 499,
        },
        {
            name: "Samsung Galaxy M14 Screen Protector",
            color: "Clear",
            deliveryDate: "21 Jan",
            price: 199,
        },
        {
            name: "Vivo Y16 Leather Cover",
            color: "Brown",
            deliveryDate: "24 Jan",
            price: 699,
        },
        {
            name: "Oppo Enco Buds Case",
            color: "White",
            deliveryDate: "20 Jan",
            price: 399,
        },
        {
            name: "Sony WH-1000XM4 Case",
            color: "Black",
            deliveryDate: "22 Jan",
            price: 999,
        },
        {
            name: "JBL Flip 6 Protective Sleeve",
            color: "Red",
            deliveryDate: "26 Jan",
            price: 799,
        },
        {
            name: "Apple AirPods Pro Silicone Case",
            color: "Green",
            deliveryDate: "28 Jan",
            price: 599,
        },
        {
            name: "Boat Rockerz 255 Cover",
            color: "Yellow",
            deliveryDate: "19 Jan",
            price: 299,
        },
    ];

    return (
        <MyAccountLayout>
            <div className="bg-white md:basis-3/4 basis-full">
                <div className="flex px-4 py-2 mt-2 bg-white shadow">
                    <input type="text" className="border flex-grow border-gray-400 border-r-0 px-4 outline-none" placeholder="Search Order" name="search" />
                    <button className="px-5 py-2 bg-blue-600 text-white text-center"><FontAwesomeIcon icon={faSearch} /><span className="hidden md:inline ml-2">Search</span></button>
                </div>
                {orderArray && orderArray.map((item)=> <SingleOrder item={item}/>)}
            </div>
        </MyAccountLayout>
    )
}


const SingleOrder = ({ item }) => {
    const { name, color, deliveryDate, price } = item
    return (
        <Link to={'/kjd'}>
        <div className="flex justify-between shadow px-4 py-2 mt-2 bg-white">
            <div className="flex p-4">
                <img src={ProductImage} className="max-w-20" alt="Phone Cover" />
                <div className="px-3">
                    <h3 className="">{name}</h3>
                    <p className="text-gray-500 text-sm">Color: {color}</p>
                    <p className="text-gray-800 text-xs  md:hidden">{deliveryDate}</p>
                </div>
            </div>
            <div className="px-3 p-4">
                <p className="text-gray-800 text-sm">₹  {price}</p>
            </div>
            <div className="px-3 p-4 hidden md:inline">
                <p className="text-gray-800 text-sm">{deliveryDate}</p>
            </div>
        </div>
        </Link>
    )
}

export default OrderPage