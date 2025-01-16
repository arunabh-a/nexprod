import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Products from './components/productList'


function App() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className='root'>
            <NavBar  />
            <div className='header-container'>
                <h1 className="text-center textHeader">Products</h1>
            </div>
            <Products />
        </div>
    )
}

export default App
