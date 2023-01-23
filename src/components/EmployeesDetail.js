const EmployeesDetail = ({ employeesDetail }) => {
  return (
    <div style={StyledEmployeeDetail}>
      <img
        style={StyledImage}
        src={employeesDetail.image}
        alt={employeesDetail.image}
      />
      <div style={StyledContent}>
        <h3>{employeesDetail.name}</h3>
        <p3>{employeesDetail.occupation}</p3>
        <p3>{employeesDetail.callMobile}</p3>
        <p3>{employeesDetail.sms}</p3>
        <p3>{employeesDetail.emailaddress}</p3>
      </div>
    </div>
  );
};

const StyledEmployeeDetail = {
  display: "flex",
  gap: "10px",
  padding: "10px",
  alignItems: "center",
  borderBottom: "2px solid #f4f4f4",
};

const StyledImage = {
  width: "85px",
  height: "85px",
  borderRadius: "50px",
};

const StyledContent = {
  alignItems: "center",
};

export default EmployeesDetail;
