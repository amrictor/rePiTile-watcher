import { CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import React, { Suspense } from 'react';

import Events from './components/Events';
import Humidity from './components/Humidity';
import Temperature from './components/Temperature';

function App() {
  const Wrapper = styled('div', {})({
    height: '100%',
    width: '100%',
    padding: 20,
    background: 'rgba(129,204,184,0.8)',
  })

  const ControlPanel = styled('div', {})({
    margin: 'auto',
    minWidth: 250,
    '@media (max-width: 650px)': {
      minWidth: 'fit-content'
    },
  })

  const FlexBox = styled('div', {})({
    height: '100%',
    width: '100%',
    display: 'flex',
    maxWidth: 800,
    margin: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 650px)': {
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
  })

  return (
    <Wrapper>
      <FlexBox>
        <Suspense fallback={<CircularProgress color='inherit' style={{color: 'white', margin: 'auto'}} size="15vh" thickness={5}/>}>  
          <ControlPanel>
            <Temperature/>
            <Humidity/>
          </ControlPanel>
          <Events/>
        </Suspense>
      </FlexBox>
    </Wrapper>
  );
}

export default App;
