import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'

const TopBar = () => {
    return (
        <div className='bg-rabbit-red  text-white '>
            <div className='class container mx-auto flex justify-between px-25 py-2 items-center'>
                <div className='hidden md:flex items-center space-x-4'>
                    <a href='#' className='hover:text-gray-300'>
                        <TbBrandMeta className='h-5 w-5' />
                    </a>
                    <a href='#' className='hover:text-gray-300'>
                        <IoLogoInstagram className='h-5 w-5' />
                    </a>
                    <a href='#' className='hover:text-gray-300'>
                        <RiTwitterXLine className='h-5 w-5' />
                    </a>
                </div>
                <div className='text-sm items-center'>
                    <span>We Ship Worldwide - Fast & Reliable Shipping</span>
                </div>
                <div className='hidden md:block text-sm'>
                    <a href='tel:1234567890' className='hover:text-gray-300'>
                        +1 (234) 567-(890)
                    </a>
                </div>
            </div>{' '}
        </div>
    )
}

export default TopBar
