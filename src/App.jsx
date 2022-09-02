import React, { useEffect } from 'react'
import { useProduct } from './stores/productSlice'
import { Route, Routes } from 'react-router-dom'
// component
import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'
// pages
import Home from './pages/Home/Home'
import ProductList from './pages/ProductList/ProductList'
import ProductDetail from './pages/ProductList/ProductDetail/ProductDetail'
import PurchasedList from './pages/ProductList/PurchaseList/PurchasedList'
import SerchedProductList from './pages/ProductList/SerchedProduct/SerchedProductList'
import Favorite from './pages/Favorite'
import styled from 'styled-components'

const App = () => {
  const { onModal, productList } = useProduct()

  return (
    <>
      {onModal && <Modal />}
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productlist/:id" element={<ProductDetail />} />
        <Route path="/purchaseList" element={<PurchasedList />} />
        <Route path="/serchedproduct" element={<SerchedProductList />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
