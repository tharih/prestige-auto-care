import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import stylesIndex from "./SliderComponent.module.css";
import Link from "next/link";
import { urlFor } from "../../client";
import { fetchProducts } from "../../utils/fetchProduct";
import { useRouter } from "next/router";
import styles_1 from "../../pages/styles/shop.module.css";

type Props = {
  settings_003: object;
  settings_005: object;
  products: any[];
};

const LatestProducts = ({products, settings_003, settings_005 }: Props) => {
  const router = useRouter();
  return (
    <>
      <section
        className={stylesIndex.pcspace}
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Latest Products</span>
            <h2 className="sec-title">Browse Our Products</h2>
          </div>
          <div className="row as-carousel">
            <Slider {...settings_003} className="row as-carousel">

              {products.map((product: any, index: any) => (
                  <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
                    {/* <Link href={`/product/${product.slug.current}`}> */}
                    <div className="as-product">
                      <div className="product-img">
                        <div
                          style={{
                            width: 282,
                            height: 280,
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={urlFor(product.image[0]).url()}
                            alt="Product Image"
                            style={{
                              objectFit: "cover",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </div>
                        <div className="actions">
                          {/* <a
                                href="#QuickView"
                                className="icon-btn popup-content"
                              >
                                <i className="fa fa-eye" />
                              </a>{" "} */}
                          <Link href="/Cart" className="icon-btn">
                            <i className="fa fa-cart-plus" />
                          </Link>{" "}
                          {/* <a href="wishlist.html" className="icon-btn">
                                <i className="fa fa-heart" />
                              </a> */}
                        </div>
                        {/* <span className="category">{product.filter}</span> */}
                      </div>
                      <div className="product-content">
                        {/* <div
                              className="star-rating"
                              role="img"
                              aria-label="Rated 5.00 out of 5"
                            >
                              <span>
                                Rated <strong className="rating">5.00</strong>{" "}
                                out of 5 based on{" "}
                                <span className="rating">1</span> customer
                                rating
                              </span>
                            </div> */}
                        <h3 className="product-title">
                          <div
                            className={styles_1.productTitle}
                            onClick={() =>
                              router.push(`/${product.slug.current}`)
                            }
                          >
                            {product.name}
                          </div>
                        </h3>
                        <span className="price">AUD{product.price}</span>
                        <span
                          className={
                            product.quantity >= 1
                              ? styles_1.quantityInStock
                              : styles_1.quantityOutOfStock
                          }
                        >
                          {product.quantity >= 1
                            ? `In Stock ${product.quantity}`
                            : "Out of stock"}
                        </span>
                      </div>
                    </div>
                    {/* </Link> */}
                  </div>
                ))}
              {/* <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="as-product">
                  <div className="product-img">
                    <img
                      src="assets/img/product/product_1_1.jpg"
                      alt="Product Image"
                    />
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fa fa-eye" />
                      </a>{" "}
                      <a href="Cart" className="icon-btn">
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
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span>
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
              </div> */}

            </Slider>
          </div>
        </div>
      </section>
      
    </>
  );
};

export const getServerSideProps = async () => {
  const products = await fetchProducts();


  return {
    props: { products},
  };
};

export default LatestProducts;
