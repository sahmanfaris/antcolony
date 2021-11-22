// Write a function that takes a object and a string, which represents an object lookup path, for example "property1.property2". The function should return the value on the specific path. Take care of error handling.
// result 'Apple'

const obj = { property1: { property2: 'Apple', property3: 'Orange' } }

const path = 'property1.property2'

function findValue(obj, path) {
  const paths = path.split('.')

  for (let i = 0; i < paths.length; i++) {
    if (obj[paths[i]] == undefined) return undefined
    obj = obj[paths[i]]
  }

  return obj
}

console.log(findValue(obj, path))
