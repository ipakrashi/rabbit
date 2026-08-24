import TopBar from '../layout/TopBar'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className='border-b border-gray-200 shadow-xs'>
            {/* Topbar */}
            <TopBar />
            {/* Navbar */}
            <Navbar />
            {/* Cart Drawer */}
        </header>
    )
}

export default Header
