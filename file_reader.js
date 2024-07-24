const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
let dataOne, dataTwo, dataThree, dataFour
fs.readFile('./firstname.txt', 'utf-8')
  .then((data1) => {
    dataOne = data1
    return fs.readFile('./lastname.txt', 'utf-8')
  })
  .then((data2) => {
    dataTwo = data2
    return fs.readFile('./age.txt', 'utf-8')
  })
  .then((data3) => {
    dataThree = data3
    return fs.readFile('./hobbies.txt', 'utf-8')
  })
  .then((data4) => {
    dataFour = data4
    const hobbies = JSON.parse(dataFour)
    console.log(`${dataOne} ${dataTwo} is ${dataThree} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`)
  })

// ASYNC/AWAIT SOLUTION BELOW THIS LINE

async function readFile() {
  try {
    const data1 = await fs.readFile('./firstname.txt', 'utf-8')
    const data2 = await fs.readFile('./lastname.txt', 'utf-8')
    const data3 = await fs.readFile('./age.txt', 'utf-8')
    const data4 = await fs.readFile('./hobbies.txt', 'utf-8')
    const hobbies = JSON.parse(data4)
    return `${data1} ${data2} is ${data3} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`
  } catch(error) {
    console.log(error)
  }
}
readFile().then((data) => {
  try {
    console.log(data)
  } catch(error) {
    console.log(`Error because of ${error}`)
  }
})

// console.log(`John Smith is 50 years old and his hobbies are swimming and dancing`)