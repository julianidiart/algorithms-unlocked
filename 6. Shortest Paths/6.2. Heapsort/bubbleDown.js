const bubbleDown = Q => {
  let i = 0;
  let leftI = i * 2 + 1;
  let rightI = leftI + 1;
  while (
    (Q[leftI] !== null && Q[i] > Q[leftI]) ||
    (Q[rightI] !== null && Q[i] > Q[rightI])
  ) {
    if (Q[rightI] !== null && Q[rightI] < Q[leftI]) {
      [Q[i], Q[rightI]] = [Q[rightI], Q[i]];
      i = rightI;
    } else {
      [Q[i], Q[leftI]] = [Q[leftI], Q[i]];
      i = leftI;
    }
    leftI = i * 2 + 1;
    rightI = leftI + 1;
  }
};

export default bubbleDown;
