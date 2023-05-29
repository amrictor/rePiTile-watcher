import { AcUnit, Shower, Straighten, Thermostat, Water, WbSunny } from "@mui/icons-material";
import { styled } from "@mui/system";
import React from "react";
import useEvents from "../queries/useEvents";

const iconMap = {
  'MIST': Shower,
  'HEAT_ON': WbSunny,
  'HEAT_OFF': AcUnit
}

const EventWrapper = styled('div', {})({
  width: '100%',
  maxWidth: 350,
  padding: 10,
  marginTop: 5,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  background: 'rgba(0, 0, 0, 0.1)'
})

const InfoWrapper = styled('div', {})({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 700,
  fontSize: 22,
  '@media (max-width: 450px)': {
    fontSize: '5vw',
  },
  '@media (max-width: 380px)': {
    flexDirection: 'column',
    fontSize: 22
  },
  '& > div': {
    userSelect: 'none',
    minWidth: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3px 10px',
    '& > svg': {
      marginRight: 5
    },
    '@media (max-width: 380px)': {
      flexDirection: 'row'
    }
  }
})

const Timestamp = styled('div', {})({
  fontWeight: 100,
  fontSize: 22,
  padding: '2px 10px',
  margin: 10,
  '@media (max-width: 450px)': {
    fontSize: '5vw',
  },
  margin: 'auto',
  textAlign: 'center',
  // fontStyle: 'italic',
  // letterSpacing: 0,
  background: 'rgba(0,0,0,.1)',
  // fontFamily: "'Share Tech Mono', monospace",
  borderRadius: 25,
})

const Icon = styled('div', {})({
  fontSize: 22,
  textAlign: 'center'
})

function Event({ event }) {
  const date = new Date(event.timestamp+ ' UTC');
  return <EventWrapper>
    <Icon>
      {React.createElement(iconMap[event.type], { sx: { color: 'rgba(175, 240, 255, 1)', fontSize: '60px', marginBottom: '-10px'} })}
      <div>{event.type}</div>
    </Icon>
    <div>
      <Timestamp>
        {date.toLocaleDateString().slice(0,-5)} {date.toLocaleTimeString().slice(0, -6)}{date.toLocaleTimeString().slice(-3)}
      </Timestamp>
      <InfoWrapper>
        <div title="Temperature"><Thermostat/>{event.temperature}°C</div>
        <div title="Humidity"><Water/>{event.humidity}%</div>
        <div title="Reservoir"><Straighten/>{event.water_level.toFixed(2)}cm</div>
      </InfoWrapper>
    </div>
  </EventWrapper>
}

const Wrapper = styled('div', {})({
  width: '100%',
  maxWidth: 350,
  padding: '0px 10px',
  maxHeight: '100%',
  flexShrink: 1,
  overflowY: 'auto',
})

function Events() {
  const { data: events } = useEvents();
  if (!events) return null;
  return <Wrapper>
    {events.map(event => <Event event={event}/>)}
  </Wrapper>
}

export default Events;