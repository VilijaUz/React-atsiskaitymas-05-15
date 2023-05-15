import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UsersContext from "../contexts/UsersContext";

const StyledMain = styled.main`
  height: 700px;
  text-align: center;
  padding-top: 200px;
  > form {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;
const Register = () => {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [failedRegistration, setFailedRegistration] = useState(false);
  const { users, setUsers, setCurrentUser, UsersActionType } = useContext(UsersContext);

  const navigate = useNavigate();

  const inputHandler = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
    setFailedRegistration(false);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    const emailTaken = users.find(user =>
      user.email === formInputs.email)
    if (emailTaken) {
      setFailedRegistration(true);
    } else {
      const newUser = {
        email: formInputs.email,
        password: formInputs.password
      };
      setUsers({
        type: UsersActionType.add,
        data: newUser
      })
      setCurrentUser(newUser)
      navigate("/")
    }
  };
  return (
    <StyledMain>
      <form onSubmit={(e) => formSubmit(e)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formInputs.email}
            onChange={(e) => inputHandler(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formInputs.password}
            onChange={(e) => inputHandler(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formInputs.confirmPassword}
            onChange={(e) => inputHandler(e)}
            required
          />
        </div>
        <input type="submit" value="Register" />
      </form>
      {failedRegistration && (
        <h1
          style={{
            color: "red",
            padding: "300px",
            alignItems: "center",
          }}
        >
          Failed to register. Please check your input.
        </h1>
      )}
    </StyledMain>
  );
};

export default Register;