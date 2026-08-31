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
            image: 'https://picsum.photos/200?random=1',
        },
        {
            productId: 2,
            name: 'Jeans',
            size: 'L',
            color: 'Blue',
            quantity: 1,
            price: 15,
            image: 'https://picsum.photos/200?random=2',
        },
    ],
    totalPrice: 195,
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
        alert('Checking Out...')
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
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Checkout
