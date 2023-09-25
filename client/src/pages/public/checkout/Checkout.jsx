import React, { useEffect, useState } from 'react'
import Footer from '../../../components/user/footer/Footer'
import HeaderWithNavbar from '../../../components/user/header/HeaderWithNavbar'
import Banner from '../../../components/user/banner/Banner'
import axios from 'axios';
import { formatMoney } from '../../../utils/formatData';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import HeaderCopy from '../../../components/user/header/HeaderCopy';

export default function Checkout({ title }) {
    const navigate = useNavigate();
    const [listProduct, setListProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [userOrder, setUserOrder] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        address: "",
        note: "",
    });
    const [cart, setCart] = useState([]);
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    console.log(userLogin);
    const getCartUser = async () => {
        try {
            const cartsDB = await axios.get("http://localhost:3000/carts")
            const userLoginCart = cartsDB.data.find(c => c.userId === userLogin.id);
            console.log(userLoginCart);
            if (userLoginCart) {
                const productOfCartUser = await Promise.all(
                    userLoginCart.cartDetails.map(async (item) => {
                        //lay thong tin san pham dua tren productId
                        const response = await axios.get(`http://localhost:3000/products/${item.productId}`);
                        console.log(response.data);
                        const datas = response.data;
                        return { ...item, datas }
                    })
                )
                setCart(productOfCartUser)
                console.log(productOfCartUser, "phan tu cua cart nguoi dung");
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCartUser()
    }, [])

    //ham tinh tong tien============================================================
    const total = cart.reduce((prevValue, currentValue) => {
        return prevValue += currentValue.datas.price * currentValue.quantity;
    }, 0)

    //lay du lieu totalPrice============================================================
    useEffect(() => {
        if (total) {
            setTotalPrice(total);
        }
    }, [total])

    //ham lay du lieu tu o input-thong tin dat hang
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUserOrder({ ...userOrder, [name]: value });
    }

    //ham checkout va xu ly thong tin don hang
    const handleCheckout = async () => {
        try {
            if (userOrder.fullname && userOrder.email && userOrder.phoneNumber && userOrder.address) {
                const cartsDB = await axios.get("http://localhost:3000/carts")
                const userLoginCart = cartsDB.data.find(c => c.userId === userLogin.id);
                // console.log(userLoginCart);
                if (userLoginCart) {
                    const list = await Promise.all(
                        userLoginCart.cartDetails.map(async (item) => {
                            let total = 0;
                            // console.log(item.productId);
                            //kiem tra vi tri cua tung san pham o gio hang nguoi dung trong mang products tren DB=>giam so luong tuong ung so luong mua
                            const products = await axios.get("http://localhost:3000/products");
                            const indexProduct = products.data.findIndex(p => p.id === item.productId);
                            // console.log(indexProduct);
                            products.data[indexProduct].stock -= item.quantity;
                            // console.log(products.data[indexProduct]);
                            return { ...item }
                        })
                    )
                    setCart([]);
                    console.log(cart);
                    // userLogin.cartDetails = cart;
                    //cap nhat gio hang len server
                    await axios.delete(`http://localhost:3000/carts/${userLoginCart.id}`);
                    // console.log((userOrder));
                    const newOrder = {
                        cart,
                        userOrder,
                        userLogin,
                        order_at: new Date().toLocaleString(),
                        status: 1,
                        totalPrice: totalPrice,
                        userId: userLogin.id,
                    }
                    console.log(newOrder);
                    await axios.post("http://localhost:3000/orders", newOrder)
                    notification.success({
                        message: "Thông báo báo",
                        description: "Đặt hàng thành công"
                    })
                    localStorage.removeItem("cartLocal");
                    navigate("/")
                }
            } else {
                notification.warning({
                    message: "Cảnh báo",
                    description: "Vui lòng nhập đủ thông tin giao hàng"
                })
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            {/* <HeaderWithNavbar /> */}
            <HeaderCopy />
            <Banner title={title} />
            {/* Checkout Start */}
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <div className="mb-4">
                            <h4 className="font-weight-semi-bold mb-4">Thông tin giao hàng</h4>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>Họ và tên *</label>
                                    <input className="form-control" type="text" onChange={handleChangeInput} name='fullname' />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>E-mail *</label>
                                    <input onChange={handleChangeInput}
                                        className="form-control"
                                        type="email" name='email'
                                        required
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Số điện thoại *</label>
                                    <input required
                                        onChange={handleChangeInput}
                                        className="form-control"
                                        type="number" name='phoneNumber'
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Địa chỉ *</label>
                                    <input required placeholder='số nhà/đường/phường-xã/quận-huyện/thành phố'
                                        onChange={handleChangeInput}
                                        className="form-control"
                                        type="text" name='address'
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label className='form-label'>Ghi chú</label>
                                    <textarea className="form-control" placeholder="Nội dung ghi chú" cols="60" rows="3" onChange={handleChangeInput} name='note' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-secondary mb-5">
                            <div className="card-header card-header border-0">
                                <h4 className="font-weight-semi-bold m-0">Đơn hàng</h4>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5 className="font-weight-medium mb-3">Sản phẩm</h5>
                                    <h5>Thành tiền</h5>
                                </div>
                                <hr className="mt-0" />
                                {cart.map((c, index) => (
                                    <div key={index} className="d-flex justify-content-between">
                                        <p>{c.datas.product_name}</p>
                                        <p>{formatMoney(c.datas.price * c.quantity)}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="card-footer border-none bg-transparent">
                                <div className="d-flex justify-content-between mt-1">
                                    <h5 className="font-weight-bold">Tổng </h5>
                                    <h5 className="font-weight-bold ">{formatMoney(total)}</h5>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-transparent">
                            <button className="btn btn-lg btn-block btn-primary font-weight-bold my-2 py-3 rounded" onClick={handleCheckout}>
                                ĐẶT HÀNG
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Checkout End */}
            <Footer />
        </>

    )
}
