import { createContext, useReducer, useEffect} from "react";

const PeopleContext=createContext();

const PeopleAcionTypes={
  get:'get_all_people',
  add: 'add_new_people'
}

const reducer =(state,action)=>{

  switch (action.type) {
    case PeopleAcionTypes.get:
      return action.data;
    case PeopleAcionTypes.add:
      fetch('http://localhost:8080/people', {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.data)
      });
      return [...state, action.data];

      default:
      return state;
  }
}

const PeopleProvider = ({children}) => {

  const [people,setPeople]=useReducer(reducer,[]);

  useEffect(()=>{
    fetch(`http://localhost:8080/people`)
    .then(res => res.json())
    .then(data => setPeople({
      type: PeopleAcionTypes.get,
      data: data

  }));
},[]);

  return (  
    <PeopleContext.Provider
    value={{
    people,
    PeopleAcionTypes,
    setPeople
    }}>
    {children}
    </PeopleContext.Provider>
  );
}
 export {PeopleProvider};
export default PeopleContext;