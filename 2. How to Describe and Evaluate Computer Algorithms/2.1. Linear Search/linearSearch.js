// LINEAR-SEARCH
const linearSearch = (A, x) => {
  let answer = null,
    n = A.length;
  for (let i = 0; i < n; i++) {
    if (A[i] === x) answer = i;
  }
  return answer;
};

export default linearSearch;
