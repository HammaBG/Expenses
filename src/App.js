import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import AddNewExpense from "./Components/NewExpense/AddNewExpense";

const defaultExpensesData = [
  {
    id: 1,
    title: "New TV",
    price: 2500,
    date: new Date(2024, 2, 10),
  },
  {
    id: 2,
    title: "Education",
    price: 6500,
    date: new Date(2023, 9, 15),
  },
  {
    id: 3,
    title: "PC",
    price: 3200,
    date: new Date(2023, 5, 20),
  },
  {
    id: 4,
    title: "Voyage",
    price: 1999,
    date: new Date(2025, 7, 1),
  },
];

function App() {
  const [expensesData , setExpensesData] = useState(defaultExpensesData)
  const getNewExpense = (data) => {
  setExpensesData([data, ...expensesData])  }
  return (
    <div>
      <AddNewExpense getNewExpense={getNewExpense}/>
      <Expenses expensesData={expensesData} />
    </div>
  );
}

export default App;
