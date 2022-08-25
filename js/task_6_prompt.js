//безкінечний цикл. Prompt запитує число до того моменту поки не буде нажато Cancel і кожного разу добавляє
//числа в змінну total. Після відміни в prompt показати в alert строку 'Загальна сума чисел = [сума]',
//перевірку на число робити не потрібно

let input
let total = 0

while (true) {
    input = prompt('Enter number')
    total += Number(input)

    if (!input) {
        console.log(`Загальна сума чисел = ${total}`)
        break
    }

}