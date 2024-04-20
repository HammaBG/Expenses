import "./ChartContainer.css";
import ChartBar from "./ChartBar";

const ChartContainer = ({ monthlyExpenses, max, total }) => {
  return (
    <div className="chart">
      {monthlyExpenses.map((item) => {
        return (
          <ChartBar
            key={item.month}
            max={max}
            total={total}
            month={item.month}
            value={item.value}
          />
        );
      })}
    </div>
  );
};

export default ChartContainer;
