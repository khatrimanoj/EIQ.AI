import React from "react";
import { Disclosure } from "@headlessui/react";

import Button from "src/components/Button";
import logoEiQAnalyze from "src/static/logos/logo-eiq-aal.svg";
import iconChevron from "src/static/icons/icon-chevron-blue.svg";

const NavLinks = (props) => {  
  const {
    scrollToRefRatings,
    scrollToRefDueDiligence,
    scrollToRefRiskAssessment,
    scrollToRefIncidentAlerts,
    scrollToRefSupplierMonitoring,
    scrollToRefCapacityBuilding,
  } = props;
  const navigation = [
    { text: "Ratings", scrollTo: scrollToRefRatings },
    { text: "Due Diligence", scrollTo: scrollToRefDueDiligence },
    { text: "Risk Assessment", scrollTo: scrollToRefRiskAssessment },
    { text: "Incident Alerts", scrollTo: scrollToRefIncidentAlerts },
    { text: "Supplier Monitoring", scrollTo: scrollToRefSupplierMonitoring },
    { text: "Capacity Building", scrollTo: scrollToRefCapacityBuilding },
  ];
  return (
    <>
      {/* <nav>
        <button className="menu-toggle" onClick={toggle}>
          <span className={`menu ${isOpen ? "cross" : "hamburger"}`}></span>
        </button> */}
      <div className="flex  items-center flex-col xl:flex-row border-t-1 xl:border-0 border-light2">
        <div className="w-full flex  flex-col xl:flex-row mr-0 xl:mr-4 2xl:mr-8">
          {navigation.map((nav, index) => (
            // <li key={nav.text}>
            <Disclosure.Button
              key={index}
              onClick={nav.scrollTo}
              className="main-menu-link border-light2 text-[clamp(1rem,1vw,1.125rem)] whitespace-nowrap p-3 xl:p-2 pl-0 xl:pl-3 2xl:pl-7 text-left xl:text-center border-b xl:border-none "
            >
              {nav.text}
            </Disclosure.Button>
            // </li>
          ))}
        </div>
      </div>
      {/* </nav> */}
      <div className="w-full  flex  flex-col xl:flex-row ">
        <Button
          url="https://analyze.eiq.ai/"
          logo={logoEiQAnalyze}
          alt="EiQ Analyze"
          text="Analyze"
          color="bg-white text-black flex hover:bg-white items-center xl:gray mr-0 rounded-none xl:rounded-2xl xl:mr-15px border-light2 border-b xl:border-none py-3 xl:py-2 px-0 xl:px-15px"
        >
          <span className="flex xl:hidden">
            <img src={iconChevron} alt="chevron icon" />
          </span>
        </Button>
        <Button
          url="https://assess.eiq.ai/"
          logo={logoEiQAnalyze}
          alt="EiQ Assess"
          text="Assess"
          color="bg-white text-black flex hover:bg-white items-center xl:gray mr-0 rounded-none xl:rounded-2xl xl:mr-15px  border-light2 border-b xl:border-none py-3 xl:py-2 px-0 xl:px-15px"
        >
          <span className="flex xl:hidden">
            <img src={iconChevron} alt="chevron icon" />
          </span>
        </Button>
        <Button
          url="https://learn.eiq.ai/"
          logo={logoEiQAnalyze}
          alt="EiQ Learn"
          text="Learn"
          color="bg-white text-black flex hover:bg-white items-center xl:gray rounded-none xl:rounded-2xl px-0 py-3 xl:py-2 xl:px-15px"
        >
          <span className="flex xl:hidden">
            <img src={iconChevron} alt="chevron icon" />
          </span>
        </Button>
      </div>
    </>
  );
};

export default NavLinks;
