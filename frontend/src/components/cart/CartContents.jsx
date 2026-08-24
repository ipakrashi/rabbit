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
    ]
    return (
        <div>
            {cartProducts.map((product, index) => (
                <div
                    className='flex items-start py-4 border-b gap-1'
                    key={index}
                >
                    <div className='flex items-center justify-between'>
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
                    <div className='ml-3'>
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
