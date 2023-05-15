import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PeopleContext from "../contexts/PeopleContext";
import UsersContext from "../contexts/UsersContext";
import PeopleCard from "./PeopleCard";

const StyledHome = styled.main`
  padding: 0 50px;
  background-color: #1d1c1c;
  color: #5c5c5c ;
  margin: 0;
  min-height: calc(100vh - 120px);
  > h1{
    padding-top:100px;
    padding-bottom:100px;
    text-align: center;
    color: #5c5c5c ;
    margin-top: 0;
  }
  >div{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    gap: 5px;
  }
`;
const Home = () => {
  const { people } = useContext(PeopleContext);
  console.log(people);
  const { currentUser } = useContext(UsersContext);
  return (
    <StyledHome>
      {
        currentUser &&
        <Link to="/people">
          <button>Add New People</button>
        </Link>
      }
      <h1> Psychological Support</h1>
      <div>
        {
          people.map(people =>
            <PeopleCard
              key={people.id}
              data={people}
            />
          )
        }
      </div>
    </StyledHome>);
}

export default Home;