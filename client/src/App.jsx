import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Products from './components/productList'


function App() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div>
            <NavBar  />
            
            <Products />
        </div>
    )
}

export default App
