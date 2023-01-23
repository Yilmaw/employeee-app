const EmployeeListItems = ({ employees, setEmployeeDetail }) => {
  return employees.map(({ image, name, occupation }, index) => {
    const handleEmployeeDetail = () => {
      // console.log(index);
      setEmployeeDetail(employees[index]);
    };
    return (
      <div
        key={index}
        style={StyledEmployeeListItem}
        onClick={handleEmployeeDetail}
      >
        <img style={StleImage} src={image} alt={image} />
        <div style={StyleContent}>
          <h4>{name}</h4>
          <p>{occupation}</p>
        </div>
      </div>
    );
  });
};

const StleImage = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundcolor: "#f4f4f4",
};

const StyledEmployeeListItem = {
  display: "flex",
  gap: "10px",
  margin: "5px",
  cursor: "pointer",
};

const StyleContent = {
  margin: "30px 5px",
};
export default EmployeeListItems;
