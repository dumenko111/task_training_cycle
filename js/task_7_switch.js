//написати скріпт вибору вартості готеля по к-сті зірок
//1 - 20$, 2 - 30$, 3 - 50$, 4- 70$, 5 - 120$.
//якщо в змінній stars щось крім цифер 1 - 5, вивести
// строку "Такої к-сті зірок немає"

const stars = 5
let price

switch (stars) {
    case 1:
        price = 'the cost of room reservation 20$'
    case 2:
        price = 'the cost of room reservation 30$'
        break
    case 3:
        price = 'the cost of room reservation 50$'
        break
    case 4:
        price = 'the cost of room reservation 70$'
        break
    case 5:
        price = 'the cost of room reservation 120$'
        break
    default:
        price = 'Invalid value entered'
}
console.log(price)