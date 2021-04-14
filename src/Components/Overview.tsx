import styled from "styled-components"
import {ITrip} from '../Interface/Interface'
//Icons
import PetrolIcon from '../Img/Petrol.png'
import PizzaIcon from '../Img/Pizza.png'
import SleepIcon from '../Img/Sleep.png'
import ActivityIcon from '../Img/Activity.png'
import OtherIcon from '../Img/Other.png'
import BagMoney from "../Img/Money.png";

interface Props {
  trip:ITrip,
  LocalBudget:number
   
}

const Overview: React.FC<Props> =({trip , LocalBudget }) =>{
  //Takes all the value in trip and insert in array
  let Values = Object.values(trip)
  const reducer = (acc:number ,current:number)=> acc + current
  //Budget Remain
  let BudgetRemain = LocalBudget - Values.reduce(reducer)

  return (
    <div>
            <OverviewContainer  >
        <h2>Overview</h2>
        {/* PETROL */}
        <ExpensesContainer>
          <ExpenseIcon src={PetrolIcon} alt=""/>
          <p>Petrol {trip.Petrol}</p>
          <p style={{marginRight:"0.7rem" , fontSize:"1.2rem"}}>$</p>
        </ExpensesContainer>
        {/* FOOD */}
        <ExpensesContainer>
          <ExpenseIcon src={PizzaIcon} alt=""/>
          <p>Food {trip.Food}</p>
          <p style={{marginRight:"0.7rem" , fontSize:"1.2rem"}}>$</p>
        </ExpensesContainer>
        {/* Sleep */}
        <ExpensesContainer>
          <ExpenseIcon src={SleepIcon} alt=""/>
          <p>Sleep {trip.Sleep}</p>
          <p style={{marginRight:"0.7rem" , fontSize:"1.2rem"}}>$</p>
        </ExpensesContainer>
        {/* Activity */}
        <ExpensesContainer>
          <ExpenseIcon src={ActivityIcon} alt=""/>
          <p>Activity {trip.Activity}</p>
          <p style={{marginRight:"0.7rem" , fontSize:"1.2rem"}}>$</p>
        </ExpensesContainer>
        {/* Other */}
        <ExpensesContainer>
          <ExpenseIcon src={OtherIcon} alt=""/>
          <p>Other {trip.Other}</p>
          <p style={{marginRight:"0.7rem" , fontSize:"1.2rem"}}>$</p>
        </ExpensesContainer>
        {/* TOTAL */}
       <h2 style={{marginTop:"2rem"}}>Budget Remain</h2>
        <BudgetRemainContainer>
          <ExpenseIcon src={BagMoney} alt=""/>
          <p> {BudgetRemain}  </p>
          <p style={{marginRight:"0.7rem" , fontSize:"1.2rem"}}>$</p>
        </BudgetRemainContainer>

      </OverviewContainer>
    </div> 
  )
}

export default Overview


//Expense container
const ExpensesContainer =styled.div`
width:15rem;
display:flex;
justify-content:space-between;
align-items:center;
background-color:white;
border-radius:20px;
border:2.5px solid #e9e9e9;
padding:.2rem 0;
margin:1rem 0;
font-family: 'Roboto Mono', monospace;
font-weight:bold;
letter-spacing:0px;
text-transform:uppercase;

`
//OVERVIEW
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

 const BudgetRemainContainer =styled(ExpensesContainer)`
 background-color:#bd1f1f;
 border:2.5px solid #760808;
 color:white;
 `