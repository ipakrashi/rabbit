import Hero from '../components/layout/Hero'
import GenderCollecionSection from '../components/products/GenderCollecionSection'
import NewArrivals from '../components/products/NewArrivals'
import ProductDetails from '../components/products/ProductDetails'

const Home = () => {
    return (
        <div>
            <Hero />
            <GenderCollecionSection />
            <NewArrivals />
            {/* Best Seller */}
            <h2 className='text-center font-bold mb-4 text-3xl'>Best Seller</h2>
            <ProductDetails />
        </div>
    )
}

export default Home
