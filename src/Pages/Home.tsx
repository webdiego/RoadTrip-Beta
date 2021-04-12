import { useState, useEffect } from "react";
import styled from "styled-components"
import {ITrip} from '../Interface/Interface'
//Icons
import PetrolIcon from '../Img/Petrol.png'
import PizzaIcon from '../Img/Pizza.png'
import SleepIcon from '../Img/Sleep.png'
import ActivityIcon from '../Img/Activity.png'
import OtherIcon from '../Img/Other.png'


function Home() {
  //LocalStorage Data
  const LocalPetrol= +localStorage.getItem("Petrol")!;
  //Budget for the trip
  const [total, setTotal] = useState<number>(0);
  //Insert expense
  const [category, setCategory] = useState<string>("Petrol");
  const [expense, setExpense] = useState<number>(0);
  
   let Trip ={
     Petrol:LocalPetrol,
     Food:0,
     Sleep:0,
     Activity:0,
     Others:0,

   }
  
  const [trip,setTrip]=useState<ITrip>(Trip)   
  //Function add expense
   const AddExpense= (expense:number , category: string) => {   
    setTrip( {...trip, [`${category}`]: trip[`${category}`] + expense})
    console.log(trip)
  };

  //Reset Local Storage
  const ResetLocalStorage = () => {
    localStorage.clear();
  };
  useEffect(() => {
    localStorage.setItem("Petrol", JSON.stringify(trip.Petrol));
  }, [trip]);

  return (
    <Container>
      {/* Clean and user */}
      <div>
      <button onClick={() => localStorage.clear()}>Clean Storage</button>
      <p></p>
      </div>
       <h1>RoadTrip</h1>

      <h2>Budget For The Trip</h2>
      <input type="number" value={total} onChange={(e) => setTotal(e.target.valueAsNumber)} />{" "}
      {total}
      <div >
        <AddExpenseContainer>

        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="Petrol">‍⛽</option>
          <option value="Food">🍕</option>
          <option value="Sleep">⛺</option>
          <option value="Other">🏄‍♂️</option>
          <option value="Other">🤹‍♂️</option>
        </select>

        <input type="number" onChange={(e) => setExpense(e.target.valueAsNumber)} />$
        <button onClick={() => AddExpense(expense,category)}>Add</button>
        </AddExpenseContainer>
      </div>

      
      <OverviewContainer >
        <h1>Overview</h1>
        {/* PETROL */}
        <ExpensesContainer>
          <ExpenseIcon src={PetrolIcon} alt=""/>
          <p>Petrol {trip.Petrol}</p>
          <p style={{marginRight:"0.7rem" , fontSize:"1.2rem"}}>$</p>
        </ExpensesContainer>
        {/* FOOD */}
        <ExpensesContainer>
          <ExpenseIcon src={PizzaIcon} alt=""/>
          <p>Petrol {trip.Petrol}</p>
          <p style={{marginRight:"0.7rem" , fontSize:"1.2rem"}}>$</p>
        </ExpensesContainer>
        {/* Sleep */}
        <ExpensesContainer>
          <ExpenseIcon src={SleepIcon} alt=""/>
          <p>Petrol {trip.Petrol}</p>
          <p style={{marginRight:"0.7rem" , fontSize:"1.2rem"}}>$</p>
        </ExpensesContainer>
        {/* Activity */}
        <ExpensesContainer>
          <ExpenseIcon src={ActivityIcon} alt=""/>
          <p>Petrol {trip.Petrol}</p>
          <p style={{marginRight:"0.7rem" , fontSize:"1.2rem"}}>$</p>
        </ExpensesContainer>
        {/* Other */}
        <ExpensesContainer>
          <ExpenseIcon src={OtherIcon} alt=""/>
          <p>Petrol {trip.Petrol}</p>
          <p style={{marginRight:"0.7rem" , fontSize:"1.2rem"}}>$</p>
        </ExpensesContainer>
       
      </OverviewContainer>
    </Container>
  );
}

export default Home;
const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const ExpensesContainer =styled.div`
width:15rem;
display:flex;
justify-content:space-between;
align-items:center;
background-color:white;
border-radius:20px;
border:2.5px solid #c4c4c4;
padding:.2rem 0;
margin:1rem 0;


`
const ExpenseIcon = styled.img`
width:1.4rem;
margin-left:.7rem;

`
const OverviewContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const SelectContainer =styled.select`
width:10rem;
border-radius:20px;
border:2.5px solid #c4c4c4;
padding:.2rem 0;
margin:1rem 0;
`
const AddExpenseContainer = styled(ExpensesContainer)`
 border:2.5px solid #e7962c;
`