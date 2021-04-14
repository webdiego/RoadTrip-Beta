import styled from "styled-components"

//MAIN TITLE CONTAINER
export const Main = styled.div`
  width: 100%;
  height: 17rem;
  background-position: top;
  background-size: cover;
  margin-bottom: 2rem;
  h4{
    text-align:center;
    padding-bottom:.3rem;
    font-family: "Roboto Mono", monospace;
    font-size:1.2rem;
  }
`;

export const RoadTripIconTitle = styled.img`
  width: 3rem;
`;
export const RoadTripTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  display:flex;
  align-items:center;
  justify-content:center;
`;

//lITTLE EXPENSES 
export const ExpensesContainer =styled.div`
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
font-size:2rem;

`
export const ExpenseIcon = styled.img`
width:1.4rem;
margin-left:.7rem;

`
export const OverviewContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`

//ALERT CONTAINER & BUTTONS

export const AlertContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(46, 46, 46, 0.449);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const Message = styled.div`
  height: 15rem;
  width: 80%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

export const AlertYes = styled.button`
  border: 2px green solid;
  color: white;
  font-size: 1.3rem;
  background-color: #0a960a;
  margin: 0 1rem;
  border-radius: 5px;
  padding: 0.2rem;
  cursor: pointer;
`;
export const AlertNo = styled(AlertYes)`
  background-color: #d55b22;
  border: 2px #e94b0d solid;
`;

export const UserIcon = styled.button`
font-family: 'Fredoka One', cursive;
height: 3rem;
width: 3rem;
color:white;
background-color:#5caeff;
border:5px solid #2c93fa ;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;


`;