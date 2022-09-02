import React, { useEffect } from 'react'
import { useProduct } from './stores/productSlice'
import { Route, Routes } from 'react-router-dom'
// component
import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
// pages
import Home from './pages/Home/Home'
import ProductList from './pages/ProductList/ProductList'
import Cart from './pages/Cart/Cart';

import ProductDetail from './pages/ProductList/ProductDetail/ProductDetail'
import PurchasedList from './pages/ProductList/PurchaseList/PurchasedList'
import SerchedProductList from './pages/ProductList/SerchedProduct/SerchedProductList'
import Favorite from './pages/Favorite'

const App = () => {
  const { onModal, productList } = useProduct()

  return (
    <>
      {onModal && <Modal />}
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/productlist/:id" element={<ProductDetail />} />
        <Route path="/purchaseList" element={<PurchasedList />} />
        <Route path="/serchedproduct" element={<SerchedProductList />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
