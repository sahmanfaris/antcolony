// Constructor Function (Encapsulation)
function CarWash(program, price, isRegular) {
  this.program = program
  this.price = price
  this.isRegular = isRegular

  // Abstraction
  let discount = 0.7
  let calculatePrice = this.isRegular ? this.price * discount : this.price

  // Polymorphism
  this.render = function () {
    console.log('Car entering facility...')
    if (program.includes('soap')) console.log('Applying soap')
    if (program.includes('polish')) console.log('Polishing')
    console.log('Your car is finished')
    console.log('Price is ', calculatePrice.toFixed(2))
  }
}

// No need for Inheritance

const bob = new CarWash('water and dry', 4, true)
const john = new CarWash('water, soap and dry', 5, true)
const mark = new CarWash('water, soap, dry and polish', 7, true)

console.log(bob.render())
console.log(john.render())
console.log(mark.render())
