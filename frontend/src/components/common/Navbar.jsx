import {
    HiBars3BottomRight,
    HiOutlineShoppingBag,
    HiOutlineUser,
} from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import CartDrawer from '../layout/CartDrawer'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [navDrawerOpen, setNavDrawerOpen] = useState(false)

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen)
    }

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
                    <button
                        className='relative hover:text-black'
                        onClick={toggleCartDrawer}
                    >
                        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700 cursor-pointer' />
                        <span className='absolute bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5 -top-3'>
                            4
                        </span>
                    </button>
                    {/* Search  */}
                    <SearchBar />
                    <button className='md:hidden' onClick={toggleNavDrawer}>
                        <HiBars3BottomRight className=' text-gray-700 h-6 w-6' />
                    </button>
                </div>
            </nav>
            <CartDrawer
                drawerOpen={drawerOpen}
                toggleCartDrawer={toggleCartDrawer}
            />
            {/* Mobile Navigation */}
            <div
                className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 bg-white shadow-lg transform transition-transform duration-300 h-full z-50 ${navDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className='flex justify-end p-4'>
                    <button onClick={toggleNavDrawer}>
                        <IoMdClose className='h-6 w-6 text-gray-600' />
                    </button>
                </div>
                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                    <nav className='space-y-4'>
                        <Link
                            to='#'
                            className='block text-gray-600 hover:text-black'
                            onClick={toggleNavDrawer}
                        >
                            Men
                        </Link>

                        <Link
                            to='#'
                            className='block text-gray-600 hover:text-black'
                            onClick={toggleNavDrawer}
                        >
                            Women
                        </Link>
                        <Link
                            to='#'
                            className='block text-gray-600 hover:text-black'
                            onClick={toggleNavDrawer}
                        >
                            Top Wear
                        </Link>
                        <Link
                            to='#'
                            className='block text-gray-600 hover:text-black'
                            onClick={toggleNavDrawer}
                        >
                            Bottom Wear
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
