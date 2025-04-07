"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const RelatedProducts = () => {
  return (
    <>
      <div className="related-products">
        <div className="container">
          <div className="section-title">
            <div className="content">
              <span>Our Shop</span>
              <h2>Related Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="#">
                    <Image
                      src="/images/shop/1.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/1-1.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>

                  <a className="add-to-cart-btn" href="#">
                    Add To Cart <i className="bx bx-basket"></i>
                  </a>
                </div>
                <div className="product-content">
                  <h3>
                    <Link href="/shop/details/">White Book</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$8.5</span>
                    <span className="old">$12.5</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="#">
                    <Image
                      src="/images/shop/2.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/2-1.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>
                  <a className="add-to-cart-btn" href="#">
                    Add To Cart <i className="bx bx-basket"></i>
                  </a>
                </div>
                <div className="product-content">
                  <h3>
                    <Link href="/shop/details/">Red Side Book</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$12.5</span>
                    <span className="old">$20.5</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="#">
                    <Image
                      src="/images/shop/3.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/3-1.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>
                  <a className="add-to-cart-btn" href="#">
                    Add To Cart <i className="bx bx-basket"></i>
                  </a>
                </div>
                <div className="product-content">
                  <h3>
                    <Link href="/shop/details/">Book With Pen</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$8.5</span>
                    <span className="old">$12.5</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
