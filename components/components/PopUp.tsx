import Link from "next/link";
import React from "react";

type Props = {};

const PopUp = (props: Props) => {
  return (
    <div id="QuickView" className="white-popup mfp-hide">
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
                    Rated <strong className="rating">5.00</strong> out of 5
                    based on
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
  );
};

export default PopUp;
