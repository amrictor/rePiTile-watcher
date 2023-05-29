import React from 'react';
import { styled } from '@mui/system';

import useTemperature from '../queries/useTemperature';

const Wrapper = styled('div', {})({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: '1vh',
  height: "18vh",
})

const Thermometer = styled('div', {})({
  position: 'absolute',
  opacity: 0.2,
  width: "3.5vh",
  background: "rgba(0,0,0,1)",
  height: "calc(100%)",
  borderRadius: "20px",
  zIndex: "1",
  // margin: '0px 10px 5vh 10px',
  // '&:before,:after': {
  //   position: "absolute",
  //   content: "\"\"",
  //   borderRadius: "50%"
  // },
  // '&:before': {
  //   width: "100%",
  //   height: "54px",
  //   bottom: "9px",
  //   background: "rgba(0,0,0,1)",
  //   zIndex: "-1"
  // },
  '&:after': {
    position: "absolute",
    content: "\"\"",
    borderRadius: "50%",
    transform: "translateX(-50%)",
    width: "5vh",
    height: "5vh",
    backgroundColor: "rgba(0,0,0,1)",
    border: "9px solid rgba(0,0,0,1)",
    zIndex: "-3",
    left: "50%",
    bottom: 0,
  }
})

const Fahrenheit = styled('div', {})({
  fontSize: '10vh',
  marginBottom: '-2.5vh',
})
const Celcius = styled('div', {})({
  fontSize: '3vh',
  verticalAlign: 'bottom',
  paddingBottom: '1.25vh'
})

function Temperature() {
  const { data: celcius } = useTemperature();
  const fahrenheit = (celcius*9/5) + 32
  return (
    <Wrapper>
      <Fahrenheit>{fahrenheit}°F</Fahrenheit>
      <Thermometer/>
      <Celcius>{celcius}°C </Celcius>
    </Wrapper>
  );
}

export default Temperature;
