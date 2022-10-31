import React from 'react'
import styled from 'styled-components'

let Grid = styled.div`

  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100%;
  gap: 0%;
  border-style:solid;
  border-color:yellowgreen;
  min-height:100%;
 

` 


let BtnContainer = styled.div`

    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
`

let BtnNovo = styled.div`

    height:60%;
    width:100%;
    align-items: center;
    border-style:solid;
`
let BtnCancella = styled.div`

    height:40%;
    width:100%;
    align-items: center;
    border-style:solid;
`

function LeftContentStyled() {
  return (
    <Grid>
    <div>lista</div>
    <BtnContainer>
      <BtnNovo>Novo Cliente</BtnNovo>
      <BtnCancella>Cancella</BtnCancella>
    </BtnContainer>
    
    </Grid>
  )
}

export default LeftContentStyled