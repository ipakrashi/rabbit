import { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa6'
import FilterSidebar from '../components/products/FilterSidebar'
import SortOptions from '../components/products/SortOptions'
import ProductGrid from '../components/products/ProductGrid'

const CollectionPage = () => {
    const [products, setProducts] = useState([])
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const sidebarRef = useRef(null)

    const toggleSidebarOpen = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleClickOutside = (e) => {
        // Close Sidebar if Clicked Outside
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false)
        }
    }

    useEffect(() => {
        // Add Event Listeners for Clicks
        document.addEventListener('mousedown', handleClickOutside)
        // Clean event listener
        document.removeEventListener('mousedown', handleClickOutside)
    }, [])

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
            <button
                onClick={toggleSidebarOpen}
                className='lg:hidden border p-2 flex justify-end items-center cursor-pointer'
            >
                <FaFilter className='mr-2' /> Filters
            </button>
            {/* Filter Sidebar */}
            <div
                ref={sidebarRef}
                className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300  lg:translate-x-0`}
            >
                <FilterSidebar />
            </div>
            <div className='flex-grow p-4'>
                <h2 className='text-2xl uppercase mb-4'>All Collection</h2>
                {/* Sort Options */}
                <SortOptions />
                {/* Product Grid */}
                <ProductGrid similarProducts={products} />
            </div>
        </div>
    )
}
export default CollectionPage
