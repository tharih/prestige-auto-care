import axios from "axios";
import { count } from "console";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { client, urlFor } from "../client";
import Layout from "../components/Layout";
import { selectUser } from "../store/reducers/userReducer";
import { fetchCategory } from "../utils/fetchCategory";
import { fetchProducts } from "../utils/fetchProduct";
import styles_1 from "./styles/shop.module.css";

type Props = {
  products: any[];
  categories: any[];
};
const Shop = () => {
  const [product, setProduct] = useState<any>([])
  const [categories, setCategories] = useState<any>([])
  const [loading, setLoading] = useState(false);


  const Pagination = dynamic(() => import("../components/Pagination"));
  const [search, setSearch] = useState("");
  // const [shopsProducts, setShopsProducts] = useState<[]>(product);
  const [currentPage, setCurrentPage] = useState<number | any>(1);
  const [productPerPage, setProductPerPage] = useState<number>(12);
  const user = useSelector(selectUser);
  // pagination
  const indexLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexLastProduct - productPerPage;
  const currentProduct = product.slice(
    indexOfFirstProduct,
    indexLastProduct
  );

  const router = useRouter();
  const handleGetCategory = (id: any) => {
    setSearch(id);
  };
  const handlePrevious = () => {
    setCurrentPage((prev: number) => {
      if (prev === currentPage) return 0;
      prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentPage((prev: number) => {
      if (prev === currentPage) return 0;
      prev + 1;
    });
  };
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const getProduct = async () => {
    const product = await fetchProducts();
    setProduct(product)
  }

  const getCategory = async () => {
    const categories = await fetchCategory();
    setCategories(categories)
  }

  useEffect(() => {
    setLoading(true);
    getProduct();
    getCategory();
    

    setLoading(false);
    return () => {
      getProduct();
      getCategory();



    };
  }, []);

  if (loading) return <div>Loading...</div>;


  return (
    <Layout>
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
                      Showing {`${currentProduct.length} - ${currentPage}`} of{" "}
                      {product.length} results
                    </p>
                  </div>
                  {/* <div className="col-md-auto">
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
                  </div> */}
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
                    {currentProduct
                      .filter(
                        (item: any) =>
                          item.name.toLowerCase().includes(search) ||
                          item.category.title.includes(search)
                      )
                      .map((product: any, index: any) => (
                        <div key={index} className="col-xl-4 col-sm-6">
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
                                <Link href="/Cart" className="icon-btn">
                                  <i className="fa fa-cart-plus" />
                                </Link>{" "}
                              </div>
                              <span className="category">
                                {product.category.title}
                              </span>
                            </div>
                            <div className="product-content">
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
                              {user ? (
                                user.role === "seller" ? (
                                  <span className="price">
                                    AUD{product.sellerPrice}
                                  </span>
                                ) : (
                                  <span className="price">
                                    AUD{product.price}
                                  </span>
                                )
                              ) : (
                                <span className="price">
                                  AUD{product.price}
                                </span>
                              )}

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
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <Pagination
                productPerPage={productPerPage}
                totalProducts={product.length}
                paginate={paginate}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                currentPage={currentPage}
              />
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

// export const getServerSideProps = async () => {
//   const product = await fetchProducts();
//   const categories = await fetchCategory();

//   return {
//     props: {
//       product,
//       categories,
//     },
//   };
// };

export default Shop;
