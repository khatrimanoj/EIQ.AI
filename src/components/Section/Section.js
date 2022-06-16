import React from 'react';

const Section = ({ center, color, content }) => {

  const centerAlign = center ? 'items-center' : '';

  return (
    <div className={`section gap-y-5 gap-x-3 px-15px py-20px sm:px-30px md-px-40px lg-px-60px xl:px-90px md:py-[40px] xl:py-60px ${color} ${centerAlign}` }>
      {content}
    </div>
  );
};

export default React.memo(Section);
