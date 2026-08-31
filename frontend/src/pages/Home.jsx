import FeaturesSection from '../components/common/FeaturesSection'
import Hero from '../components/layout/Hero'
import FeaturedCollection from '../components/products/FeaturedCollection'
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
                url: 'https://plus.unsplash.com/premium_photo-1682096048114-4b36a3212527?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                url: 'https://images.unsplash.com/photo-1763559026957-09d31ce0b7de?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                url: 'https://images.unsplash.com/photo-1768289222319-5291d85fd640?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                url: 'https://images.unsplash.com/photo-1765529375039-13dabeab0684?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                url: 'https://images.unsplash.com/photo-1768929035644-6e146b35acd8?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                url: 'https://images.unsplash.com/photo-1639389109728-9099e20600d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                url: 'https://images.unsplash.com/photo-1640058905165-de6d580a0919?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                url: 'https://plus.unsplash.com/premium_photo-1692574097866-dea503aed4c4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
            <FeaturedCollection />
            <FeaturesSection />
        </div>
    )
}

export default Home
