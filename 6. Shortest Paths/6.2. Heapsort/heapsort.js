import buildBinaryHeap from "./buildBinaryHeap";
import extractMin from "./extractMin";

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

export default heapsort;
