import styled from "styled-components";
import Home from "./Home";
import { useState } from "react";
import RoadTripIcon from "../Img/Roadtrip.png";
import Clouds from "../Img/Clouds.png";

//STYLE
import { Main, RoadTripTitle, RoadTripIconTitle, UserIcon ,AlertContainer,Message, } from "../Style/Style";
function Welcome() {
  const LocalUser = localStorage.getItem("User")! ? localStorage.getItem("User")! : "";
  const [toggle, setToggle] = useState<boolean>(LocalUser.length > 1 ? true : false);
  const [user, setUser] = useState<string>("");
  const [info, setInfo] = useState<boolean>(false);

  const hideWelcome = () => {
    localStorage.setItem("User", JSON.stringify(user));

    setToggle(true);
  };
  const Hide = () => {
    localStorage.clear();

    setToggle(false);
  };

  return (
    <div style={{position:"relative" , height:"100vh"}}>
      {info && (
        <AlertContainer>
          <Message>
            <p style={{ margin: "2rem" }}>
              RoadTrip uses and saves your data on your browser (like your password etc.). <br/> If you clean up your data you will lose your trip.
            </p>
            <div>
              <button onClick={()=>setInfo(false)}>All right!</button>
            </div>
          </Message>
        </AlertContainer>
      )}
      {LocalUser.length <= 0 && (
        <div>
          <MainWelcome style={{ backgroundImage: `url(${Clouds})` }}>
          <ButtonInfo onClick={()=>setInfo(true)}> i </ButtonInfo>

            <h4>Welcome to</h4>
            <RoadTripTitle>
              RoadTrip
              <RoadTripIconTitle src={RoadTripIcon} alt="" />
            </RoadTripTitle>
          </MainWelcome>

          <InsertNameContainer>
            <label>Insert Your Name/NickName</label>
            <div className="Input-Name">
              <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
              <button onClick={hideWelcome}>👍</button>
            </div>
          </InsertNameContainer>
        </div>
      )}

      {LocalUser.length > 0 &&  <Home LocalUser={LocalUser.slice(1, 2).toUpperCase()} Hide={Hide} />}
    </div>
  );
}

export default Welcome;

const InsertNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  label {
    font-family: "Roboto Mono", monospace;
    font-size: 1.3rem;

    margin-bottom: 2rem;
  }
  input {
    font-family: "Fredoka One", cursive;
    font-size: 1.5rem;
    text-align: center;
    border-bottom: 2px solid black;
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;
const ButtonInfo = styled(UserIcon)`
  
  font-family: "Fredoka One", cursive;
  cursor: pointer;
  margin-left:2rem;
`;
const MainWelcome = styled(Main)`
margin-bottom:0;
padding: 2rem 0 0 0;
`