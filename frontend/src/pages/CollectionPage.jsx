import { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa6'
import FilterSidebar from '../components/products/FilterSidebar'

const CollectionPage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
                {
                    _id: 1,
                    name: 'Product 1',
                    price: 130,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=10',
                            altText: 'SJ1',
                        },
                    ],
                },
                {
                    _id: 2,
                    name: 'Product 2',
                    price: 130,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=11',
                            altText: 'SJ1',
                        },
                    ],
                },
                {
                    _id: 3,
                    name: 'Product 3',
                    price: 130,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=12',
                            altText: 'SJ1',
                        },
                    ],
                },
                {
                    _id: 4,
                    name: 'Product 4',
                    price: 130,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=13',
                            altText: 'SJ1',
                        },
                    ],
                },
                {
                    _id: 20,
                    name: 'Product 20',
                    price: 130,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=20',
                            altText: 'SJ1',
                        },
                    ],
                },
                {
                    _id: 21,
                    name: 'Product 21',
                    price: 130,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=21',
                            altText: 'SJ1',
                        },
                    ],
                },
                {
                    _id: 22,
                    name: 'Product 22',
                    price: 130,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=22',
                            altText: 'SJ1',
                        },
                    ],
                },
                {
                    _id: 23,
                    name: 'Product 23',
                    price: 130,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=23',
                            altText: 'SJ1',
                        },
                    ],
                },
            ]
            setProducts(fetchedProducts)
        }, 3000)
    }, [])
    return (
        <div className='flex  flex-col lg:flex-row'>
            {/* Mobile Filter Button */}
            <button className='lg:hidden border p-2 flex justify-center items-center'>
                <FaFilter className='mr-2' />
            </button>
            {/* Filter Sidebar */}
            <FilterSidebar />
        </div>
    )
}
export default CollectionPage
