import React from "react";
import ChartContainer from "./ChartContainer";

const ChartData = ({ expensesData }) => {
  const monthlyExpenses = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jui", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];
  //   for (let i = 0; i < expensesData.length; i++) {
  //     monthlyExpenses[expensesData[i].date.getMonth()].value +=
  //       expensesData[i].price;
  //   }
  for (const item of expensesData) {
    monthlyExpenses[item.date.getMonth()].value += item.price;
  }
  const values = monthlyExpenses.map((item) => item.value);
  const max = Math.max(...values);
  const total = values.reduce((x, y) => {
    return x + y;
  });
  // console.log(max);
  return (
    <ChartContainer max={max} total={total} monthlyExpenses={monthlyExpenses} />
  );
};

export default ChartData;
