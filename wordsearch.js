const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map((ls) => ls.join(''));
    const verticalJoin = transpose(letters).map((ls) => ls.join(''));
  
    for (const l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
  
    for (const l of verticalJoin) {
      if (l.includes(word)) return true;
    }
  
    return false;
  };

// Helper function to transpose the matrix
const transpose = (matrix) => {
    return matrix[0].map((_, columnIndex) => matrix.map((row) => row[columnIndex]));
  };



module.exports = wordSearch