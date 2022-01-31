import React, { Component } from "react";
import "./HowItWorks.scss";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

class HowItWorks extends Component {
  state = {
    activeIndex: 0
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index
    });
  };
  render() {
    return (
      <section>
        <div className="pet-figure">
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={this.onPieEnter}
            />
          </PieChart>
        </div>
        <div className="how-it-works" id="how-it-works">
          <h2 className="how-it-works__header">How it Works</h2>
          <div className="circle-card__container">
            <div className="circle-card circle-card--left">
              <div className="hidden__content">
                <h3 className="hidden__title">Step 1</h3>
                <p className="hidden__text">Submit a lost/found pet report</p>
              </div>
            </div>
            <div className="circle-card circle-card--middle">
              <div className="hidden__content">
                <h3 className="hidden__title hidden__title--middle">Step 2</h3>
                <p className="hidden__text">
                  Search for lost/found pets in your area
                </p>
              </div>
            </div>
            <div className="circle-card circle-card--right">
              <div className="hidden__content">
                <h3 className="hidden__title">Step 3</h3>
                <p className="hidden__text">
                  Share to social media and get more exposures
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HowItWorks;
