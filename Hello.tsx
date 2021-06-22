import React from 'react';

export default ({ name }) => (
  <div
    style={{
      width: '500px',
      // 'max-height': '300px',
      // height: '250px',
      background: 'lightgrey'
    }}
  >
    <div className="body" style={{ display: 'flex' }}>
      <div
        style={{
          width: '50%',
          'text-align': 'center',
          'border-right': 'solid 1px black'
        }}
      >
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
      </div>
      <div style={{ width: '50%', 'text-align': 'center', padding: '10px' }}>
        <button className="number">1</button>
        <button className="number">2</button>
        <button className="number">3</button>
        <button className="number">4</button>
        <button className="number">5</button>
        <button className="number">6</button>
        <button className="number">7</button>
        <button className="number">8</button>
        <button className="number">9</button>
      </div>
    </div>
  </div>
);
