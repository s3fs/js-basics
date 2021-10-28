/**
 * Categories:
 * 
 * Arithmetic -> number
 * String -> string
 * Logical -> boolean
 * Primary -> 'this', basic keywords and expressions
 * Left-hand-side ->
 * 
 */

const [a, b] = ['xoxo', 'xaxa']
let obj

//obj.d() returns 'xoxoxaxa' (a, b -> global scope)
obj = {
  a: 1,
  b: 2,
  d: () => {
    return a + b
  }
}

console.log(obj.d())

//obj.d() returns undefined because the function is anonymous
//and it doesn't have it's own scope (it is inherited)
obj = {
  a: 1,
  b: 2,
  d: () => {
    return this.a + this.b
  }
}

console.log(obj.d())

//returns 3, as expected
obj = {
  a: 1,
  b: 2,
  d: function(){
    return this.a + this.b
  },
  e(){
    return 'This works too'
  }
}

console.log(obj.d())