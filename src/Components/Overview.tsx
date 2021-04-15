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
  budget:number
   
}
const Overview: React.FC<Props> =({trip , budget, LocalBudget }) =>{
  //Takes all the value in trip and insert in array
  let Values = Object.values(trip)
  const reducer = (acc:number ,current:number)=> acc + current
  //Calculate and store Budget Remain
  let BudgetRemain = LocalBudget !== budget ? budget : LocalBudget - Values.reduce(reducer)
  return (
    <div>
            <OverviewContainer  >
        <h2 style={{fontSize:"1.8rem" }}>Overview</h2>
        {/* PETROL */}
        <ExpensesContainer>
          <ExpenseIcon src={PetrolIcon} alt=""/>
          <p><OverviewCategory>Petrol:</OverviewCategory> {trip.Petrol.toFixed(2)}</p>
          <Dollar>$</Dollar>
        </ExpensesContainer>
        {/* FOOD */}
        <ExpensesContainer>
          <ExpenseIcon src={PizzaIcon} alt=""/>
          <p><OverviewCategory>Food:</OverviewCategory> {trip.Food.toFixed(2)}</p>
          <Dollar>$</Dollar>
        </ExpensesContainer>
        {/* Sleep */}
        <ExpensesContainer>
          <ExpenseIcon src={SleepIcon} alt=""/>
          <p><OverviewCategory>Sleep:</OverviewCategory> {trip.Sleep.toFixed(2)}</p>
          <Dollar>$</Dollar>
        </ExpensesContainer>
        {/* Activity */}
        <ExpensesContainer>
          <ExpenseIcon src={ActivityIcon} alt=""/>
          <p><OverviewCategory>Activity:</OverviewCategory> {trip.Activity.toFixed(2)}</p>
          <Dollar>$</Dollar>
        </ExpensesContainer>
        {/* Other */}
        <ExpensesContainer>
          <ExpenseIcon src={OtherIcon} alt=""/>
          <p>
             <OverviewCategory>Other:</OverviewCategory> {trip.Other.toFixed(2)}</p> 
          <Dollar>$</Dollar>
        </ExpensesContainer>
        {/* TOTAL */}
       <h2 style={{marginTop:"2rem"}}>Budget Remain</h2> 
        <BudgetRemainContainer>
          <ExpenseIcon src={BagMoney} alt=""/>
          <p> {BudgetRemain.toFixed(2)}  </p>
          <Dollar>$</Dollar>
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
 const Dollar = styled.p`
 margin-right:0.7rem;
 font-size:1.2rem;
 ` 
const OverviewCategory = styled.span`
 color: #868686;
 font-size:0.8rem;
 
`
 const BudgetRemainContainer =styled(ExpensesContainer)`
 background-color:#bd1f1f;
 border:2.5px solid #760808;
 color:white;
 `