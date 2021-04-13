import styled from "styled-components";
import Home from "./Home";
import { useState } from "react";
import RoadTripIcon from "../Img/Roadtrip.png";
import Clouds from "../Img/Clouds.png";

//STYLE
import { Main, RoadTripTitle, RoadTripIconTitle } from "../Style/Style";
function Welcome() {
  let LocalUser = localStorage.getItem("User")! ? localStorage.getItem("User")! : "";
  const [toggle, setToggle] = useState<boolean>(LocalUser.length > 1 ? true : false);
  const [user, setUser] = useState<string>("");

  const hideWelcome = () => {
    localStorage.setItem("User", JSON.stringify(user));

    setToggle(true);
  };
  const Hide = () => {
    localStorage.clear();

    setToggle(false);
  };

  console.log(`User:${user} LocalUser: ${LocalUser}`, toggle);

  return (
    <div>
      {LocalUser.length <= 0 && (
        <div>
          <Main style={{ backgroundImage: `url(${Clouds})` }}>
            <h4>Welcome to</h4>
            <RoadTripTitle>
              RoadTrip
              <RoadTripIconTitle src={RoadTripIcon} alt="" />
            </RoadTripTitle>
          </Main>

          <InsertNameContainer>
            <label>Insert Your Name</label>
            <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />{" "}
            <button onClick={hideWelcome}>👍</button>
          </InsertNameContainer>
        </div>
      )}

      {LocalUser.length > 0 && <Home LocalUser={LocalUser.slice(1, 2).toUpperCase()} Hide={Hide} />}
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
