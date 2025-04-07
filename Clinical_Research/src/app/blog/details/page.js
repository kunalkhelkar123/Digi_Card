import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBannerTitle from "../../../components/Common/PageBannerTitle";
import FooterTwo from "../../../components/Layouts/FooterTwo";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        imgClass="/images/page-title-bg.jpg"
      />

      <section className="blog-details-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details">
                <div className="article-image">
                  <Image
                    src="/images/blog/1.jpg"
                    alt="image"
                    width={860}
                    height={700}
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="far fa-user-circle"></i> By:{" "}
                        <a href="#">Admin</a>
                      </li>

                      <li>
                        <i className="far fa-calendar-alt"></i> 7 Aug 2023
                      </li>

                      <li>
                        <i className="fas fa-tags"></i> <a href="#">Tech</a>
                      </li>

                      <li>
                        <i className="far fa-clock"></i> 2 Mins Read
                      </li>

                      <li>
                        <i className="fas fa-eye"></i> 521 Views
                      </li>

                      <li>
                        <i className="far fa-comment-dots"></i>{" "}
                        <a href="#">3 Comments</a>
                      </li>
                    </ul>
                  </div>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took.
                  </p>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>

                  <blockquote className="wp-block-quote">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>

                    <cite>Tom Cruise</cite>
                  </blockquote>

                  <p>
                    Equidem impedit officiis quo te. Illud partem sententiae mel
                    eu, euripidis urbanitas et sit. Mediocrem reprimique an vim,
                    veniam tibique omittantur duo ut, agam graeci in vim. Quot
                    appetere patrioque te mea, animal aliquip te pri. Ad vis
                    animal ceteros percipitur, eos tollit civibus percipitur no.
                  </p>

                  <ul className="wp-block-gallery columns-3">
                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src="/images/blog/2.jpg"
                          alt="image"
                          width={860}
                          height={700}
                        />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src="/images/blog/3.jpg"
                          alt="image"
                          width={860}
                          height={700}
                        />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src="/images/blog/4.jpg"
                          alt="image"
                          width={860}
                          height={700}
                        />
                      </figure>
                    </li>
                  </ul>

                  <h3>10 Tactics for marketing your company</h3>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took.
                  </p>

                  <ul className="article-features-list">
                    <li>Devices can grind down to a halt.</li>
                    <li>Small companies Reairing business.</li>
                    <li>Repairs are competitive with anyone</li>
                    <li>Repair broken buttons, speakers</li>
                    <li>Repairs are competitive with anyone</li>
                  </ul>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took.
                  </p>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="fas fa-bookmark"></i>
                    </span>
                    <a href="#">Fashion</a>, <a href="#">Games</a>,{" "}
                    <a href="#">Travel</a>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="comments-area">
                <h3 className="comments-title">2 Comments:</h3>

                <ol className="comment-list">
                  <li className="comment">
                    <article className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <Image
                            src="/images/author1.jpg"
                            className="avatar"
                            alt="image"
                            width={150}
                            height={150}
                          />
                          <b className="fn">James Anderson</b>
                          <span className="says">says:</span>
                        </div>

                        <div className="comment-metadata">
                          <a href="#">
                            <time>April 24, 2023 at 10:59 am</time>
                          </a>
                        </div>
                      </footer>

                      <div className="comment-content">
                        <p>
                          Lorem Ipsum has been the industry’s standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book.
                        </p>
                      </div>

                      <div className="reply">
                        <a href="#" className="comment-reply-link">
                          Reply
                        </a>
                      </div>
                    </article>

                    <ol className="children">
                      <li className="comment">
                        <article className="comment-body">
                          <footer className="comment-meta">
                            <div className="comment-author vcard">
                              <Image
                                src="/images/author2.jpg"
                                className="avatar"
                                alt="image"
                                width={150}
                                height={150}
                              />
                              <b className="fn">Steven Smith</b>
                              <span className="says">says:</span>
                            </div>

                            <div className="comment-metadata">
                              <a href="#">
                                <time>April 24, 2023 at 10:59 am</time>
                              </a>
                            </div>
                          </footer>

                          <div className="comment-content">
                            <p>
                              Lorem Ipsum has been the industry’s standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type specimen book.
                            </p>
                          </div>

                          <div className="reply">
                            <a href="#" className="comment-reply-link">
                              Reply
                            </a>
                          </div>
                        </article>
                      </li>

                      <ol className="children">
                        <li className="comment">
                          <article className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <Image
                                  src="/images/author3.jpg"
                                  className="avatar"
                                  alt="image"
                                  width={150}
                                  height={150}
                                />
                                <b className="fn">Sarah Taylor</b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                <a href="#">
                                  <time>April 24, 2023 at 10:59 am</time>
                                </a>
                              </div>
                            </footer>

                            <div className="comment-content">
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book.
                              </p>
                            </div>

                            <div className="reply">
                              <a href="#" className="comment-reply-link">
                                Reply
                              </a>
                            </div>
                          </article>
                        </li>
                      </ol>
                    </ol>
                  </li>

                  <li className="comment">
                    <article className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <Image
                            src="/images/author2.jpg"
                            className="avatar"
                            alt="image"
                            width={150}
                            height={150}
                          />
                          <b className="fn">John Doe</b>
                          <span className="says">says:</span>
                        </div>

                        <div className="comment-metadata">
                          <a href="#">
                            <time>April 24, 2023 at 10:59 am</time>
                          </a>
                        </div>
                      </footer>

                      <div className="comment-content">
                        <p>
                          Lorem Ipsum has been the industry’s standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book.
                        </p>
                      </div>

                      <div className="reply">
                        <a href="#" className="comment-reply-link">
                          Reply
                        </a>
                      </div>
                    </article>

                    <ol className="children">
                      <li className="comment">
                        <article className="comment-body">
                          <footer className="comment-meta">
                            <div className="comment-author vcard">
                              <Image
                                src="/images/author4.jpg"
                                className="avatar"
                                alt="image"
                                width={150}
                                height={150}
                              />
                              <b className="fn">James Anderson</b>
                              <span className="says">says:</span>
                            </div>

                            <div className="comment-metadata">
                              <a href="#">
                                <time>April 24, 2023 at 10:59 am</time>
                              </a>
                            </div>
                          </footer>

                          <div className="comment-content">
                            <p>
                              Lorem Ipsum has been the industry’s standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type specimen book.
                            </p>
                          </div>

                          <div className="reply">
                            <a href="#" className="comment-reply-link">
                              Reply
                            </a>
                          </div>
                        </article>
                      </li>
                    </ol>
                  </li>
                </ol>

                <div className="comment-respond">
                  <h3 className="comment-reply-title">Leave a Reply</h3>

                  <form className="comment-form">
                    <p className="comment-notes">
                      <span id="email-notes">
                        Your email address will not be published.
                      </span>
                      Required fields are marked
                      <span className="required">*</span>
                    </p>

                    <p className="comment-form-comment">
                      <label>Comment</label>
                      <textarea
                        name="comment"
                        id="comment"
                        cols="45"
                        rows="5"
                        maxLength="65525"
                        required
                      />
                    </p>

                    <p className="comment-form-author">
                      <label>
                        Name <span className="required">*</span>
                      </label>
                      <input type="text" id="author" name="author" required />
                    </p>

                    <p className="comment-form-email">
                      <label>
                        Email <span className="required">*</span>
                      </label>
                      <input type="email" id="email" name="email" required />
                    </p>

                    <p className="comment-form-url">
                      <label>Website</label>
                      <input type="url" id="url" name="url" />
                    </p>

                    <p className="comment-form-cookies-consent">
                      <input
                        type="checkbox"
                        value="yes"
                        name="wp-comment-cookies-consent"
                        id="wp-comment-cookies-consent"
                      />
                      <label htmlFor="wp-comment-cookies-consent">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </p>

                    <p className="form-submit">
                      <input
                        type="submit"
                        name="submit"
                        id="submit"
                        className="submit"
                        value="Post Comment"
                      />
                    </p>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <aside className="widget-area" id="secondary">
                <section className="widget widget_search">
                  <form className="search-form">
                    <label>
                      <span className="screen-reader-text">Search for:</span>
                      <input
                        type="search"
                        className="search-field"
                        placeholder="Search..."
                      />
                    </label>
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </section>

                <section className="widget widget_evolta_posts_thumb">
                  <h3 className="widget-title">Popular Posts</h3>

                  <article className="item">
                    <a href="#" className="thumb">
                      <span className="fullimage cover bg1" role="img"></span>
                    </a>
                    <div className="info">
                      <time dateTime="2023-06-30">June 10, 2023</time>
                      <h4 className="title usmall">
                        <a href="#">
                          Making Peace With The Feast Or Famine Of Freelancing
                        </a>
                      </h4>
                    </div>

                    <div className="clear"></div>
                  </article>

                  <article className="item">
                    <a href="#" className="thumb">
                      <span className="fullimage cover bg2" role="img"></span>
                    </a>
                    <div className="info">
                      <time dateTime="2023-06-30">June 21, 2023</time>
                      <h4 className="title usmall">
                        <a href="#">
                          I Used The Web For A Day On A 50 MB Budget
                        </a>
                      </h4>
                    </div>

                    <div className="clear"></div>
                  </article>

                  <article className="item">
                    <a href="#" className="thumb">
                      <span className="fullimage cover bg3" role="img"></span>
                    </a>
                    <div className="info">
                      <time dateTime="2023-06-30">June 30, 2023</time>
                      <h4 className="title usmall">
                        <a href="#">
                          How To Create A Responsive Popup Gallery?
                        </a>
                      </h4>
                    </div>

                    <div className="clear"></div>
                  </article>
                </section>

                <section className="widget widget_recent_comments">
                  <h3 className="widget-title">Recent Comments</h3>

                  <ul>
                    <li>
                      <span className="comment-author-link">
                        <a href="#">A WordPress Commenter</a>
                      </span>
                      on
                      <a href="#">Hello world!</a>
                    </li>
                    <li>
                      <span className="comment-author-link">
                        <a href="#">Evolta</a>
                      </span>
                      on
                      <a href="#">Hello world!</a>
                    </li>
                    <li>
                      <span className="comment-author-link">
                        <a href="#">Wordpress</a>
                      </span>
                      on
                      <a href="#">Hello world!</a>
                    </li>
                    <li>
                      <span className="comment-author-link">
                        <a href="#">A WordPress Commenter</a>
                      </span>
                      on
                      <a href="#">Hello world!</a>
                    </li>
                    <li>
                      <span className="comment-author-link">
                        <a href="#">Evolta</a>
                      </span>
                      on
                      <a href="#">Hello world!</a>
                    </li>
                  </ul>
                </section>

                <section className="widget widget_recent_entries">
                  <h3 className="widget-title">Recent Posts</h3>

                  <ul>
                    <li>
                      <a href="#">
                        How to Become a Successful Entry Level UX Designer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        How to start your business as an entrepreneur
                      </a>
                    </li>
                    <li>
                      <a href="#">How to be a successful entrepreneur</a>
                    </li>
                    <li>
                      <a href="#">
                        10 Building Mobile Apps With Ionic And React
                      </a>
                    </li>
                    <li>
                      <a href="#">Protect your workplace from cyber attacks</a>
                    </li>
                  </ul>
                </section>

                <section className="widget widget_archive">
                  <h3 className="widget-title">Archives</h3>

                  <ul>
                    <li>
                      <a href="#">May 2023</a>
                    </li>
                    <li>
                      <a href="#">April 2023</a>
                    </li>
                    <li>
                      <a href="#">June 2023</a>
                    </li>
                  </ul>
                </section>

                <section className="widget widget_categories">
                  <h3 className="widget-title">Categories</h3>

                  <ul>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Technology</a>
                    </li>
                    <li>
                      <a href="#">Tips</a>
                    </li>
                    <li>
                      <a href="#">Uncategorized</a>
                    </li>
                  </ul>
                </section>

                <section className="widget widget_meta">
                  <h3 className="widget-title">Meta</h3>

                  <ul>
                    <li>
                      <a href="#">Log in</a>
                    </li>
                    <li>
                      <a href="#">
                        Entries{" "}
                        <abbr title="Really Simple Syndication">RSS</abbr>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Comments{" "}
                        <abbr title="Really Simple Syndication">RSS</abbr>
                      </a>
                    </li>
                    <li>
                      <a href="#">WordPress.org</a>
                    </li>
                  </ul>
                </section>

                <section className="widget widget_tag_cloud">
                  <h3 className="widget-title">Tags</h3>

                  <div className="tagcloud">
                    <a href="#">
                      IT <span className="tag-link-count"> (3)</span>
                    </a>
                    <a href="#">
                      Evolta <span className="tag-link-count"> (3)</span>
                    </a>
                    <a href="#">
                      Games <span className="tag-link-count"> (2)</span>
                    </a>
                    <a href="#">
                      Fashion <span className="tag-link-count"> (2)</span>
                    </a>
                    <a href="#">
                      Travel <span className="tag-link-count"> (1)</span>
                    </a>
                    <a href="#">
                      Smart <span className="tag-link-count"> (1)</span>
                    </a>
                    <a href="#">
                      Marketing <span className="tag-link-count"> (1)</span>
                    </a>
                    <a href="#">
                      Tips <span className="tag-link-count"> (2)</span>
                    </a>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <FooterTwo />
    </>
  );
}
