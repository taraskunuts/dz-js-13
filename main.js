const user = {
  name: 'Вася грузин',
  age: 32,
  hobby: 'васька грузин зі стажом шиномонтажника в 32 роки',
  premium: true
}
let { name, age, hobby, premium } = user
user.mood = 'happy'
hobby = 'skydiving'
premium = false
const userKeysArray = Object.keys(user)
for (const key of userKeysArray) {
  console.log(`${key} : ${user[key]}`)
}
//
//
//
//
function countProps(obj){
  let propertiesAmount = 0
  for(const properties of Object.keys(obj)){
    if(properties !== undefined){
      propertiesAmount += 1
    }
  }
  return propertiesAmount
}
console.log(countProps(user))
//
//
//
//
function findBestEmployee(employeesObj){
  let mostTasksEmployee = ''
  let mostTasksValue = 0
  const namesOfEmployees = Object.keys(employeesObj)
  for (let i = 0; i < namesOfEmployees.length; i++) {
    const key = namesOfEmployees[i]
    const value = employeesObj[key]
    if (value > mostTasksValue) {
      mostTasksEmployee = key
        mostTasksValue = value
    }
}
return mostTasksEmployee
}
const employees = {
  employeeTaras: 26,
  employeeDina: 25,
  employeeDima: 17,
  employeeMarkian: 30,
  employeeDenys: 20
}
const { employeeTaras, employeeDina, employeeDima, employeeMarkian, employeeDenys } = employees
console.log(findBestEmployee(employees))
//
//
//
//
function countTotalSalary(employees) {
  let totalSalary = 0
  const employeesSalariesArray = Object.values(employees)
  for (let i = 0; i < employeesSalariesArray.length;i++) {
    totalSalary += employeesSalariesArray[i]
  }
  return totalSalary;
}
const salaries = {
  employeeeTaras: 2600,
  employeeeDina: 2500,
  employeeeDima: 1700,
  employeeeMarkian: 3000,
  employeeeDenys: 2000
}
const {employeeeTaras, employeeeDina, employeeeDima, employeeeMarkian, employeeeDenys } = salaries;

console.log(countTotalSalary(salaries))
//
//
//
//
function getAllPropValues(arr, prop) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (item[prop] !== undefined) {
      result.push(item[prop])
    }
  }
  return result
}
const products = [
  { name: 'яблуко', price: 1500, quantity: 4 },
  { name: 'апильсинка😎', price: 800, quantity: 10 },
  { name: 'інфляція', price: -600, quantity: 5 }
]
console.log(getAllPropValues(products, 'name'))
//
//
//
//
function calculateTotalPrice(allProducts, productName) {
  for (const product of allProducts) {
      if (product.name === productName) {
          return product.price * product.quantity;
      }
  }
  return 0
}
console.log(calculateTotalPrice(products, 'яблуко'))
console.log(calculateTotalPrice(products, 'апильсинка😎'))
console.log(calculateTotalPrice(products, 'інфляція'))
console.log(calculateTotalPrice(products, 'TOILEr SVEFTOZ'))
//
//
//
//
const account = {
  balance: 0,
  transcations: [],
  deposit(amount) {
    if (amount > 0) {
      this.transcations.push(`deposit ${amount}`)
      this.balance += amount
      console.log(`Зараховано ${amount} грн`)
    } else {
      console.log('Сума повинна бути більшою за нуль!')
    }
  },
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transcations.push(`withdraw ${amount}`)
      this.balance = this.balance - amount
      console.log(`Знято ${amount} грн`)
    } else {
      console.log(amount > 0 `Недостатньо коштів!`)
    }
  },
  getBalance() {
    return this.balance
  },
  getTranscations() {
    return this.transcations
  },
}
console.log(account.deposit(300))
console.log(account.withdraw(100))
console.log(account.getBalance())
console.log(account.getTranscations())