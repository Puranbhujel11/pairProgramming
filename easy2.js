let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr = arr.filter((n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
});

console.log(arr);