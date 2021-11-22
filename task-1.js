// task 1
// description
// for a random arr return a new struct, with a unique id and a value such as the next positive integer, which isn't present in the existing structure list and with at least one smaller integer appearing at least twice in the same list

const randomArr = [
  { id: 1, value: 3 },
  { id: 2, value: 7 },
  { id: 3, value: 3 },
  { id: 4, value: 1 },
  { id: 5, value: 4 },
]

function firstDuplicate(arr) {
  let elementSet = new Set()

  for (let i = 0; i < arr.length; i++) {
    if (elementSet.has(arr[i])) return arr[i]
    elementSet.add(arr[i])
  }

  return 'No duplicates here!'
}

const addStruct = arr => {
  const values = arr.map(el => el.value)

  const ids = arr.map(el => el.id)
  const id = Math.max(...ids) + 1

  let duplicate = firstDuplicate(values)

  while (values.includes(duplicate)) {
    duplicate++
  }

  return { id, duplicate }
}

console.log(addStruct(randomArr))
