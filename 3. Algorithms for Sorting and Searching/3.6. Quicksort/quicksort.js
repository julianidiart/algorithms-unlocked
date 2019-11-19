// PARTITION
import partition from "./partition";

// QUICKSORT
const quicksort = (A, p = 0, r = A.length - 1) => {
  if (p >= r) return;
  const q = partition(A, p, r);
  quicksort(A, p, q - 1);
  quicksort(A, q + 1, r);
  return A;
};

export default quicksort;
