import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'
import Header from '../common/Header'

const UserLayout = () => {
    return (
        <>
            {/* HEADER */}
            <Header />
            {/* MAIN CONTENT */}
            <main>
                <Outlet />
            </main>
            {/* FOOTER */}
            <Footer />
        </>
    )
}

export default UserLayout
