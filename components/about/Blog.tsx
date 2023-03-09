import Link from 'next/link'
import React from 'react'

type Props = {}

const Blog = (props: Props) => {
  return (
    <section className="space" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">News &amp; Updates</span>
            <h2 className="sec-title">Latest Blog Posts</h2>
          </div>
          <div className="blog-box-wrap">
            <div className="blog-box">
              <div className="blog-img">
                <img src="assets/img/blog/blog_1_1.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    March 15, 2022
                  </Link>
                  <Link href="blog.html">
                    <i className="fas fa-tags" />
                    Test Drive
                  </Link>
                </div>
                <h3 className="blog-title">
                  <Link href="blog-details.html">
                    How to Make the Most of Your Test Drive
                  </Link>
                </h3>
                <Link href="blog-details.html" className="link-btn">
                  Read More
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src="assets/img/blog/blog_1_2.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    March 16, 2022
                  </Link>
                  <Link href="blog.html">
                    <i className="fas fa-tags" />
                    Oil Change
                  </Link>
                </div>
                <h3 className="blog-title">
                  <Link href="blog-details.html">
                    How to Jump Start Your Car Maintenance?
                  </Link>
                </h3>
                <p className="blog-text">
                  Centric aplications productize before front end vortals
                  visualize.
                </p>
                <Link href="blog-details.html" className="link-btn">
                  Read More
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src="assets/img/blog/blog_1_3.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    March 17, 2022
                  </Link>
                  <Link href="blog.html">
                    <i className="fas fa-tags" />
                    Car Drive
                  </Link>
                </div>
                <h3 className="blog-title">
                  <Link href="blog-details.html">
                    How to Decorate Your Car for Halloween
                  </Link>
                </h3>
                <Link href="blog-details.html" className="link-btn">
                  Read More
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Blog