import { faCircleExclamation, faStar, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Product = () => {
    return (
        <div className='container mx-auto px-4 py-8'>
            <div className="grid grid-cols-1 md:grid-cols-[520px_1fr] gap-2">
                <div className='flex bg-white p-6 h-[496px]  sticky top-[72px]'>
                    <div className='w-[64px] mr-1'>
                        <div className='p-1 border border-red-500 border-b-0'>
                            <div className='bg-red-200 h-[56px]'></div>
                        </div>
                        <div className='p-1 border border-red-500 border-b-0'>
                            <div className='bg-red-200 h-[56px]'></div>
                        </div>
                        <div className='p-1 border border-red-500 border-b-0'>
                            <div className='bg-red-200 h-[56px]'></div>
                        </div>
                        <div className='p-1 border border-red-500 border-b-0'>
                            <div className='bg-red-200 h-[56px]'></div>
                        </div>
                        <div className='p-1 border border-red-500 border-b-0'>
                            <div className='bg-red-200 h-[56px]'></div>
                        </div>
                        <div className='p-1 border border-red-500'>
                            <div className='bg-red-200 h-[56px]'></div>
                        </div>
                    </div>

                    <div className='flex-grow bg-white'>
                        <div className='bg-red-200 h-[392px]'></div>
                        <div className='flex justify-between items-center flex-auto gap-1 mt-1'>

                            <div className="p-4 text-lg text-center basis-1/2 bg-yellow-600 text-white hover:bg-yellow-700">
                                Add to Cart
                            </div>
                            <div className="p-4 text-lg text-center basis-1/2 bg-blue-600 text-white hover:bg-blue-700">
                                Buy Now
                            </div>
                        </div>
                    </div>
                </div>
                <div className='  overflow-y-auto'>
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

                        <div className='flex px-2 text-sm'>
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
                        <div className="flex px-2 text-sm mt-6 items-start">
                            <div className="w-[100px] text-gray-400 font-semibold mr-5">Description</div>
                            <div className="text-gray-800 flex-grow">
                                Turn your hostel room into a mini-theatre where you can enjoy your favourite shows in 30 watts of pure sound with the Mivi Fort H30 Soundbar. Crafted to vibe with your late-night hostel room shenanigans, the Fort H30 Soundbar, comes with portable 2.0 channel sound with Bluetooth and bass.
                            </div>
                        </div>

                        <div>
                            <div className='flex justify-between items-center mt-6'>
                                <h2 className='text-2xl font-semibold mt-6 px-2'>Ratings & Reviews</h2>
                                <div className='text-xl px-4 py-3 shadow-sm border'>Rate Product</div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                <div className='flex justify-center items-center'>
                                    <div className='basis-1/3 py-2 px-78 flex flex-col items-center'>
                                        <div className='text-3xl text-center'>4.3 <FontAwesomeIcon icon={faStar} /> </div>
                                        <p className='text-gray-400 text-center'>78,165 Ratings & 9,949 Reviews</p>
                                    </div>
                                    <div className='flex gap-2 justify-center basis-2/3'>
                                        <div className='flex flex-col items-center gap-1 text-dark text-sm'>
                                            <div className='px-2 flex items-center gap-2'>
                                                <div>5</div>
                                                <div className='w-[140px]'>
                                                    <div className='w-[100%] bg-gray-400 h-1 rounded-full'></div>
                                                    <div className='w-[100px] bg-green-600 h-1 mt-[-4px] rounded-full'></div>
                                                </div>
                                                <div className='text-gray-500'>5646</div>
                                            </div>
                                            <div className='px-2 flex items-center gap-2'>
                                                <div>4</div>
                                                <div className='w-[140px]'>
                                                    <div className='w-[100%] bg-gray-400 h-1 rounded-full'></div>
                                                    <div className='w-[90%] bg-green-400 h-1 mt-[-4px] rounded-full'></div>
                                                </div>
                                                <div className='text-gray-500'>5465</div>
                                            </div>
                                            <div className='px-2 flex items-center gap-2'>
                                                <div>3</div>
                                                <div className='w-[140px]'>
                                                    <div className='w-[100%] bg-gray-400 h-1 rounded-full'></div>
                                                    <div className='w-[85%] bg-green-400 h-1 mt-[-4px] rounded-full'></div>
                                                </div><div className='text-gray-500'>4554</div>
                                            </div>
                                            <div className='px-2 flex items-center gap-2'>
                                                <div>2</div>
                                                <div className='w-[140px]'>
                                                    <div className='w-[100%] bg-gray-400 h-1 rounded-full'></div>
                                                    <div className='w-[70%] bg-yellow-400 h-1 mt-[-4px] rounded-full'></div>
                                                </div>
                                                <div  className='text-gray-500'>455</div>
                                            </div>
                                            <div className='px-2 flex items-center gap-2'>
                                                <div>1</div>
                                                <div className='w-[140px]'>
                                                    <div className='w-[100%] bg-gray-400 h-1 rounded-full'></div>
                                                    <div className='w-[82%] bg-red-400 h-1 mt-[-4px] rounded-full'></div>
                                                </div>
                                                <div className='text-gray-500'>2546</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='bg-red-400 h-20 w-20'></div>
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