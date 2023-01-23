const Wrapper = (props) => {
  console.log(props);
  return <div style={StyledWrapper}>{props.children}</div>;
};

const StyledWrapper = {
  maxWidth: "800px",
  margin: "40px auto",
  backgroundColor: "#fff",
  display: "flex",
  gap: "10px",
};
export default Wrapper;
