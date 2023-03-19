import Link from 'next/link'
import React from 'react'

type Props = {}

const Orders = (props: Props) => {
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
                <th className="cart-col-image">Image</th>
                <th className="cart-col-productname">Product Name</th>
                <th className="cart-col-price">Price</th>
                <th className="cart-col-quantity">Quantity</th>
                <th className="cart-col-total">Total</th>
                <th className="cart-col-remove">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr className="cart_item">
                <td data-title="Product">
                  <a className="cart-productimage" href="shop-detailis.html">
                    <img
                      width={91}
                      height={91}
                      src="assets/img/cart/cart_1_1.jpg"
                      alt="Image"
                    />
                  </a>
                </td>
                <td data-title="Name">
                  <a className="cart-productname" href="shop-detailis.html">
                    Car Engine Plug
                  </a>
                </td>
                <td data-title="Price">
                  <span className="amount">
                    <bdi>
                      <span>$</span>18
                    </bdi>
                  </span>
                </td>
                <td data-title="Quantity">
                  <div className="quantity">
                    <button className="quantity-minus qut-btn">
                      <i className="far fa-minus" />
                    </button>{" "}
                    <input
                      type="number"
                      className="qty-input"
                      defaultValue={1}
                      min={1}
                      max={99}
                    />{" "}
                    <button className="quantity-plus qut-btn">
                      <i className="far fa-plus" />
                    </button>
                  </div>
                </td>
                <td data-title="Total">
                  <span className="amount">
                    <bdi>
                      <span>$</span>18
                    </bdi>
                  </span>
                </td>
                <td data-title="Remove">
                  <a href="#" className="remove">
                    <i className="fal fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr className="cart_item">
                <td data-title="Product">
                  <a className="cart-productimage" href="shop-detailis.html">
                    <img
                      width={91}
                      height={91}
                      src="assets/img/cart/cart_1_2.jpg"
                      alt="Image"
                    />
                  </a>
                </td>
                <td data-title="Name">
                  <a className="cart-productname" href="shop-detailis.html">
                    Car Air Filter
                  </a>
                </td>
                <td data-title="Price">
                  <span className="amount">
                    <bdi>
                      <span>$</span>18
                    </bdi>
                  </span>
                </td>
                <td data-title="Quantity">
                  <div className="quantity">
                    <button className="quantity-minus qut-btn">
                      <i className="far fa-minus" />
                    </button>{" "}
                    <input
                      type="number"
                      className="qty-input"
                      defaultValue={1}
                      min={1}
                      max={99}
                    />{" "}
                    <button className="quantity-plus qut-btn">
                      <i className="far fa-plus" />
                    </button>
                  </div>
                </td>
                <td data-title="Total">
                  <span className="amount">
                    <bdi>
                      <span>$</span>18
                    </bdi>
                  </span>
                </td>
                <td data-title="Remove">
                  <a href="#" className="remove">
                    <i className="fal fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr className="cart_item">
                <td data-title="Product">
                  <a className="cart-productimage" href="shop-detailis.html">
                    <img
                      width={91}
                      height={91}
                      src="assets/img/cart/cart_1_3.jpg"
                      alt="Image"
                    />
                  </a>
                </td>
                <td data-title="Name">
                  <a className="cart-productname" href="shop-detailis.html">
                    CSK Red Wheel
                  </a>
                </td>
                <td data-title="Price">
                  <span className="amount">
                    <bdi>
                      <span>$</span>18
                    </bdi>
                  </span>
                </td>
                <td data-title="Quantity">
                  <div className="quantity">
                    <button className="quantity-minus qut-btn">
                      <i className="far fa-minus" />
                    </button>{" "}
                    <input
                      type="number"
                      className="qty-input"
                      defaultValue={1}
                      min={1}
                      max={99}
                    />{" "}
                    <button className="quantity-plus qut-btn">
                      <i className="far fa-plus" />
                    </button>
                  </div>
                </td>
                <td data-title="Total">
                  <span className="amount">
                    <bdi>
                      <span>$</span>18
                    </bdi>
                  </span>
                </td>
                <td data-title="Remove">
                  <a href="#" className="remove">
                    <i className="fal fa-trash-alt" />
                  </a>
                </td>
              </tr>
              <tr>
               
              </tr>
            </tbody>
          </table>
        </form>
       
      </div>
    </div>
  </>
  
  )
}

export default Orders