import React from "react";

const SectionHalf = ({
  backgroundImageClass,
  center,
  color,
  direction,
  left,
  right,
}) => {
  const sectionDirection = direction ? direction : "";
  const sectionColor = color ? color : "";
  const sectionBgImage = backgroundImageClass ? backgroundImageClass : "";
  const centerAlign = center ? "items-center" : "";

  return (
    <div
      className={`section justify-between gap-y-5 gap-x-3 px-15px py-20px sm:px-30px md-px-40px lg-px-60px xl:px-90px md:py-[40px] xl:py-60px ${sectionColor} ${sectionDirection} ${sectionBgImage} ${centerAlign}`}
    >
      {left && <div className="md:w-[49%] sm:w-full order-last md:order-1">{left}</div>}
      {right && <div className="md:w-[49%] sm:w-full order-1 md:order-last">{right}</div>}
    </div>
  );
};

export default React.memo(SectionHalf);
