import React from 'react';
import ChartComponent from './ChartComponent';
const ChartContainer = () => {
  const numberOfCharts = 3;
  const chartIds = Array.from({ length: numberOfCharts }, (_, index) => index);
  return (
    <div>
      {chartIds.map((id) => (
        <ChartComponent key={id} id={id} />
      ))}
    </div>
  );
};
export default ChartContainer;
