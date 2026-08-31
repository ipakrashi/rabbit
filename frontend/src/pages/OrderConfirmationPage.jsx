import Checkout from '../components/cart/Checkout'

const checkout = {
    _id: '12345',
    createdAt: new Date(),
    checkoutItems: [
        {
            productId: 1,
            name: 'Jacket',
            color: 'black',
            size: 'M',
            price: 150,
            quantity: 1,
            image: 'https://picsum.photos/300?random=54',
        },
        {
            productId: 2,
            name: 'Jacket2',
            color: 'black',
            size: 'XL',
            price: 250,
            quantity: 1,
            image: 'https://picsum.photos/300?random=55',
        },
    ],
    shippingAddress: {
        address: 'address1',
        city: 'city1',
        pincode: '1234567',
        country: 'India',
    },
}
const OrderConfirmationPage = () => {
    const calculatedEstimatedDelivery = (createdAt) => {
        const orderDate = new Date(createdAt)
        orderDate.setDate(orderDate.getDate() + 10)
        return orderDate.toLocaleDateString()
    }
    return (
        <div className='max-w-4xl mx-auto p-6 bg-white'>
            <h1 className='text-4xl font-bold text-center text-emerald-700 mb-5'>
                Thank You for Your Order !
            </h1>
            {checkout && (
                <div className='p-6 rounded-lg border'>
                    <div className='flex justify-between mb-5'>
                        {/* Order Id & Date */}
                        <div>
                            <h2 className='text-xl font-semibold'>
                                Order Id: {checkout._id}
                            </h2>
                            <p className='text-gray-500'>
                                Order Date:
                                {checkout.createdAt.toLocaleDateString()}
                            </p>
                        </div>
                        {/* Estimated Delivery */}
                        <div>
                            <p className='text-emerald-700 text-sm'>
                                Estimated Delivery:{' '}
                                {calculatedEstimatedDelivery(
                                    checkout.createdAt,
                                )}
                            </p>
                        </div>
                    </div>
                    {/* Ordered Items */}
                    <div className='mb-5'>
                        {checkout.checkoutItems.map((item) => (
                            <div
                                key={item.productId}
                                className='flex mb-2 items-center'
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className='w-16 h-16 object-cover rounded-md mr-4'
                                />
                                <div className=''>
                                    <h4 className='text-md font-semibold'>
                                        {item.name}
                                    </h4>
                                    <p className='text-sm text-gray-500'>
                                        {item.color} | {item.size}
                                    </p>
                                </div>
                                <div className='ml-auto text-right'>
                                    <p className='text-md'>${item.price}</p>
                                    <p className='text-sm text-gray-500'>
                                        Qty :{item.quantity}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Payment & Delivery Info */}
                    <div className='grid grid-cols-2 gap-3'>
                        {/* Payment Info */}
                        <div>
                            <h4 className='text-lg font-semibold mb-2'>
                                Payment
                            </h4>
                            <p className='text-gray-600'>Cash On Delivery</p>
                        </div>
                        {/* Delivery Info */}
                        <div className=''>
                            <h4 className='text-lg font-semibold mb-2'>
                                Delivery:
                            </h4>
                            <p className='text-gray-600'>
                                {checkout.shippingAddress.address}
                            </p>
                            <p className='text-gray-600'>
                                {checkout.shippingAddress.city}
                                {', Pincode:'}
                                {checkout.shippingAddress.pincode}
                            </p>
                            <p className='text-gray-600'>
                                {checkout.shippingAddress.country}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default OrderConfirmationPage
