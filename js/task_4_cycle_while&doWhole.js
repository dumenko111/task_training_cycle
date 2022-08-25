//написати цикл, while і do...while, який пропонує ввести число через prompt більше 100
//якщо число менше, попросити ввести числ ще раз і так далі
//цикл маєзапитувавти чпсло до того часу поки не буде введено більше 100 або на буде натиснуто cancel
//перевірки на числа не потрібно

// let number = prompt('enter a number greater than 100')

// while (true) {                                //--НАПИСАНО ЧЕРЕЗ ЦИКЛ WHILE----
//     if (Number(number) >= 100) {
//         alert('number is greater than 100')
//         break
//     } if (number === null) {
//         alert('need number')
//         break
//     }
//     number = prompt('enter a number greater than 100')
// }


let number
                        //--НАПИСАНО ЧЕРЕЗ ЦИКЛ DO...WHILE---
do {
    let number = prompt('enter a number greater than 100')

    if (Number(number) >= 100) {
        alert('number is greater than 100')
        break
    } if (number === null) {
        alert('need number')
        break
    } 
}
while (true)
