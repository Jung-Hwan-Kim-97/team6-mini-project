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
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
