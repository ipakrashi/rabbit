import Hero from '../components/layout/Hero'
import GenderCollectionSection from '../components/products/GenderCollectionSection'
import NewArrivals from '../components/products/NewArrivals'
import ProductDetails from '../components/products/ProductDetails'
import ProductGrid from '../components/products/ProductGrid'

const topWearsForWomen = [
    {
        _id: 1,
        name: 'Product 1',
        price: 130,
        images: [
            {
                url: 'https://picsum.photos/300/300?random=10',
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
                url: 'https://picsum.photos/300/300?random=11',
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
                url: 'https://picsum.photos/300/300?random=12',
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
                url: 'https://picsum.photos/300/300?random=13',
                altText: 'SJ1',
            },
        ],
    },
    {
        _id: 20,
        name: 'Product 20',
        price: 130,
        images: [
            {
                url: 'https://picsum.photos/300/300?random=20',
                altText: 'SJ1',
            },
        ],
    },
    {
        _id: 21,
        name: 'Product 21',
        price: 130,
        images: [
            {
                url: 'https://picsum.photos/300/300?random=21',
                altText: 'SJ1',
            },
        ],
    },
    {
        _id: 22,
        name: 'Product 22',
        price: 130,
        images: [
            {
                url: 'https://picsum.photos/300/300?random=22',
                altText: 'SJ1',
            },
        ],
    },
    {
        _id: 23,
        name: 'Product 23',
        price: 130,
        images: [
            {
                url: 'https://picsum.photos/300/300?random=23',
                altText: 'SJ1',
            },
        ],
    },
]

const Home = () => {
    return (
        <div>
            <Hero />
            <GenderCollectionSection />
            <NewArrivals />
            {/* Best Seller */}
            <h2 className='text-center font-bold mb-4 text-3xl'>Best Seller</h2>
            <ProductDetails />
            <div className='@container mx-auto'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    Top Wears For Women
                </h2>
                <ProductGrid similarProducts={topWearsForWomen} />
            </div>
        </div>
    )
}

export default Home
