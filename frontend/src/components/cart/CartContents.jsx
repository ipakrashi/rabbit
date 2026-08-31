import { RiDeleteBin3Line } from 'react-icons/ri'

const CartContents = () => {
    const cartProducts = [
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
    ]
    return (
        <div>
            {cartProducts.map((product, index) => (
                <div
                    className='flex items-start py-4 border-b gap-1'
                    key={index}
                >
                    <div className='flex items-center justify-start'>
                        <img
                            src={product.image}
                            alt={product.name}
                            className='h-24 w-20 object-cover mr-4 rounded'
                        />
                    </div>
                    <div className=''>
                        <h3>{product.name}</h3>
                        <p className='text-sm text-gray-500'>
                            size: {product.size} | Color: {product.color}
                        </p>
                        <div className='flex items-center mt-2'>
                            <button className='border rounded px-1 py-0.5 text-xl font-medium m-3'>
                                +
                            </button>
                            {product.quantity}
                            <button
                                className='
                                border
                                rounded
                                px-1
                                py-0.5
                                text-xl
                    1          font-medium m-3'
                            >
                                -
                            </button>
                        </div>
                    </div>
                    <div className='ml-25'>
                        <p>$:{product.price.toLocaleString()}</p>
                        <button>
                            <RiDeleteBin3Line className='h-6 w-6 mt-1 text-red-600' />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartContents
