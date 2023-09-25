import React, { useEffect } from 'react'
import HomePage from './pages/public/homePage/Index'
import ListProduct from './pages/public/listProduct/ListProduct'
import ProductDetail from './pages/public/product-detail/ProductDetail'
import Contact from './pages/public/contact/Contact'
import Blog from './pages/public/blog/Blog'
import Cart from './pages/public/cart/Cart'
import Register from './pages/public/register/Register'
import Login from './pages/public/login/Login'
import { Route, Routes, useLocation } from 'react-router-dom'
import AdminHomePage from './pages/private/admin-homepage/AdminHomePage'
import PrivateRouter from './pages/private/private-router/PrivateRouter'
import ManagerUser from './pages/private/manager-users/ManagerUser';
import ManagerProduct from './pages/private/manager-product/ManagerProduct';
import ManagerOrder from './pages/private/manager-order/ManagerOrder';
import ManagerCategory from './pages/private/manager-category/ManagerCategory';
import NotFound from './components/base/notFound/NotFound.jsx';
import Wishlist from './pages/public/wishlist/Wishlist'
import Checkout from './pages/public/checkout/Checkout'
import Order from './pages/public/order/Order'
import Profile from './pages/public/profile/Profile'

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <>
      <Routes>
        {/* Router public for everyone */}
        <Route path="/" element={<HomePage />} />
        <Route path="/list-product" element={<ListProduct title='Sản phẩm' />} />
        <Route path="/product-detail/:id" element={<ProductDetail title='Chi tiết sản phẩm' />} />
        <Route path="/contact" element={<Contact title='Liên hệ' />} />
        <Route path="/blog" element={<Blog title='Blog' />} />
        <Route path="/cart" element={<Cart title='Giỏ hàng của tôi' />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile title='Tài khoản của tôi' />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/order-history" element={<Order title='Lịch sử đặt hàng' />} />
        <Route path="/checkout" element={<Checkout title='Đặt hàng' />} />

        {/* Router phai dang nhap dung role moi co the truy cap duoc */}

        <Route path="/admin" element={<PrivateRouter />} >
          <Route path='home' index element={<AdminHomePage />} />
          <Route path="manager-user" element={<ManagerUser />} />
          <Route path="manager-product" element={<ManagerProduct />} />
          <Route path="manager-order" element={<ManagerOrder />} />
          <Route path="manager-category" element={<ManagerCategory />} />
        </Route>
        {/* Router bao loi */}
        <Route to="*" element={<NotFound />} />
      </Routes>

      {/* <LoginLight /> */}
      {/* <RegisterLight /> */}
      {/* <AdminHomePage /> */}

      {/* <NotFound /> */}
    </>
  )
}


