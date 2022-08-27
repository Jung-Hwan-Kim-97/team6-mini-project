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
const App = () => {
  const { onModal } = useProduct()

  return (
    <>
      {onModal && <Modal />}
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
