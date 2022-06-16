import React from "react";

const SectionLabel = ({ icon, text }) => {
  return (
    <div className="section-label-with-icon">
      <img src={icon} alt="logo" />
      <span className="ml-15px text-[clamp(1.313rem,2vw,2.125rem)]">{text}</span>
    </div>
  );
};

export default React.memo(SectionLabel);
