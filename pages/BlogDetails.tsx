import React from 'react'

type Props = {}

const BlogDetails = (props: Props) => {
  return (
    <>
     <div
        className="breadcumb-wrapper"
        data-bg-src=""
        style={{ backgroundImage: `url('assets/img/bg/cta_bg_1.jpg')` }}
      >
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Blog Details</h1>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
              <li>
                <a href="index.html">Home</a>
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
            <img src="assets/img/blog/blog-s-1-1.jpg" alt="Blog Image" />
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <a href="blog.html">
                <i className="fas fa-user" />
                by David Smith
              </a>{" "}
              <a href="blog.html">
                <i className="far fa-calendar-alt" />
                March 15, 2022
              </a>{" "}
              <a href="blog.html">
                <i className="fas fa-tags" />
                Oil Change
              </a>
            </div>
            <h2 className="blog-title">
              Give Your Small Car the Horn It Deserves
            </h2>
            <p>
              CRapidiously repurpose leading edge growth strategies with just in
              time web readiness service Objectively communicate timely meta
              services for synergistic initiatives functionalities.
            </p>
            <p>
              Uniquely pursue emerging experiences before emerging content.
              Efficiently underwhelm customer directed total linkage after B2C
              synergy. Dynamically simplify superior human capital whereas
              efficient infrastructures. Authoritatively generate e-business
              web-readiness after wireless outsourcing. Seamlessly evisculate
              visionary scenarios for resource maximizing mindshare.
            </p>
            <p>
              Assertively recaptiualize interdependent alignments via backend
              leadership skills. Monotonectally formulate focused quality
              vectors whereas proactive infomediaries. Energistically utilize
              ethical initiatives without impactful applications.
              Authoritatively coordinate seamless e-services and user friendly
              information. Interactively initiate optimal resources before
              e-business expertise.
            </p>
            {/* <blockquote>
              <p>
                “IT IS A LONG FACT THAT A READER WILL BE DISTRACTED BY THE
                READABLE CONTENT OF A PAGE WHEN LOOKING AT ITS LAYOUT.”
              </p>
              <cite>Md Sumon Mia</cite>
            </blockquote> */}
            <p>
              Appropriately mesh standards compliant communities vis-a-vis
              client-centric channels. Seamlessly reinvent open-source data via
              bricks-and-clicks bandwidth. Globally leverage other's inexpensive
              technologies vis-a-vis user friendly systems. Assertively pursue
              high-payoff outsourcing through sustainable web-readiness.
              Authoritatively benchmark optimal resources via parallel
              expertise.
            </p>
            <p>
              Uniquely seize open-source synergy without leveraged
              functionalities. Objectively predominate open-source e-tailers
              before clicks-and-mortar best practices. Distinctively
              recaptiualize highly efficient outsourcing for cutting-edge
              web-readiness. Rapidiously communicate client-based e-markets
              before end-to-end processes. Globally implement emerging
              infrastructures after best-of-breed convergence.
            </p>
            <h3 className="h4 mt-40">
              Mechon is the only theme you will ever need
            </h3>
            <p>
              Phosfluorescently incubate market-driven networks and synergistic
              e-services. Collaboratively harness ubiquitous applications via
              accurate results. Conveniently incubate mission-critical
              e-business with high-quality systems. Interactively provide access
              to open-source e-business without compelling e-markets.
              Intrinsicly visualize user-centric meta-services after vertical
              e-business.
            </p>
            <img
              src="assets/img/blog/blog-s-1-5.jpg"
              alt="Blog Image"
              className="mt-10 mb-25"
            />
            <p>
              Globally cultivate ubiquitous growth strategies before team
              building users. Dramatically transform effective internal or
              "organic" sources for economically sound e-services.
              Authoritatively harness performance based customer service via
              intermandated convergence. Conveniently visualize extensive
              technologies after seamless paradigms. Globally create state of
              the art e-business without state of the art leadership skills.
            </p>
            <p>
              Completely seize seamless e-tailers whereas mission-critical
              ideas. Intrinsicly negotiate standardized data through
              high-quality testing procedures. Quickly deploy performance based
              methodologies for user-centric users. Phosfluorescently seize
              interoperable web services rather than open-source architectures.
              Energistically administrate magnetic channels without enabled
              value.
            </p>
          </div>
          {/* <div className="share-links clearfix">
            <div className="row justify-content-between">
              <div className="col-md-auto">
                <span className="share-links-title">Tags:</span>
                <div className="tagcloud">
                  <a href="blog.html">Service</a> <a href="blog.html">Repair</a>
                </div>
              </div>
              <div className="col-md-auto text-xl-end">
                <span className="share-links-title">Share:</span>
                <ul className="social-links">
                  <li>
                    <a href="https://facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="blog-author">
            <div className="auhtor-img">
              <img
                src="assets/img/blog/blog-author.jpg"
                alt="Blog Author Image"
              />
            </div>
            <div className="media-body">
              <h3 className="author-name">
                <a className="text-inherit" href="team-details.html">
                  Sowat Ahsan
                </a>
              </h3>
              <p className="author-text">
                Optimize resource eveling innoation whereas visionary value.
                Compellingly engage extensible process with business process
                improvements.
              </p>
              <ul className="social-links">
                <li>
                  <a href="https://facebook.com/" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/" target="_blank">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/" target="_blank">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-navigation">
            <a href="blog-details.html" className="nav-btn prev">
              <img
                src="assets/img/blog/blog-nav-1.jpg"
                alt="blog img"
                className="nav-img"
              />{" "}
              <span className="nav-text">Previous Post</span>{" "}
            </a>
            <a href="blog.html" className="blog-btn">
              <i className="fa-solid fa-grid" />
            </a>{" "}
            <a href="blog-details.html" className="nav-btn next">
              <img
                src="assets/img/blog/blog-nav-2.jpg"
                alt="blog img"
                className="nav-img"
              />{" "}
              <span className="nav-text">Next Post</span>
            </a>
          </div>
          <div className="as-comments-wrap">
            <h2 className="blog-inner-title h3">Comments (03)</h2>
            <ul className="comment-list">
              <li className="as-comment-item">
                <div className="as-post-comment">
                  <div className="comment-avater">
                    <img
                      src="assets/img/blog/comment-author-1.jpg"
                      alt="Comment Author"
                    />
                  </div>
                  <div className="comment-content">
                    <span className="commented-on">
                      <i className="fal fa-calendar-alt" />
                      14 March, 2022
                    </span>
                    <h3 className="name">David Malan</h3>
                    <p className="text">
                      Collaboratively empower multifunctional e-commerce for
                      prospective applications. Seamlessly productivate plug and
                      play markets whereas synergistic scenarios.
                    </p>
                    <div className="reply_and_edit">
                      <a href="blog-details.html" className="reply-btn">
                        <i className="fas fa-reply" />
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
                <ul className="children">
                  <li className="as-comment-item">
                    <div className="as-post-comment">
                      <div className="comment-avater">
                        <img
                          src="assets/img/blog/comment-author-2.jpg"
                          alt="Comment Author"
                        />
                      </div>
                      <div className="comment-content">
                        <span className="commented-on">
                          <i className="fal fa-calendar-alt" />
                          15 March, 2022
                        </span>
                        <h3 className="name">Anadi Juila</h3>
                        <p className="text">
                          Competently provide access to fully researched methods
                          of empowerment without sticky models. Credibly morph
                          front-end niche markets.
                        </p>
                        <div className="reply_and_edit">
                          <a href="blog-details.html" className="reply-btn">
                            <i className="fas fa-reply" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="as-comment-item">
                <div className="as-post-comment">
                  <div className="comment-avater">
                    <img
                      src="assets/img/blog/comment-author-3.jpg"
                      alt="Comment Author"
                    />
                  </div>
                  <div className="comment-content">
                    <span className="commented-on">
                      <i className="fal fa-calendar-alt" />
                      16 March, 2022
                    </span>
                    <h3 className="name">Tara sing</h3>
                    <p className="text">
                      Collaboratively empower multifunctional e-commerce for
                      prospective applications. Seamlessly productivate plug and
                      play markets whereas synergistic scenarios.
                    </p>
                    <div className="reply_and_edit">
                      <a href="blog-details.html" className="reply-btn">
                        <i className="fas fa-reply" />
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div> */}
          {/* <div className="as-comment-form">
            <div className="form-title">
              <h3 className="blog-inner-title h3">Leave a Comment</h3>
              <p className="form-text">
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="form-control"
                />{" "}
                <i className="fal fa-user" />
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  placeholder="Your Email*"
                  className="form-control"
                />{" "}
                <i className="fal fa-envelope" />
              </div>
              <div className="col-12 form-group">
                <input
                  type="text"
                  placeholder="Website"
                  className="form-control"
                />{" "}
                <i className="fal fa-globe" />
              </div>
              <div className="col-12 form-group">
                <textarea
                  placeholder="Write a Comment*"
                  className="form-control"
                  defaultValue={""}
                />{" "}
                <i className="fal fa-pencil" />
              </div>
              <div className="col-12 form-group mb-0">
                <button className="as-btn">Post Comment</button>
              </div>
            </div>
          </div> */}
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
            <h3 className="widget_title">Categories</h3>
            <ul>
              <li>
                <a href="blog.html">Car Repair</a>
              </li>
              <li>
                <a href="blog.html">Engine Repair</a>
              </li>
              <li>
                <a href="blog.html">Tyer Change</a>
              </li>
              <li>
                <a href="blog.html">Oil Change</a>
              </li>
              <li>
                <a href="blog.html">Battery Charge</a>
              </li>
            </ul>
          </div>
          <div className="widget">
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
          </div>
          <div className="widget widget_tag_cloud">
            <h3 className="widget_title">Popular Tags</h3>
            <div className="tagcloud">
              <a href="blog.html">Technology</a> <a href="blog.html">Repair</a>{" "}
              <a href="blog.html">Services</a> <a href="blog.html">Mechon</a>{" "}
              <a href="blog.html">Engine</a> <a href="blog.html">Tires</a>{" "}
              <a href="blog.html">Speed</a> <a href="blog.html">Solution</a>{" "}
              <a href="blog.html">Car Repair</a>
            </div>
          </div>
          <div
            className="widget widget_offer"
            data-bg-src="assets/img/bg/widget_bg_1.jpg"
          >
            <div className="offer-banner">
              <div className="banner-logo">
                <img src="assets/img/logo-white.png" alt="Mechon" />
              </div>
              <h5 className="banner-title">
                Need Help? We Are Here To Help You
              </h5>
              <div className="offer">
                <h6 className="offer-title">
                  <span className="text-theme">Mechon</span> Special
                </h6>
                <p className="offer-text">
                  Save up to <span className="text-theme">60% off</span>
                </p>
              </div>
              <a href="contact.html" className="as-btn">
                Get A Quote
              </a>
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

export default BlogDetails