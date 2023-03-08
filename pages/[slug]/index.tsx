import Head from "next/head";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";
import { client, urlFor } from "../../client";
import Layout from "../../components/Layout";
import { image_01, ProductType } from "../../utils/type";
import productDetails from "./productDetails.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQty,
  getCartTotal,
} from "../../store/reducers/cartReducer";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import styles_1 from "../styles/shop.module.css";
import { selectUser } from "../../store/reducers/userReducer";

type IProps = {
  id: string;
  name: string;
  image: image_01[];
  price: number;
  details: string;
  category: string;
  sku: string;
  qty: number;
};

const ProductDetails = (props: IProps) => {
  const [qty, setQty] = useState<number>(1);
  const [count, setCount] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const handleAdd = (props: IProps) => {
    dispatch(
      addToCart({
        _key: props.id,
        category: props.category,
        details: props.details,
        image: urlFor(props.image[0]).url(),
        name: props.name,
        price: props.price,
        qty: Number(props.qty),
        cartQuantity: Number(qty),
        sku: props.sku,
      })
    );
    dispatch(getCartTotal());
    setCount(true);
  };

  const handleIncrement = (props: IProps) => {
    if (props.qty <= qty) {
      toast.warning(`Quantity, out of stock`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: "dark",
      });
    } else {
      setQty((prev) => prev + 1);
    }
  };

  const handleDecrement = (props: IProps) => {
    setQty((prev) => prev - 1);
  };

  return (
    <Fragment>
      <Head>
        <title>Prestige Auto Care - Product Details </title>
        <meta
          name="description"
          content="prestige auto care single product details and reviews"
        />
      </Head>
      <Layout>
        <div
          className="breadcumb-wrapper"
          data-bg-src="assets/img/breadcumb/breadcumb-bg.jpg"
          style={{
            backgroundImage: `url('assets/img/breadcumb/breadcumb-bg.jpg')`,
          }}
        >
          <div className="container z-index-common">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">Product Details</h1>
              <div className="breadcumb-menu-wrap">
                <ul className="breadcumb-menu">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Product Details</li>
                </ul>
              </div>
            </div>
          </div>
          <section
            className="as-product-wrapper product-details space-top space-extra-bottom"
            style={{ backgroundColor: "white" }}
          >
            <div className="container">
              <div className="row gx-60">
                <div className="col-lg-6">
                  <div className="product-big-img">
                    <div className={productDetails.sliderImage}>
                      <Slider {...settings}>
                        {props?.image.map((value, index) => (
                          <img
                            key={index}
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                              width: "100%",
                              height: "100%",
                            }}
                            src={urlFor(value).url()}
                            alt="Product Image"
                          />
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="product-about">
                    <p className="price">${props?.price}</p>
                    <h2 className="product-title">{props?.name}</h2>
                    {/* <div className="product-rating">
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style={{ width: "100%" }}>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on
                          <span className="rating">1</span> customer rating
                        </span>
                      </div>
                      <Link
                        href="shop-details.html"
                        className="woocommerce-review-link"
                      >
                        (<span className="count">3</span>
                        customer reviews)
                      </Link>
                    </div> */}
                    <p className="text">{props?.details}</p>
                    <div className="checklist style3">
                      <ul>
                        <li>
                          Lifetime structural, one year face finish warranty
                        </li>
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
                          value={qty}
                          title="Qty"
                          onChange={(e) => setQty(Number(e.target.value))}
                        />{" "}
                        <button
                          className="quantity-plus qty-btn"
                          onClick={() => handleIncrement(props)}
                        >
                          <i className="fa fa-chevron-up" />
                        </button>
                        <button
                          className="quantity-minus qty-btn"
                          onClick={() => handleDecrement(props)}
                        >
                          <i className="fa fa-chevron-down" />
                        </button>
                      </div>

                      {count ? (
                        <button
                          className="as-btn"
                          onClick={() => router.push("/Cart")}
                        >
                          View in Cart
                        </button>
                      ) : (
                        <button
                          className="as-btn"
                          onClick={
                            user
                              ? () => handleAdd(props)
                              : () => router.push("/Login")
                          }
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                    <div className="">
                      <span
                        className={`${
                          props.qty >= 1
                            ? styles_1.quantityInStock
                            : styles_1.quantityOutOfStock
                        }`}
                      >
                        {props.qty >= 1 ? `In Stock : ` : "Out of stock"}
                        <span className="sku">
                          {props.qty >= 1 ? `${props.qty}` : null}
                        </span>
                      </span>
                    </div>
                    <div className="product_meta">
                      <span className="sku_wrapper">
                        SKU: <span className="sku">{props?.sku}</span>
                      </span>
                      <span className="posted_in">
                        Category:
                        <Link href="#" rel="tag">
                          {props?.category}
                        </Link>
                      </span>
                      <span>
                        Tags: <Link href="#">automotive parts</Link>
                        <Link href="#">wheels</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <ul
                className="nav product-tab-style1"
                id="productTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <Link
                    className="nav-link"
                    id="description-tab"
                    data-bs-toggle="tab"
                    href="#description"
                    role="tab"
                    aria-controls="description"
                    aria-selected="false"
                  >
                    description
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="nav-link active"
                    id="reviews-tab"
                    data-bs-toggle="tab"
                    href="#reviews"
                    role="tab"
                    aria-controls="reviews"
                    aria-selected="true"
                  >
                    reviews
                  </Link>
                </li>
              </ul> */}
              {/* <div className="tab-content" id="productTabContent">
                <div
                  className="tab-pane fade"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <p>
                    Conveniently build adaptive users with front-end human
                    capital. Appropriately unleash team building technology for
                    goal-oriented paradigms. Dynamically generate interoperable
                    e-business vis-a-visgoal-oriented value. Completely pursue
                    fully tested content whereas multifunctional core
                    competencies. Progressively scale team driven process
                    improvements before premier functionalities. Holisticly
                    cultivate intermandated methodologies rather than virtual
                    technology. Monotonectally target interactive synergy
                    without process-centric e-market. Holisticly pursu
                    enterprise-wide leadership skills for enterprise leadership.
                    Collaboratively underwhelm standardized expertise after
                    effective bandwidth. Conveniently productivate holistic
                    collaboration and idea-sharing rather than granular
                    strategic theme areas.
                  </p>
                  <p>
                    Enthusiastically aggregate ethical systems for standardized
                    mindshare. Energistically target resource maximizing
                    leadership skills without backward-compatible action items.
                    Credibly impact alternative expertise vis-a-vis economically
                    sound results. Dynamically synergize empowered benefits
                    through functional partnerships. Authoritatively empower
                    prospective infomediaries for interactive content.
                    Synergistically embrace 2.0 paradigms through professional
                    intellectual capital. Interactively strategize parallel
                    growth strategies without out-of-the-box web services.
                    Assertively reinvent installed base.
                  </p>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="reviews"
                  role="tabpanel"
                  aria-labelledby="reviews-tab"
                >
                  <div className="woocommerce-Reviews">
                    <div className="as-comments-wrap">
                      <ul className="comment-list">
                        <li className="review as-comment-item">
                          <div className="as-post-comment">
                            <div className="comment-avater">
                              <img
                                src="assets/img/blog/comment-author-3.jpg"
                                alt="Comment Author"
                              />
                            </div>
                            <div className="comment-content">
                              <h4 className="name">Mark Jack</h4>
                              <span className="commented-on">
                                <i className="fal fa-calendar-alt" />
                                22 April, 2022
                              </span>
                              <div
                                className="star-rating"
                                role="img"
                                aria-label="Rated 5.00 out of 5"
                              >
                                <span style={{ width: "100%" }}>
                                  Rated <strong className="rating">5.00</strong>{" "}
                                  out of 5 based on{" "}
                                  <span className="rating">1</span> customer
                                  rating
                                </span>
                              </div>
                              <p className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="review as-comment-item">
                          <div className="as-post-comment">
                            <div className="comment-avater">
                              <img
                                src="assets/img/blog/comment-author-2.jpg"
                                alt="Comment Author"
                              />
                            </div>
                            <div className="comment-content">
                              <h4 className="name">Alexa Deo</h4>
                              <span className="commented-on">
                                <i className="fal fa-calendar-alt" />
                                26 April, 2022
                              </span>
                              <div
                                className="star-rating"
                                role="img"
                                aria-label="Rated 5.00 out of 5"
                              >
                                <span style={{ width: "100%" }}>
                                  Rated <strong className="rating">5.00</strong>{" "}
                                  out of 5 based on{" "}
                                  <span className="rating">1</span> customer
                                  rating
                                </span>
                              </div>
                              <p className="text">
                                The purpose of lorem ipsum is to create a
                                natural looking block of text (sentence,
                                paragraph, page, etc.) that doesn't distract
                                from the layout. A practice not without
                                controversy, laying out pages with meaningless
                                filler text can be very useful when the focus is
                                meant to be on design, not content.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="review as-comment-item">
                          <div className="as-post-comment">
                            <div className="comment-avater">
                              <img
                                src="assets/img/blog/comment-author-1.jpg"
                                alt="Comment Author"
                              />
                            </div>
                            <div className="comment-content">
                              <h4 className="name">Tara sing</h4>
                              <span className="commented-on">
                                <i className="fal fa-calendar-alt" />
                                26 April, 2022
                              </span>
                              <div
                                className="star-rating"
                                role="img"
                                aria-label="Rated 5.00 out of 5"
                              >
                                <span style={{ width: "100%" }}>
                                  Rated <strong className="rating">5.00</strong>{" "}
                                  out of 5 based on{" "}
                                  <span className="rating">1</span> customer
                                  rating
                                </span>
                              </div>
                              <p className="text">
                                The passage experienced a surge in popularity
                                during the 1960s when Letraset used it on their
                                dry-transfer sheets, and again during the 90s as
                                desktop publishers bundled the text with their
                                software. Today it's seen all around the web; on
                                templates, websites, and stock designs. Use our
                                generator to get your own, or read on for.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="as-comment-form">
                      <div className="form-title">
                        <h3 className="blog-inner-title">Add a review</h3>
                      </div>
                      <div className="row">
                        <div className="form-group rating-select d-flex align-items-center">
                          <label>Your Rating</label>
                          <p className="stars">
                            <span>
                              <Link className="star-1" href="#">
                                1
                              </Link>{" "}
                              <Link className="star-2" href="#">
                                2
                              </Link>{" "}
                              <Link className="star-3" href="#">
                                3
                              </Link>{" "}
                              <Link className="star-4" href="#">
                                4
                              </Link>{" "}
                              <Link className="star-5" href="#">
                                5
                              </Link>
                            </span>
                          </p>
                        </div>
                        <div className="col-12 form-group">
                          <textarea
                            placeholder="Write a Message"
                            className="form-control"
                            defaultValue={""}
                          />{" "}
                          <i className="text-title fa fa-pencil-alt" />
                        </div>
                        <div className="col-md-6 form-group">
                          <input
                            type="text"
                            placeholder="Your Name"
                            className="form-control"
                          />{" "}
                          <i className="text-title fa fa-user" />
                        </div>
                        <div className="col-md-6 form-group">
                          <input
                            type="text"
                            placeholder="Your Email"
                            className="form-control"
                          />{" "}
                          <i className="text-title fa fa-envelope" />
                        </div>
                        <div className="col-12 form-group">
                          <input
                            id="reviewcheck"
                            name="reviewcheck"
                            type="checkbox"
                          />{" "}
                          <label htmlFor="reviewcheck">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                            <span className="checkmark" />
                          </label>
                        </div>
                        <div className="col-12 form-group mb-0">
                          <button className="as-btn">Post Review</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="space-extra-top mb-30">
                <div className="title-area text-center">
                  <h2 className="sec-title">Related Products</h2>
                </div>
                <div
                  className="row as-carousel"
                  data-slide-show={4}
                  data-lg-slide-show={3}
                  data-md-slide-show={2}
                  data-sm-slide-show={2}
                  data-xs-slide-show={1}
                  data-arrows="true"
                >
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_1.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <Link
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>
                            customer rating
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
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_2.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <Link
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
                            <i className="fa fa-eye" />
                          </Link>{" "}
                          <Link href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </Link>{" "}
                          <Link href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </Link>
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>
                            customer rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Car Air Filter</Link>
                        </h3>
                        <span className="price">$190.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_3.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <Link
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
                            <i className="fa fa-eye" />
                          </Link>{" "}
                          <Link href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </Link>{" "}
                          <Link href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </Link>
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>
                            customer rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">CSK Red Wheel</Link>
                        </h3>
                        <span className="price">$160.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_4.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <Link
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
                            <i className="fa fa-eye" />
                          </Link>{" "}
                          <Link href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </Link>{" "}
                          <Link href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </Link>
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>
                            customer rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Cools Led Light</Link>
                        </h3>
                        <span className="price">$170.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_5.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <Link
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
                            <i className="fa fa-eye" />
                          </Link>{" "}
                          <Link href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </Link>{" "}
                          <Link href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </Link>
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>
                            customer rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Allion Brake Pad</Link>
                        </h3>
                        <span className="price">$120.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_6.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <Link
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
                            <i className="fa fa-eye" />
                          </Link>{" "}
                          <Link href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </Link>{" "}
                          <Link href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </Link>
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>
                            customer rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Car USB Ports</Link>
                        </h3>
                        <span className="price">$100.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_7.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <Link
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>
                            customer rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Car Engine Solt</Link>
                        </h3>
                        <span className="price">$120.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_8.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <Link
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
                            <i className="fa fa-eye" />
                          </Link>{" "}
                          <Link href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </Link>{" "}
                          <Link href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </Link>
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>
                            customer rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Car Oil Filter</Link>
                        </h3>
                        <span className="price">$100.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_9.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <Link
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
                            <i className="fa fa-eye" />
                          </Link>{" "}
                          <Link href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </Link>{" "}
                          <Link href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </Link>
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>
                            customer rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">BMW Brake Liver</Link>
                        </h3>
                        <span className="price">$120.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_10.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <Link
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
                            <i className="fa fa-eye" />
                          </Link>{" "}
                          <Link href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </Link>{" "}
                          <Link href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </Link>
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>
                            customer rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">
                            Special Hydraulic
                          </Link>
                        </h3>
                        <span className="price">$100.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_11.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <Link
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
                            <i className="fa fa-eye" />
                          </Link>{" "}
                          <Link href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </Link>{" "}
                          <Link href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </Link>
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>
                            customer rating
                          </span>
                        </div>
                        <h3 className="product-title">
                          <Link href="shop-details.html">Audi Wheel Combo</Link>
                        </h3>
                        <span className="price">$120.85</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="as-product">
                      <div className="product-img">
                        <img
                          src="assets/img/product/product_1_12.jpg"
                          alt="Product Image"
                        />
                        <div className="actions">
                          <Link
                            href="#QuickView"
                            className="icon-btn popup-content"
                          >
                            <i className="fa fa-eye" />
                          </Link>{" "}
                          <Link href="cart.html" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </Link>{" "}
                          <Link href="wishlist.html" className="icon-btn">
                            <i className="fa fa-heart" />
                          </Link>
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>
                            customer rating
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
              </div> */}
            </div>
          </section>
        </div>
      </Layout>
    </Fragment>
  );
};

export async function getStaticPaths() {
  const query = `*[_type == "product"]{
          slug{
              current
          }
        }`;
  const allSlugs = await client.fetch(query);
  const paths = allSlugs.map((slugName: any) => ({
    params: {
      slug: slugName.slug.current,
    },
  }));

  return {
    fallback: "blocking",
    paths,
  };
}

export async function getStaticProps(context: any) {
  const slug = context.params.slug;

  const query = `*[slug.current == "${slug}"]{
    _id,
    name,
    image,
    price,
    details,
    sku,
    quantity, 
    category->{title}
  }`;
  const product = await client.fetch(query);

  return {
    props: {
      id: product[0]._id,
      sku: product[0].sku,
      qty: product[0].quantity,
      name: product[0].name,
      image: product[0].image.map((img: any) => {
        return img.asset._ref;
      }),
      price: product[0].price,
      details: product[0].details,
      category: product[0].category.title,
    },
    revalidate: 10,
  };
}

export default ProductDetails;
