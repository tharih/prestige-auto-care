import Link from 'next/link'
import {  useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";
import { AiFillEye, AiOutlineDelete } from 'react-icons/ai';
import { fetchOrder } from '../utils/fetchOrder';

type Props = {}

const Order = (props: Props) => {
  const [order, setOrder] = useState<any>([])
  const [loading, setLoading] = useState(false);
  const route = useRouter()

  
  const getOrder = async () => {
    const order = await fetchOrder();
    setOrder(order)
    console.log(order);
  }
  
  useEffect(() => {
    setLoading(true);
    
    getOrder();
    setLoading(false);
    return () => {
      getOrder();
      
    };
  }, []);
  

  if (loading) return <div>Loading...</div>;
  return (
    <>
    <div
      className="breadcumb-wrapper"
      style={{ backgroundImage: `url('assets/img/bg/cta_bg_1.jpg')` }}
    >
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Orders</h1>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
            <li>
                  <Link href="/">Home</Link>
                </li>
              <li>Orders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="as-cart-wrapper space-top space-extra-bottom">
      <div className="container">
        {/* <div className="woocommerce-notices-wrapper">
          <div className="woocommerce-message">Shipping costs updated.</div>
        </div> */}
        <form action="#" className="woocommerce-cart-form">
          <table className="cart_table">
            <thead>
              <tr>
                {/* <th className="cart-col-image">Image</th> */}
                <th className="cart-col-productname">Customer Name</th>
                {/* <th className="cart-col-productname">Order Item</th> */}
                <th className="cart-col-quantity">Quantity</th>
                <th className="cart-col-price">Total Price</th>
                <th className="cart-col-productname">Payment</th>
                <th className="cart-col-productname">Delivery</th>
                {/* <th className="cart-col-total">Total</th> */}
                <th className="cart-col-remove">Actions</th>
              </tr>
            </thead>
            {order?.map((order: any, index:any) => (

            <tbody key={index}>
              <tr className="cart_item">
                {/* <td data-title="Product">
                  <a className="cart-productimage" href="shop-detailis.html">
                    <img
                      width={91}
                      height={91}
                      src="assets/img/cart/cart_1_1.jpg"
                      alt="Image"
                    />
                  </a>
                </td> */}
                
                {/* order items */}
                <td >
                  <p className="cart-productname">
                    {order?.customerName}
                  </p>
                </td>
               
                <td >
                  <div className="quantity">
                  <p className="cart-quantity">
                    {order?.totalQuantity}
                  </p>
                  </div>
                </td>

                <td >
                  <div className="quantity">
                  <p className="cart-quantity">
                    {order?.totalPrice}
                  </p>
                  </div>
                </td>

               
                
                <td >
                
                    {order?.IsPaid === true? <p className="cart-productname"> Paid
                  </p>: <p className="cart-productname"> Not Paid
                  </p>}
                </td>

                <td >
                
                {order?.IsDelivered === true? <p className="cart-productname"> Delivered
              </p>: <p className="cart-productname"> Not Delivered
              </p>}
            </td>

                <td>
                 
                   {/* <AiOutlineDelete /> */}
                  
                  <Link href={`/orderDetail/${order._id}`}>
                  
                    <AiFillEye  
                    
                    />
                  </Link>
                  
                  
                  
                </td>
              </tr>
              
               
              
            </tbody>
            ))}
          </table>
        </form>
       
      </div>
    </div>
  </>
  
  )
}

export default Order