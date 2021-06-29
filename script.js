//#1. Reverse a string
function reverse(str) {
  if (str.length === 1) return str;
  return reverse(str.substr(1)) + str.charAt(0);
}

console.log(reverse("hello"));
