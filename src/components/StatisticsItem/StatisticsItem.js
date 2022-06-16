import React from 'react';

import iconCircle from 'src/static/icons/icon-circle.svg';
import iconTriangle from 'src/static/icons/icon-triangle.svg';

const StatisticsItem = props => {
  const {
    company,
    textCircle,
    textTriangle
  } = props;

  return (
    <div className="statistics-item">
        <span className="statistics-company">{company}</span>
        {textCircle ? (<span className="statistics-data"><img src={iconCircle} alt="circle" className="statistics-icon"/>{textCircle}</span>) : null}
        {textTriangle ? (<span className="statistics-data"><img src={iconTriangle} alt="triangle" className="statistics-icon"/>{textTriangle}</span>) : null}
    </div>
  );
};

export default StatisticsItem;
