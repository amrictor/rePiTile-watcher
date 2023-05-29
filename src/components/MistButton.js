import React, { useEffect } from 'react';
import { darken, styled } from '@mui/system';


import useMister from '../mutations/useMister';
import useWaterLevel from '../queries/useWaterLevel';

import { ButtonBase } from '@mui/material';

import { CircularFluidMeter } from 'fluid-meter';

const Button = styled(ButtonBase, {})({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Bebas Neue',
  height: 100,
  width: 100,
  borderRadius: '50%',
  fontSize: 38,
  transition: '.2s ease-in-out',
  '&:hover': {
    background: 'rgba(0,0,0,0.1)',
    // transform: 'scale(1.1)',
  },
  '& span': {
    // position: 'absolute',
    zIndex: 1,
  },
})
let fluidMeter;

function MistButton() {
  const { data: waterLevel } = useWaterLevel();
  const { mutate: mist, isLoading: isMisting, justMisted } = useMister();
  // const [fluid, setFluid] = useState();

  useEffect(() => {
    const target = document.querySelector('#fluid-meter');
    fluidMeter = new CircularFluidMeter(target, {
      initialProgress: 50,
      borderWidth: 5,
      borderColor: 'black',
      padding: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      dropShadow: false,
      showProgress: false,
      use3d: false,
      fluidConfiguration: {
        color: 'rgba(175, 240, 255, 1)'
      }
    });
    return () => {
      fluidMeter.dispose();
      target.innerHTML = ""
    }
  }, [])

  useEffect(() => {
    if (fluidMeter) {
      fluidMeter.progress = 100*waterLevel/28
    }
  }, [fluidMeter, waterLevel])

  return (
    <Button
      onClick={mist} 
      disabled={isMisting || justMisted}
    >
      <div id="fluid-meter" style={{position: 'absolute', width: 100, height: 100}}></div>
      <span>MIST</span>
    </Button>
  );
}

export default MistButton;
