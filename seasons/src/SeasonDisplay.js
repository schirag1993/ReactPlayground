import React from 'react';
import ReactDOM from 'react-dom';

const getSeason = (lat, month) => {
  if(month > 2 && month < 9) return lat > 0 ? 'summer' : 'winter'
  else return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = (props) => {
  // const season = getSeason(props.lat, new Date().getMonth());
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === 'summer' ?  "Let's hit the beach" : "Burr, it's chilly";
  const icon = season === 'winter' ? 'snowflake' : 'sun';
  console.log(text);
  return (<div>
    <i className={`${icon} icon`} />
    <h1>{text}</h1>
    <i className={`${icon} icon`} />
    </div>)
  // return (
  //   <div>Season: {season}</div>
  // )
}
export default SeasonDisplay;
