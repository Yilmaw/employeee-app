import "./App.css";
//import EmployeePage from "./components/EmployeePage";
//import HomePage from "./components/HomePage";
//import Wrapper from "./components/Wrapper";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Home from "./components/Home";
import Employee from "./components/Employee";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(`https://lit-dusk-21328.herokuapp.com/api/employees/allemployees `)
      .then((res) => res.json())
      .then((data) => {
        if (data) setEmployees(data);
      });
  }, []); // Always remember to put an empty array here!

  //   {
  //     id: 1,
  //     image:
  //       "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //     name: "James King",
  //     title: "President and CEO",
  //     callOffice: 5648755236666,
  //     callMobile: 98455131287,
  //     SMS: 78942213698,
  //     Email: "Jking@employee.com",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //     name: "Julie Taylor",
  //     title: "VP of Marketing",
  //     callOffice: 4899865465156,
  //     callMobile: 164563331287,
  //     SMS: 54698213476,
  //     Email: "Jtaylor@employee.com",
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //     name: "Eugene Lee",
  //     title: "CFO",
  //     callOffice: 9879263256335,
  //     callMobile: 5798451231287,
  //     SMS: 789546210258,
  //     Email: "Elee@employee.com",
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //     name: "Jhon Williams",
  //     title: "VP of Engineerig",
  //     callOffice: 6589521478665,
  //     callMobile: 579868465655287,
  //     SMS: 65487232966,
  //     Email: "Jwilliams@employee.com",
  //   },
  //   {
  //     id: 5,
  //     image:
  //       "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //     name: "Ray Moore",
  //     title: "VP of Sales",
  //     callOffice: 5436598489894,
  //     callMobile: 54355154566555,
  //     SMS: 478913698758,
  //     Email: "Rmoore@employee.com",
  //   },
  //   {
  //     id: 6,
  //     image:
  //       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //     name: "Paul Jones",
  //     title: "QA Manager",
  //     callOffice: 5794545895262,
  //     callMobile: 5798451231287,
  //     SMS: 45879213698,
  //     Email: "Pjones@employee.com",
  //   },
  // ];

  const [employeeDetail, setEmployeeDetail] = useState({
    id: 1,
    image:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "James King",
    occupation: "President and CEO",
    callOffice: 5648755236666,
    callMobile: 98455131287,
    SMS: 78942213698,
    Email: "Jking@employee.com",
  });

  return (
    <div className="container">
      <Home />
      <Employee
        setEmployeeDetail={setEmployeeDetail}
        employeesDetail={employeeDetail}
        employees={employees}
      />
      <Form />
    </div>
  );
}

export default App;
