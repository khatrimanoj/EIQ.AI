import React, {useEffect, useState} from "react";
import heroBannerDesktop from "src/static/images/hero-image-desktop.png";
import heroBannerMobile from "src/static/images/hero-image-mobile.png";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

const HeroBanner = (props) => {
  const bgDesktopImage = {
    width: "100%",
    height: "calc(100vh - 100px)",
    backgroundImage: `url(${heroBannerDesktop})`,
    backgroundRepeat: "nor-epeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const bgMobileImage = {
    width: "100%",
    height: "calc(100vh - 100px)",
    backgroundImage: `url(${heroBannerMobile})`,
    backgroundRepeat: "nor-epeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  let isPageWide = useMediaQuery("(min-width: 640px)");

  return (
    <div
      className="heroBanner flex sm:items-center py-[30px] sm:py-[150px] h-screen"
      style={isPageWide ? bgDesktopImage : bgMobileImage}
    >
      <div className=" max-w-screen-2xl mx-auto w-full">
        <div className="heroBanner-text h-full items-center sm:items-start flex flex-col justify-between sm:justify-start text-white sm:max-w-lg md:max-w-xl lg:max-w-2xl px-15px sm:pl-30px sm:pr-0px ">
          <h1 className="banner-title hidden sm:flex sm:text-[34px] sm:leading-[44px] md:text-[38px] md:leading-[48px] lg:text-[48px] lg:leading-[58px]">
            The world's first end-to-end supply chain ESG <br></br>due diligence
            platform
          </h1>
          <h1 className="banner-title pt-[40px] text-center flex sm:hidden text-[32px] leading-[42px]">
            The world's first end-to-end supply chain ESG due diligence platform
          </h1>
          <button
            type="button"
            className="banner-btn flex items-center text-[20px] text-[#ec8b04] mt-[40px] outline-none"
            onClick={props.scrollDownTO}
          >
            <svg
              width="21"
              height="17"
              viewBox="0 0 21 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-10px"
            >
              <path
                d="M9.9875 7.41094L0.478125 0.345312L0.876562 0L9.9875 6.72031L19.0984 0L19.5766 0.345312L9.9875 7.41094Z"
                className="arrow-top"
              />
              <path
                d="M9.9875 12.1656L0.2125 4.96719L1.16875 4.35625L9.9875 10.9438L18.9125 4.35625L19.7891 4.96719L9.9875 12.1656Z"
                className="arrow-middle"
              />
              <path
                d="M9.9875 17L0 9.58906L1.35469 8.7125L9.9875 15.0875L18.7 8.7125L20.0547 9.58906L9.9875 17Z"
                className="arrow-bottom"
              />
            </svg>
            Scroll for more
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
