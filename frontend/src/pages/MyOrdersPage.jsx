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
                            image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                            image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        },
                    ],
                    totalPrice: 300,
                    isPaid: false,
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
                    <tbody>
                        {orders.length > 0
                            ? orders.map((order) => (
                                  <tr
                                      key='order._id'
                                      className='border-b :hover border-gray-50 cursor-pointer'
                                  >
                                      <td className='p-2 sm:p-4'>
                                          <img
                                              src={order.orderItems[0].image}
                                              alt='OI'
                                              className='w-10 h-10 sm:h-12 w-12 rounded-lg'
                                          />
                                      </td>
                                      <td className='p-2 sm:p-4 font-medium text-gray-900 whitespace-nowrap'>
                                          # {order._id}
                                      </td>
                                      <td className='p-2 sm:p-4 font-medium text-gray-900 whitespace-nowrap'>
                                          {new Date(
                                              order.createdAt,
                                          ).toLocaleDateString()}{' '}
                                          {new Date(
                                              order.createdAt,
                                          ).toLocaleTimeString()}
                                      </td>
                                      <td className='p-2 sm:p-4 font-medium text-gray-900 whitespace-nowrap'>
                                          {order.shippingAddress
                                              ? `${order.shippingAddress.city} - ${order.shippingAddress.country}`
                                              : 'N/A'}
                                      </td>
                                      <td className='p-2 sm:p-4 font-medium text-gray-900 whitespace-nowrap'>
                                          {order.orderItems.length}
                                      </td>
                                      <td className='p-2 sm:p-4 font-medium text-gray-900 whitespace-nowrap'>
                                          $ {order.totalPrice}
                                      </td>
                                      <td className='p-2 sm:p-4 font-medium text-gray-900 whitespace-nowrap'>
                                          <span
                                              className={`px-2 py-1 rounded-lg font-medium  ${order.isPaid ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                                          >
                                              {order.isPaid
                                                  ? 'Paid'
                                                  : 'Pending'}
                                          </span>
                                      </td>
                                  </tr>
                              ))
                            : null}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default MyOrdersPage
