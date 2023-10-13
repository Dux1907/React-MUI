import React, { useEffect, useRef } from "react";
import Chart from "./Chart";

const DonutChart = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      Chart(ref.current, data);
    }
  }, [ref]);

  return (
    <div className="container">
      <div className="graph" style = {{textAlign:'center',padding:'8px',paddingBottom:'15px'}} ref={ref} />
    </div>
  );
};

export default React.memo(DonutChart);
