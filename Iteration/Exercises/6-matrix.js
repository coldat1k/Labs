'use strict';

const max = (matrix) => {
  let maxElem = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; i < matrix.length; j++) {
      const elem = row[j];
      if (elem > maxElem) maxElem = elem;
    }
  }
  return maxElem;
};

module.exports = { max };
