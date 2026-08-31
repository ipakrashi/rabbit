import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import ProductGrid from './ProductGrid'

const selectedProduct = {
    name: 'Stylish Jacket',
    price: 150,
    originalPrice: 170,
    description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet dolorem velit beatae ex quam. Quas nemo tempora, hic veniam at magni blanditiis rerum praesentium architecto modi ullam aut asperiores aliquid.',
    brand: 'FashionStreet',
    material: 'Leather',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Red', 'Black', '#13ed32'],
    images: [
        {
            url: 'https://images.unsplash.com/photo-1636576506457-e22157f737e3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            altText: 'SJ1',
        },
        {
            url: 'https://images.unsplash.com/photo-1636576511559-7a9d743b8d35?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            altText: 'SJ2',
        },
    ],
}

const similarProducts = [
    {
        _id: 1,
        name: 'Product 1',
        price: 130,
        images: [
            {
                url: 'https://images.unsplash.com/photo-1592423777039-7be9f340582b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                url: 'https://images.unsplash.com/photo-1592423788390-2e71e064f724?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                url: 'https://images.unsplash.com/photo-1649546786116-c10c6d4be27e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                url: 'https://images.unsplash.com/photo-1785571490245-67577fcbd9d7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                altText: 'SJ1',
            },
        ],
    },
]

const ProductDetails = () => {
    const [mainImage, setMainImage] = useState(
        selectedProduct?.images?.[0]?.url || '',
    )
    const [selectedSize, setSelectedSize] = useState('')
    const [selectedColor, setSelectedColor] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    useEffect(() => {
        if (selectedProduct.images.length > 0) {
            setMainImage(selectedProduct.images[0].url)
        }
    }, [selectedProduct])

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error('Please select Size & Color before adding to cart', {
                duration: 3000,
            })
            return
        }
        setIsButtonDisabled(true)
        // Fix: Keep button disabled until timeout completes
        setTimeout(() => {
            toast.success('Product added to cart', { duration: 3000 })
            setIsButtonDisabled(false) // Re-enable inside the timer callback
        }, 1000)
    }

    return (
        <div className='p-6'>
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
                <div className='flex flex-col md:flex-row'>
                    {/* Left Thumbnails */}
                    <div className='hidden md:flex flex-col space-y-4 mr-6'>
                        {selectedProduct.images.map((image, index) => (
                            <img
                                src={image.url}
                                alt={image.altText || `Thumbnail ${index}`}
                                key={index}
                                className={`h-20 w-20 object-cover border rounded-lg cursor-pointer ${mainImage === image.url ? 'border-black border-3' : 'border-gray-300'}`}
                                onClick={() => setMainImage(image.url)}
                            />
                        ))}
                    </div>
                    {/* main Image */}
                    <div className='md:w-1/2'>
                        <div className='mb-4'>
                            <img
                                src={mainImage}
                                alt='Main product'
                                className='w-full h-auto object-cover rounded-lg'
                            />
                        </div>
                    </div>
                    {/* Mobile Thumbnails */}
                    <div className='md:hidden flex overscroll-x-auto space-x-4 mb-4'>
                        {' '}
                        {selectedProduct.images.map((image, index) => (
                            <img
                                src={image.url}
                                alt={image.altText || `Thumbnail ${index}`}
                                key={index}
                                className={`h-20 w-20 object-cover border rounded-lg cursor-pointer ${mainImage === image.url ? 'border-black border-3' : 'border-gray-300'}`}
                                onClick={() => setMainImage(image.url)}
                            />
                        ))}
                    </div>
                    {/* Right Section */}
                    <div className='md:w-1/2 md:ml-10'>
                        <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
                            {selectedProduct.name}
                        </h1>
                        <p className='text-lg text-gray-600 mb-1 line-through'>
                            {selectedProduct.originalPrice &&
                                `${selectedProduct.originalPrice}`}
                        </p>
                        <p className='text-xl text-gray-500 mb-2 '>
                            ${selectedProduct.price}
                        </p>
                        <p className='text-gray-600 mb-4'>
                            {selectedProduct.description}
                        </p>
                        <div className='mb-4'>
                            <p className='text-gray-700'>Color:</p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.colors.map((color) => (
                                    <button
                                        key={color}
                                        className={`w-8 h-8 rounded-full border ${selectedColor === color ? 'border-4 border-black' : 'border-gray-300'}`}
                                        style={{
                                            backgroundColor:
                                                color.toLocaleLowerCase(),
                                        }}
                                        onClick={() => setSelectedColor(color)}
                                    ></button>
                                ))}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <p className='text-gray-700'>Size:</p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`px-4 py-2 rounded border ${selectedSize === size ? 'border-4 border-black text-white bg-black' : 'border-gray-300'}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='mb-6 '>
                            <p className='text-gray-700'>Quantity:</p>
                            <div className='flex items-center space-x-4 mt-2'>
                                <button
                                    className='px-2 py-1 bg-gray-200 rounded text-lg'
                                    onClick={() => {
                                        if (quantity > 1) {
                                            setQuantity((prev) => prev - 1)
                                        } else {
                                            setQuantity(1)
                                        }
                                    }}
                                >
                                    -
                                </button>
                                <span className='text-lg'>{quantity}</span>
                                <button
                                    className='px-2 py-1 bg-gray-200 rounded text-lg'
                                    onClick={() => {
                                        if (quantity >= 1) {
                                            setQuantity((prev) => prev + 1)
                                        } else {
                                            setQuantity(1)
                                        }
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <button
                            className={`bg-black text-white py-2 px-6 rounded-lg w-full mb-4 ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-900'}`}
                            onClick={handleAddToCart}
                            disabled={isButtonDisabled}
                        >
                            {isButtonDisabled ? 'Adding......' : 'Add to Cart'}
                        </button>
                        <div className='mt-10 text-gray-700'>
                            <h3 className='text-xl font-bold mb-4'>
                                Characteristics
                            </h3>
                            <table className='w-full text-left text-sm text-gray-600'>
                                <tbody>
                                    <tr>
                                        <td className='py-1'>Brand</td>
                                        <td className='py-1'>
                                            {selectedProduct.brand}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>Material</td>
                                        <td className='py-1'>
                                            {selectedProduct.material}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <h2 className='text-2xl text-center font-medium mb-4'>
                        You May Also Like
                    </h2>
                    <ProductGrid similarProducts={similarProducts} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
