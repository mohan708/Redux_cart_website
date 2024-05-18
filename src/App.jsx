import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from 'react-router-dom';
import './App.css'
//import Product from './components/Product'
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<RootLayout />}>

<Route index element={<Dashboard/>}></Route>
<Route path="/Cart" element={<Cart />}></Route>

</Route>
 ));

  
//<Product />
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
