console.log('Running...')

//this will not pause the execution
let promise = new Promise((resolve, reject) => {
  const decide = Math.round(Math.random())

  if (decide === 0) {
    setTimeout(() => {
      console.log('Inside promise timeout')
      resolve('Promise fulfilled')
    }, 3000)  
  } else {
    setTimeout(() => {
      console.log('Inside promise timeout')
      reject(new Error('REJECTED!!!'))
    }, 3000)
  }
})

// -> this runs right after the first log
console.log('After promise');

//this waits for the promise to resolve or reject in order to execute
(async () => {
  try {
    const res = await promise
    console.log('res :>> ', res)
  } catch (e) {
    console.log('Error! :>> ', e);
  }
})()

//this runs as the third log
console.log('After async iife')