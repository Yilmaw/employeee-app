import React from "react";
import Wrapper from "./Wrapper";
import HomePage from "./HomePage";
import EmployeePage from "./EmployeePage";

function Employee(props) {
  return (
    <div>
      <Wrapper>
        <HomePage
          setEmployeeDetail={props.setEmployeeDetail}
          employees={props.employees}
        />
        <EmployeePage employeeDetail={props.employeeDetail} />
      </Wrapper>
    </div>
  );
}

export default Employee;
