//Styed componentes
import styled from "styled-components"
//IMG
import SeaForest from '../Img/SeaForest2.png'
import SliceCode from '../Img/SliceCode.png'
function Footer() {
  return (
    
    <FooterContainer style={{ backgroundImage: `url(${SeaForest})` }}> 
      <p>Created by</p>
     <a href="https://diego-slicecode.dev/"><img src={SliceCode} alt=""/></a> 
    </FooterContainer>
  )
}

export default Footer 

const FooterContainer = styled.div`
width:100%;
margin-top:3rem; 
background-size: contain;
background-repeat:repeat-x;
background-position:bottom;
display:flex;
align-items:center;
justify-content:flex-end;
flex-direction:column;
p{
  margin-top:7rem;
  color:white;
  letter-spacing:.3rem;
}
img{
  width:8rem;
  margin-bottom:.5rem;
  }
  button{
    border:2px solid #FFE53F;
    color:#191919;
    background-color:#f3a531;
    display:flex;
align-items:center;
border-radius:4px;
padding:.4rem .6rem .2rem .6rem;
justify-content:center;
font-family: 'Fredoka One', cursive;
cursor:pointer;
  }
`