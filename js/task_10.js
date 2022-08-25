//написати скріпт, який підраховує сумувсіх парних чисел,
//які входять в діапазон від min до max

const min = 3
const max = 16
let total = 0

for (let i = min; i <= max; i += 1) {
    if (i % 2 === 0) {
        console.log(`Ци число парне ${i}`)
    }
    total += i
}
console.log(`Загална сума парних чисел ${total}`)