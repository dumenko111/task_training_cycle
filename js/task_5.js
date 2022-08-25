//написати код, який буде запитувати логін через prompt і логінити результат ...
//якщо відвідувач вводить Адмін, то prompt запитує пароль
//якщо нічого не введено або нажата клавіша Esc - вивести строку "відміна", в іншому випадку "Я вас не знаю"
//пароль провіряти так: якщо введено "пароль", то вивести строку "Добрий день", якщо ні "не вірний пароль"

// let login

// while (true) {  //--ВАРІАНТ ВИКОНАННЯ ЧЕРЕЗ WHILE--
//     login = prompt('Please enter login')

//     if (!login) {
//         console.log('canceled by the user')
//         break
//     }
//     if (login === 'Адмін') {
//         let password = prompt('Please enter password')
        
//         if (password === 'пароль') {
//             console.log('Добрий день')
//             break
//         }
//         console.log('Wrong password')
//     }
// }


//--ВАРІАНТ ЧЕРЕЗ SWITCH--
let login = prompt('Please enter login')

switch (login) {
    case 'Адмін':
        let password = prompt('Please enter password')

        if (password === 'пароль') {
            console.log('Добрий день')
        } else {
            console.log('Wrong password')
        }
        break
 
    case null: {
        console.log('canceled by the user')
    }
    default: {
        console.log('Wrong enter')
        }
}