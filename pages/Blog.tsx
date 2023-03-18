import dynamic from 'next/dynamic';
import Link from 'next/link'
import React, { useEffect, useState } from "react";
import { urlFor } from '../client'
import Layout from '../components/Layout';
import Pagination from '../components/Pagination'
import { fetchBlog } from '../utils/fetchBlog'
import { BlogType } from '../utils/type'

type Props = {
  blog: BlogType[];
}

export default function Blog()  {
  const [blog, setBlog] = useState<any>([])
  const [loading, setLoading] = useState(false);
  const Pagination = dynamic(() => import("../components/Pagination"));
  // const [prestigeBlog, setPrestigeBlog] = useState<[]>(blog);
  const [currentPage, setCurrentPage] = useState<number | any>(1);
  const [blogPerPage, setBlogPerPage] = useState<number>(5);
  // pagination
  const indexLastBlog = currentPage * blogPerPage;
  const indexOfFirstBlog = indexLastBlog - blogPerPage;
  const currentBlog = blog.slice(
    indexOfFirstBlog,
    indexLastBlog
  );
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

  const getBlog = async () => {
    const blog = await fetchBlog();
    setBlog(blog)
    console.log(blog);
  }

  useEffect(() => {
    setLoading(true);

    getBlog();
   

    setLoading(false);
    return () => {

      getBlog();
     


    };
  }, []);

  if (loading) return <div>Loading...</div>;
  
  return (
    <Layout>
     <div
        className="breadcumb-wrapper"
        data-bg-src=""
        style={{ backgroundImage: `url('assets/img/bg/cta_bg_1.jpg')` }}
      >
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Blogs</h1>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Blogs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section className="as-blog-wrapper space-top space-extra-bottom">
      <div className="container">
        <div className="row gx-60">
          <div className="col-lg-8">
            {currentBlog.map((blog: any, index: any) => (

            <div key={index} className="as-blog blog-single has-post-thumbnail">
              

              <div className="blog-img">
                <Link href={`/BlogDetails/${blog?._id}`}>
                  <img src={urlFor(blog?.image.asset._ref)?.url()} alt="Blog Image" />
                </Link>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <p >
                    <i className="fas fa-user" />
                    by {blog?.writtenby}
                  </p>{" "}
                  <p >
                    <i className="far fa-calendar-alt" />
                    {blog?._createdAt}
                  </p>{" "}
                  <p >
                    <i className="fas fa-tags" />
                    {blog?.tag}
                  </p>
                </div>
                <h2 className="blog-title">
                  
                    {blog?.title}
                  
                </h2>
                <p>
                  {blog?.small_description}
                </p>
                <Link href={`/BlogDetails/${blog?._id}`} className="as-btn">
                  Read Details
                </Link>
              </div>
            </div>
            ))}
           
            
           
           <Pagination
                productPerPage={blogPerPage}
                totalProducts={blog.length}
                paginate={paginate}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                currentPage={currentPage}
              />
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

    {/* blog */}
  </Layout>
  

  )
}

