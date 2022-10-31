import styled from 'styled-components'
import LeftHeaderStyled from './components/LeftHeaderStyled';
import LeftContentStyled from './components/LeftContentStyled';
import LeftDisplayStyled from './components/LeftDisplayStyled';
import LeftCalculatorStyled from './components/LeftCalculatorStyled';
import RightCommandStyled from './components/RightCommandStyled';
import RightSideScrollBarStyled from './components/RightSideScrollBarStyled';

function App() {
  return (

    <ApplicationContainer>

      <HeaderContainer>Header</HeaderContainer>
      <MainConteiner>
        <MainGrid>
            <LeftConteiner>
              <LeftHeaderConteiner>
                <LeftHeaderStyled />
              </LeftHeaderConteiner>
              <LeftContentConteiner>
                <LeftContentStyled />
              </LeftContentConteiner>
              <LeftDisplayConteiner>
                <LeftDisplayStyled />
              </LeftDisplayConteiner>
              <LeftCalculatorConteiner>
                <LeftCalculatorStyled />
              </LeftCalculatorConteiner>
            </LeftConteiner>
            <RightConteiner>
              <CommandConteiner>
                <RightCommandStyled />
              </CommandConteiner>
              <SideScrollBarConteiner>
                <RightSideScrollBarStyled />
              </SideScrollBarConteiner>
            </RightConteiner>
        </MainGrid>
        
      </MainConteiner>
      <FooterConteiner>Footer</FooterConteiner>
      

    </ApplicationContainer>

    
  );
}


const ApplicationContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  grid-template-rows: 3% 94% 3%;
  border-style:solid;
  border-color:red;
  min-height: 99vh;
  max-height: 100%;
  max-width: 100%;
` 
  

const HeaderContainer = styled.div`
  
  grid-column: 1 / 4;
  grid-row: 1;
  border-style:solid;

` 
const MainConteiner = styled.div`
  grid-column: 1 / 4;
  grid-row: 2;
  border-style:solid;
  min-height:100%;
  border-color:blueviolet;

` 

const MainGrid = styled.div`

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100%;
  gap: 0%;
  border-style:solid;
  border-color:yellowgreen;
  min-height:100%;
 

` 

const LeftConteiner = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5% 35% 20% 30%;
  border-style:solid;
  min-height:99%;

`

const LeftHeaderConteiner = styled.div`
  
  grid-row:1;
  border-style:solid;
  min-height:100%;
  background-color:#9593FD;

`

const LeftContentConteiner = styled.div`
  
  grid-row:2;
  border-style:solid;
  min-height:100%;
  border-color:goldenrod;

`

const LeftDisplayConteiner = styled.div`
  
  grid-row:3;
  border-style:solid;
  min-height:100%;
  border-color:bisque;

`

const LeftCalculatorConteiner = styled.div`
  
  grid-row:4;
  border-style:solid;
  min-height:100%;
  border-color:beige;

`

const RightConteiner = styled.div`
  grid-column: 2 / 3;
  grid-row:1;
  display:grid;
  grid-template-columns: 85% 15%;
  border-style:solid;

`

const CommandConteiner = styled.div`
  border-style:solid;
  min-height:99%;
  border-color:beige;

`
const SideScrollBarConteiner = styled.div`
  border-style:solid;
  min-height:99%;
  border-color:beige;

`


 const FooterConteiner = styled.div`
    grid-column: 1 / 4;
    grid-row: 3;
    border-style:solid;

 `


export default App;
