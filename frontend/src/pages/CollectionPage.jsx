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
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            const fetchedProducts = [
                {
                    _id: 1,
                    name: 'Printed Resort Shirt',
                    price: 29.99,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=10',
                            altText: 'Shirt',
                        },
                    ],
                },
                {
                    _id: 2,
                    name: 'Chino Pants',
                    price: 55,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=11',
                            altText: 'Pants',
                        },
                    ],
                },
                {
                    _id: 3,
                    name: 'Cargo Pants',
                    price: 50,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=12',
                            altText: 'Cargo',
                        },
                    ],
                },
                {
                    _id: 4,
                    name: 'Long-Sleeve Thermal Tee',
                    price: 27.99,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=13',
                            altText: 'Tee',
                        },
                    ],
                },
                {
                    _id: 5,
                    name: 'Printed Resort Shirt',
                    price: 29.99,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=14',
                            altText: 'Shirt',
                        },
                    ],
                },
                {
                    _id: 6,
                    name: 'Chino Pants',
                    price: 55,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=15',
                            altText: 'Pants',
                        },
                    ],
                },
                {
                    _id: 7,
                    name: 'Cargo Pants',
                    price: 50,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=16',
                            altText: 'Cargo',
                        },
                    ],
                },
                {
                    _id: 8,
                    name: 'Long-Sleeve Thermal Tee',
                    price: 27.99,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=17',
                            altText: 'Tee',
                        },
                    ],
                },
                {
                    _id: 9,
                    name: 'Printed Resort Shirt',
                    price: 29.99,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=18',
                            altText: 'Shirt',
                        },
                    ],
                },
                {
                    _id: 10,
                    name: 'Chino Pants',
                    price: 55,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=19',
                            altText: 'Pants',
                        },
                    ],
                },
                {
                    _id: 11,
                    name: 'Cargo Pants',
                    price: 50,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=20',
                            altText: 'Cargo',
                        },
                    ],
                },
                {
                    _id: 12,
                    name: 'Long-Sleeve Thermal Tee',
                    price: 27.99,
                    images: [
                        {
                            url: 'https://picsum.photos/300/300?random=21',
                            altText: 'Tee',
                        },
                    ],
                },
            ]
            setProducts(fetchedProducts)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className='container mx-auto px-4 lg:px-8 py-6 '>
            {/* Mobile Filter Toggle Button */}
            <button
                onClick={toggleSidebarOpen}
                className='lg:hidden border p-2 mb-4 flex items-center justify-center rounded cursor-pointer'
            >
                <FaFilter className='mr-2' /> Filters
            </button>

            <div className='flex flex-col lg:flex-row gap-8 relative'>
                {/* Filter Sidebar */}
                <div
                    ref={sidebarRef}
                    className={`
                        fixed inset-y-0 left-0 z-50 w-64 bg-white p-4 shadow-lg transition-transform duration-300 overflow-y-auto
                        lg:static lg:z-auto lg:w-1/8 lg:p-0 lg:shadow-none lg:translate-x-0
                        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                    `}
                >
                    <FilterSidebar />
                </div>

                {/* Main Product Section */}
                <div className='flex-1'>
                    {/* Header: Title and Sort Options */}
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='text-2xl font-bold uppercase tracking-wide'>
                            All Collection
                        </h2>
                        <SortOptions />
                    </div>

                    {/* Product Grid */}
                    <ProductGrid similarProducts={products} />
                </div>
            </div>
        </div>
    )
}

export default CollectionPage
