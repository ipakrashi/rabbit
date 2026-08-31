import { IoMdClose } from 'react-icons/io'
import CartContents from '../cart/CartContents'
import { useNavigate } from 'react-router-dom'

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
    const navigate = useNavigate()
    const handleCheckout = () => {
        toggleCartDrawer()
        navigate('/checkout')
    }
    return (
        <div
            className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/3  h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            {/* Close Button */}
            <div className='flex justify-end p-4'>
                <button onClick={toggleCartDrawer}>
                    <IoMdClose className='h-6 w-6 text-gray-600 cursor-pointer' />
                </button>
            </div>
            {/* Cart Content with Scrollable Area */}
            <div className='grow p-4 overflow-y-auto'>
                <h2 className='text-xl mb-4 font-semibold'>Your Cart</h2>
                {/* Component for Cart Contents */}
                <div className=''>
                    <CartContents />
                </div>
            </div>
            {/* Checkout Button fixed at the Botton */}
            <div className='p-4 bg-white sticky bottom-0'>
                <button
                    className='w-full bg-black text-white py-3 rounded-lg  font-semibold hover:bg-gray-800 cursor-pointer transition'
                    onClick={handleCheckout}
                >
                    Checkout
                </button>
                <p className='text-sm tracking-tighter text-gray-500 mt-2 text-center'>
                    Shipping, Taxes & Discount Codes calculated at Checkout{' '}
                </p>
            </div>
        </div>
    )
}

export default CartDrawer
