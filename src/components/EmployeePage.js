import EmployeesDetail from "./EmployeesDetail";
import Header from "./Header";

const EmployeePage = ({ employeeDetail }) => {
  return (
    <div style={StyledEmployeePage}>
      <Header titel="Employee " />
      <EmployeesDetail employeeDetail={employeeDetail} />
    </div>
  );
};

const StyledEmployeePage = {
  with: "50%",
};

export default EmployeePage;
