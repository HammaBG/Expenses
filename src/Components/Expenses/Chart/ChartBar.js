import "./ChartBar.css";

const ChartBar = ({ month, value, max, total }) => {
  let x = "0%";
  if (max > 0) {
    x = Math.round((value / max) * 100) + "%";
  }
  // console.log(x);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: x }}></div>
      </div>
      <div className="chart-bar__label">{month}</div>
    </div>
  );
};

export default ChartBar;
