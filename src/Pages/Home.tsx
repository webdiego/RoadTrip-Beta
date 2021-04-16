import { useState, useEffect } from "react";
//Styled Componentes
import styled from "styled-components";
//Framer Motion
import { motion } from "framer-motion";
//Interfaces
import { ITrip } from "../Interface/Interface";
//Icons
import RefreshIcon from "../Img/Refresh.png";
import BagMoney from "../Img/Money.png";
import RoadTripIcon from "../Img/Roadtrip.png";
//Background
import Clouds from "../Img/Clouds.png";
//Components
import Overview from "../Components/Overview";
import Footer from "../Components/Footer";
//Style components from style.tsx
import {
  Main,
  RoadTripIconTitle,
  RoadTripTitle,
  ExpensesContainer,
  ExpenseIcon,
  AlertContainer,
  Message,
  AlertYes,
  AlertNo,
  UserIcon,
} from "../Style/Style";
//USE-SOUND
import useSound from "use-sound";
import { IAudio } from "../Interface/Audio-Interface";
import Coin from "../Sound/coin.wav";
const COIN: IAudio = { name: "Coin", audioSrc: Coin };

interface Props {
  LocalUser: string;
  Hide: () => void;
}
const Home: React.FC<Props> = ({ LocalUser, Hide }) => {
  //EXPERIMENT USE-SOUND
  const [play, { stop, isPlaying }] = useSound(COIN.audioSrc, { volume: 0.95, interrupt: true });
  const coinHandler = (): void => {
    if (isPlaying) {
      stop();
    } else { 
      play();
    }
  };
  //LocalStorage Data
  const LocalBudget = +localStorage.getItem("Budget")!;
  const LocalPetrol = +localStorage.getItem("Petrol")!;
  const LocalFood = +localStorage.getItem("Food")!;
  const LocalSleep = +localStorage.getItem("Sleep")!;
  const LocalActivity = +localStorage.getItem("Activity")!;
  const LocalOther = +localStorage.getItem("Other")!;
  //Budget for the trip
  const [budget, setBudget] = useState<number>(LocalBudget);
  //Insert expense
  const [category, setCategory] = useState<string>("Petrol");
  const [expense, setExpense] = useState<number>(0);
  //Toggle Alert for clean the data in local storage
  const [alert, setAlert] = useState<boolean>(false);
  //Object for the trip
  let Trip = {
    Petrol: LocalPetrol,
    Food: LocalFood,
    Sleep: LocalSleep,
    Activity: LocalActivity,
    Other: LocalOther,
  };
  const [trip, setTrip] = useState<ITrip>(Trip);

  //Function add expense and check if the value is empty(NaN)
  const AddExpense = (expense: number, category: string) => {
    if (!isNaN(expense)) {
      setTrip({ ...trip, [`${category}`]: trip[`${category}`] + expense });
    } else {
      setTrip({ ...trip, [`${category}`]: trip[`${category}`] + 0 });
    }
  };

  const Alert = () => {
    setAlert(true);
  };
  //Update the local storage  for every expense added
  useEffect(() => {
    localStorage.setItem("Petrol", JSON.stringify(trip.Petrol));
    localStorage.setItem("Food", JSON.stringify(trip.Food));
    localStorage.setItem("Activity", JSON.stringify(trip.Activity));
    localStorage.setItem("Sleep", JSON.stringify(trip.Sleep));
    localStorage.setItem("Other", JSON.stringify(trip.Other));
  }, [trip]);
  //Set the Budget

  const AddBudget = () => {
    setBudget(budget);
    localStorage.setItem("Budget", JSON.stringify(budget));
  };
  //Add budget and expense on "ENTER" //!NEED TO REWRITE THEM
  const AddExpenseOnEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") AddExpense(expense, category);
  };
  const AddBudgetOnEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setBudget(budget);
      localStorage.setItem("Budget", JSON.stringify(budget));
    }
  };
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

      <MainHome style={{ backgroundImage: `url(${Clouds})` }}>
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
      </MainHome>

      <h2> Set Budget For The Trip </h2>
      <BudgetContainer>
        <ExpenseIcon src={BagMoney} alt="" />
        <BudgetInput
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.valueAsNumber)}
          onBlur={() => AddBudget()}
          onFocus={(e) => (e.target.value = "")}
          onKeyPress={(e) => AddBudgetOnEnter(e)}
        />
        <p style={{ fontSize: "1.2rem", marginRight: ".8rem" }}>$</p>
      </BudgetContainer>

      <h2>Select and Add your Expenses </h2>
      <AddExpenseContainer>
        <SelectContainer onChange={(e) => setCategory(e.target.value)}>
          <label style={{ backgroundImage: `url(${RoadTripIcon})` }}>‍</label>
          <option value="Petrol">⛽</option>
          <option value="Food">🍕</option>
          <option value="Sleep">⛺</option>
          <option value="Activity">🏄‍♂️</option>
          <option value="Other">🤹‍♂️</option>
        </SelectContainer>
        <AddInput
          type="number"
          value={expense}
          onChange={(e) => setExpense(e.target.valueAsNumber)}
          onFocus={(e) => (e.target.value = "")}
          onKeyPress={(e) => AddExpenseOnEnter(e)}
        />
        <p style={{ fontSize: "1.2rem", marginRight: ".8rem" }}>$</p>
      </AddExpenseContainer>
      <AddExpenseButton
        whileTap={{ scale: 1.5, fontWeight: "bolder" }}
        onClick={() => {AddExpense(expense, category); coinHandler();}}
      >
        Add
      </AddExpenseButton>

      <Overview trip={trip} budget={budget} LocalBudget={LocalBudget} />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;
  background: linear-gradient(14deg, rgba(176, 89, 242, 1) 1%, rgba(156, 252, 248, 1) 100%);
`;

const MainHome = styled(Main)`
  background-size: contain;
  @media (max-width: 647px) {
    background-size: cover;
  }
`;

const ButtonClear = styled(UserIcon)`
  background-color: #129d27;
  border: 5px solid #36c110;
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
  font-size: 1.5rem;
  cursor: pointer;
`;

const AddExpenseContainer = styled(ExpensesContainer)`
  border: 2.5px solid #f8ad18;
  background-color: #ffc758;
  height: 2.3rem;
  color: white;
  margin-bottom: 0;
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
  border: 2.5px solid #129d27;
  background-color: #25ba2a;
  color: white;
  margin-bottom: 2rem;
`;
const BudgetInput = styled(AddInput)`
  background-color: #25ba2a;
`;

const AddExpenseButton = styled(motion.button)`
  cursor: pointer;
  padding: 0.2rem 1rem;
  border-radius: 0 0 20px 20px;
  z-index: -1;
  transform: translateY(-5px);
  color: white;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
  margin-bottom: 2rem;

  border: 3.5px solid #f8ad18;
  background-color: #f8ad18;
  outline: none;
`;
