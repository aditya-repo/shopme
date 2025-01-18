import { faCircleExclamation, faStar, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ProductImage from '../assets/product.webp'

const Product = () => {
    return (
        <div className='container mx-auto px-3 py-2 z-0'>
            <div className="grid grid-cols-1 md:grid-cols-[520px_1fr] gap-2">
                <div className='flex flex-col-reverse md:flex-row max-h-[600px] bg-white p-6'>
                    <div className='overflow-x-auto max-w-[392px] md:mt-0 mt-2 flex md:block items-center'>
                        <div className='w-[64px] mr-1 md:block flex gap-1.5'>
                            <div className='p-1 border border-gray-200 border-b-0'>
                                <div className='h-[56px] w-[54px]'><img src={ProductImage} alt='Mivi Speaker' className='w-[100%]' /></div>
                            </div>
                            <div className='p-1 border border-gray-200 border-b-0'>
                                <div className='h-[56px] w-[54px]'><img src={ProductImage} alt='Mivi Speaker' className='w-[100%]' /></div>
                            </div>
                            <div className='p-1 border border-gray-200 border-b-0'>
                                <div className='h-[56px] w-[54px]'><img src={ProductImage} alt='Mivi Speaker' className='w-[100%]' /></div>
                            </div>
                            <div className='p-1 border border-gray-200 border-b-0'>
                                <div className='h-[56px] w-[54px]'><img src={ProductImage} alt='Mivi Speaker' className='w-[100%]' /></div>
                            </div>
                            <div className='p-1 border border-gray-200 border-b-0'>
                                <div className='h-[56px] w-[54px]'><img src={ProductImage} alt='Mivi Speaker' className='w-[100%]' /></div>
                            </div>
                            <div className='p-1 border border-gray-200'>
                                <div className='h-[56px] w-[54px]'><img src={ProductImage} alt='Mivi Speaker' className='w-[100%]' /></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex-grow items-center justify-center bg-white '>
                        <div>
                            <div className="bg-red-200 max-h-[392px] max-w-[392px] mb-2 z-0">
                                <img src={ProductImage} alt="Mivi Speaker" className="w-full" />
                            </div>
                            <div className='flex justify-between items-center flex-auto md:mt-6 gap-1 mt-1 max-w-[392px]'>
                                <div className="md:p-4 px-4 py-2  text-lg text-center basis-1/2 bg-yellow-600 text-white hover:bg-yellow-700">
                                    Add to Cart
                                </div>
                                <div className="md:p-4 px-4 py-2  text-lg text-center basis-1/2 bg-blue-600 text-white hover:bg-blue-700">
                                    Buy Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='overflow-y-auto'>
                    <div className='bg-white p-6'>
                        <h1 className='text-2xl '>Mivi Fort H30,4000 mAh, 6 Hours Playtime, BT v5.1 30 W Bluetooth Soundbar  (Black, 2.0 Channel)</h1>
                        <div className='flex gap-2 items-center'>
                            <div className='flex items-center px-2 py-1 bg-green-800 text-xs text-white gap-1 rounded'><span> 4.2 </span> <FontAwesomeIcon icon={faStar} /></div>
                            <div className='text-gray-600 text-sm'>78,165 Ratings</div>
                        </div>
                        <p className='text-green-600 text-sm font-bold mt-2'>Special Price</p>
                        <p className='text-gray-800 flex items-center'><span className='font-semibold text-3xl pr-3'>₹ 1,999</span> <span className='px-1 line-through text-gray-500 pr-3'> ₹ 5,999 </span><span className='text-green-600 text-sm'>66 % off</span> <span><FontAwesomeIcon icon={faCircleExclamation} className='text-green-700 pl-2' /></span></p>
                        <p className='text-gray-900 font-bold py-2 mb-2'>Available offers</p>
                        <div className='text-sm mb-2 flex gap-2 items-center'><FontAwesomeIcon icon={faTag} className='text-lg text-green-600' /><span className='font-semibold'>Bank Offer </span><span>5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span></div>
                        <div className='text-sm mb-2 flex gap-2 items-center'><FontAwesomeIcon icon={faTag} className='text-lg text-green-600' /><span className='font-semibold'>Bank Offer </span><span>10% off up to ₹1250 on HDFC Bank Credit Card Transactions. Min Txn Value: ₹4,999</span></div>

                        <div className='flex px-2 text-sm mt-8'>
                            <div className='w-[100px] text-gray-400 font-semibold mt-3'>Delivery</div>
                            <div>
                                <div className='flex items-center'><input type='text' className='border-b-2 border-blue-600 outline-none px-3 w-[200px] py-2 text-sm' placeholder='Enter Delivery Pincode' /><div className='text-blue-600 font-semibold'>Check</div></div>
                                <div className='text-gray-800 font-semibold py-1 text-sm'>Delivery by 23 Jan, Thursday</div>
                            </div>
                        </div>

                        <div className='flex px-2 text-sm mt-6'>
                            <div className='w-[100px] text-gray-400 font-semibold mt-1'>Highlights</div>
                            <div className='text-gray-800'>
                                <ul className='list-disc pl-4'>
                                    <li className='py-1'>Power Output: 30 W</li>
                                    <li className='py-1'>Power Source: AC Adapter</li>
                                    <li className='py-1'>Bluetooth Version: 2.4</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex px-2 text-sm mt-6 items-start">
                            <div className="w-[100px] text-gray-400 font-semibold mr-5">Description</div>
                            <div className="text-gray-800 flex-grow">
                                Turn your hostel room into a mini-theatre where you can enjoy your favourite shows in 30 watts of pure sound with the Mivi Fort H30 Soundbar. Crafted to vibe with your late-night hostel room shenanigans, the Fort H30 Soundbar, comes with portable 2.0 channel sound with Bluetooth and bass.
                            </div>
                        </div>
                        <div className='flex px-2 text-sm mt-6'>
                            <div className='w-[100px] text-gray-400 font-semibold mt-1'>Seller</div>
                            <div className='text-gray-800'>
                                <li className='py-1'>7 Days Replacement Policy</li>
                                <ul className='list-disc pl-4'>
                                    <li className='py-1'>GST invoice available</li>
                                    <li className='py-1'>Bluetooth Version: 2.4</li>
                                </ul>
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-2xl font-semibold mt-6 px-2 '>Ratings & Reviews</h2>
                                <div className='text-xl px-4 shadow-sm border py-3'>Rate Product</div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2  my-5'>
                                <div className='flex justify-center items-center'>
                                    <div className='basis-1/3 py-2 px-78 flex flex-col items-center'>
                                        <div className='text-3xl text-center py-2'>4.3 <FontAwesomeIcon icon={faStar} /> </div>
                                        <p className='text-gray-400 text-center'>78,165 Ratings & 9,949 Reviews</p>
                                    </div>
                                    <div className='flex gap-2 justify-center basis-2/3 my-6'>
                                        <div className='flex flex-col items-center gap-1 text-dark text-sm'>
                                            <div className='px-2 flex items-center gap-2'>
                                                <div>5 <FontAwesomeIcon icon={faStar} /></div>
                                                <div className='w-[120px]'>
                                                    <div className='w-[100%] bg-gray-400 h-1 rounded-full'></div>
                                                    <div className='w-[100px] bg-green-600 h-1 mt-[-4px] rounded-full'></div>
                                                </div>
                                                <div className='text-gray-500'>5646</div>
                                            </div>
                                            <div className='px-2 flex items-center gap-2'>
                                                <div>4 <FontAwesomeIcon icon={faStar} /></div>
                                                <div className='w-[120px]'>
                                                    <div className='w-[100%] bg-gray-400 h-1 rounded-full'></div>
                                                    <div className='w-[90%] bg-green-400 h-1 mt-[-4px] rounded-full'></div>
                                                </div>
                                                <div className='text-gray-500'>5465</div>
                                            </div>
                                            <div className='px-2 flex items-center gap-2'>
                                                <div>3 <FontAwesomeIcon icon={faStar} /></div>
                                                <div className='w-[120px]'>
                                                    <div className='w-[100%] bg-gray-400 h-1 rounded-full'></div>
                                                    <div className='w-[85%] bg-green-400 h-1 mt-[-4px] rounded-full'></div>
                                                </div><div className='text-gray-500'>4554</div>
                                            </div>
                                            <div className='px-2 flex items-center gap-2'>
                                                <div>2 <FontAwesomeIcon icon={faStar} /></div>
                                                <div className='w-[120px]'>
                                                    <div className='w-[100%] bg-gray-400 h-1 rounded-full'></div>
                                                    <div className='w-[70%] bg-yellow-400 h-1 mt-[-4px] rounded-full'></div>
                                                </div>
                                                <div className='text-gray-500'>4557</div>
                                            </div>
                                            <div className='px-2 flex items-center gap-2'>
                                                <div>1 <FontAwesomeIcon icon={faStar} /></div>
                                                <div className='w-[120px]'>
                                                    <div className='w-[100%] bg-gray-400 h-1 rounded-full'></div>
                                                    <div className='w-[82%] bg-red-400 h-1 mt-[-4px] rounded-full'></div>
                                                </div>
                                                <div className='text-gray-500'>2546</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center gap-2'>
                                    <div className='flex flex-col items-center'>
                                        <div className="flex justify-center items-center">
                                            <div className="bg-gray-200 sm:h-20 sm:w-20 w-16 h-16  rounded-full flex justify-center items-center" style={{ background: `conic-gradient(#008000 82%, #e5e7eb 0%)` }}>
                                                <div className="bg-white sm:h-16 sm:w-16 h-12 w-12 rounded-full flex justify-center items-center font-bold text-2xl text-gray-700"> 4.2 </div>
                                            </div>
                                        </div>
                                        <div className='mt-2 md:text-md text-sm'>Sound</div>
                                    </div>
                                    <div className='flex flex-col  items-center'>
                                        <div className="flex justify-center items-center">
                                            <div className="bg-gray-200 sm:h-20 sm:w-20 w-16 h-16  rounded-full flex justify-center items-center" style={{ background: `conic-gradient(#008000 82%, #e5e7eb 0%)` }}>
                                                <div className="bg-white sm:h-16 sm:w-16 h-12 w-12 rounded-full flex justify-center items-center font-bold text-2xl text-gray-700"> 4.2 </div>
                                            </div>
                                        </div>
                                        <div className='mt-2 md:text-md text-sm'>Bass</div>
                                    </div>
                                    <div className='flex flex-col  items-center'>
                                        <div className="flex justify-center items-center">
                                            <div className="bg-gray-200 sm:h-20 sm:w-20 w-16 h-16  rounded-full flex justify-center items-center" style={{ background: `conic-gradient(#008000 82%, #e5e7eb 0%)` }}>
                                                <div className="bg-white sm:h-16 sm:w-16 h-12 w-12 rounded-full flex justify-center items-center font-bold text-2xl text-gray-700"> 4.2 </div>
                                            </div>
                                        </div>
                                        <div className='mt-2 md:text-md text-sm'>Design Build</div>
                                    </div>
                                    <div className='flex flex-col  items-center'>
                                        <div className="flex justify-center items-center">
                                            <div className="bg-gray-200 sm:h-20 sm:w-20 w-16 h-16  rounded-full flex justify-center items-center" style={{ background: `conic-gradient(#008000 82%, #e5e7eb 0%)` }}>
                                                <div className="bg-white sm:h-16 sm:w-16 h-12 w-12 rounded-full flex justify-center items-center font-bold text-2xl text-gray-700"> 4.2 </div>
                                            </div>
                                        </div>
                                        <div className='mt-2 md:text-md text-sm'>Battery</div>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 place-items-center'>
                                <div className='w-20 h-20 bg-black mt-3'></div>
                                <div className='w-20 h-20 bg-black mt-3'></div>
                                <div className='w-20 h-20 bg-black mt-3'></div>
                                <div className='w-20 h-20 bg-black mt-3'></div>
                                <div className='w-20 h-20 bg-black mt-3'></div>
                                <div className='w-20 h-20 bg-black mt-3'></div>
                                <div className='w-20 h-20 bg-black mt-3'></div>
                                <div className='w-20 h-20 bg-black mt-3'></div>
                            </div>

                            <div className='reviews'>
                                <div className='user1 border-b border-gray-200 py-6'>
                                    <div className='flex items-center mt-6 gap-2'>
                                        <div className='bg-green-700 text-white rounded px-1.5 py-1 text-xs'><span className='font-semibold'>4 </span><FontAwesomeIcon icon={faStar} /></div>
                                        <div className='font-semibold text-gray-700'>Wonderful</div>
                                    </div>
                                    <div className='mt-2 text-sm'>After nearly 6 months of spending time with this product. I got to tell you some things ... ( PLEASE SEE THE LAST TWO POINTS AND THEN DECIDE TO BUY )</div>
                                    <div className='mt-4 text-sm'>1. The best and only thing I liked the most in this product is its sound quality 💽... This has a nice range ... Nice bass... And loud, clear and soothing sound profile ... 🌟</div>
                                    <div>
                                        <div className='text-gray-400 font-bold mt-2 text-sm'>Shaik Moyyeenuddin</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product