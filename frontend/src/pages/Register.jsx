import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('User Registered:', { name, email, password })
    }

    return (
        <div className='flex'>
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12'>
                <form
                    onSubmit={handleSubmit}
                    className='w-full max-w-md p-8 bg-white rounded-lg border shadow'
                >
                    <div className='flex justify-center mb-6'>
                        <h2 className='text-xl font-medium'>rabbit</h2>
                    </div>
                    <h2 className='text-2xl font-bold text-center mb-6'>
                        Hey There !
                    </h2>
                    <p className='text-center mb-6'>
                        Enter Your Name, Username & Password to Register
                    </p>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold mb-2'>
                            Name:
                        </label>
                        <input
                            type='text'
                            name='name'
                            id=''
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='w-full p-2 border rounded-lg'
                            placeholder='Enter your Name'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold mb-2'>
                            Email:
                        </label>
                        <input
                            type='email'
                            name='email'
                            id=''
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full p-2 border rounded-lg'
                            placeholder='Enter your email address'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold mb-2'>
                            Password:
                        </label>
                        <input
                            type='password'
                            name='password'
                            id=''
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full p-2 border rounded-lg'
                            placeholder='Enter your email address'
                        />
                    </div>
                    <button className='w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800'>
                        Register
                    </button>
                    <p className='mt-6 text-center text-sm'>
                        Have an account ?{' '}
                        <Link to='/login' className='text-blue-500'>
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
            <div className='hidden md:block w-1/2 bg-gray-800'>
                <div className='h-full flex flex-col justify-center items-center'>
                    <img
                        src='./assets/register.webp'
                        alt='LG'
                        className='h-[690px] w-full object-cover'
                    />
                </div>
            </div>
        </div>
    )
}
export default Register
