import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Menu from '../Pages/Menu'
import AllergyAdvice from '../Pages/AllergyAdvice'
import PublicLayout from '../Layout/PublicLayout'
import NotFound from '../Pages/NotFound'
import ProductDetails from '../Pages/ProductDetails'
import Cart from '../Pages/Cart'
import Payment from '../Pages/Payment/Payment'
import Success from '../Pages/Payment/Success'
import Failure from '../Pages/Payment/Failure'
import Login from '../Pages/auth/login'
import Profile from '../Pages/Profile'
import ProtectedRoutes from '../components/ProtectedRoutes'



const AppRoutes = () => {
  return (
    <div>
        <Routes>

          {/* render the actual gui of website in default via  :
          <Route element={<PublicLayout />}> */}
          <Route element={<PublicLayout />}>


          {/* define url paths and elements to render: */}
              {/* {/* Home page further renders hero and recipe pages */} */
                <Route path='/' element= {<Home />}/>  
              
              {/* rest of paths and pages rendering defined and are triggered via outlet used in PublicLayout.jsx*/}
              <Route path='*' element= {<NotFound />}/>  
              <Route path='/about' element= {<About />}/>
              <Route path='/contact' element= {<Contact />}/>
              <Route path='/menu' element= {<ProtectedRoutes><Menu/></ProtectedRoutes>}/>
              <Route path='/cart' element= {<Cart />}/>
              <Route path='/payment' element= {<Payment />}/>
              <Route path='/success' element= {<Success />}/>
              <Route path='/failure' element= {<Failure/>}/>          
              <Route path='/allergy-advice' element= {<AllergyAdvice />}/>
              
              <Route path='/Login' element= {<Login/>}/>          
              <Route path='/Profile' element= {<Profile/>}/>          
              
              

              
              {/* enable dynamic routing for individual products clicked */}
              <Route path='/product-details/:id' element= {<ProductDetails />}/>
          </Route>
        </Routes>
    </div>
  )
}

export default AppRoutes
