import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";
import Header from "./Header";

const HomePage = (props) => {
  return (
    <div style={StyledHomePage}>
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList
        setEmployeeDetail={props.setEmployeeDetail}
        employees={props.employees}
      />
    </div>
  );
};

const StyledHomePage = {
  with: "40%",
  backgroundColor: "#FFF59D",
};

export default HomePage;
