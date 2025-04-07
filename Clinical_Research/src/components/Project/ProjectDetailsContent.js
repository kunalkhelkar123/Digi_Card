"use client";

import React from "react";
import Image from "next/image";

const ProjectDetailsContent = () => {
  return (
    <>
      <div className="projects-details-area ptb-110">
        <div className="container">
          <div className="projects-details">
            <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                  <Image
                    src="/images/projects/1.jpg"
                    alt="image"
                    width={660}
                    height={530}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-image">
                  <Image
                    src="/images/projects/2.jpg"
                    alt="image"
                    width={660}
                    height={530}
                  />
                </div>
              </div>
            </div>

            <div className="projects-details-desc">
              <h3>Incredible Infrastructure</h3>

              <p>
                Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed
                diam no nu m nibhie eui smod. Facil isis atve eros et accumsan
                etiu sto odi dignis sim qui blandit praesen lup ta de er. At
                molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei
                latine prop riae na, mea cu purto debitis. Primis nost rud no
                eos, no impedit dissenti as mea, ea vide labor amus neglegentur
                vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise. Ad
                po exerci nusquam eos te. Cu altera expet enda qui, munere
                oblique theo phrastu ea vix. Ne nec modus civibus modera tius,
                sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu
                altera expetenda qui, munere oblique theophr astus ea vix modus
                civiu mod eratius.
              </p>

              <p>
                Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed
                diam no nu m nibhie eui smod. Facil isis atve eros et accumsan
                etiu sto odi dignis sim qui blandit praesen lup ta de er. At
                molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei
                latine prop riae na, mea cu purto debitis.
              </p>

              <p>
                Nost rud no eos, no impedit dissenti as mea, ea vide labor amus
                neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet
                nolu ise. Ad po exerci nusquam eos te. Cu altera expet enda qui,
                munere oblique theo phrastu ea vix. Ne nec modus civibus modera
                tius, sit ei lorem doctus. Ne docen di verterem reformidans eos.
                Cu altera expetenda qui, munere oblique theophr astus ea vix
                modus civiu mod eratius.
              </p>

              <div className="project-details-info">
                <div className="single-info-box">
                  <h4>Client</h4>
                  <span>James Anderson</span>
                </div>

                <div className="single-info-box">
                  <h4>Category</h4>
                  <span>Network, Marketing</span>
                </div>

                <div className="single-info-box">
                  <h4>Date</h4>
                  <span>February 28, 2023</span>
                </div>

                <div className="single-info-box">
                  <h4>Share</h4>
                  <ul className="social">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook "></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/" target="_blank">
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-info-box">
                  <a href="#" className="btn btn-primary" target="_blank">
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsContent;
