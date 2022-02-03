import React, { useState, useEffect } from "react";
import "./HowItWorks.scss";
import { PieChart, Pie, Sector } from "recharts";
import { FaQuoteLeft } from "react-icons/fa";
import { RiHandHeartLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const dogData = [
  { name: "Missing Dog", value: 160 },
  { name: "Not Missing", value: 840 }
];

const catData = [
  { name: "Missing Cat", value: 180 },
  { name: "Not Missing", value: 820 }
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
    percent
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
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        className="pet-figure__text"
      >
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
      >{`${percent * 100}%`}</text>
    </g>
  );
};

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <div className="pet-figure__container">
        <div className="pet-figure">
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={dogData}
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={100}
              fill="#8ccde3"
              dataKey="value"
              onMouseEnter={onPieEnter}
            />
          </PieChart>
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={catData}
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={100}
              fill="#f9b066"
              dataKey="value"
              onMouseEnter={onPieEnter}
            />
          </PieChart>
        </div>
        <div
          className="pet-figure__quote"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <p>
            <FaQuoteLeft size={30} className="pet-figure__quote--icon" />
            The published research study on lost pet rates found that between{" "}
            <span className="pet-figure__quote--blue"> 16%</span> of dogs and{" "}
            <span className="pet-figure__quote--orange"> 18%</span> of cats are
            likely to go missing at least once in five years.
          </p>
        </div>
        <div className="statement" data-aos="fade-left" data-aos-delay="200">
          <p>
            <RiHandHeartLine size={45} className="statement__icon" /> Losing our
            furry friends is such a tragedy, so here at{" "}
            <span className="statement__blue">Paws Runite</span> we work
            together to make{" "}
            <span className="statement__orange">happy reunions</span> for the
            pets and their families.
          </p>
        </div>
      </div>

      <div className="how-it-works">
        <h2 className="how-it-works__header">How it Works</h2>
        <div
          className="circle-card__container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="circle-card circle-card--left">
            <div className="hidden__content">
              <h3 className="hidden__title">1</h3>
              <p className="hidden__text">
                Search for lost/found pets in your area
              </p>
            </div>
          </div>
          <div className="circle-card circle-card--middle">
            <div className="hidden__content">
              <h3 className="hidden__title hidden__title--middle">2</h3>
              <p className="hidden__text">Submit a lost/found pet report</p>
            </div>
          </div>
          <div className="circle-card circle-card--right">
            <div className="hidden__content">
              <h3 className="hidden__title">3</h3>
              <p className="hidden__text">
                Share to social media and get more exposures
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
