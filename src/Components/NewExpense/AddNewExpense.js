import { useState } from "react";
import "./AddNewExpense.css";
let id=5;
const AddNewExpense = ({getNewExpense}) => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [date, setDate] = useState("");
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    date: "",
  });
  const titleChangeHandler = (event) => {
    // setTitle(event.target.value);
    // setInputs({ ...inputs, title: event.target.value });
    setInputs((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const priceChangeHandler = (event) => {
    // setPrice(event.target.value);
    setInputs({ ...inputs, price: event.target.value });
  };
  const dateChangeHandler = (event) => {
    // setDate(event.target.value);
    setInputs({ ...inputs, date: event.target.value });
  };
  // const inputsChangeHandler = (event) => {
  //   setInputs((prevState) => {
  //     return { ...prevState, [event.target.name]: event.target.value };
  //   });
  // };

  const inputsChangeHandler = ({target}) => {
    const {name , value} = target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    console.log(inputs);
    getNewExpense({
      id:id,
      title:inputs.title,
      price:+inputs.price,
      date:new Date(inputs.date),
    });
    id++;
    setInputs({
      title:"",
      price:"",
      date:"",
    })
    // console.log(title);
    // console.log(price);
    // console.log(date);
    // setTitle("");
    // setPrice("");
    // setDate("");
  };
const[isOpen , setIsOpen] = useState(true);
const openForm = () =>{
  setIsOpen(!isOpen)
}
  return (
    <div className="new-expense">
      {isOpen ? (
        <button onClick={openForm}>Add New Expense</button>
      ) : (
      <form onSubmit={submitForm}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              required
              placeholder="Title"
              value={inputs.title}
              onChange={inputsChangeHandler}
              name="title"
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              required
              type="number"
              placeholder="Price"
              min="0"
              step="0.01"
              value={inputs.price}
              onChange={inputsChangeHandler}
              name="price"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              required
              type="date"
              min="2022-01-01"
              max="2026-12-31"
              value={inputs.date}
              onChange={inputsChangeHandler}
              name="date"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button">Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
      )}
    </div>
  );
};

export default AddNewExpense;