import { useEffect, useState } from 'react'

const MyOrdersPage = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        // Simulate Fetching Orders
        setTimeout(() => {
            const mockOrders = [
                {
                    _id: 123,
                    createdAt: new Date(),
                    shippingAddress: { city: 'Kolkata', country: 'India' },
                    orderItems: [
                        {
                            name: 'product1',
                            image: 'https://picsum.photos/500/500/?ramdom33',
                        },
                    ],
                    totalPrice: 100,
                    isPaid: true,
                },
                {
                    _id: 456,
                    createdAt: new Date(),
                    shippingAddress: { city: 'Kolkata', country: 'India' },
                    orderItems: [
                        {
                            name: 'product2',
                            image: 'https://picsum.photos/500/500/?ramdom34',
                        },
                    ],
                    totalPrice: 100,
                    isPaid: true,
                },
            ]
            setOrders(mockOrders)
        }, 3000)
    }, [])

    return (
        <div className='max-w-7xl mx-auto p-4 sm:p-6'>
            <h2 className='text-xl sm:text-2xl font-bold mb-6'>My Orders</h2>
            <div className='relative shadow-md sm:rounded-lg overflow-hidden'>
                <table className='text-gray-500 min-w-full text-left'>
                    <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                        <tr>
                            <th className='py-2 px-4 sm:py-3'>Image</th>
                            <th className='py-2 px-4 sm:py-3'>Order ID</th>
                            <th className='py-2 px-4 sm:py-3'>Created On</th>
                            <th className='py-2 px-4 sm:py-3'>
                                Shipping Address
                            </th>
                            <th className='py-2 px-4 sm:py-3'>Items</th>
                            <th className='py-2 px-4 sm:py-3'>Price</th>
                            <th className='py-2 px-4 sm:py-3'>Status</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
export default MyOrdersPage
