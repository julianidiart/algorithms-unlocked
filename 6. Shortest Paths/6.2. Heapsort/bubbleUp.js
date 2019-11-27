const bubbleUp = (Q, i) => {
  while (Q[Math.floor(i / 2)] > Q[i]) {
    [Q[Math.floor(i / 2)], Q[i]] = [Q[i], Q[Math.floor(i / 2)]];
    i = Math.floor(i / 2);
  }
};

export default bubbleUp;
