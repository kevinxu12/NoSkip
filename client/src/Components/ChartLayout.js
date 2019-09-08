import React from "react";
var Chart = require("chart.js");

class ChartLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;
    var dt = new Date();
    var date1 = (dt.getMonth() + 1) + "/" + dt.getDate();
    var date2 = (dt.getMonth() + 1) + "/" + (dt.getDate() - 2);
    var date3 = (dt.getMonth() + 1) + "/" + (dt.getDate() - 4);
    var date4 = (dt.getMonth() + 1) + "/" + (dt.getDate() - 6);
    var myChart = new Chart(node, {
      type: "bar",
      data: {
        labels: [date4, date3, date2, date1],
        datasets: [{
            label: "Attended",
            type: "line",
            borderColor: "#8e5ea2",
            data: [5,4,3,5],
            fill: false
          }, {
            label: "Skipped",
            type: "line",
            borderColor: "#3e95cd",
            data: [0,1,2,1],
            fill: false
          }, {
            label: "Attended",
            type: "bar",
            backgroundColor: "rgba(0,0,0,0.2)",
            data: [5,4,3,5],
          }, {
            label: "Skipped",
            type: "bar",
            backgroundColor: "rgba(0,0,0,0.2)",
            backgroundColorHover: "#3e95cd",
            data: [0,1,2,1]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Classes Missed Over Time'
        },
        legend: { display: true}
      }
    });
  }

  render() {
    return (
      <div>
        <canvas
          style={{ width: 750, height: 250 }}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}

export default ChartLayout;