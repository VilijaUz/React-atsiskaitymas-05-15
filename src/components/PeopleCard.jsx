import styled from 'styled-components';

const StyledContent = styled.div`
   justify-content: center;
  display: flex;
  flex-wrap: wrap;
  width:auto;
`;
const StyledPeopleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height:auto;
  width:33%;
`;
const StyledPeopleCard = styled.div`
  border: 1px solid black;
  border-radius:5px;
  box-shadow: 5px 5px darkgrey;
  display: flex;
  flex-direction:column;
  flex-wrap:wrap;
  align-items: center;
  gap: 5px;
   width: 300px;
  height:auto;
  padding: 30px;
  .frame {
  position: relative;
  background-color: #333; 
  padding: 20px;
}
.frame::before,
.frame::after {
  content: "";
  position: absolute;
  top: -10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
  border: 5px solid #3f3d3d; 
}
.frame::before {
  z-index: -1;
}
  img{
  width:100%;
  height:auto;
  object-fit: cover;
  object-position: top;
  }
  button {
  margin-top: 10px; 
  }
 @media (min-width: 768px) {
    flex-basis: calc(20% - 10px);
  } 
`;
const StyledUserInfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  >img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
const PeopleCard = ({ data }) => {
  return (
    <StyledContent>
      <StyledPeopleList>
        <StyledPeopleCard>
              <div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <h1>{data.price}</h1>
                <img src={data.picture} alt={data.name} />
                <button>Book a visit</button>
              </div> 
        </StyledPeopleCard>
      </StyledPeopleList>
    </StyledContent>
  );
}

export default PeopleCard;