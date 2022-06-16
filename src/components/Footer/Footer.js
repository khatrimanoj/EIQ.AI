import React, { useEffect } from "react";

import logoElevate from "src/static/logos/logo-lrqa.svg";
import iconFacebook from "src/static/icons/icon-facebook.svg";
import iconLinkedin from "src/static/icons/icon-linkedin.svg";
import iconTwitter from "src/static/icons/icon-twitter.svg";
import iconYoutube from "src/static/icons/icon-youtube.svg";
// import DownArrowIcon from "src/static/icons/icon-chevron-white.svg";
import FooterLink from "./FooterLink";
const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "9308745",
          formId: "7b595328-a2a4-4368-9379-4fcb4ca4d55a",
          target: "#footer-hubspot-form",
        });
      }
    });
  }, []);

  return (
    <div className="footer flex self-stretch justify-center py-20px px-[0px] mdx:px-[40px] lg-px-[60px] xl:px-90px md:py-[40px] xl:py-60px">
      <div className="flex flex-col max-w-screen-2xl">
        <div className="footer-subscription block px-[20px] mdx:px-[0] lg:flex m-auto lg:px-[0px] lg:max-w-[100%]">
          <div className="footer-subscription-content mb-30px lg:mb-0 w-[100%] lg:mr-15px lg:w-[50%]">
            Subscribe to ELEVATE insights and industry relevant events for a
            complete understanding of what we mean by business driven
            sustainability and how it can benefit you.
          </div>
          <div
            id="footer-hubspot-form"
            className="flex w-[100%] lg:w-[50%]"
          ></div>
        </div>
        <div className="footer-navbar">
          <FooterLink />
        </div>
        <div className="mdlmax:flex mdlmax:items-center mdlmax:flex-col px-[20px] mdx:px-[0] ">
          <div className="footer-social-media">
            <a href="https://www.elevatelimited.com/">
              <img src={logoElevate} alt="Elevate" width={200}/>
            </a>
            <a href="https://www.linkedin.com/company/elevate-global-limited/">
              <img src={iconLinkedin} alt="Linkedin" />
            </a>
            <a href="https://twitter.com/ElevateLimited">
              <img src={iconTwitter} alt="Twitter" />
            </a>
            <a href="https://www.facebook.com/Elevate.Global.Limited">
              <img src={iconFacebook} alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/user/ElevateLimited">
              <img src={iconYoutube} alt="Youtube" />
            </a>
          </div>
          <div className="footer-copyright">© ELEVATE 2022</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
