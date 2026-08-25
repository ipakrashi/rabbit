import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout'
import Home from './pages/Home'
import { Toaster } from 'sonner'

const App = () => {
    return (
        <BrowserRouter>
            <Toaster position='top-right' />
            <Routes>
                <Route path='/' element={<UserLayout />}>
                    {/* User Layout */}
                    <Route index element={<Home />} />
                </Route>
                <Route>{/* Admin Layout */}</Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
