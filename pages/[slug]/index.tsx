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
  sellerPrice: number;
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
                    {user ? (
                      user.role === "seller" ? (
                        <p className="price">${props?.sellerPrice}</p>
                      ) : (
                        <p className="price">${props?.price}</p>
                      )
                    ) : (
                      <p className="price">${props?.price}</p>
                    )}

                    <h2 className="product-title">{props?.name}</h2>

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
    sellerPrice,
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
      sellerPrice: product[0].sellerPrice,
      details: product[0].details,
      category: product[0].category.title,
    },
    revalidate: 10,
  };
}

export default ProductDetails;
