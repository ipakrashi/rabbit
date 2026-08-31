import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const cart = {
    products: [
        {
            productId: 1,
            name: 'T-Shirt',
            size: 'M',
            color: 'Red',
            quantity: 1,
            price: 15,
            image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            productId: 2,
            name: 'Jeans',
            size: 'L',
            color: 'Blue',
            quantity: 1,
            price: 15,
            image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ],
    totalPrice: 195,
    shipping: 0,
    total: 195,
}
const Checkout = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [checkoutId, setCheckoutId] = useState(null)
    const [shippingAddress, setShippingAddress] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        phone: '',
    })

    const handleInputChange = (e) => {
        setShippingAddress((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
        console.log(shippingAddress)
    }

    const handleCreateCheckout = (e) => {
        e.preventDefault()
        setCheckoutId(123)
    }

    const displayOrderConfirmation = () => {
        navigate('/order-confirmation')
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2  max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
            {/* Left Section */}
            <div className='bg-white rounded-lg p-6'>
                <h2 className='text-2xl uppercase mb-6'>Checkout</h2>
                <form onSubmit={handleCreateCheckout}>
                    <h3 className='text-lg mb-4'>Contact Details</h3>
                    <div className='mb-4'>
                        <label htmlFor='' className='block text-gray-700'>
                            Email
                        </label>
                        <input
                            type='email'
                            name='email'
                            id=''
                            value={email}
                            placeholder='mail@example.com'
                            disabled
                            className='w-full p-2 border rounded-lg'
                        />
                    </div>
                    <h3 className='text-lg mb-4'>Delivery</h3>
                    <div className='mb-4 grid grid-cols-2 gap-2'>
                        <div>
                            <label htmlFor='' className='block text-gray-700'>
                                First Name
                            </label>
                            <input
                                type='text'
                                name='firstName'
                                id=''
                                className='w-full p-2 border rounded-lg'
                                required
                                value={shippingAddress.firstName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor='' className='block text-gray-700'>
                                Last Name
                            </label>
                            <input
                                type='text'
                                name='lastName'
                                id=''
                                className='w-full p-2 border rounded-lg'
                                required
                                value={shippingAddress.lastName}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>{' '}
                    <div className='mb-4'>
                        <label htmlFor='' className='block text-gray-700'>
                            Address
                        </label>
                        <input
                            type='text'
                            name='address'
                            id=''
                            value={shippingAddress.address}
                            onChange={handleInputChange}
                            className='w-full p-2 border rounded-lg'
                            required
                        />
                    </div>
                    <div className='mb-4 grid grid-cols-2 gap-2'>
                        <div>
                            <label htmlFor='' className='block text-gray-700'>
                                City
                            </label>
                            <input
                                type='text'
                                name='city'
                                id=''
                                className='w-full p-2 border rounded-lg'
                                required
                                value={shippingAddress.city}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor='' className='block text-gray-700'>
                                Postal Code
                            </label>
                            <input
                                type='text'
                                name='postalCode'
                                id=''
                                className='w-full p-2 border rounded-lg'
                                required
                                value={shippingAddress.postalCode}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className='mb-4 grid grid-cols-2 gap-2'>
                        <div>
                            <label htmlFor='' className='block text-gray-700'>
                                Country
                            </label>
                            <input
                                type='text'
                                name='country'
                                id=''
                                className='w-full p-2 border rounded-lg'
                                required
                                value={shippingAddress.country}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor='' className='block text-gray-700'>
                                Mobile
                            </label>
                            <input
                                type='tel'
                                name='phone'
                                id=''
                                className='w-full p-2 border rounded-lg'
                                required
                                value={shippingAddress.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className='mt-6'>
                        {!checkoutId ? (
                            <button
                                type='submit'
                                className='w-full bg-black text-white py-3 rounded-lg font-semibold'
                            >
                                Continue To Payement
                            </button>
                        ) : (
                            <div>
                                <h3 className='text-lg mb-4'>
                                    Pay With Paypal
                                </h3>
                                {/* Paypal Component */}
                                <button
                                    onClick={displayOrderConfirmation}
                                    className='bg-black text-white font-semibold rounded-lg p-2'
                                >
                                    Order Confirmation
                                </button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
            <div className='bg-gray-50 p-6 rounded-lg'>
                <h3 className='text-lg mb-4'>Order Summary</h3>
                <div className='border-t py-4 mb-4'>
                    {cart.products.map((product, index) => (
                        <div
                            key={index}
                            className='flex items-start justify-between py-2 border-b'
                        >
                            <div className='flex items-start'>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='w-20 h-24 object-cover mr-4'
                                />
                                <div className=''>
                                    <h3 className='text-md'>{product.name}</h3>
                                    <p className='text-gray-500'>
                                        Size : {product.size}
                                    </p>
                                    <p className='text-gray-500'>
                                        Color : {product.color}
                                    </p>
                                </div>
                            </div>
                            <p className='text-xl'>
                                ${product.price?.toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
                <div className='flex justify-between items-center text-lg mb-4'>
                    <p>Subtotal:</p>
                    <p>$ {cart.totalPrice?.toLocaleString()}</p>
                </div>
                <div className='flex justify-between items-center text-lg mb-4'>
                    <p>Shipping:</p>
                    <p>
                        {cart.shipping ? '$' : ''}
                        {cart.shipping
                            ? cart.shipping?.toLocaleString()
                            : 'FREE'}
                    </p>
                </div>
                <div className='flex justify-between items-center text-lg mb-4 border-t pt-4'>
                    <p>Total:</p>
                    <p>
                        {cart.total ? '$' : ''}
                        {cart.total ? cart.total.toLocaleString() : ''}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Checkout
