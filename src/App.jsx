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
import Favorite from './pages/Favorite'
const App = () => {
  const { onModal, productList } = useProduct()

  useEffect(() => {
    console.log(productList)
  }, [])

  return (
    <>
      {onModal && <Modal />}
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
