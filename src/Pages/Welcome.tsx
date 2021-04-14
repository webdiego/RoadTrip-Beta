import styled from "styled-components";
import Home from "./Home";
import { useState } from "react";
import RoadTripIcon from "../Img/Roadtrip.png";
import Clouds from "../Img/Clouds.png";
import OkIcon from "../Img/Ok.png";

//STYLE
import { Main, RoadTripTitle, RoadTripIconTitle, UserIcon ,AlertContainer,Message, AlertYes } from "../Style/Style";
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
 console.log(LocalUser)
 console.log(user)
  return (
    <div style={{position:"relative" , height:"100vh"}}>
      {info && (
        <AlertContainer>
          <Message>
            <p style={{ margin: "2rem" }}>
              RoadTrip uses and saves your data on your browser (like your password etc.). <br/> If you clean up your data you will lose your trip.
            </p>
            <div>
              <ButtonAllRight onClick={()=>setInfo(false)}>All right!</ButtonAllRight>
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
            <div style={{display:"flex" }}>
              <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
              <ButtonGo onClick={hideWelcome}> <img src={OkIcon} alt=""/> </ButtonGo>
            </div>
          </InsertNameContainer>
        </div>
      )}

      {LocalUser.length > 0 &&  
      <Home 
      LocalUser={LocalUser.replace(/['"]+/g, '').trimStart().slice(0,1).toUpperCase()}
       Hide={Hide} />}
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
const ButtonAllRight = styled(AlertYes)`

`
const ButtonGo = styled(UserIcon)`
cursor:pointer;
margin-left:1rem;
background-color:#129d27;
border:5px solid #36c110 ;

img{
  width:2rem;
  transform:translateY(-2px)
}
`