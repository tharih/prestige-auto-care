import Link from 'next/link'
import React, { useEffect, useState } from "react";
import { fetchOrder } from '../utils/fetchOrder';

type Props = {}

const Order = (props: Props) => {
  const [order, setOrder] = useState<any>([])
  const [loading, setLoading] = useState(false);

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
                <th className="cart-col-productname">Order Item</th>
                <th className="cart-col-price">Total Price</th>
                <th className="cart-col-productname">Payment</th>
                <th className="cart-col-productname">Delivery</th>
                <th className="cart-col-quantity">Quantity</th>
                {/* <th className="cart-col-total">Total</th> */}
                {/* <th className="cart-col-remove">Actions</th> */}
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
                <td data-title="Name">
                  <p className="cart-productname">
                    {order?.customerName}
                  </p>
                </td>
               
                <td data-title="Quantity">
                  <div className="quantity">
                  <p className="cart-quantity">
                    {order?.totalQuantity}
                  </p>
                    {/* <button className="quantity-minus qut-btn">
                      <i className="far fa-minus" />
                    </button>{" "} */}
                    {/* <input
                      type="number"
                      className="qty-input"
                      defaultValue={1}
                      min={1}
                      max={99}
                    />{" "} */}
                    {/* <button className="quantity-plus qut-btn">
                      <i className="far fa-plus" />
                    </button> */}
                  </div>
                </td>
                <td data-title="Price">
                  <span className="amount">
                    <bdi>
                      <span>$</span>{order?.totalPrice}
                    </bdi>
                  </span>
                </td>
                <td data-title="Total">
                <p className="cart-productname">
                    {order?.IsPaid}
                  </p>
                </td>
                {/* <td data-title="Remove">
                  <a href="#" className="remove">
                    <i className="fal fa-trash-alt" />
                  </a>
                </td> */}
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