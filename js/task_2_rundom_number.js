// написати функцію, яка приймає два аргумента (число від і число до)
// і виводить 5 випадкович чисел

const randomNumber = function (min, max) { 
    console.log(Math.round(Math.random() * (max - min) + min))
}

randomNumber(10, 50)                   // виводить в функцію одне рандомне число




// for (let i = 0; i < 5; i++) {
//     console.log(randomNumber(20, 33))     //цикл через функцію виводить 5 рандомних чисел
//     }




const printFiveNumber = function () {
    for (let i = 0; i < 5; i++) {
        console.log(randomNumber(23, 50))
    }
}
printFiveNumber()                               //функція виводить 5 рандомних чисел, використовуючи попередню функцію randomNumber







// console.log(Math.floor(Math.random() * 36))