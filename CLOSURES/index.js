function x() {
  let a = 10;
  function y() {
    console.log(a); //reference to 'a'
  }
  a = 69;
  return y; //when a function is returned, it is returned with itself as well as its lexical scope --> thus a closure is returned
}

const z = x(); // Returns `y` with access to `a` since the entire lexical scope was returned with y
z(); // 10
