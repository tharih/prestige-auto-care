"use client";
import React, { useEffect, useMemo, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import styles from "./Header.module.css";
import { menuItems } from "../../data/menuItems";
import SideBarItems from "./SideBarItems";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import {
  getCartTotal,
  removeItem,
  selectCartItems,
} from "../../store/reducers/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import { urlFor } from "../../client";
import { useSession, signIn, signOut } from "next-auth/react";
import { selectUser } from "../../store/reducers/userReducer";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const user = useSelector(selectUser);
  // @ts-ignore
  const { data: session, status } = useSession();
  const cart =
    typeof window !== "undefined"
      ? // @ts-ignore
        JSON.parse(localStorage.getItem("cart"))
      : false;
  const dispatch = useDispatch();
  const handleShowCart = () => {
    setShow(true);
  };
  const handleCloseCart = () => {
    setShow(false);
  };

  const handleShowMobileMenu = () => {
    setShowMobileMenu(true);
  };
  const handleCloseMobileMenu = () => {
    setShowMobileMenu(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  }, [loading]);

  const handleRemove = (item: any) => {
    dispatch(removeItem(item));
    dispatch(getCartTotal());
  };

  return (
    <>
      <div
        className={`sidemenu-wrapper d-none d-lg-block ${show ? "show" : ""}`}
      >
        <div className="sidemenu-content">
          <button onClick={handleCloseCart} className="closeButton sideMenuCls">
            <i className="fa fa-times" />
          </button>
          <div className="widget woocommerce widget_shopping_cart">
            <h3 className="widget_title">Shopping cart</h3>
            <div className="widget_shopping_cart_content">
              <ul className="woocommerce-mini-cart cart_list product_list_widget">
                {cart &&
                  cart.map((item: any, index: any) => (
                    <li
                      key={index}
                      className="woocommerce-mini-cart-item mini_cart_item"
                    >
                      <Link
                        href="#"
                        onClick={() => handleRemove(item)}
                        className="remove remove_from_cart_button"
                      >
                        <i className="fa fa-times" />
                      </Link>{" "}
                      <Link href="#">
                        <img src={urlFor(item?.image).url()} alt="Cart Image" />
                        {item?.name}
                      </Link>{" "}
                      <span className="quantity">
                        {item?.cartQuantity} ×{" "}
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          {item?.price}
                        </span>
                      </span>
                    </li>
                  ))}
              </ul>
              <p className="woocommerce-mini-cart__total total">
                <strong>Subtotal:</strong>{" "}
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  318.00
                </span>
              </p>
              <p className="woocommerce-mini-cart__buttons buttons">
                <Link href="Cart" className="as-btn wc-forward">
                  View cart
                </Link>{" "}
                <Link href="Checkout" className="as-btn checkout wc-forward">
                  Checkout
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="popup-search-box d-none d-lg-block">
        <button className="searchClose">
          <i className="fal fa-times" />
        </button>
        <form action="#">
          <input type="text" placeholder="What are you looking for" />{" "}
          <button type="submit">
            <i className="fal fa-search" />
          </button>
        </form>
      </div>
      <div
        className={`as-menu-wrapper ${
          showMobileMenu ? "as-body-visible as-menu-area" : ""
        }`}
      >
        <div className="as-menu-area text-center">
          <button onClick={handleCloseMobileMenu} className="as-menu-toggle">
            <i className="fal fa-times" />
          </button>
          <div className="mobile-logo">
            <Link href="/">
              <img src="assets/img/logo1.png" alt="Prestige Auto Care" />
            </Link>
          </div>
          <div className="as-mobile-menu">
            <ul>
              {menuItems?.map((item, index) => (
                <SideBarItems item={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <header className="as-header header-layout3">
        <div className="header-top-area">
          {loading && (
            <>
              {/* <WhatsAppWidget
                class=""
                message="Hello!What can we do for you?"
                phoneNumber="+94768679313"
                sendButton="Send Message"
              /> */}
              <FloatingWhatsApp
                style={{
                  backgroundColor: "#f5222d",
                }}
                allowClickAway
                buttonStyle={{ backgroundColor: "#f5222d", bottom: "50%" }}
                darkMode
                notificationSound
                phoneNumber={"+94768679313"}
                accountName={"Prestige Auto Care"}
                avatar="assets/img/PrestigeLogoWhite.png"
              />
            </>
          )}
          <div className="header-top">
            <div className="container">
              <div className="row justify-content-center justify-content-md-between align-items-center">
                <div className="col-auto">
                  <p className="header-notice d-none d-lg-block">
                    <Typewriter
                      words={["Welcome To Prestige Auto Care"]}
                      cursorStyle="|"
                      cursor
                      loop={true}
                      delaySpeed={2000}
                    />
                  </p>
                </div>
                <div className="col-auto">
                  <div className="header-social">
                    <span className="social-title">Follow Us:</span>{" "}
                    <Link href="#">
                      <i className="fab fa-facebook-f" />
                    </Link>{" "}
                    <Link href="#">
                      <i className="fab fa-twitter" />
                    </Link>{" "}
                    <Link href="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>{" "}
                    <Link href="#">
                      <i className="fab fa-google-plus-g" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-auto">
                  <div className="logo-style2">
                    <Link href="/">
                      <img
                        src="assets/img/PrestigeLogoWhite.png"
                        alt="PrestigeAutoCare"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <div className="row align-items-center justify-content-center justify-content-md-end justify-content-lg-between">
                        <div className="col-auto d-none d-lg-block">
                          <div className="header-info">
                            <div className="header-info_icon">
                              <i className="fal fa-envelope-open-text" />
                            </div>
                            <div className="media-body">
                              <span className="header-info_label">
                                Email Us
                              </span>
                              <div className="header-info_link">
                                <Link href="mailto:prestigeautocare@gmail.com">
                                  prestige@gmail.com
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                          <div className="header-info">
                            <div className="header-info_icon">
                              <i className="fal fa-headset" />
                            </div>
                            <div className="media-body">
                              <span className="header-info_label">
                                Call us 24/7
                              </span>
                              <div className="header-info_link">
                                <Link href="tel:+61478033023">
                                  +61 478 033 023
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto d-none d-xl-block">
                          <div className="header-info">
                            <div className="header-info_icon">
                              <i className="fal fa-clock" />
                            </div>
                            <div className="media-body">
                              <span className="header-info_label">
                                Open Hours
                              </span>
                              <div className="header-info_link">
                                <span>Mon-Sat 8am -6pm</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="header-button">
                        {/* <button
                          type="button"
                          className="icon-btn searchBoxToggler"
                        >
                          <i className="fal fa-search" />
                        </button>{" "} */}

                        <Link
                          href="/Login"
                          className="icon-btn d-none d-md-inline-block"
                        >
                          {user ? (
                            <img
                              // @ts-ignore
                              src={user?.user?.image}
                              width={50}
                              height={50}
                              style={{
                                borderRadius: "100px",
                              }}
                              // @ts-ignore
                              alt={session.user?.name?.slice(0, 1)}
                            />
                          ) : (
                            <i className="fal fa-user" />
                          )}
                        </Link>
                        {/* @ts-ignore */}
                        {session ? (
                          <span
                            style={{
                              cursor: "pointer",
                            }}
                            // @ts-ignore
                            onClick={signOut}
                          >
                            sign out
                          </span>
                        ) : (
                          <span>Sign In</span>
                        )}
                        <button
                          onClick={handleShowMobileMenu}
                          className="as-menu-toggle d-inline-block d-lg-none"
                        >
                          <i className="fal fa-bars" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="sticky-active">
            <div className="menu-area">
              <div className="container">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <nav className="main-menu menu-style1 d-none d-lg-block">
                      <ul>
                        <li className="">
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="About">About</Link>
                        </li>
                        <li className="">
                          <Link href="Services">Service</Link>
                        </li>
                        <li className="">
                          <Link href="Shop">Shop</Link>
                        </li>
                        {/* <li className=" mega-menu-wrap">
                          <Link href="Price">Price</Link>
                        </li> */}
                        <li>
                          <Link href="Contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-auto">
                    <div className="d-flex align-items-center">
                      <Link
                        href="https://goo.gl/maps/5BEL8ygWqYBDy6Bq7"
                        className="header-link-btn"
                      >
                        <FaMapMarkerAlt
                          color="#fefefe"
                          size={24}
                          style={{ marginRight: 10 }}
                        />
                        Office Location
                      </Link>{" "}
                      <button
                        onClick={handleShowCart}
                        className="simple-icon ms-4 sideMenuToggler"
                      >
                        <i className="fal fa-bars" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
