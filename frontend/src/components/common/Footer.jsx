import { FiPhoneCall } from 'react-icons/fi'
import { IoLogoInstagram } from 'react-icons/io5'
import { RiTwitterXLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='border-t  p-12'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0'>
                <div className=''>
                    <h3 className='text-lg mb-4 text-gray-800'>Newsletter</h3>
                    <p className='text-gray-500 mb-4'>
                        Be the first to hear about new products,exclusive events
                        and exciting offers
                    </p>
                    <p className='text-gray-600 font-medium text-sm mb-6'>
                        Sign up and get 10% off on your first order
                    </p>
                    {/* Newsletter Form */}
                    <form action='' className='flex'>
                        <input
                            type='email'
                            name=''
                            id=''
                            placeholder='Enter your email'
                            className='p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all'
                            required
                        />
                        <button
                            type='submit'
                            className='bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all'
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
                {/* Shop Links */}
                <div className=''>
                    <h3 className='text-lg mb-4 text-gray-800'>Shop</h3>
                    <ul className='space-y-2 text-gray-600'>
                        <li>
                            <Link
                                to='#'
                                className='hover:text-gray-600 transition-colors'
                            >
                                Men's Top Wear
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='#'
                                className='hover:text-gray-600 transition-colors'
                            >
                                Women's Top Wear
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='#'
                                className='hover:text-gray-600 transition-colors'
                            >
                                Men's Bottom Wear
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='#'
                                className='hover:text-gray-600 transition-colors'
                            >
                                Women's Bottom Wear
                            </Link>
                        </li>
                        <li></li>
                    </ul>
                </div>
                {/* Support Links */}
                <div className=''>
                    <h3 className='text-lg mb-4 text-gray-800'>Support</h3>
                    <ul className='space-y-2 text-gray-600'>
                        <li>
                            <Link
                                to='#'
                                className='hover:text-gray-600 transition-colors'
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='#'
                                className='hover:text-gray-600 transition-colors'
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='#'
                                className='hover:text-gray-600 transition-colors'
                            >
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='#'
                                className='hover:text-gray-600 transition-colors'
                            >
                                Features
                            </Link>
                        </li>
                        <li></li>
                    </ul>
                </div>
                {/* Follow Us */}
                <div className=''>
                    <h3 className='text-lg mb-4 text-gray-800'>Follow Us</h3>
                    <div className='flex items-center space-x-4 mb-6'>
                        <a
                            href='https://facebook.com'
                            target='_blank'
                            rel='noopener, noreferrer'
                            className='hover:text-gray-500'
                        >
                            <TbBrandMeta className='h-6 w-6' />
                        </a>
                        <a
                            href='https://facebook.com'
                            target='_blank'
                            rel='noopener, noreferrer'
                            className='hover:text-gray-500'
                        >
                            <IoLogoInstagram className='h-6 w-6' />
                        </a>
                        <a
                            href='https://facebook.com'
                            target='_blank'
                            rel='noopener, noreferrer'
                            className='hover:text-gray-500'
                        >
                            <RiTwitterXLine className='h-6 w-6' />
                        </a>
                    </div>
                    <p className='text-gray-500'>Call Us:</p>
                    <p>
                        <FiPhoneCall className='inline-block mr-2' />
                        +1 (234) 567-(890)
                    </p>
                </div>
            </div>
            {/* Footer Bottom Copyright */}
            <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
                <p className='text-gray-500 text-center text-sm tracking-tighter'>
                    &copy; 2025 Binary Fusion, All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer
