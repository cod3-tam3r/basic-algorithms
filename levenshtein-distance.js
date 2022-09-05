let word1 = "лабрадор",
  word2 = "гибралтар";

function distance(word1, word2) {
  let matrix = [];
  let a, b, c;

  for (let i = 0; i < word2.length + 1; i++) {
    matrix.push([]);
    for (let j = 0; j < word1.length + 1; j++) {
      if (j == 0 && i > 0) {
        matrix[i].push(i);
      } else {
        if (i == 0) {
          matrix[i].push(j);
        } else {
          a = matrix[i - 1][j] + 1;
          b = matrix[i][j - 1] + 1;
          c = matrix[i - 1][j - 1] + (word1[j - 1] !== word2[i - 1] ? 1 : 0);
          matrix[i][j] = Math.min(a, Math.min(b, c));
        }
      }
    }
  }
  return matrix[word2.length][word1.length];
}

console.log(
  `Levenshtein distance ${word1}, ${word2} is`,
  distance(word1, word2)
);
