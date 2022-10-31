import React from 'react'
import styled from 'styled-components'

let Grid = styled.div`

  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 100%;
  gap: 0%;
  border-style:solid;
  border-color:yellowgreen;
  min-height:120%;
 

` 


let SideBarContainer = styled.div`

    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    padding:4%;
`

let ButtonContainer = styled.div`

    height:18%;
    width:100%;
    align-items: center;
    border-style:solid;
`


let KeyboardGrid = styled.div`

  display: grid;
  grid-template-columns: repeat(5 , 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0%;
  border-style:solid;
  border-color:burlywood;
  min-height:92%;
  margin-top:0.5%;
  margin-bottom:0.5%;
  
 

` 
let KeyUp = styled.div`

  grid-column: 1;
  grid-row: 1;
  border-style:solid;
  
`
let KeyDown = styled.div`

  grid-column: 1;
  grid-row: 2;
  border-style:solid;
  
`
let KeyNone = styled.div`

  grid-column: 1;
  grid-row: 3 / 5;
  border-style:solid;
  
`

let KeyZero = styled.div`

  grid-column: 2 / 4;
  grid-row: 4;
  border-style:solid;
  
`
let KeyDot = styled.div`

  grid-column: 4;
  grid-row: 4;
  border-style:solid;
  
`
let KeyOne = styled.div`

  grid-column: 2;
  grid-row: 3;
  border-style:solid;
  
`
let KeyTwo = styled.div`

  grid-column: 3;
  grid-row: 3;
  border-style:solid;
  
`
let KeyThree = styled.div`

  grid-column: 4;
  grid-row: 3;
  border-style:solid;
  
`
let KeyFour = styled.div`

  grid-column: 2;
  grid-row: 2;
  border-style:solid;
  
`
let KeyFive = styled.div`

  grid-column: 3;
  grid-row: 2;
  border-style:solid;
  
`
let KeySix = styled.div`

  grid-column: 4;
  grid-row: 2;
  border-style:solid;
  
`
let KeySeven = styled.div`

  grid-column: 2;
  grid-row: 1;
  border-style:solid;
  
`
let KeyEight = styled.div`

  grid-column: 3;
  grid-row: 1;
  border-style:solid;
  
`
let KeyNine = styled.div`

  grid-column: 4;
  grid-row: 1;
  border-style:solid;
  
`
let KeyPercent = styled.div`

  grid-column: 5;
  grid-row: 1;
  border-style:solid;
  
`
let KeyBack = styled.div`

  grid-column: 5;
  grid-row: 2;
  border-style:solid;
  
`
let KeyEnter = styled.div`

  grid-column: 5;
  grid-row: 3 / 5;
  border-style:solid;
  
`


function LeftCalculatorStyled() {
  return (
    <Grid>
    <KeyboardGrid>
      <KeyUp>UP</KeyUp>
      <KeyDown>Down</KeyDown>
      <KeyNone>None</KeyNone>
      <KeyZero>0</KeyZero>
      <KeyDot>.</KeyDot>
      <KeyOne>1</KeyOne>
      <KeyTwo>2</KeyTwo>
      <KeyThree>3</KeyThree>
      <KeyFour>4</KeyFour>
      <KeyFive>5</KeyFive>
      <KeySix>6</KeySix>
      <KeySeven>7</KeySeven>
      <KeyEight>8</KeyEight>
      <KeyNine>9</KeyNine>
      <KeyPercent>%</KeyPercent>
      <KeyBack>back</KeyBack>
      <KeyEnter>enter</KeyEnter>
    </KeyboardGrid>
    <SideBarContainer>
      <ButtonContainer>Button 1</ButtonContainer>
      <ButtonContainer>Button 2</ButtonContainer>
      <ButtonContainer>Button 3</ButtonContainer>
      <ButtonContainer>Button 4</ButtonContainer>
    </SideBarContainer>
    
    </Grid>
  )
}

export default LeftCalculatorStyled