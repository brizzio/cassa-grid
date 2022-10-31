import React from 'react'
import styled from 'styled-components'

let Grid = styled.div`

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 40% 40% 20%;
  gap: 0%;
  border-style:solid;
  border-color:brown;
  min-height:95%;
 

` 
let ScannerDisplay = styled.div`
  grid-row:1;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  border-style:solid;
  min-height:100%;

`
let DisplayTotals = styled.div`
  grid-row:3;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  border-style:solid;
  min-height:100%;

`


function LeftDisplayStyled() {
  return (
    <Grid>
      <ScannerDisplay>
      <div>
        <span>Mussum Ipsum, cacilds vidis litro abertis. 
          </span>
        <span>7895556847 
          </span>
      </div>
      <div>
        12,00
      </div>
      </ScannerDisplay>
      <DisplayTotals>
        <div>
          <span>7</span>
          <span>13.5 Kg</span>
          <span>1</span>
        </div>
        <div>
          <span>€ 130.50</span>
        </div>
      </DisplayTotals>
    
    </Grid>
   
  )
}

export default LeftDisplayStyled