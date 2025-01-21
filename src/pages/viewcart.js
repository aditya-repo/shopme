import { Link } from "react-router-dom"
import { useCart, useReducerContext } from '../config/context'
import CART from '../config/constant'

const ViewCartPage = () => {

    const {items, total} = useCart()
  

    return (
        <div className="container mx-auto pb-20 h-screen">
            {items.length < 1 ? (
                <div className="w-full text-center mt-20"><div className=" text-2xl">Empty Cart</div><div>Add some items</div><Link to={'/products'} className="underline text-blue-600" ><div>Click here</div></Link></div>
            ) : (
            <div className="md:flex flex-cols gap-3">
                <div className="basis-4/6">
                    <div className="bg-white mt-3 p-6 pb-4 border-b border-gray-200">
                        <div className="flex">
                            <div className="mb-3">
                                <div className="text-gray-800 text-xl">View Cart</div>
                            </div>
                        </div>
                        <div className="text-gray-900 text-sm mt-3 ">Deliver to : <span className="font-bold">Patna - 800002</span></div>
                    </div>
                    {items.map((item, index)=> <ItemsLists key={index} item={item} />)}
                </div>
                <div className="basis-2/6 px-2">
                    <div className="bg-white mb-2 mt-3 shadow">
                        <div className="flex items-center justify-between border border-gray-200">
                            <div className="px-4 py-3"><span className="text-lg text-gray-600"> Price Details</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center px-6 mt-1">
                            <p className="py-2">Price ( {items.length} Items )</p>
                            <p className="py-2">₹1,099</p>
                        </div>
                        <div className="flex justify-between items-center px-6 mt-1">
                            <p className="py-2">Selling price</p>
                            <p className="line-through py-2 text-green-600">₹833</p>
                        </div>
                        <div className="flex justify-between items-center px-6 mt-1">
                            <p className="py-2">Coupon Discount</p>
                            <p className="line-through py-2 text-green-600">₹200</p>
                        </div>
                        <div className="flex justify-between items-center px-6 mt-1">
                            <p className="py-2">Delivery Fee</p>
                            <p className="py-2"><span className='line-through  text-green-600'>₹83</span> ₹0</p>
                        </div>
                        <div className="flex justify-between items-center px-6 mt-1 border-y border-gray-200 my-2">
                            <p className="py-2 font-bold">Total Amount</p>
                            <p className="py-2 font-bold">₹ {total}</p>
                        </div>
                        <p className="pb-3 px-6 text-green-600">You will save ₹34,082 on this order</p>
                    </div>
                    <div className='py-3 text-center w-[100%] bg-orange-500 text-white font-bold'>Submit</div>
                </div>
            </div>)}
        </div>
    )
}


const ItemsLists = ({item})=>{
    const dispatch = useReducerContext()
    return(
        <div className="bg-white mt-3 mb-2 p-6 pb-2 ">
        <div className="flex justify-between border-b mb-5 border-gray-200">
            <div className="flex gap-8 pb-5  basis-4/6">
                <div className="flex justify-center items-centre flex-col">
                    <img src={item.image} alt="Neem Cake" className="w-24" />
                    <div className="mt-3 flex justify-around gap-2">
                        <div className="py-1 text-xs px-2.5 border border-gray-300 rounded-full" onClick={()=> dispatch({type: CART.REMOVE_SINGLE_ITEM, payload: {id: item.id, price: item.price}})}>-</div>
                        <div className="py-1 text-xs px-3 border border-gray-300 rounded">{item.count}</div>
                        <div className="py-1 text-xs px-2 border border-gray-300 rounded-full" onClick={()=> dispatch({type: CART.ADD_ITEM, payload: item})}>+</div>
                    </div>
                </div>
                <div className="flex-grow">
                    <Link to={'/product/1'}>
                        <div className="text-gray-800">{item.title}</div>
                        <div className="text-xs text-gray-500 mt-2">{item.description.slice(0,60)} ...</div>
                        <div className="text-xs text-gray-500 mt-2"> Category: {item.category}</div>
                    </Link>
                        <div className="flex gap-6 mt-3">
                            <p className="text-xl my-1">₹ {item.price}</p>
                            <div className="border border-gray-200 px-4 py-2 font-semibold uppercase hover:text-blue-700 hover:border-blue-200" onClick={()=> dispatch({type: CART.REMOVE_ITEM, payload: {id: item.id, price: item.price}})}>Remove</div>
                        </div>
                </div>
            </div>
            <div className="basis-2/6">
               Delivery by Wed Jan 22 |  <span className="line-through pl-2">₹ 60  </span><span className=' text-green-600'>Free</span> 
            </div>
        </div>
    </div>
    )
}


export default ViewCartPage