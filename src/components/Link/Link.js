import React, { Fragment } from 'react';

import iconArrow from 'src/static/icons/icon-arrow.svg';

const Link = props => {
  const {
    url,
    text
  } = props;

  return (
      <Fragment>
          <a href={url} className="link">
              {text ? text : null}
              <span className="ml-15px"><img src={iconArrow} alt="arrow" className="inline"/></span>
          </a>
      </Fragment>
  );
};

export default Link;
