import React from 'react'

type Props = {}

const Cart = (props: Props) => {
  return (
    <>
  <div
    className="breadcumb-wrapper"
    style={{ backgroundImage: `url('assets/img/bg/cta_bg_1.jpg')`}}
  >
    <div className="container z-index-common">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Shopping Cart</h1>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Shopping Cart</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="as-cart-wrapper space-top space-extra-bottom" style={{ backgroundColor: "white" }}>
    <div className="container">
      <div className="woocommerce-notices-wrapper">
        <div className="woocommerce-message">Shipping costs updated.</div>
      </div>
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
                    <i className="fa fa-minus" />
                  </button>{" "}
                  <input
                    type="number"
                    className="qty-input"
                    defaultValue={1}
                    min={1}
                    max={99}
                  />{" "}
                  <button className="quantity-plus qut-btn">
                    <i className="fa fa-plus" />
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
                    <i className="fa fa-minus" />
                  </button>{" "}
                  <input
                    type="number"
                    className="qty-input"
                    defaultValue={1}
                    min={1}
                    max={99}
                  />{" "}
                  <button className="quantity-plus qut-btn">
                    <i className="fa fa-plus" />
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
                    <i className="fa fa-minus" />
                  </button>{" "}
                  <input
                    type="number"
                    className="qty-input"
                    defaultValue={1}
                    min={1}
                    max={99}
                  />{" "}
                  <button className="quantity-plus qut-btn">
                    <i className="fa fa-plus" />
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
              <td colSpan={6} className="actions">
                <div className="as-cart-coupon">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Coupon Code..."
                  />{" "}
                  <button type="submit" className="as-btn">
                    Apply Coupon
                  </button>
                </div>
                <button type="submit" className="as-btn">
                  Update cart
                </button>
                <a href="shop.html" className="as-btn">
                  Continue Shopping
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="row justify-content-end">
        <div className="col-md-8 col-lg-7 col-xl-6">
          <h2 className="h4 summary-title">Cart Totals</h2>
          <table className="cart_totals">
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                <td data-title="Cart Subtotal">
                  <span className="amount">
                    <bdi>
                      <span>$</span>47
                    </bdi>
                  </span>
                </td>
              </tr>
              <tr className="shipping">
                <th>Shipping and Handling</th>
                <td data-title="Shipping and Handling">
                  <ul className="woocommerce-shipping-methods list-unstyled">
                    <li>
                      <input
                        type="radio"
                        id="free_shipping"
                        name="shipping_method"
                        className="shipping_method"
                      />{" "}
                      <label htmlFor="free_shipping">Free shipping</label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="flat_rate"
                        name="shipping_method"
                        className="shipping_method"
                        defaultChecked="checked"
                      />{" "}
                      <label htmlFor="flat_rate">Flat rate</label>
                    </li>
                  </ul>
                  <p className="woocommerce-shipping-destination">
                    Shipping options will be updated during checkout.
                  </p>
                  <form action="#" method="post">
                    <a href="#" className="shipping-calculator-button">
                      Change address
                    </a>
                    <div className="shipping-calculator-form">
                      <p className="form-row">
                        <select className="form-select">
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="BD" selected="selected">
                            Bangladesh
                          </option>
                        </select>
                      </p>
                      <p>
                        <select className="form-select">
                          <option value="">Select an option…</option>
                          <option value="BD-05">Bagerhat</option>
                          <option value="BD-01">Bandarban</option>
                          <option value="BD-02">Barguna</option>
                          <option value="BD-06">Barishal</option>
                        </select>
                      </p>
                      <p className="form-row">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Town / City"
                        />
                      </p>
                      <p className="form-row">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Postcode / ZIP"
                        />
                      </p>
                      <p>
                        <button className="as-btn">Update</button>
                      </p>
                    </div>
                  </form>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="order-total">
                <td>Order Total</td>
                <td data-title="Total">
                  <strong>
                    <span className="amount">
                      <bdi>
                        <span>$</span>47
                      </bdi>
                    </span>
                  </strong>
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="wc-proceed-to-checkout mb-30">
            <a href="checkout.html" className="as-btn">
              Proceed to checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Cart