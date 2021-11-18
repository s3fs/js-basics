//priveleged methods & objects
const getSecret = (secret) => {
  return {
    get: () => secret
  }
}

const obj = getSecret(1)

console.log(obj)
console.log(obj.get())
console.log('---------')

//stateful fns
const secret = msg => () => msg

const s = secret('hahaha')

console.log(s())