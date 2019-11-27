// HEAPSORT
const heapsort = A => {
  const n = A.length;
  let Q = buildBinaryHeap(A);
  let B = [];
  for (let i = 0; i < n; i++) {
    const min = extractMin(Q);
    B.push(min);
  }
  return B;
};

const buildBinaryHeap = A => {
  const n = A.length;
  let heap = [];
  for (let i = 0; i < n; i++) {
    heap.push(A[i]);
    if (heap.length > 1) {
      let index = heap.length - 1;
      bubbleUp(heap, index);
    }
  }
  return heap;
};

const bubbleUp = (Q, i) => {
  while (Q[Math.floor(i / 2)] > Q[i]) {
    [Q[Math.floor(i / 2)], Q[i]] = [Q[i], Q[Math.floor(i / 2)]];
    i = Math.floor(i / 2);
  }
};

const extractMin = Q => {
  if (Q.length === 1) return Q.pop();
  let min = Q[0];
  Q[0] = Q.pop();
  bubbleDown(Q);
  return min;
};

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

export default heapsort;
