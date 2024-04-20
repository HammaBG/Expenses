import "./Filter.css";

const Filter = ({ years, setSelectedYear, selectedYear }) => {
  const handelChange = (event) => {
    setSelectedYear(event.target.value);
  };
  return (
    <div className="filter filter__control">
      <label>Filter By Year</label>
      {/* return to this in the end !!! */}
      <select value={selectedYear} onChange={handelChange}>
        <option value="All">All</option>
        {years.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
