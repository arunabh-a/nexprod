import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import CreateProduct from './components/createProduct'
import Products from './components/productList'


function App() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div>
            <NavBar onOpenModal={() => setIsModalOpen(true)} />
            <CreateProduct isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <Products />
        </div>
    )
}

export default App
