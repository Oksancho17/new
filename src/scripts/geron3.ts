/*let numbers:number[] = [1,6,8,9,12,7,510];

// добавление элементов в массив
numbers.push(177)
console.log(numbers)

//фильтрация
let numbersMoreFive = numbers.filter ((item) => item >5)
console.log(numbersMoreFive)
//сортировка
numbersMoreFive.sort((a, b) => {
    return a-b
})
console.log(numbersMoreFive)

let names = ["Оксана","Антон","Лейсан"]
names.sort()
console.log(names)

let ages = ["2","3","4","5","6","7","8","9"]
//метод map - действие над всеми элементами массива
let agesToNumbers = ages.map((e) => parseInt (e))
agesToNumbers.sort((a,b) => {
    return a-b
})
console.log(agesToNumbers)


//объединение массивов
let newArray = [...numbers, ...numbersMoreFive] //1 вариант
let newArray2 = numbers.concat(numbersMoreFive, agesToNumbers) // 2 вариант  */



/*type TCategory = "Смартфоны" | "Ноутбуки"
type TProduct = {
    category: TCategory,
    price: number,
    count: number
}
let products:TProduct[] = [
    {
        category: "Смартфоны",
        price: 200000,
        count: 10
        
    },
    {
    category: "Ноутбуки",
    price: 220000,
    count: 15
    },
    {
        category: "Смартфоны",
        price: 140000,
        count: 8
        },
        {
            category: "Смартфоны",
            price: 690000,
            count: 12
            },   
            {
                category: "Ноутбуки",
                price: 740000,
                count: 3
                }
]

//создать массивы с категориями(отфильтр исходный)
let smartphones = products.filter((e) => e.category === "Смартфоны")
let laptops = products.filter((e) => e.category === "Ноутбуки")

smartphones.sort((a, b) => {
    return b.price - a.price
})
laptops.sort((a, b) => {
    return b.price - a.price
})
console.log(laptops)
console.log(smartphones)

const addProduct = (product:TProduct) =>{
    if(product.category === "Ноутбуки"){
        laptops.push(product)
    }
    else {
        smartphones.push(product) 
    }

}
addProduct({
    category:"Ноутбуки",
    price: 200000,
    count: 10
})

addProduct({
    category: "Смартфоны",
    price: 290000,
    count: 2
}),
console.log(smartphones)
addProduct({
    category: "Ноутбуки",
    price: 310000,
    count: 1
})
console.log(laptops)
addProduct({
    category: "Смартфоны",
    price: 100000,
    count: 12
})
console.log(smartphones)


smartphones.map((phone) => phone.price *= 1.1)
console.log(smartphones)

laptops.map((nout) => nout.price *= 0.8)
console.log(laptops)*/







const test = "test"
const addtest = () =>{
    console.log(`Привет из файла Герон`)
}
export default addtest

