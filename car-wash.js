// customer can choose between three programs
// - Wash with water and dry
// - Wash with water, soap and dry
// - Wash with water, soap, dry and polish
// if customer is a "regular" customer he can get discount that should be applicable
// happy path: customer enters shop, employee enter which program to apply and eventual discount

function chooseProgram(program, isRegular = false) {
  let discount = 0.7
  switch (program) {
    case 'water and dry': {
      let price = 5
      console.log('Car entering facility...')
      console.log('Your car is finished')
      console.log('Price is ', isRegular ? price * discount : price)
      break
    }
    case 'water, soap and dry': {
      let price = 10
      console.log('Car entering facility...')
      console.log('Applying soap...')
      console.log('Your car is finished')
      console.log('Price is ', isRegular ? price * discount : price)
      break
    }
    case 'water, soap, dry and polish': {
      let price = 15
      console.log('Car entering facility...')
      console.log('Applying soap...')
      console.log('Polishing...')
      console.log('Your car is finished')
      console.log('Price is ', isRegular ? price * discount : price)
      break
    }

    default:
      break
  }
}

chooseProgram('water, soap, dry and polish', true)
