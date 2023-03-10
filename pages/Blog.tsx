import Link from 'next/link'
import React from 'react'
import { urlFor } from '../client'
import { fetchBlog } from '../utils/fetchBlog'
import { BlogType } from '../utils/type'

type Props = {
  blog: BlogType[];
}

export default function Blog({ blog }: Props)  {
  console.log(blog);
  
  return (
    <>
     <div
        className="breadcumb-wrapper"
        data-bg-src=""
        style={{ backgroundImage: `url('assets/img/bg/cta_bg_1.jpg')` }}
      >
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Latest Posts</h1>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Latest Posts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section className="as-blog-wrapper space-top space-extra-bottom">
      <div className="container">
        <div className="row gx-60">
          <div className="col-lg-8">
            <div className="as-blog blog-single has-post-thumbnail">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src={urlFor(blog[0]?.image.asset._ref).url()} alt="Blog Image" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a >
                    <i className="fas fa-user" />
                    by {blog[0].writtenby}
                  </a>{" "}
                  <a >
                    <i className="far fa-calendar-alt" />
                    {blog[0]._createdAt}
                  </a>{" "}
                  <a >
                    <i className="fas fa-tags" />
                    {blog[0].tag}
                  </a>
                </div>
                <h2 className="blog-title">
                  <a href="blog-details.html">
                    {blog[0].title}
                  </a>
                </h2>
                <p>
                  {blog[0].small_description}
                </p>
                <a href="blog-details.html" className="as-btn">
                  Read Details
                </a>
              </div>
            </div>
           
            
           
            <div className="as-pagination">
              <ul>
                <li>
                  <a href="blog.html">1</a>
                </li>
                <li>
                  <a href="blog.html">2</a>
                </li>
                <li>
                  <a href="blog.html">3</a>
                </li>
                <li>
                  <a href="blog.html">
                    <i className="fa fa-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="sidebar-area">
              <div className="widget widget_search">
                <form className="search-form">
                  <input type="text" placeholder="Search..." />{" "}
                  <button type="submit">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
              <div className="widget widget_categories">
                <h3 className="widget_title">Visit Us</h3>
                <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="about">About</Link>
                    </li>
                    <li>
                      <Link href="services">Service</Link>
                    </li>
                    <li>
                      <Link href="shop">Shop</Link>
                    </li>
                    <li>
                      <Link href="contact">Contact</Link>
                    </li>
                  </ul>
              </div>
              {/* <div className="widget">
                <h3 className="widget_title">Recent Posts</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/recent-post-1-1.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <div className="recent-post-meta">
                        <a href="blog.html">
                          <i className="fal fa-user-circle" />
                          by David Smith
                        </a>
                      </div>
                      <h4 className="post-title">
                        <a className="text-inherit" href="blog-details.html">
                          Why you ignore your warning lights
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/recent-post-1-2.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <div className="recent-post-meta">
                        <a href="blog.html">
                          <i className="fal fa-user-circle" />
                          by Vivi Marian
                        </a>
                      </div>
                      <h4 className="post-title">
                        <a className="text-inherit" href="blog-details.html">
                          Here are 5 things every car owner needs
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/recent-post-1-3.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <div className="recent-post-meta">
                        <a href="blog.html">
                          <i className="fal fa-user-circle" />
                          by John Deo
                        </a>
                      </div>
                      <h4 className="post-title">
                        <a className="text-inherit" href="blog-details.html">
                          Best Quality Car Repair Solution In 2022
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="widget">
                <h4 className="widget_title">Gallery Posts</h4>
                <div className="sidebar-gallery">
                  <div className="gallery-thumb">
                    <img
                      src="assets/img/widget/gal-1-1.jpg"
                      alt="Gallery Image"
                      className="w-100"
                    />
                  </div>
                  <div className="gallery-thumb">
                    <img
                      src="assets/img/widget/gal-1-2.jpg"
                      alt="Gallery Image"
                      className="w-100"
                    />
                  </div>
                  <div className="gallery-thumb">
                    <img
                      src="assets/img/widget/gal-1-3.jpg"
                      alt="Gallery Image"
                      className="w-100"
                    />
                  </div>
                  <div className="gallery-thumb">
                    <img
                      src="assets/img/widget/gal-1-4.jpg"
                      alt="Gallery Image"
                      className="w-100"
                    />
                  </div>
                  <div className="gallery-thumb">
                    <img
                      src="assets/img/widget/gal-1-5.jpg"
                      alt="Gallery Image"
                      className="w-100"
                    />
                  </div>
                  <div className="gallery-thumb">
                    <img
                      src="assets/img/widget/gal-1-6.jpg"
                      alt="Gallery Image"
                      className="w-100"
                    />
                  </div>
                </div>
              </div> */}
              {/* <div className="widget widget_tag_cloud">
                <h3 className="widget_title">Popular Tags</h3>
                <div className="tagcloud">
                  <a href="blog.html">Technology</a>{" "}
                  <a href="blog.html">Repair</a> <a href="blog.html">Services</a>{" "}
                  <a href="blog.html">Mechon</a> <a href="blog.html">Engine</a>{" "}
                  <a href="blog.html">Tires</a> <a href="blog.html">Speed</a>{" "}
                  <a href="blog.html">Solution</a>{" "}
                  <a href="blog.html">Car Repair</a>
                </div>
              </div> */}
              <div
                className="widget widget_offer"
                data-bg-src="assets/img/bg/widget_bg_1.jpg"
              >
                 <div className="offer-banner">
                    <div className="banner-logo">
                      <img src="assets/img/logo-white1.png" alt="Prstige Auto Care" />
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
  

  )
}

export const getServerSideProps = async () => {
  const blog: BlogType[] = await fetchBlog();
  
  return {
    props: {
      blog,
    },
  };
};