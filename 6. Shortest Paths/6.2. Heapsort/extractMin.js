import bubbleDown from "./bubbleDown";

const extractMin = Q => {
  if (Q.length === 1) return Q.pop();
  let min = Q[0];
  Q[0] = Q.pop();
  bubbleDown(Q);
  return min;
};

export default extractMin;
