function z() {
  function x() {
    let a = 10;
    function y() {
      console.log(a); //reference to 'a'
    }
    a = 69;
    return y; //when a function is returned, it is returned with itself as well as its lexical scope --> thus a closure is returned
  }
  return x;
}

const first = z();  //x
const second = first();  //y
const third = second(); // y() : 69

