import React from 'react';

import StatisticsItem from 'src/components/StatisticsItem';

const StatisticsBar = () => (
  <div className="statistics-container">
    <StatisticsItem company="ABC Factory" textCircle="4.64" textTriangle="16.24%" />
    <StatisticsItem company="Better Manufacture Ltd." textCircle="4.64" textTriangle="16.24%" />
    <StatisticsItem company="Brilliant Clothing Manufacture Ltd." textCircle="4.64" textTriangle="16.24%" />
    <StatisticsItem company="Continental Food Co. Ltd." textCircle="4.64" textTriangle="16.24%" />
    <StatisticsItem company="Dynasty Electron"/>
  </div>
);

export default StatisticsBar;
