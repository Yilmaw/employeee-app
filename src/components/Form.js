import { useState } from "react";

const Form = () => {
  const [employeesData, setEmployeesData] = useState({
    name: "",
    occupation: "",
    callOffice: "",
    callMobile: "",
    sms: "",
    email: "",
    imageurl: "",
  });

  function handleChange(event) {
    const updatedUserData = {
      ...employeesData,
      [event.target.name]: event.target.value,
    };

    setEmployeesData(updatedUserData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://lit-dusk-21328.herokuapp.com/api/employees/addemployees `, {
      method: "POST",
      body: JSON.stringify(employeesData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add Employee</h1>
      <form style={StyledForm} onSubmit={handleSubmit}>
        <div>
          <p>Name</p>
          <input
            style={styledInput}
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div>
          <p>Occupation</p>
          <input
            style={styledInput}
            type="text"
            placeholder="occupation"
            name="occupation"
            onChange={handleChange}
          />
        </div>

        <div>
          <p>CallOffice</p>
          <input
            style={styledInput}
            type="text"
            placeholder="callOffice"
            name="calloffice"
            onChange={handleChange}
          />
        </div>

        <div>
          <p>CallMobile</p>
          <input
            style={styledInput}
            type="text"
            placeholder="callMobile"
            name="callMobile"
            onChange={handleChange}
          />
        </div>

        <div>
          <p>Sms</p>
          <input
            style={styledInput}
            type="text"
            placeholder="sms"
            name="sms"
            onChange={handleChange}
          />
        </div>

        <div>
          <p>Email</p>
          <input
            style={styledInput}
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div>
          <p>Imageurl</p>
          <input
            style={styledInput}
            type="text"
            placeholder="imageurl"
            name="imageurl"
            onChange={handleChange}
          />
        </div>

        <div>
          <button style={styledButton}>Submit</button>
        </div>
      </form>
    </div>
  );
};

const StyledForm = {
  alignItems: "center",
};

const styledInput = {
  borderwidth: "10px",
  borderradius: "53px",
  fontsize: "1rem",
  padding: "0.25rem 0.5rem",
  boxsizing: "borderbox",
};

const styledButton = {
  border: "none",
  borderradius: "10px",
  backgroundcolor: "#FFC107",
  color: "#FF5722",
  padding: "0.5rem 1rem",
  fontsize: "1rem",
  cursor: "pointer",
  margin: "5px",
};

export default Form;
