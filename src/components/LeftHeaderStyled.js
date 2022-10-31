import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`


function LeftHeaderStyled() {
  return (
    <Wrapper>
        <div>Logo</div>
        <div>Negozio</div>
        <div>|</div>
        <div>Cassa</div>
        <div>|</div>
        <div>Operatore</div>

    </Wrapper>
  )
}

export default LeftHeaderStyled