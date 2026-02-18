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


const AppRoutes = () => {
  return (
    <div>
        <Routes>
             <Route element={<PublicLayout />}>
              <Route path='/' element= {<Home />}/>  
              <Route path='*' element= {<NotFound />}/>  
              <Route path='/about' element= {<About />}/>
              <Route path='/contact' element= {<Contact />}/>
              <Route path='/menu' element= {<Menu />}/>
              <Route path='/cart' element= {<Cart />}/>
              <Route path='/payment' element= {<Payment />}/>
              <Route path='/success' element= {<Success />}/>
              <Route path='/failure' element= {<Failure/>}/>
          
              <Route path='/allergy-advice' element= {<AllergyAdvice />}/>

              {/* enable dynamic routing for individual products clicked */}
              <Route path='/product-details/:id' element= {<ProductDetails />}/>
          </Route>
        </Routes>
    </div>
  )
}

export default AppRoutes
