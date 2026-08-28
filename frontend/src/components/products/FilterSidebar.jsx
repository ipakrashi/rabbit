import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const [filters, setFilters] = useState({
        category: '',
        gender: '',
        color: '',
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 200,
    })
    const [priceRange, setPriceRange] = useState([0, 200])
    const categories = ['Top Wear', 'Bottom Wear']
    const colors = [
        'Red',
        'Blue',
        'Green',
        'Yellow',
        'Gray',
        'White',
        'Black',
        'Pink',
        'Beige',
        'Navy',
    ]
    const sizes = ['XS', 'S', 'M', 'L', 'XL']
    const materials = [
        'Cotton',
        'Wool',
        'Polyester',
        'Denim',
        'Silk',
        'Linen',
        'Viscose',
        'Fleece',
    ]
    const brands = [
        'Fashionista',
        'FasionStreet',
        'Urban Threads',
        'Beach Breeze',
        'Chic Style',
        'Zara',
        'Clairvoyant',
    ]
    const genders = ['Men', 'Women']

    useEffect(() => {
        // http://localhost:5173/collections/all?category=Top%20Wear&color=Red&size=M,L,S&brand=FashionStreet,Urban Threads,Zara&material=Cotton,Polyester,Linen&gender=Men&minPrice=40&maxPrice=170

        const params = Object.fromEntries([...searchParams])

        const updatedFilter = {
            category: params.category || '',
            gender: params.gender || '',
            color: params.color || '',
            size: params.size ? params.size.split(',') : [],
            brand: params.brand ? params.brand.split(',') : [],
            material: params.material ? params.material.split(',') : [],
            minPrice: params.minPrice ? Number(params.minPrice) : 0,
            maxPrice: params.maxPrice ? Number(params.maxPrice) : 200,
        }
        setFilters(updatedFilter)
        setPriceRange([updatedFilter.minPrice, updatedFilter.maxPrice])
    }, [searchParams])

    const handleFilterChange = (e) => {
        const { name, value, checked, type } = e.target
        // console.log({ name, value, checked, type })
        let newFilters = { ...filters }

        if (type === 'checkbox') {
            if (checked) {
                newFilters[name] = [...(newFilters[name] || []), value]
            } else {
                newFilters[name] = newFilters[name].filter(
                    (item) => item !== value,
                )
            }
        } else {
            newFilters[name] = value
        }
        // console.log(newFilters)
        setFilters(newFilters)
        updateUrlParams(newFilters)
    }
    const updateUrlParams = (newFilters) => {
        const params = new URLSearchParams()
        Object.keys(newFilters).forEach((key) => {
            const val = newFilters[key]
            if (Array.isArray(val) && val.length > 0) {
                params.set(key, val.join(','))
            } else if (!Array.isArray(val) && val !== '' && val !== 0) {
                params.set(key, val)
            }
        })
        setSearchParams(params)
        navigate(`?${params.toString()}`)
    }

    return (
        <div className='p-4'>
            <div className='text-xl font-medium text-gray-800 mb-4'>
                {/* Category Filter */}
                <div className='mb-6'>
                    <label
                        htmlFor=''
                        className='block text-gray-600 mb-2 font-medium'
                    >
                        Category
                    </label>
                    {categories.map((category) => (
                        <div
                            key={category}
                            className='flex mb-1 items-center lg:text-sm'
                        >
                            <input
                                type='radio'
                                name='category'
                                id=''
                                className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 text-xs border-gray-300'
                                value={category}
                                checked={filters.category.includes(category)}
                                onChange={handleFilterChange}
                            />
                            <span className='text-gray-700'>{category}</span>
                        </div>
                    ))}
                </div>
                {/* Gender Filter */}
                <div className='mb-6'>
                    <label
                        htmlFor=''
                        className='block text-gray-600 mb-2 font-medium'
                    >
                        Gender
                    </label>
                    {genders.map((gender) => (
                        <div
                            key={gender}
                            className='flex mb-1 items-center lg:text-sm'
                        >
                            <input
                                type='radio'
                                name='gender'
                                id=''
                                className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 text-xs border-gray-300'
                                value={gender}
                                checked={filters.gender.includes(gender)}
                                onChange={handleFilterChange}
                            />
                            <span className='text-gray-700'>{gender}</span>
                        </div>
                    ))}
                </div>
                {/* Color Filters */}
                <div className='mb-6'>
                    <label
                        htmlFor=''
                        className='block text-medium text-gray-600 mb-2'
                    >
                        Color
                    </label>
                    <div className='flex flex-wrap gap-2'>
                        {colors.map((color) => (
                            <button
                                key={color}
                                name='color '
                                className='w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105'
                                style={{
                                    backgroundColor: color.toLowerCase(),
                                }}
                                title={color}
                                value={color}
                                onClick={(e) =>
                                    handleFilterChange({
                                        target: {
                                            name: 'color',
                                            value: color,
                                            type: 'button',
                                        },
                                    })
                                }
                            ></button>
                        ))}
                    </div>
                </div>
                {/* Size Filter */}
                <div className='mb-6'>
                    <label
                        htmlFor=''
                        className='block text-gray-600 font-medium mb-2'
                    >
                        Size
                    </label>
                    {sizes.map((size) => (
                        <div className='items-center flex mb-1' key={size}>
                            <input
                                type='checkbox'
                                name='size'
                                id=''
                                className='h-4 w-4 mr-2 text-blue-500 focus:ring-blue-400 border-gray-300'
                                value={size}
                                checked={filters.size.includes(size)}
                                onChange={handleFilterChange}
                            />
                            <span className='text-gray-700 text-sm'>
                                {size}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Materials Filter */}
                <div className='mb-6'>
                    <label
                        htmlFor=''
                        className='block text-gray-600 font-medium mb-2'
                    >
                        Material
                    </label>
                    {materials.map((material) => (
                        <div className='items-center flex mb-1' key={material}>
                            <input
                                type='checkbox'
                                name='material'
                                id=''
                                className='h-4 w-4 mr-2 text-blue-500 focus:ring-blue-400 border-gray-300'
                                value={material}
                                checked={filters.material.includes(material)}
                                onChange={handleFilterChange}
                            />
                            <span className='text-gray-700 text-sm'>
                                {material}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Brands Filter */}
                <div className='mb-6'>
                    <label
                        htmlFor=''
                        className='block text-gray-600 font-medium mb-2'
                    >
                        Brand
                    </label>
                    {brands.map((brand) => (
                        <div className='items-center flex mb-1' key={brand}>
                            <input
                                type='checkbox'
                                name='brand'
                                id=''
                                className='h-4 w-4 mr-2 text-blue-500 focus:ring-blue-400 border-gray-300'
                                value={brand}
                                checked={filters.brand.includes(brand)}
                                onChange={handleFilterChange}
                            />
                            <span className='text-gray-700 text-sm'>
                                {brand}
                            </span>
                        </div>
                    ))}
                </div>
                {/* Price Range Filter */}
                <div className='mb-8'>
                    <label
                        htmlFor=''
                        className='block text-gray-600 font-medium mb-2 '
                    >
                        Price Range
                    </label>
                    <input
                        type='range'
                        name='priceRange'
                        id=''
                        min={0}
                        max={200}
                        value={priceRange[1]}
                        className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer'
                    />
                    <div className='justify-between text-gray-600 flex mt-2'>
                        <span className='text-sm'> $ 0</span>
                        <span className='text-sm'> ${priceRange[1]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterSidebar
