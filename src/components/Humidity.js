import React from 'react';
import { darken, styled } from '@mui/system';

import useHumidity from '../queries/useHumidity';

import useMister from '../mutations/useMister';
import useWaterLevel from '../queries/useWaterLevel';

import { ButtonBase, LinearProgress } from '@mui/material';
import MistButton from './MistButton';

const Wrapper = styled('div', {})({
  // borderRadius: 20,
  // border: '2px solid black',
  display: 'flex',
  justifyContent: 'space-around',
  // flexWrap: 'wrap',
  alignItems: 'center',
  maxWidth: 400,
  margin: '0px auto 10px auto',
  paddingRight: 10,
})
const PercentHumidity = styled('div', {})({
  margin: 5,
  fontSize: 55,
  background: 'rgba(175, 240, 255, 0.5)',
  border: '6px solid rgba(175, 240, 255, 1)',
	borderRadius:'0% 100% 100% 100%',
  height: 120,
  width: 120,
	transform: 'rotate(45deg)',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  '& > div': {
    '& :first-child': {
      fontSize: 15,
      marginTop: 10,
      marginBottom: -10,
    },
    textAlign: 'center',
    // margin: '16px 0px 0px 16px',
    transform: 'rotate(315deg)'
  }
})
const Misting = styled('div', {})({
  margin: 5,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

function Humidity() {
  const { data: humidity } = useHumidity();
  
  const { data: waterLevel } = useWaterLevel();
  const { mutate: mist, isLoading: isMisting, justMisted } = useMister();

  return (
    <Wrapper>
      <PercentHumidity>
        <div>
          <div>Humidity</div>
          <div>{humidity}%</div>
        </div>
      </PercentHumidity>
      <Misting>
        <MistButton/>
        <LinearProgress variant="determinate" value={100*waterLevel/28}/>
        {(100*waterLevel/28).toFixed(0)}% full
      </Misting>
    </Wrapper>
  );
}

export default Humidity;
