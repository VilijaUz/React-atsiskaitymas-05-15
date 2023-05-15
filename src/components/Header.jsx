import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { useContext } from "react";
import UsersContext from "../contexts/UsersContext";

const StyledHeader = styled.header`
  justify-content: space-between;
  align-items:center ;
  background-color: #222;
  color: #54544f !important;
  padding: 30px;
  img{
    width:50px;
    height: 50px;
    background-color: #5f45a2;
  }
  nav {
    padding-left: 900px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration:none;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin: 0 10px;  
  }
  ul li a{
    color: #7c7c77 !important;
  }
  form {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  input[type="text"] {
    width: 100%;
    max-width: 50px;
    padding: 8px;
    font-size: 20px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
  }
  button[type="submit"] {
    padding: 8px 16px;
    font-size: 16px;
    background-color: #222;
    color: #fff;
    border: none;
    border-radius: 0 4px 4px 0;
  }
`;
const Header = () => {
  const { currentUser } = useContext(UsersContext);
  return ( 
    <StyledHeader>
    <div>
      <img src="https://cdn1.iconfinder.com/data/icons/mental-health-4/512/N_T_1374Artboard_1_copy_5-512.png" alt="logo" />
    </div>
    <nav>
      {currentUser ? (
        <>
          <ul>
            <li><NavLink>Menu</NavLink></li>
            <form>
              <input type="text" placeholder="Search..." />
              <button type="submit">Search</button>
            </form>
          
            <li><NavLink to='/'>People</NavLink></li>
            <li><NavLink to='/Content'>Add New People</NavLink></li>
            <li><NavLink to='/Logout'>Logout</NavLink></li>
            <li><NavLink to='/'>Sign In</NavLink></li>
          </ul>
        </>
      ) : (   
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/Login'>Sign In</NavLink></li>
            <li><NavLink to='/Register'>Register</NavLink></li>
          </ul>     
      )}
    </nav>
  </StyledHeader>
   );
}
 
export default Header;