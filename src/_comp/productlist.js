import React from 'react'
import ProductImg from '../assets/product.webp'

const ProductList = () => {

    const cards = [
        { title: "Mivi Fort H30,4000 mAh, 6 Hours ", description: "Black, 2.0 Channe" },
        { title: "Card 2", description: "This is the second card." },
        { title: "Card 3", description: "This is the third card." },
        { title: "Card 4", description: "This is the fourth card." },
        { title: "Mivi Fort H30,4000 mAh, 6 Hours ", description: "Black, 2.0 Channe" },
        { title: "Card 2", description: "This is the second card." },
        { title: "Card 3", description: "This is the third card." },
        { title: "Card 4", description: "This is the fourth card." },
    ];


    return (
        <div className='container mx-auto px-4 py-8'>
            <h1>Product List</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cards.map((card, index) => (
                    <div key={index} className="bg-white rounded-md shadow p-3 flex flex-col justify-between hover:shadow-xl transition-shadow">
                        <img src={ProductImg} alt="Product" className="p-3 w-full h-auto object-cover" />
                        <div className='p-3 pt-0'>

                        <h5 className="font-semibold ">{card.title}</h5>
                            <p className="text-gray-600">{card.description}</p>
                            <p className='text-gray-800'><span className='font-semibold text-lg'>₹ 1,999</span> <span className='px-1 line-through text-gray-500'> ₹ 5,999 </span><span className='text-green-600 text-sm'>66 % off</span></p>
                            <p className='text-green-600 text-sm mb-2'>Bank Offer</p>
                            <div className='flex justify-between items-center gap-2 sm:flex-row flex-col'>
                            
                            <button className="px-8 py-2 bg-yellow-600 text-white text-sm rounded hover:bg-yellow-700">
                                Add to Cart
                            </button>
                            <button className="px-10 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                                Buy Now
                            </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList