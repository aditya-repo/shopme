import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API } from '../config/url';
import { Link, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const ProductList = () => {

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
        <div className='container mx-auto px-4 pb-8 pt-4 flex gap-4'>
            <div className='hidden md:inline md:basis-1/5'>
                <div className='flex-1 bg-white pb-1'>
                    <div className='py-3 px-5 text-lg font-bold border-b border-gray-200'>Filters</div>
                    <div className='text-gray-700 px-5 py-3 uppercase text-sm font-bold'>Category</div>
                    <div className=' border-b border-gray-200'>
                        <div className='text-gray-500 px-5 pb-3'><FontAwesomeIcon icon={faCaretLeft} className='mr-2' />Audio & Video</div>
                        <div className='text-gray-500 px-5 pb-3'><FontAwesomeIcon icon={faCaretLeft} className='mr-2' />Headset</div>
                        <div className='text-gray-500 px-5 pb-3'><FontAwesomeIcon icon={faCaretLeft} className='mr-2' />Earphone</div>
                        <div className='text-gray-500 px-5 pb-3'><FontAwesomeIcon icon={faCaretLeft} className='mr-2' />Wireless Earphone</div>
                    </div>
                    <div className='text-gray-700 px-5 py-3 uppercase text-sm font-bold'>Price</div>
                    <div className=' border-b border-gray-200'>
                        <div className='text-gray-500 px-5 pb-3'><FontAwesomeIcon icon={faCaretLeft} className='mr-2' />Audio & Video</div>
                    </div>
                    <div className='px-5 my-4'>
                        <label htmlFor="default-range" class="block  text-sm font-medium text-gray-900">Price range</label>
                        <input id="default-range" type="range" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className='basis-full md:basis-4/5'>

                <div className='text-xs text-gray-400'><span className='hover:underline'>Home</span> / <span className='capitalize'>{products[0]?.category}</span></div>
                <h1 className='text-lg uppercase mb-1'>{products[0]?.category}</h1>
                <div className='flex gap-4'>
                    <div className='mb-3 font-bold'>Sort By</div>
                    <Link to={'/product?sort=asc'}><div className={`mb-3 ${sort === 'asc' && 'border-b-2'} border-blue-600`}>Low to High</div></Link>
                    <Link to={'/product?sort=desc'}><div className={`mb-3 ${sort === 'desc' && 'border-b-2'} border-blue-600`}>High to Low</div></Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {products.map((card, index) => (
                        <div key={index} className="bg-white rounded-md shadow p-3 flex flex-col justify-between hover:shadow-xl transition-shadow">
                            <div className='flex items-center'><img src={card.image} alt="Product" className="p-3 w-64 aspect-w-12 aspect-h-9 " /></div>

                            <div className='p-3 pt-0'>
                                <Link to={`/product/${card.id}`}>
                                    <h5 className="font-semibold md:text-md text-sm">{card.title}</h5>
                                    <p><span className='px-2 py-1 rounded bg-green-600 text-xs text-white'>{card.rating.rate}</span> <span className='text-gray-400 font-bold text-sm'>( {card.rating.count} )</span></p>
                                    <p className='text-gray-800'><span className='font-semibold text-lg'>₹ {card.price}</span> <span className='px-1 line-through text-gray-500'> ₹ 5,999 </span><span className='text-green-600 text-sm'>66 % off</span></p>
                                    <p className='text-green-600 text-sm mb-2'>Bank Offer</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList