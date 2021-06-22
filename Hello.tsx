import React from 'react';

import Utils from './utils';

const colors = {
  available: 'lightgrey',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue'
};

export default ({ name }) => {
  const random = Utils.random(1, 9);
  const range = Utils.range(random, 1);
  const availableNums = Utils.range(5, 1);
  const candidateNums = Utils.range(1, 6);
  // console.log(a);
  const numberStatus = number => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  return (
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
          {range.map(a => (
            <div key={a} className="star" />
          ))}
        </div>
        <div style={{ width: '50%', 'text-align': 'center', padding: '10px' }}>
          {Utils.range(9, 1).map(a => (
            <button
              key={a}
              className="number"
              style={{ background: colors[numberStatus(a)] }}
            >
              {a}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
