//написати скріпт вибору опції доставки
//опції зберігаються в змінній option:
//1-самовивіз / 2-кур'єр / 3-поштою

//в змінну message записати в залежності від опції:
//"ви зможете забрати товар завтра"
//"кур'єр доставить товар завтра з 09:00 до 17:00"
//"посилка буде відправлена сьогодні"
//"вам зателефонує менеджер"

const option = 2
let message = ''

switch (option) {
    case 1:
        message = 'ви зможете забрати товар завтра'
        break
    case 2:
        message = 'курєр доставить товар завтра з 09:00 до 17:00'
        break
    case 3:
        message = 'посилка буде відправлена сьогодні'
        break
    default:
        message = 'вам зателефонує менеджер'
}
console.log(message)