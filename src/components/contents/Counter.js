import React from 'react';
import CountUp from 'react-countup';

const Counter = ({scrollEvent}) => {
  return (
    <>
      <ul>
        <li>
          {
            scrollEvent ? <CountUp end={96} duration={2.5} suffix=" %"></CountUp> : <span>0 %</span>
          }
          <p>HTML / CSS</p>
        </li>
        <li>
          {
            scrollEvent ? <CountUp end={92} duration={2.5} suffix=" %"></CountUp> : <span>0 %</span>
          }
          <p>HTML5 / CSS3</p>
        </li>
        <li>
          {
            scrollEvent ? <CountUp end={60} duration={2.5} suffix=" %"></CountUp> : <span>0 %</span>
          }
          <p>JAVASCRIPT</p>
        </li>
        <li>
          {
            scrollEvent ? <CountUp end={30} duration={2.5} suffix=" %"></CountUp> : <span>0 %</span>
          }
          <p>REACT</p>
        </li>
      </ul>
    </>
  );
}

export default Counter;