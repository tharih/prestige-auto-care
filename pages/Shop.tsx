import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { client, urlFor } from "../client";
import Layout from "../components/Layout";
import { fetchCategory } from "../utils/fetchCategory";
import { fetchProducts } from "../utils/fetchProduct";
import styles_1 from "./styles/shop.module.css";

type Props = {
  products: any[];
  categories: any[];
};
const Shop = ({ products, categories }: any) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleGetCategory = (id: any) => {
    setSearch(id);
  };

  return (
    <Layout>
      {/* <div
        className="breadcumb-wrapper"
        data-bg-src="assets/img/breadcumb/breadcumb-bg.jpg"
        style={{
          backgroundImage: `url('assets/img/breadcumb/breadcumb-bg.jpg')`,
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Our Products</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>Our Products</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      <section
        className="as-product-wrapper space-top space-extra-bottom"
        style={{ backgroundColor: "white" }}
      >
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
                        <option value="menu_order">Default Sorting</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by latest</option>
                        <option value="price">
                          Sort by price: low to high
                        </option>
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
                      {/* <Link
                        href="#"
                        id="tab-shop-list"
                        data-bs-toggle="tab"
                        data-bs-target="#tab-list"
                        role="tab"
                        aria-controls="tab-grid"
                        aria-selected="false"
                      >
                        <i className="fas fa-list" />
                      </Link> */}
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
                    {products
                      .filter(
                        (item: any) =>
                          item.name.toLowerCase().includes(search) ||
                          item.category.title.includes(search)
                      )

                      .map((product: any, index: any) => (
                        <div key={index} className="col-xl-4 col-sm-6">
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
                  </div>
                </div>
              </div>
              <div className="as-pagination text-center pt-50">
                <ul>
                  <li>
                    <Link href="#">1</Link>
                  </li>
                  <li>
                    <Link href="#">2</Link>
                  </li>
                  <li>
                    <Link href="#">3</Link>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <aside className="sidebar-area">
                <div className="widget widget_search">
                  <form className="search-form">
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      value={search}
                      type="text"
                      placeholder="Search..."
                    />{" "}
                    <button type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
                <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    {categories.map((category: any, index: any) => (
                      <p
                        className={styles_1.filterLabelP}
                        key={index}
                        onClick={() => handleGetCategory(category.title)}
                      >
                        {category.title}
                      </p>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const products = await fetchProducts();
  const categories = await fetchCategory();

  return {
    props: { products, categories },
  };
};

export default Shop;
