import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='relative'>
            <img
                src='./assets/rabbit-hero.webp'
                alt=''
                className='w-full h-[440px] md:h-[600px] lg:h-[750px] md:object-cover sm:object-fit'
            />
            <div className='absolute inset-0 bg-black/15 flex  items-center justify-center'>
                <div className='text-center text-white p-6'>
                    <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>
                        Vacation <br /> Ready
                    </h1>
                    <p className='text-md tracking-tighter md:text-3xl mb-6'>
                        Explore our vacation-ready outfits with fast worldwide
                        shipping
                    </p>
                    <Link
                        to='#'
                        className='bg-white text-gray-950 px-6 py-4 rounded-sm text-lg'
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
