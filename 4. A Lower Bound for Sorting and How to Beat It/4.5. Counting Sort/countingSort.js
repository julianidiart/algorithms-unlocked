import countKeysEqual from "../4.2. Count Keys Equal/countKeysEqual";
import countKeysLess from "../4.3. Count Keys Less/countKeysLess";
import rearrange from "../4.4 Rearrange/rearrange";

// COUNTING-SORT
const countingSort = A => {
  const countNumbers = countKeysEqual(A);
  const lessNumbers = countKeysLess(countNumbers);
  return rearrange(A, lessNumbers);
};

export default countingSort;
