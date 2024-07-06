import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/Authcontext.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

// const queryClient= new QueryClient({
//   defaultOptions:{
//     queries:{
//       retry:0
//     }
//   }
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <BrowserRouter>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </BrowserRouter>
    {/* </QueryClientProvider> */}
  </React.StrictMode>,
)
