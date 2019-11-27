import bubbleUp from "./bubbleUp";

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

export default buildBinaryHeap;
