import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { client, urlFor } from "../../../client";
import Layout from "../../../components/Layout";

type Props = {};

const BlogDetails = ({ blog }: any) => {
  const router = useRouter();

  return (
    <>
      <div
        className="breadcumb-wrapper"
        data-bg-src=""
        style={{
          backgroundImage: `url('/assets/img/breadcumb/breadcumb-bg.jpg')`,
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Blog Details</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>Blog Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="as-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row gx-60">
            <div className="col-lg-8">
              <div className="as-blog blog-single">
                <div className="blog-img">
                  <img
                    src={urlFor(blog[0]?.image.asset._ref).url()}
                    alt="Blog Image"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p>
                      <i className="fas fa-user" />
                      by {blog[0].writtenby}
                    </p>{" "}
                    <p>
                      <i className="far fa-calendar-alt" />
                      {blog[0]._createdAt}
                    </p>{" "}
                    <p>
                      <i className="fas fa-tags" />
                      {blog[0].tag}
                    </p>
                  </div>
                  <h2 className="blog-title">{blog[0].title}</h2>

                  <p>{blog[0].description01}</p>
                  {/* <blockquote>
              <p>
                “IT IS A LONG FACT THAT A READER WILL BE DISTRACTED BY THE
                READABLE CONTENT OF A PAGE WHEN LOOKING AT ITS LAYOUT.”
              </p>
              <cite>Md Sumon Mia</cite>
            </blockquote> */}

                  <img
                    src={urlFor(blog[0]?.image1.asset._ref).url()}
                    alt="Blog Image"
                  />

                  <p>{blog[0].description02}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar-area">
                {/* <div className="widget widget_search">
            <form className="search-form">
              <input type="text" placeholder="Search..." />{" "}
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </div> */}
                <div className="widget widget_categories">
                  <h3 className="widget_title">Visit Us</h3>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="About">About</Link>
                    </li>
                    <li>
                      <Link href="Services">Service</Link>
                    </li>
                    <li>
                      <Link href="Shop">Shop</Link>
                    </li>
                    <li>
                      <Link href="Contact">Contact</Link>
                    </li>
                  </ul>
                </div>

                <div
                  className="widget widget_offer"
                  data-bg-src="assets/img/bg/widget_bg_1.jpg"
                >
                  <div className="offer-banner">
                    <div className="banner-logo">
                      <img
                        src="/assets/img/logo-white1.png"
                        alt="Prstige Auto Care"
                      />
                    </div>
                    <h5 className="banner-title" style={{ color: "black" }}>
                      Need Help? We Are Here To Help You
                    </h5>
                    <div className="offer">
                      <h6 className="offer-title">
                        <span className="text-theme">Prestige </span>Auto Care
                      </h6>
                      {/* <p className="offer-text">
                    Save up to <span className="text-theme">60% off</span>
                  </p> */}
                    </div>
                    <Link href="Appointment" className="as-btn">
                      Get A Quote
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticPaths() {
  const query = `*[_type == "blog"]{
    _id
  }`;
  const allIds = await client.fetch(query);
  const paths = allIds.map((blogName: any) => ({
    params: {
      id: blogName._id,
    },
  }));

  return {
    fallback: "blocking",
    paths,
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.id;

  const query = `*[_type == "blog" && _id=="${id}"]`;

  const blog = await client.fetch(query);

  return {
    props: {
      blog,
    },
  };
}

export default BlogDetails;
