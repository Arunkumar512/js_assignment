import React, { Component } from "react";
import Chart from "react-apexcharts";

class Charts extends Component {
  
	constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Jan","Feb","March","April","May","June","July","August","Sept","Oct","Nov","Dec"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91,75,70,80,89]
        }
      ]
    };
  }

  render() {

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;