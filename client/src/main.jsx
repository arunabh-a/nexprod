import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'

// const darkTheme = createTheme({
//     type: "dark",
//     theme: {
//         colors: {
//             // You can customize colors here as well, if desired
//             background: '#222831',
//             text: '#ebe9fc',
//             primary: '#FF5722',
//             secondary: '#2D4059',
//             accent: '#EEEEEE',
//         },
//     },
// });


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
        <main className="dark text-textc bg-background">
            <App />
        </main>
    </NextUIProvider>
  </StrictMode>,
)
