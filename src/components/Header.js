const Header = (props) => {
    <div style={StyledHeader }>{props.title}</div>;
    
};

const StyledHeader ={
    textAlign:"center",
    backgroundColor:"#fff",
};

export default Header;