import React, { Fragment, useRef } from "react";
import ReactPlayer from "react-player";

import Button from "src/components/Button";
import Footer from "src/components/Footer";
import Link from "src/components/Link";
import HeroBanner from "src/components/HeroBanner";
import MainMenu from "src/components/MainMenu";
import ProductTicker from "src/components/ProductTicker";
import {
  Section,
  SectionBlock,
  SectionHalf,
  SectionLabel,
} from "src/components/Section";
// import StatisticsBar from 'src/components/StatisticsBar';

import iconAssessment from "src/static/icons/icon-assessment.svg";
import iconCapacity from "src/static/icons/icon-capacity.svg";
import iconIncident from "src/static/icons/icon-incident.svg";
import iconProgram from "src/static/icons/icon-program.svg";
import iconQuoteEnd from "src/static/icons/icon-quote-end.svg";
import iconQuoteStart from "src/static/icons/icon-quote-start.svg";
import iconRatings from "src/static/icons/icon-ratings.svg";
import iconSupplier from "src/static/icons/icon-supplier.svg";

import imageSupplier from "src/static/images/image-supplier-monitoring.svg";

import videoDigitalLearning from "src/static/videos/video-digital-learning.mp4";
import videoDueDiligence from "src/static/videos/video-due-diligence.mp4";
import videoDueDiligenceMobile from "src/static/videos/due_diligence_workflow_mobile.mp4";
import videoIncidentAlert from "src/static/videos/video-incident-alert.mp4";
import videoRatings from "src/static/videos/video-ratings.mp4";
import videoRiskAssessment from "src/static/videos/video-risk-assessment.mp4";

// import productTicker from 'src/static/product_ticker.gif';

