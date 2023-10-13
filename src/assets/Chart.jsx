import * as d3 from "d3";
import "../App.css";
// import { useMediaQuery } from "@mui/material";
const Chart = (element, data) => {
  const colors = ["#6139e9", "#e4e0ff", "#f33579"];
  const boxSize = 500;
  const isTrue = window.innerWidth >= 900
  d3.select(element).select("svg").remove();
  
     const svg = d3
    .select(element)
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("height", (isTrue ? "180px" : "220px"))
    .attr("width", (isTrue ? "180px" : "220px"))
    .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
    .append("g")
       .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);
  
  const arcGenerator = d3
    .arc()
    .padAngle(-0.2)
    .innerRadius(175)
    .outerRadius(250);

  const pieGenerator = d3
    .pie()
    .startAngle(-1.6 * Math.PI)
    .value((d) => d.value);

  const arcs = svg.selectAll().data(pieGenerator(data)).enter();
  arcs
    .append("path")
    .attr("d", arcGenerator)
    .style("fill", (d, i) => colors[i % data.length]);
  
  
    const foreignObject = svg
    .append("foreignObject")
    .attr("x", -100) // Adjust the X position as needed
    .attr("y", -30) // Adjust the Y position as needed
    .attr("width", 200)
    .attr("height", 60);

  // Create a div to contain the text
  const div = foreignObject
  .append("xhtml:div")
  .style("font-size", "22px");
  // Add the text content
  div.html("65% New Customers");

};


export default Chart;
