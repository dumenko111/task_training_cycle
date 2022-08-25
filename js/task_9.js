//написати скріпт підрахунку загальної суми ЗП працівників
//к-сть працівників зберігається в змінній employees
//ЗП кожного працівника - рандомне число від 500 до 5000
//записати заг. суму в змінну totalSalary і вивести в консоль

const employees = 6
let salary = 0
let totalSalary = 0

for (let i = 1; i <= employees; i +=1){
    salary = Math.round(Math.random() * (5000 - 500) + 500)
    console.log(`ЗП працівника № ${i}`, salary)
    totalSalary += salary
}
console.log(`Загальна сума ЗП ${totalSalary}`)
