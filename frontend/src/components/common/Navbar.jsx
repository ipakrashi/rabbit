import {
    HiBars3BottomRight,
    HiOutlineShoppingBag,
    HiOutlineUser,
} from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
                {/* Left - Logo*/}
                <div className=''>
                    <Link to='/' className='text-2xl font-medium'>
                        rabbit
                    </Link>
                </div>
                {/* Center - Navigation Links */}
                <div className='hidden md:flex space-x-6'>
                    <Link
                        to='#'
                        className='text-gray-700 hover:text-black tex-sm font-medium uppercase'
                    >
                        Men
                    </Link>
                    <Link
                        to='#'
                        className='text-gray-700 hover:text-black tex-sm font-medium uppercase'
                    >
                        Women
                    </Link>
                    <Link
                        to='#'
                        className='text-gray-700 hover:text-black tex-sm font-medium uppercase'
                    >
                        Top wear
                    </Link>
                    <Link
                        to='#'
                        className='text-gray-700 hover:text-black tex-sm font-medium uppercase'
                    >
                        Bottom wear
                    </Link>
                </div>
                {/* Right Section - Icons  */}
                <div className='flex items-center space-x-4'>
                    <Link to='/profile' className='hover:text-black'>
                        <HiOutlineUser className='h-6 w-6 text-gray-700' />
                    </Link>
                    <button className='relative hover:text-black'>
                        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700 cursor-pointer' />
                        <span className='absolute bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5 -top-3'>
                            4
                        </span>
                    </button>
                    {/* Search  */}
                    <button className='md:hidden'>
                        <HiBars3BottomRight className=' text-gray-700 h-6 w-6' />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
