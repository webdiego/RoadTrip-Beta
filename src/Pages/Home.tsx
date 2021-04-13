import { useState, useEffect } from "react";
import styled from "styled-components";
import { ITrip } from "../Interface/Interface";
//Icons
import PetrolIcon from "../Img/Petrol.png";
import PizzaIcon from "../Img/Pizza.png";
import SleepIcon from "../Img/Sleep.png";
import ActivityIcon from "../Img/Activity.png";
import OtherIcon from "../Img/Other.png";
import RefreshIcon from "../Img/Refresh.png";
import BagMoney from "../Img/Money.png";
import RoadTripIcon from "../Img/Roadtrip.png";
//Background
import Clouds from "../Img/Clouds.png";
import Overview from "../Components/Overview";
import {
  RoadTripIconTitle,
  RoadTripTitle,
  ExpensesContainer,
  ExpenseIcon,
  AlertContainer,
  Message,
  AlertYes,
  AlertNo,
} from "../Style/Style";

interface Props {
  LocalUser:string; 
  Hide: () =>void; 
}
const Home : React.FC<Props> = ({ LocalUser , Hide}) => {
  //LocalStorage Data
  const LocalBudget = +localStorage.getItem("Budget")! ;
  const LocalPetrol = +localStorage.getItem("Petrol")!;
  const LocalFood = +localStorage.getItem("Food")!;
  const LocalSleep = +localStorage.getItem("Sleep")!;
  const LocalActivity = +localStorage.getItem("Activity")!;
  const LocalOther = +localStorage.getItem("Other")!;
  //Budget for the trip
  const [budget, setBudget] = useState<number>( LocalBudget );
  //Insert expense
  const [category, setCategory] = useState<string>("Petrol");
  const [expense, setExpense] = useState<number>(0);

  const [alert, setAlert] = useState<boolean>(false);

  let Trip = {
    Petrol: LocalPetrol,
    Food: LocalFood,
    Sleep: LocalSleep,
    Activity: LocalActivity,
    Other: LocalOther,
  };
  const [trip, setTrip] = useState<ITrip>(Trip);
  //Function add expense
  const AddExpense = (expense: number, category: string) => {
    setTrip({ ...trip, [`${category}`]: trip[`${category}`] + expense });
  };
  
  const Alert = () => {
    setAlert(true);
  };
  useEffect(() => {
    localStorage.setItem("Petrol", JSON.stringify(trip.Petrol));
    localStorage.setItem("Food", JSON.stringify(trip.Food));
    localStorage.setItem("Activity", JSON.stringify(trip.Activity));
    localStorage.setItem("Sleep", JSON.stringify(trip.Sleep));
    localStorage.setItem("Other", JSON.stringify(trip.Other));
  }, [trip]);
  
 const AddBudget = ()=>{
  setBudget(budget + LocalBudget  )
  localStorage.setItem("Budget", JSON.stringify(budget + LocalBudget ));
 }
  return (
    <Container>
      {alert && (
        <AlertContainer>
          <Message>
            <p style={{ margin: "2rem" }}>Do you want to delete all the data of the trip?</p>
            <div>
              <AlertYes onClick={() => Hide()}>Yes!</AlertYes>
              <AlertNo onClick={() => setAlert(false)}>No!</AlertNo>
            </div>
          </Message>
        </AlertContainer>
      )}

      <Main  style={{ backgroundImage: `url(${Clouds})` }}>
        {/* Clean and user */}
        <ButtonsContainer>
          <ButtonClear onClick={() => Alert()}>
            {" "}
            <img style={{ width: "2rem" }} src={RefreshIcon} alt="" />{" "}
          </ButtonClear>
          <UserIcon>{LocalUser}</UserIcon>
        </ButtonsContainer>

        {/* TITLE */}
        <div className="title">
          <RoadTripTitle>
            RoadTrip
            <RoadTripIconTitle src={RoadTripIcon} alt="" />
          </RoadTripTitle>
        </div>
      </Main>


      <h2> Budget For The Trip </h2>
      <BudgetContainer>
        <ExpenseIcon src={BagMoney} alt="" />
        <BudgetInput
          type="number"
          value={ budget  }
          onChange={(e) => setBudget(e.target.valueAsNumber)}
        />
          <p style={{ fontSize: "1.2rem", marginLeft: ".8rem" }}>$</p>
        <AddButton onClick={()=>AddBudget()}>Add</AddButton>
      </BudgetContainer>

      <div>
        <AddExpenseContainer>
          <SelectContainer onChange={(e) => setCategory(e.target.value)}>
            <option value="Petrol">‍⛽</option>
            <option value="Food">🍕</option>
            <option value="Sleep">⛺</option>
            <option value="Activity">🏄‍♂️</option>
            <option value="Other">🤹‍♂️</option>
          </SelectContainer>
          <AddInput
            type="number"
            value={expense}
            onChange={(e) => setExpense(e.target.valueAsNumber)}
          />
          <p style={{ fontSize: "1.2rem", marginLeft: ".8rem" }}>$</p>
          <AddButton onClick={() => AddExpense(expense, category)}>Add</AddButton>
        </AddExpenseContainer>
      </div>

      <Overview trip={trip} budget={budget} LocalBudget={LocalBudget} />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;
  background: linear-gradient(14deg, rgba(176,89,242,1) 1%, rgba(156,252,248,1) 100%);

`;
const Main = styled.div`
  width: 100%;
  height: 17rem;
  background-position: top;
  background-size: cover;
  margin-bottom: 2rem;
`;
const UserIcon = styled.button`
  height: 3rem;
  width: 3rem;
  color:white;
  background-color:#5caeff;
  border:5px solid #2c93fa ;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Fredoka One", cursive;

`;
const ButtonClear = styled(UserIcon)`
  cursor: pointer;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  
`;



//SELECT CONTAINER ADD
const SelectContainer = styled.select`
  border: 2.5px solid #f8ad18;
  background-color: #f8ad18;
  border-radius: 50%;
  padding: 0.2rem;
  transform: translateX(-2px);
  font-size: 1.2rem;
  cursor: pointer;
`;

const AddExpenseContainer = styled(ExpensesContainer)`
  border: 2.5px solid #f8ad18;
  background-color: #ffc758;
  height: 2.3rem;
  color: white;
`;
const AddButton = styled.button`
  border: 2.5px solid #f8ad18;
  color: #f8ad18;
  background-color: white;
  cursor: pointer;
  padding: 0.5rem 0.5rem 0.5rem 1.3rem;
  border-radius: 0 20px 20px 0;
  z-index: -1;
  transform: translateX(-8px);
  font-weight:bold;

`;
const AddInput = styled.input`
  border: none;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  background-color: #ffc758;
  color: white;
  z-index: 100;
`;
const BudgetContainer = styled(ExpensesContainer)`
  border: 2.5px solid #2f6205;
  background-color: green;
  color: white;
`;
const BudgetInput = styled(AddInput)`
  background-color: green;
`;
