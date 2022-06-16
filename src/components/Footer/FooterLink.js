import DownArrowIcon from "src/static/icons/icon-chevron-white.svg";
const Footerlink = () => {
  const Servicess = [
    {
      name: "About ELEVATE",
      items: [
        {
          name: "Who We Work With",
          url: "https://www.elevatelimited.com/about-elevate/who-we-work-with/",
        },
        {
          name: "Our Offices",
          url: "https://www.elevatelimited.com/about-elevate/our-offices/",
        },
        {
          name: "News & Media",
          url: "https://www.elevatelimited.com/about-elevate/news-media/",
        },
        {
          name: "Our People",
          url: "https://www.elevatelimited.com/about-elevate/our-people/",
        },
        {
          name: "Industry Contributions",
          url: "https://www.elevatelimited.com/about-elevate/industry-contributions/",
        },
        {
          name: "Quality & Integrity",
          url: "https://www.elevatelimited.com/about-elevate/quality-and-integrity/",
        },
        {
          name: "Careers",
          url: "https://www.elevatelimited.com/careers/",
        },
        {
          name: "Contact",
          url: "https://www.elevatelimited.com/about-elevate/contact/",
        },
      ],
    },
    {
      name: "Services",
      items: [
        {
          name: "Assessment",
          url: "https://www.elevatelimited.com/services/assessments/",
        },
        {
          name: "Advisory",
          url: "https://www.elevatelimited.com/services/advisory/",
        },
        {
          name: "Programs",
          url: "https://www.elevatelimited.com/services/programs/",
        },
        {
          name: "Analytics",
          url: "https://www.elevatelimited.com/services/analytics/eiq/",
        },
      ],
    },
    {
      name: "Industries",
      items: [
        {
          name: "Toys",
          url: "https://www.elevatelimited.com/industries/toys/",
        },
        {
          name: "Financial",
          url: "https://www.elevatelimited.com/industries/financial/",
        },
        {
          name: "Electronics",
          url: "https://www.elevatelimited.com/industries/electronics/",
        },
        {
          name: "Automotive",
          url: "https://www.elevatelimited.com/industries/automotive/",
        },
        {
          name: "Apparel & Footwear",
          url: "https://www.elevatelimited.com/industries/apparel-footwear/",
        },
        {
          name: "Agriculture & Food",
          url: "https://www.elevatelimited.com/industries/agriculture-food/",
        },
      ],
    },
    {
      name: "Engage",
      items: [
        {
          name: "Events",
          url: "https://www.elevatelimited.com/engage/events/",
        },
        {
          name: "Webinars",
          url: "https://www.elevatelimited.com/engage/webinars/",
        },
      ],
    },
    {
      name: "Insights",
      items: [
        {
          name: "COVID-19 Resource Center",
          url: "/insights/publications/covid-19-resource-center/",
        },
        {
          name: "Blog",
          url: "https://www.elevatelimited.com/blog/",
        },
        {
          name: "Publications",
          url: "/insights/publications/",
        },
      ],
    },
    {
      name: "Sustainability",
      items: [
        {
          name: "Sustainability",
          url: "https://www.elevatelimited.com/about-elevate/sustainability/",
        },
        {
          name: "Privacy Policy",
          url: "https://www.elevatelimited.com/about-elevate/sustainability/privacy-policy/",
        },
        {
          name: "Other Policies",
          url: "/about-elevate/sustainability/",
        },
        {
          name: "Terms & Conditions",
          url: "https://www.elevatelimited.com/about-elevate/sustainability/terms-conditions/",
        },
      ],
    },
  ];

  const FooterAccordion = (event) => {
    let matchsss = window.matchMedia("(max-width: 991px)");
    if (matchsss.matches) {
      let Clickhandler = event.target.closest(".footer-navbar-col");
      Clickhandler.classList.toggle("open");
    }
  };

  return (
    <>
      {Servicess.map((data, index) => {
        return (
          <div key={index} className="footer-navbar-col w-full mdx:w-auto">
            <h2
              className="px-[20px] mdx:px-[0] text-[clamp(1rem,1.5vw,1.125rem)]"
              onClick={FooterAccordion}
            >
              {data.name}{" "}
              <span className="inline-flex mdx:hidden">
                <img src={DownArrowIcon} alt="Chevron Dow Arrow" />
              </span>
            </h2>
            <ul>
              {data.items.map((item, index) => {
                return (
                  <li
                    className="px-[20px] py-[5px] mdx:py-[0px] mdx:px-[0]"
                    key={index}
                  >
                    <a href={item.url}>{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Footerlink;
