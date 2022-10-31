import React from 'react'
import styled from 'styled-components'

let Grid = styled.div`

  display: grid;
  grid-template-columns: repeat(3 , 1fr);
  grid-template-rows: repeat(11 , 1fr);
  gap: 0%;
  border-style:solid;
  border-color:yellowgreen;
  min-height:99%;
 

` 
let ButtonContainer = styled.div`

    border-style:solid;
    align-items: center;
    min-height:98%;
`

let ButtonActionContainer = styled.div`

    grid-column: 1 / 4;
    border-style:solid;
    align-items: center;
    min-height:98%;
`

function RightCommandStyled() {
  return (
    <Grid>
      <ButtonContainer>BTN 1</ButtonContainer>
      <ButtonContainer>BTN 2</ButtonContainer>
      <ButtonContainer>BTN 3</ButtonContainer>

      <ButtonContainer>BTN 4</ButtonContainer>
      <ButtonContainer>BTN 5</ButtonContainer>
      <ButtonContainer>BTN 6</ButtonContainer>

      <ButtonContainer>BTN 7</ButtonContainer>
      <ButtonContainer>BTN 8</ButtonContainer>
      <ButtonContainer>BTN 9</ButtonContainer>

      <ButtonContainer>BTN 10</ButtonContainer>
      <ButtonContainer>BTN 11</ButtonContainer>
      <ButtonContainer>BTN 12</ButtonContainer>

      <ButtonContainer>BTN 13</ButtonContainer>
      <ButtonContainer>BTN 14</ButtonContainer>
      <ButtonContainer>BTN 15</ButtonContainer>

      <ButtonContainer>BTN 16</ButtonContainer>
      <ButtonContainer>BTN 17</ButtonContainer>
      <ButtonContainer>BTN 18</ButtonContainer>

      <ButtonContainer>BTN 19</ButtonContainer>
      <ButtonContainer>BTN 20</ButtonContainer>
      <ButtonContainer>BTN 21</ButtonContainer>

      <ButtonContainer>BTN 22</ButtonContainer>
      <ButtonContainer>BTN 23</ButtonContainer>
      <ButtonContainer>BTN 24</ButtonContainer>

      <ButtonContainer>BTN 25</ButtonContainer>
      <ButtonContainer>BTN 26</ButtonContainer>
      <ButtonContainer>BTN 27</ButtonContainer>

      <ButtonContainer>BTN 28</ButtonContainer>
      <ButtonContainer>BTN 29</ButtonContainer>
      <ButtonContainer>BTN 30</ButtonContainer>

      <ButtonActionContainer>CHIUDI</ButtonActionContainer>
    </Grid>
  )
}

export default RightCommandStyled