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
                            url: 'https://images.unsplash.com/photo-1760552069745-86dfb3013f08?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                            url: 'https://images.unsplash.com/photo-1605108083603-85696109df99?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                            url: 'https://images.unsplash.com/photo-1685538759029-64900f1306d5?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                            url: 'https://images.unsplash.com/photo-1659658380078-f9574d2cf7c0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                            url: 'https://plus.unsplash.com/premium_photo-1681493917930-829e1b41add0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                            url: 'https://images.unsplash.com/photo-1538329972958-465d6d2144ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                            url: 'https://images.unsplash.com/photo-1631902143354-17e7031c7422?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                            url: 'https://images.unsplash.com/photo-1650559117747-6dd115383cb7?q=80&w=701&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                            url: 'https://images.unsplash.com/photo-1673610179315-1742de1d5519?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                            url: 'https://images.unsplash.com/photo-1713480957397-1327f65acacb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                            url: 'https://plus.unsplash.com/premium_photo-1661436200971-0e3e0f2fc954?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                            url: 'https://images.unsplash.com/photo-1630211548581-dca6387ed74b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
