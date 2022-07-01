import React from "react";
import logoEiQ from "src/static/logos/logo-eiq.svg";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import NavLinks from "./navLink";
const MainMenu = (props) => {
  const {
    scrollToRefRatings,
    scrollToRefDueDiligence,
    scrollToRefRiskAssessment,
    scrollToRefIncidentAlerts,
    scrollToRefSupplierMonitoring,
    scrollToRefCapacityBuilding,
  } = props;
  return (
    <>
      <Disclosure
        as="nav"
        className="bg-white sticky top-0 left-0 z-10 max-w-screen-2xl mx-auto w-full"
      >
        {({ open }) => (
          <>
            <div className=" mx-auto border-b-1 xl:border-b-0 border-custom-gray">
              <div className="z-10 bg-white w-full px-3 py-4 relative flex items-center justify-end">
                <div className="">
                  <img src={logoEiQ} alt="EiQ" className="w-32" />
                </div>
                <div className="absolute inset-y-0  flex items-center xl:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 pr-0 rounded-md text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center xl:items-stretch xl:justify-end">
                  <div className="hidden xl:flex sm:ml-6 ">
                    <NavLinks
                      scrollToRefRatings={scrollToRefRatings}
                      scrollToRefDueDiligence={scrollToRefDueDiligence}
                      scrollToRefRiskAssessment={scrollToRefRiskAssessment}
                      scrollToRefIncidentAlerts={scrollToRefIncidentAlerts}
                      scrollToRefSupplierMonitoring={
                        scrollToRefSupplierMonitoring
                      }
                      scrollToRefCapacityBuilding={scrollToRefCapacityBuilding}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="mobile-view xl:hidden">
              <NavLinks
                scrollToRefRatings={scrollToRefRatings}
                scrollToRefDueDiligence={scrollToRefDueDiligence}
                scrollToRefRiskAssessment={scrollToRefRiskAssessment}
                scrollToRefIncidentAlerts={scrollToRefIncidentAlerts}
                scrollToRefSupplierMonitoring={scrollToRefSupplierMonitoring}
                scrollToRefCapacityBuilding={scrollToRefCapacityBuilding}
              />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default MainMenu;
