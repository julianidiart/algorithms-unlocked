const assembleTransformation = (op, i, j, result = []) => {
  if (i === 0 && j === 0) return result.concat("initial strings").reverse();
  result.push(op[i][j]);
  switch (getOperation(op[i][j])) {
    case "copy":
    case "replace":
      return assembleTransformation(op, i - 1, j - 1, result);
    case "delete":
      return assembleTransformation(op, i - 1, j, result);
    case "insert":
      return assembleTransformation(op, i, j - 1, result);
    default:
      return "";
  }
};

const getOperation = operation => {
  return operation.split(" ")[0];
};

export default assembleTransformation;
