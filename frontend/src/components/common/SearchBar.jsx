import { useState } from 'react'
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const handleSearchToggle = () => {
        setIsOpen(!isOpen)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        alert('Search Term : ' + searchTerm)
        setIsOpen(false)
    }

    return (
        <div
            className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? 'absolute top-0 left-0 w-full bg-white h-24 z-50' : 'w-auto'}`}
        >
            {isOpen ? (
                <form
                    className='relative flex items-center justify-center w-full'
                    onSubmit={handleSearch}
                >
                    <div className='relative w-1/2'>
                        <input
                            type='text'
                            name=''
                            id=''
                            placeholder='Search ...'
                            value={searchTerm}
                            className='w-full rounded-md bg-gray-100 px-4 py-2 text-sm outline-none pr-8 placeholder:text-gray-700'
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            type='submit'
                            className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 mr-10'
                        >
                            <HiMagnifyingGlass className='h-6 w-6' />
                        </button>

                        <button
                            type='button'
                            onClick={handleSearchToggle}
                            className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800'
                        >
                            <HiXMark className='h-6 w-6' />
                        </button>
                    </div>
                </form>
            ) : (
                <button onClick={handleSearchToggle}>
                    <HiMagnifyingGlass className='w-6 h-6 cursor-pointer' />
                </button>
            )}
        </div>
    )
}

export default SearchBar
