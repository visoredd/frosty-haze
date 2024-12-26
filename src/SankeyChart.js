import React from "react";
import { Chart } from "react-google-charts";

export const SankeyChart = ({ data, options }) => {
  return (
    <Chart
      chartType="Sankey"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
};