const LandingPage = () => {
  const refRatings = useRef(null);
  const refDueDiligence = useRef(null);
  const refRiskAssessment = useRef(null);
  const refIncidentAlerts = useRef(null);
  const refSupplierMonitoring = useRef(null);
  const refCapacityBuilding = useRef(null);

  const scrollToRefRatings = () => refRatings.current.scrollIntoView();
  const scrollToRefDueDiligence = () =>
    refDueDiligence.current.scrollIntoView();
  const scrollToRefRiskAssessment = () =>
    refRiskAssessment.current.scrollIntoView();
  const scrollToRefIncidentAlerts = () =>
    refIncidentAlerts.current.scrollIntoView();
  const scrollToRefSupplierMonitoring = () =>
    refSupplierMonitoring.current.scrollIntoView();
  const scrollToRefCapacityBuilding = () =>
    refCapacityBuilding.current.scrollIntoView();

  return (
    <Fragment>
      <div className="flex flex-col mx-auto">
        <MainMenu
          scrollToRefRatings={scrollToRefRatings}
          scrollToRefDueDiligence={scrollToRefDueDiligence}
          scrollToRefRiskAssessment={scrollToRefRiskAssessment}
          scrollToRefIncidentAlerts={scrollToRefIncidentAlerts}
          scrollToRefSupplierMonitoring={scrollToRefSupplierMonitoring}
          scrollToRefCapacityBuilding={scrollToRefCapacityBuilding}
        />
        <div className="relative w-full">
          <ProductTicker />
          {/* <StatisticsBar /> */}
          <HeroBanner scrollToRefRatings={scrollToRefRatings} />
        </div>
        <div ref={refRatings} className="scroll-offset"></div>
        <SectionHalf
          left={
            <Fragment>
              <SectionLabel icon={iconRatings} text="Ratings" />
              <h2 className="section-title-black text-[clamp(1.5rem,2vw,2rem)]">
                The worlds first supply chain ESG due diligence platform
                connected to supplier ratings and on-site transformation
              </h2>
              <div className="section-text-xl-blue mb-45px">
                <ul>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Robust risk assessment and segmentation tools
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Advisory support to design your program
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    On-the-ground supplier monitoring and remediation
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Real-time intelligence about your supply chain
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Empowers you to meet regulator requirements
                  </li>
                </ul>
              </div>
              <div className="flex justify-center md:justify-start">
                <Button
                  url="https://www.elevatelimited.com/request-live-demo/"
                  text="Request a demo"
                />
              </div>
            </Fragment>
          }
          right={
            <div className="section-motion-graphic">
              <ReactPlayer
                url={videoRatings}
                playsinline
                loop={true}
                muted={true}
                playing={true}
                height="100%"
                width="100%"
              />
            </div>
          }
        />
        <div ref={refDueDiligence} className="scroll-offset"></div>
        <Section
          color="black"
          content={
            <>
              <div className="section-motion-graphic xs:flex hidden w-full self-center">
                <ReactPlayer
                  url={videoDueDiligence}
                  playsinline
                  loop={false}
                  muted={true}
                  playing={true}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="section-motion-graphic xs:hidden flex w-full self-center">
                <ReactPlayer
                  url={videoDueDiligenceMobile}
                  playsinline
                  loop={true}
                  muted={true}
                  playing={true}
                  height="100%"
                  width="100%"
                />
              </div>
            </>
          }
        />
        <div ref={refRiskAssessment} className="scroll-offset"></div>
        <SectionHalf
          left={
            <Fragment>
              <SectionLabel icon={iconAssessment} text="Risk Assessment" />
              <h2 className="section-title-black text-[clamp(1.5rem,2vw,2rem)]">
                Geographic and product level Supply Chain ESG Risk Ratings for{" "}
              </h2>
              <div className="section-block-wrapper risk-assesment-gap gap-[0.45rem] sm:gap-[1.5rem]">
                <SectionBlock number="170+" label="geographies" />
                <SectionBlock number="350+" label="products and services" />
                <SectionBlock number="38" label="different issue areas" />
              </div>
              <div className="section-text-xl-blue mb-45px">
                <p className="font-FGMR">
                  Used by investors and corporates for:
                </p>
                <ul>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Insight into supply chain operating context
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Restricted sourcing country lists and review
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Vendor and supplier ESG risk assessment
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Forced labor risk flags and due diligence
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Responsible sourcing program design
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Portfolio review and engagement strategy
                  </li>
                </ul>
              </div>
              <div className="flex justify-center md:justify-start">
                <Button
                  url="https://www.elevatelimited.com/request-live-demo/"
                  text="Request a demo"
                />
              </div>
            </Fragment>
          }
          right={
            <div className="section-motion-graphic">
              <ReactPlayer
                url={videoRiskAssessment}
                playsinline
                loop={true}
                muted={true}
                playing={true}
                height="100%"
                width="100%"
              />
            </div>
          }
        />
        <div ref={refIncidentAlerts} className="scroll-offset"></div>
        <SectionHalf
          color="gray"
          direction="md:flex-row-reverse"
          left={
            <Fragment>
              <SectionLabel icon={iconIncident} text="Incident Alerts" />
              <h2 className="section-title-black text-[clamp(1.5rem,2vw,2rem)]">
                Our Sentinel service scans the web and media sources and sends
                alerts for supplier and vendor controversies relating to labor,
                health and safety, environment, business ethics and management
                systems
              </h2>
              <div className="section-text-xl-blue mb-45px">
                <p className="font-FGMR">
                  Used by companies and investors for:
                </p>
                <ul>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    New supplier screening and selection
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Near real-time supplier risk identification
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Commodity-level risk monitoring
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Alerts on critical issues e.g., forced labour
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    To inform spot-check audits and investigations
                  </li>
                </ul>
              </div>
              <div className="flex justify-center md:justify-start">
                <Button
                  url="https://www.elevatelimited.com/request-live-demo/"
                  text="Request a demo"
                />
              </div>
            </Fragment>
          }
          right={
            <div className="section-motion-graphic">
              <ReactPlayer
                url={videoIncidentAlert}
                playsinline
                loop={true}
                muted={true}
                playing={true}
                height="100%"
                width="100%"
              />
            </div>
          }
        />
        <SectionHalf
          backgroundImageClass="bg-program-design bg-cover h-835px"
          center="true"
          left={
            <Fragment>
              <SectionLabel icon={iconProgram} text="Program Design" />
              <div className="flex">
                <img
                  src={iconQuoteStart}
                  alt="Quote Start"
                  className="self-start pt-10px"
                />
                <h2 className="section-title-black px-15px text-[clamp(1.5rem,2vw,2rem)]">
                  ELEVATE’s global team of experts design and implement supply
                  chain and ESG due diligence solutions that leverage a
                  risk-based logic and are strategic and tailored to the unique
                  context, ambitions, and supply chain characteristics of your
                  company
                </h2>
                <img
                  src={iconQuoteEnd}
                  alt="Quote End"
                  className="self-end pb-10px"
                />
              </div>
              <div className="section-text-xl-gray mt-15px mb-30px ml-40px">
                Erin Lyon | Vice President, Advisory
              </div>
              <div className="flex justify-center md:justify-start">
                <div className="ml-40px">
                  <Link
                    url="https://www.elevatelimited.com/services/advisory/"
                    text="Learn more"
                  />
                </div>
              </div>
            </Fragment>
          }
          right={<Fragment></Fragment>}
        />
        <div ref={refSupplierMonitoring} className="scroll-offset"></div>
        <SectionHalf
          direction="reverse"
          left={
            <Fragment>
              <SectionLabel icon={iconSupplier} text="Supplier Monitoring" />
              <h2 className="section-title-black text-[clamp(1.5rem,2vw,2rem)]">
                Digital assessment capability that delivers an enhanced audit
                protocol and report directly via EiQ with improved quality and
                data insights …
              </h2>
              <div className="section-text-xl-blue mb-30px">
                <ul>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    More rigorous check-lists and protocol
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Integration of Worker Sentiment Surveys
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    In-built online equivalency process
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    World-class data integration and visualizations
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Benchmarking of performance vs. peers
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Aggregate program analytics for key metrics
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Integrated remediation and capacity building
                  </li>
                  <li className="text-[clamp(1rem,1.65vw,1.375rem)]">
                    Options for both audit and self-assessment
                  </li>
                </ul>
              </div>
              <div className="flex justify-center md:justify-start">
                <Link
                  url="https://www.elevatelimited.com/services/assessments/"
                  text="Learn more"
                />
              </div>
            </Fragment>
          }
          right={
            <div className="section-motion-graphic">
              <img src={imageSupplier} alt="placeholder" />
            </div>
          }
        />
        <div ref={refCapacityBuilding} className="scroll-offset"></div>
        <SectionHalf
          color="gray"
          left={
            <Fragment>
              <SectionLabel icon={iconCapacity} text="Capacity Building" />
              <h2 className="section-title-black text-[clamp(1.5rem,2vw,2rem)]">
                Our digital learning portfolio includes hundreds of different
                courses in local languages that can be used on their own or
                linked to the CAP management and remediation process
              </h2>
              <p className="section-text-xl-blue mb-45px text-[clamp(1.25rem,1vw,1.5rem)]">
                Almost 1 million digital learning courses have been completed by
                learners around the world for over 300 brands, retailers and
                suppliers. Real-time analytics, reports and outcomes from this
                engagement are tracked within the EiQ platform and linked to
                supplier performance and program effectiveness.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button
                  url="https://www.elevatelimited.com/request-live-demo/"
                  text="Request a demo"
                />
              </div>
            </Fragment>
          }
          right={
            <div className="section-motion-graphic">
              <ReactPlayer
                url={videoDigitalLearning}
                playsinline
                loop={true}
                muted={true}
                playing={true}
                height="100%"
                width="100%"
              />
            </div>
          }
        />
      </div>
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
