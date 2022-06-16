import React from 'react';

const SectionBlock = ({ number, label }) => {
  return (
    <div className="section-block pl-[0.5rem] sm:pl-[0.625rem]">
      <span className="section-block-number text-[clamp(2.125rem,3.75vw,3.75rem)]">
        {number}
      </span>
      <span className="section-block-label text-[clamp(1rem,1vw,1.25rem)]">
        {label}
      </span>
    </div>
  );
};

export default React.memo(SectionBlock);
