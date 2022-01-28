// Medium(1)

const vowelChecker = (x) => ["a", "e", "i", "o", "u"].includes(x)

if(vowelChecker) {
  console.log('This is a vowel')
}
else {
  console.log('This not vowel')
};

console.log(vowelChecker("s"));