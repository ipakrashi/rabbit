import { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const NewArrivals = () => {
    const scrollRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const newArrivals = [
        {
            _id: 1,
            name: 'Stylish Jacket',
            price: 120,
            images: [
                {
                    url: 'https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    altText: 'Stylish Jacket',
                },
            ],
        },
        {
            _id: 2,
            name: 'Stylish Jacket',
            price: 120,
            images: [
                {
                    url: 'https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    altText: 'Stylish Jacket',
                },
            ],
        },
        {
            _id: 3,
            name: 'Stylish Jacket',
            price: 120,
            images: [
                {
                    url: 'https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    altText: 'Stylish Jacket',
                },
            ],
        },
        {
            _id: 4,
            name: 'Stylish Jacket',
            price: 120,
            images: [
                {
                    url: 'https://plus.unsplash.com/premium_photo-1783874830581-5cacaadcb83f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    altText: 'Stylish Jacket',
                },
            ],
        },
        {
            _id: 5,
            name: 'Stylish Jacket',
            price: 120,
            images: [
                {
                    url: 'https://images.unsplash.com/photo-1772833521764-e52d634d21ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    altText: 'Stylish Jacket',
                },
            ],
        },
        {
            _id: 6,
            name: 'Stylish Jacket',
            price: 120,
            images: [
                {
                    url: 'https://plus.unsplash.com/premium_photo-1758611683182-76b3f7d6da28?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    altText: 'Stylish Jacket',
                },
            ],
        },
        {
            _id: 7,
            name: 'Stylish Jacket',
            price: 120,
            images: [
                {
                    url: 'https://plus.unsplash.com/premium_photo-1764481902408-d61629d92445?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    altText: 'Stylish Jacket',
                },
            ],
        },
        {
            _id: 8,
            name: 'Stylish Jacket',
            price: 120,
            images: [
                {
                    url: 'https://plus.unsplash.com/premium_photo-1779489493105-f7bdc9bc3c7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    altText: 'Stylish Jacket',
                },
            ],
        },
    ]

    const scroll = (direction) => {
        const container = scrollRef.current
        if (!container) return

        // Scrolls by the visible view container width
        const scrollAmount =
            direction === 'left'
                ? -container.clientWidth
                : container.clientWidth
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }

    const updateScrollButtons = () => {
        const container = scrollRef.current

        if (container) {
            const leftScroll = container.scrollLeft
            const rightScrollable =
                container.scrollWidth >
                Math.ceil(leftScroll + container.clientWidth)

            setCanScrollLeft(leftScroll > 0)
            setCanScrollRight(rightScrollable)
        }
    }

    useEffect(() => {
        const container = scrollRef.current
        if (container) {
            updateScrollButtons()
            container.addEventListener('scroll', updateScrollButtons)
            window.addEventListener('resize', updateScrollButtons)
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', updateScrollButtons)
            }
            window.removeEventListener('resize', updateScrollButtons)
        }
    }, [])

    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.pageX - scrollRef.current.offsetLeft)
        setScrollLeft(scrollRef.current.scrollLeft)
    }
    const handleMouseMove = (e) => {
        if (!isDragging) return
        const x = e.pageX - scrollRef.current.offsetLeft
        const walk = x - startX
        scrollRef.current.scrollLeft = scrollLeft - walk
    }
    const handleMouseUpOrLeave = (e) => {
        setIsDragging(false)
    }

    return (
        <section className='container mx-auto px-4 py-8'>
            <div className='text-center relative mb-10'>
                <h2 className='text-3xl font-bold mb-4'>
                    Explore New Arrivals
                </h2>
                <p className='text-lg text-gray-600 mb-8'>
                    Discover the latest style straight off the runway, freshly
                    added to keep your wardrobe on the cutting edge of fashion
                </p>
                {/* Scroll Buttons */}
                <br />
                <div className='absolute right-0 bottom-0 flex space-x-2 '>
                    <button
                        className={`p-2 rounded border ${canScrollLeft ? 'bg-white text-black' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                    >
                        <FiChevronLeft className='text-2xl' />
                    </button>

                    <button
                        className={`p-2 rounded border ${canScrollRight ? 'bg-white text-black' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                    >
                        <FiChevronRight className='text-2xl' />
                    </button>
                </div>
            </div>

            {/* Scrollable Content */}
            <div
                className={`flex overflow-x-auto space-x-6 relative [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mb-2 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
            >
                {newArrivals.map((product) => (
                    <div
                        className='w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-shrink-0 relative'
                        key={product._id}
                    >
                        <img
                            src={product.images[0]?.url}
                            alt={product.images[0]?.altText || product.name}
                            className='w-full h-[400px] object-cover rounded-lg'
                            draggable='false'
                        />
                        <div className='absolute bottom-0 left-0 right-0 backdrop-blur-md bg-black/40 text-white p-4 rounded-b-lg'>
                            <Link
                                to={`/product/${product._id}`}
                                className='block'
                            >
                                <h4 className='font-medium'>{product.name}</h4>
                                <p className='mt-1'>${product.price}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NewArrivals
