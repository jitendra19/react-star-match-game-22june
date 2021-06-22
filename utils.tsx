const Utils = {
  range: (size, startAt = 1) => {
    return [...Array(size).keys()].map(i => i + startAt);
  },
  sum: () => {},
  random: (min, max) => Math.floor(Math.random() * (max - min) + min)
};

export default Utils;
