import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ChartData from "./Chart/ChartData";
import Filter from "./Filter";
import { useState } from "react";

const Expenses = ({ expensesData }) => {
  const years = [
    ...new Set(expensesData.map((item) => item.date.getFullYear())),
  ].sort();
  // let v2 = expensesData.map((item) => item.date.getFullYear());
  // v2 = new Set(v2);
  // v2 = [...v2];
  // v2 = v2.sort();
  // console.log(v2);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  console.log(selectedYear);
  const filtredExpenses = expensesData.filter((item) => {
    return selectedYear == "All"
      ? expensesData
      : item.date.getFullYear() == selectedYear;
  });
  return (
    <div className="expenses">
      <Filter
        years={years}
        setSelectedYear={setSelectedYear}
        selectedYear={selectedYear}
      />
      <ChartData expensesData={filtredExpenses} />
      {filtredExpenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
            key={expense.id}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
