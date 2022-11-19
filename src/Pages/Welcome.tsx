import { useState } from "react";
//Styled Components
import styled from "styled-components";
//Framer motion
import { motion } from "framer-motion";
//Components
import Home from "./Home";
//Icons
import RoadTripIcon from "../Img/Roadtrip.png";
import Clouds from "../Img/Clouds.png";
import OkIcon from "../Img/Ok.png";
//Style components from style.tsx
import {
  Main,
  RoadTripTitle,
  RoadTripIconTitle,
  UserIcon,
  AlertContainer,
  Message,
  AlertYes,
} from "../Style/Style";
//USE-SOUND
import useSound from "use-sound";
import { IAudio } from "../Interface/Audio-Interface";
import Ok from "../Sound/click.wav";
import Icon from "../Sound/Icon.wav";

const OK: IAudio = { name: "Ok", src: Ok };
const ICON: IAudio = { name: "Icon", src: Icon };

function Welcome() {
  //EXPERIMENT USE-SOUND
  const [playOk] = useSound(OK.src, { volume: 0.75, interrupt: true });
  const [playIcon] = useSound(ICON.src, { volume: 0.35, interrupt: true });

  const SoundHandler = (sound: string) => {
    if (sound === "Ok") playOk();
    if (sound === "Icon") playIcon();
  };
  //USER LOCAL STORAGE
  const LocalUser = localStorage.getItem("User")! ? localStorage.getItem("User")! : "";
  const [toggle, setToggle] = useState<boolean>(LocalUser.length > 1 ? true : false);
  const [user, setUser] = useState<string>("");
  const [info, setInfo] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  //FUNCTION FOR HIDE AND SHOW PAGES
  const hideWelcome = () => {
    setIsOpen(true);

    setTimeout(() => {
      setIsOpen(false);
    }, 900);
    setTimeout(() => {
      localStorage.setItem("User", JSON.stringify(user));
      setToggle(true);
    }, 700);
  };
  const Hide = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 900);

    setTimeout(() => {
      localStorage.clear();
      setToggle(false);
    }, 700);
  };
  const AddNameOnEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      SoundHandler("Ok")  
      setUser(user)
      hideWelcome()
    }
  };
  //ANIMATION VARIANTS FRAMER-MOTION
  const variants = {
    open: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      style={{ position: "relative", height: "100vh" }}
    >
      {info && (
        <AlertContainer>
          <Message>
            <p style={{ margin: "2rem" }}>
              RoadTrip uses and saves your data on your browser (like your password etc.). <br /> If
              you clean up your data you will lose your trip.
            </p>
            <div>
              <ButtonAllRight onClick={() => setInfo(false)}>All right!</ButtonAllRight>
            </div>
          </Message>
        </AlertContainer>
      )}
      {LocalUser.length <= 0 && (
        <div>
          <MainWelcome style={{ backgroundImage: `url(${Clouds})` }}>
            <ButtonInfo
              onClick={() => {
                setInfo(true);
                SoundHandler("Icon");
              }}
            >
              {" "}
              i{" "}
            </ButtonInfo>

            <h4>Welcome to</h4>
            <RoadTripTitle>
              RoadTrip
              <RoadTripIconTitle src={RoadTripIcon} alt="" />
            </RoadTripTitle>
          </MainWelcome>

          <InsertNameContainer>
            <label>Insert Your Name/NickName</label>
            <div style={{ display: "flex" }}>
              <input
                onSubmit={hideWelcome}
                type="text"
                value={user}
                onChange={(e) => {setUser(e.target.value); console.log(e)}}
                onFocus={(e) => (e.target.value = "")}
                onKeyPress={(e) => AddNameOnEnter(e)}
              />
              <ButtonGo
                onClick={() => {
                  hideWelcome();
                  SoundHandler("Ok");
                }}
              >
                {" "}
                <img src={OkIcon} alt="" />{" "}
              </ButtonGo>
            </div>
          </InsertNameContainer>
        </div>
      )}

      {LocalUser.length > 0 && (
        <Home
          LocalUser={LocalUser.replace(/['"]+/g, "").trimStart().slice(0, 1).toUpperCase()}
          Hide={Hide}
        />
      )}
    </motion.div>
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
    @media (max-width: 368px) {
    width:10rem;
  }
  }
`;
const ButtonInfo = styled(UserIcon)`
  font-family: "Fredoka One", cursive;
  cursor: pointer;
  margin-left: 2rem;
`;
const MainWelcome = styled(Main)`
  margin-bottom: 0;
  padding: 2rem 0 0 0;
`;
const ButtonAllRight = styled(AlertYes)``;
const ButtonGo = styled(UserIcon)`
  cursor: pointer;
  margin-left: 1rem;
  background-color: #129d27;
  border: 5px solid #36c110;

  img {
    width: 2rem;
    transform: translateY(-2px);
  }
`;
