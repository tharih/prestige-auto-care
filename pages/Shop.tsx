import Link from 'next/link'
import React from 'react'

type Props = {}

const Shop = (props: Props) => {
  return (
    <>
    <div id="QuickView" className="white-popup mfp-hide" >
      <div className="container bg-white">
        <div className="row gx-60">
          <div className="col-lg-6">
            <div className="product-big-img">
              <div className="img">
                <img
                  src="assets/img/product/product_details_1_1.jpg"
                  alt="Product Image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="product-about">
              <p className="price">
                $180.85<del>$350.99</del>
              </p>
              <h2 className="product-title">Aero Rear Diffuser</h2>
              <div className="product-rating">
                <div
                  className="star-rating"
                  role="img"
                  aria-label="Rated 5.00 out of 5"
                >
                  <span style={{ width: "100%" }}>
                    Rated <strong className="rating">5.00</strong> out of 5 based
                    on
                    <span className="rating">1</span> customer rating
                  </span>
                </div>
                <Link href="shop-details.html" className="woocommerce-review-link">
                  (<span className="count">3</span>
                  customer reviews)
                </Link>
              </div>
              <p className="text">
                Syndicate customized growth strategies prospective human capital
                leverage other's optimal e-markets without transparent catalysts
                for change.
              </p>
              <div className="checklist style3">
                <ul>
                  <li>Lifetime structural, one year face finish warranty</li>
                  <li>Mapped from “Center Caps” under ” tment” tab</li>
                  <li>Fully copatible with OEM equimpent</li>
                </ul>
              </div>
              <div className="actions">
                <div className="quantity">
                  <input
                    type="number"
                    className="qty-input"
                    step={1}
                    min={1}
                    max={100}
                    name="quantity"
                    defaultValue={1}
                    title="Qty"
                  />{" "}
                  <button className="quantity-plus qty-btn">
                    <i className="fa fa-chevron-up" />
                  </button>{" "}
                  <button className="quantity-minus qty-btn">
                    <i className="fa fa-chevron-down" />
                  </button>
                </div>
                <button className="as-btn">Add to Cart</button>
              </div>
              <div className="product_meta">
                <span className="sku_wrapper">
                  SKU: <span className="sku">wheel-fits-chevy-camaro</span>
                </span>{" "}
                <span className="posted_in">
                  Category:
                  <Link href="shop.html" rel="tag">
                    Tires &amp; Wheels
                  </Link>
                </span>{" "}
                <span>
                  Tags: <Link href="shop.html">automotive parts</Link>
                  <Link href="shop.html">wheels</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <button title="Close (Esc)" type="button" className="mfp-close">
          ×
        </button>
      </div>
    </div>
    <div
      className="breadcumb-wrapper"
      data-bg-src="assets/img/breadcumb/breadcumb-bg.jpg"
      style={{ backgroundImage: `url('assets/img/breadcumb/breadcumb-bg.jpg')` }}

    >
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Our Products</h1>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
              <li>
                <Link href="index.html">Home</Link>
              </li>
              <li>Our Products</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section className="as-product-wrapper space-top space-extra-bottom" style={{backgroundColor:"white"}}>
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-9 col-lg-8">
            <div className="as-sort-bar">
              <div className="row justify-content-between align-items-center">
                <div className="col-md">
                  <p className="woocommerce-result-count">
                    Showing 1–12 of 16 results
                  </p>
                </div>
                <div className="col-md-auto">
                  <form className="woocommerce-ordering" method="get">
                    <select
                      name="orderby"
                      className="orderby"
                      aria-label="Shop order"
                    >
                      <option value="menu_order" >
                        Default Sorting
                      </option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by latest</option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">
                        Sort by price: high to low
                      </option>
                    </select>
                  </form>
                </div>
                <div className="col-md-auto">
                  <div className="nav" role="tablist">
                    <Link
                      href="#"
                      className="active"
                      id="tab-shop-grid"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-grid"
                      role="tab"
                      aria-controls="tab-grid"
                      aria-selected="true"
                    >
                      <i className="fas fa-th" />
                    </Link>{" "}
                    <Link
                      href="#"
                      id="tab-shop-list"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-list"
                      role="tab"
                      aria-controls="tab-grid"
                      aria-selected="false"
                    >
                      <i className="fas fa-list" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade active show"
                id="tab-grid"
                role="tabpanel"
                aria-labelledby="tab-shop-grid"
              >
                <div className="row gy-40">
                  <div className="col-xl-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_1.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <Link href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </Link>{" "}
                          <Link href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </Link>{" "}
                          <Link href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </Link>
                        </div>
                        <span className="category">Wheel</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="ShopDetails">Car Engine Plug</Link>
                        </h3>
                        <span className="price">
                          $180.85<del>$350.99</del>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_2.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Filter</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Car Air Filter</Link>
                        </h3>
                        <span className="price">$190.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_3.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Plug</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">CSK Red Wheel</Link>
                        </h3>
                        <span className="price">$160.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_4.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Light</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Cools Led Light</Link>
                        </h3>
                        <span className="price">$170.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_5.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Liver</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Allion Brake Pad</Link>
                        </h3>
                        <span className="price">$120.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_6.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Break</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Car USB Ports</Link>
                        </h3>
                        <span className="price">$100.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_7.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Wheel</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Car Engine Solt</Link>
                        </h3>
                        <span className="price">$120.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_8.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Filter</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Car Oil Filter</Link>
                        </h3>
                        <span className="price">$100.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_9.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Plug</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">BMW Brake Liver</Link>
                        </h3>
                        <span className="price">$120.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_10.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Light</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Special Hydraulic</Link>
                        </h3>
                        <span className="price">$100.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_11.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Liver</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Audi Wheel Combo</Link>
                        </h3>
                        <span className="price">$120.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_12.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Break</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Fast Aloy Wheel</Link>
                        </h3>
                        <span className="price">$100.85</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tab-list"
                role="tabpanel"
                aria-labelledby="tab-shop-list"
              >
                <div className="row gy-30">
                  <div className="col-md-6">
                    <div className="as-product list-view">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_1.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Wheel</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Car Engine Plug</Link>
                        </h3>
                        <span className="price">
                          $180.85<del>$350.99</del>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="as-product list-view">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_2.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Filter</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Car Air Filter</Link>
                        </h3>
                        <span className="price">$190.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="as-product list-view">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_3.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Plug</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">CSK Red Wheel</Link>
                        </h3>
                        <span className="price">$160.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="as-product list-view">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_4.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Light</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Cools Led Light</Link>
                        </h3>
                        <span className="price">$170.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="as-product list-view">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_5.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Liver</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Allion Brake Pad</Link>
                        </h3>
                        <span className="price">$120.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="as-product list-view">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_6.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Break</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Car USB Ports</Link>
                        </h3>
                        <span className="price">$100.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="as-product list-view">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_7.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Wheel</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Car Engine Solt</Link>
                        </h3>
                        <span className="price">$120.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="as-product list-view">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_8.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Filter</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Car Oil Filter</Link>
                        </h3>
                        <span className="price">$100.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="as-product list-view">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_9.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Plug</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">BMW Brake Liver</Link>
                        </h3>
                        <span className="price">$120.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="as-product list-view">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_10.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Light</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Special Hydraulic</Link>
                        </h3>
                        <span className="price">$100.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="as-product list-view">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_11.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Liver</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Audi Wheel Combo</Link>
                        </h3>
                        <span className="price">$120.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="as-product list-view">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_12.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <a href="#QuickView" className="icon-btn popup-content">
                            <i className="fa fa-eye" />
                          </a>{" "}
                          <a href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </a>{" "}
                          <a href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </a>
                        </div>
                        <span className="category">Break</span>
                      </div>
                      <div className="product-content">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out of
                            5 based on <span className="rating">1</span> customer
                            rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Fast Aloy Wheel</Link>
                        </h3>
                        <span className="price">$100.85</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="as-pagination text-center pt-50">
              <ul>
                <li>
                  <Link href="blog.html">1</Link>
                </li>
                <li>
                  <Link href="blog.html">2</Link>
                </li>
                <li>
                  <Link href="blog.html">3</Link>
                </li>
                <li>
                  <a href="blog.html">
                    <i className="fa fa-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <aside  className="sidebar-area">
              <div className="widget widget_search">
                <form className="search-form">
                  <input type="text" placeholder="Search..." />{" "}
                  <button type="submit">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
              <div className="widget widget_categories">
                <h3 className="widget_title">Categories</h3>
                <ul>
                  <li>
                    <Link href="blog.html">Car Repair</Link>
                  </li>
                  <li>
                    <Link href="blog.html">Engine Repair</Link>
                  </li>
                  <li>
                    <Link href="blog.html">Tyer Change</Link>
                  </li>
                  <li>
                    <Link href="blog.html">Oil Change</Link>
                  </li>
                  <li>
                    <Link href="blog.html">Battery Charge</Link>
                  </li>
                </ul>
              </div>
              <div className="widget widget_price_filter">
                <h4 className="widget_title">Filter By Price</h4>
                <div className="price_slider_wrapper">
                  <div className="price_label">
                    Price: <span className="from">$0</span> —{" "}
                    <span className="to">$70</span>
                  </div>
                  <div className="price_slider" />
                  <button type="submit" className="button">
                    Filter
                  </button>
                </div>
              </div>
              <div className="widget widget_top_rated_products">
                <h4 className="widget_title">Popular Product</h4>
                <ul className="product_list_widget">
                  <li className="recent-post">
                    <div className="media-img">
                      <Link href="shop-details.html">
                        <img
                          src="assets/img/product/thumb_1_1.jpg"
                          alt="thumb"
                          width={70}
                          height={70}
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="recent-post-title h5">
                        <Link href="shop-details.html">Cool Light</Link>
                      </h4>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span>
                          Rated
                          <strong className="rating">5.00</strong> out of 5
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="recent-post">
                    <div className="media-img">
                      <Link href="shop-details.html">
                        <img
                          src="assets/img/product/thumb_1_2.jpg"
                          alt="thumb"
                          width={70}
                          height={70}
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="recent-post-title h5">
                        <Link href="shop-details.html">Air Filter</Link>
                      </h4>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span>
                          Rated
                          <strong className="rating">5.00</strong> out of 5
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="recent-post">
                    <div className="media-img">
                      <Link href="shop-details.html">
                        <img
                          src="assets/img/product/thumb_1_3.jpg"
                          alt="thumb"
                          width={70}
                          height={70}
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="recent-post-title h5">
                        <Link href="shop-details.html">Brake Liver</Link>
                      </h4>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span>
                          Rated
                          <strong className="rating">5.00</strong> out of 5
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="recent-post">
                    <div className="media-img">
                      <Link href="shop-details.html">
                        <img
                          src="assets/img/product/thumb_1_4.jpg"
                          alt="thumb"
                          width={70}
                          height={70}
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="recent-post-title h5">
                        <Link href="shop-details.html">CSK Rim</Link>
                      </h4>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span>
                          Rated
                          <strong className="rating">5.00</strong> out of 5
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="widget widget_tag_cloud">
                <h3 className="widget_title">Popular Tags</h3>
                <div className="tagcloud">
                  <Link href="blog.html">Technology</Link>{" "}
                  <Link href="blog.html">Repair</Link> <Link href="blog.html">Services</Link>{" "}
                  <Link href="blog.html">Mechon</Link> <Link href="blog.html">Engine</Link>{" "}
                  <Link href="blog.html">Tires</Link> <Link href="blog.html">Speed</Link>{" "}
                  <Link href="blog.html">Solution</Link>{" "}
                  <Link href="blog.html">Car Repair</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default Shop