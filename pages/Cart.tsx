"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQty,
  getCartTotal,
  removeItem,
  selectCartAll,
  selectCartItems,
} from "../store/reducers/cartReducer";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const configValue: string = process.env.stripe_public_key as string;
const stripePromise = loadStripe(configValue);

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const { cartTotalAmount } = useSelector(selectCartAll);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cartItems]);

  const handleIncrement = (item: any) => {
    dispatch(addToCart(item));
  };

  const handleDecrement = (item: any) => {
    dispatch(decreaseQty(item));
  };

  const handleRemove = (item: any) => {
    dispatch(removeItem(item));
  };

  const createCheckOut = async () => {
    const stripe = await stripePromise;

    // Call the backend to create a checkout session
    const checkOutSession = await axios.post("/api/create-checkout-session", {
      cartItems: cartItems,
      email: "suvinjavax@gmail.com",
    });

    // Redirect user/customer to stripe checkout
    const result = await stripe?.redirectToCheckout({
      sessionId: checkOutSession.data.id,
    });

    if (result?.error) {
      alert(result?.error.message);
    } else {
    }
  };

  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: `url('assets/img/bg/cta_bg_1.jpg')` }}
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
      <div
        className="as-cart-wrapper space-top space-extra-bottom"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          {/* <div className="woocommerce-notices-wrapper">
            <div className="woocommerce-message">Shipping costs updated.</div>
          </div> */}
          <div className="woocommerce-cart-form">
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
                {cartItems?.length > 0 ? (
                  <>
                    {cartItems?.map((item: any, index: any) => (
                      <tr className="cart_item">
                        <td data-title="Product">
                          <img
                            width={91}
                            height={91}
                            src="assets/img/cart/cart_1_1.jpg"
                            alt="Image"
                          />
                        </td>
                        <td data-title="Name">
                          <a
                            className="cart-productname"
                            href="shop-detailis.html"
                          >
                            {item?.name}
                          </a>
                        </td>
                        <td data-title="Price">
                          <span className="amount">
                            <bdi>
                              <span>$</span>
                              {item?.price}
                            </bdi>
                          </span>
                        </td>
                        <td data-title="Quantity">
                          <div className="quantity">
                            <button
                              disabled={item.cartQuantity === 1 ? true : false}
                              className="quantity-minus qut-btn"
                              onClick={() => handleDecrement(item)}
                            >
                              <i className="fa fa-minus" />
                            </button>{" "}
                            <input
                              readOnly
                              type="number"
                              className="qty-input"
                              value={item?.cartQuantity}
                              min={1}
                              max={99}
                            />{" "}
                            <button
                              onClick={() => handleIncrement(item)}
                              className="quantity-plus qut-btn"
                            >
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                        </td>
                        <td data-title="Total">
                          <span className="amount">
                            <bdi>
                              <span>$</span>
                              {item?.price * item?.cartQuantity}
                            </bdi>
                          </span>
                        </td>
                        <td data-title="Remove">
                          <span
                            onClick={() => handleRemove(item)}
                            className="remove"
                          >
                            <i className="fal fa-trash-alt" />
                          </span>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={6} className="actions">
                        <Link href="/Shop" className="as-btn">
                          Continue Shopping
                        </Link>
                      </td>
                    </tr>
                  </>
                ) : (
                  <td colSpan={12}>
                    <h6
                      style={{
                        fontStyle: "italic",
                      }}
                    >
                      there's no items to show{" "}
                    </h6>
                  </td>
                )}
              </tbody>
            </table>
          </div>
          {cartItems.length > 0 ? (
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
                            <span>$</span>
                            {cartTotalAmount}
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
                                <option value="BD">Bangladesh</option>
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
                  <button
                    className="as-btn"
                    role="link"
                    onClick={createCheckOut}
                  >
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button className="as-btn" onClick={() => router.push("/Shop")}>
              Browse Products{" "}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
