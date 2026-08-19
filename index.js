const expenses = [
    {name : "Food", amount : 25, category : "food"},
    {name : "Transport", amount : 48, category : "transport"},
    {name : "Internet", amount : 10, category : "bills"}
]




// let total = 0

// for(const expense of expenses){
//     console.log(expense.name, expense.amount)
//     total = total + expense.amount
// }

// console.log("Total expenses :", total)

const names = ["ama", "kofi", "lad"]

for (const name of names) {
    console.log(name)
}

 const numbers = [10, 20 , 30, 40]

// for(const number of numbers) {
//     console.log(number * 2)
// }

// for (i = 0; i < numbers.length; i++){
//     if (numbers[i] < 30){
//         console.log(numbers[i])
//     }
// }

// for (let i = 0; i < numbers.length; i++){
//     if( numbers[i] % 2 == 1) {
//         console.log(numbers[i])
//     }
// }
const points = [5, 12, 18, 23, 30, 41]

// for ( let i = 0; i < points.length; i++ ){
//     if ( points [i] > 10 && points [i] % 2 === 0) {
//         console.log(points[i])
//     }
// }

for ( let i = 0; i < points.length; i++ ){
    if ( points [i] > 15 && points [i] % 2 === 1){
        console.log(points[i])
    }
}

const products = [
    {name : "Laptop", price : 3500},
    {name : "Mouse", price : 150},
    {name : "Keyboard", price : 300}
]

for (let i = 0 ; i < products.length; i++){
    if (products[i].price > 200) {
        console.log(`${products[i].name} costs ${products[i].price}`)
    }
}

let total = 0
for (let i = 0; i < products.length; i++) {
        
    if(products[i].price > 200) {
        total = total + products[i].price
        console.log(products[i].price)
    }
}
console.log(`Total : ${total}`)


const affordableProducts = products.filter((product) => {
    return product.price < 500
})
console.log(affordableProducts)

//i do remember the filter button
const budgetProducts = products.filter((product) => {
    return product.price > 200 && product.price < 1000
})

console.log(budgetProducts)

// const searchProduct = products.find((product) => {
//     return product.name === "Mouse"
// })

// console.log(searchProduct)

//they make remember the search bar
const productWithA = products.filter((product) => {
    return product.name.includes("a")
})

console.log(productWithA)

const findProduct = products.find((product) => {
    return product.name === "Keyboard"
})

console.log(findProduct)

const maxProduct = products.find((product) => {
    return product.price > 200
})

console.log(maxProduct)

const productPrice = products.map((product) => {
    return product.price
})
console.log(productPrice)

const productLabels = products.map((product) => {
    return `${product.name} costs ${product.price}`
})

console.log(productLabels)

const totalPrice = products.reduce((total, product) => {
    return total + product.price
}, 0)

console.log(totalPrice)

function getInStockProducts(products) {
    return products.filter((product) => product.stock > 0)
}

console.log(getInStockProducts)

//function
function calculateInventoryValue(price, quantity) {
    return price * quantity
}

const value = calculateInventoryValue(15, 4)
console.log(value)

function getInStock(quantity){
    if(quantity > 0){
        return "In stock"
    }

    return "Out of stock"
}

console.log(getInStock(8))
console.log(getInStock(0))

function getInStockStatus(quantity){
    if(quantity === 0){
        return "Out of stock"
    } 
    if (quantity <= 5){
        return "low stock"
    }
    return "In stock"
}

console.log(getInStockStatus(0))
console.log(getInStockStatus(3))
console.log(getInStockStatus(10))

function checkProductPrice(price) {
    if(price >= 100){
        return "Expensive"
    }
    if(price >= 50){
        return "Moderate"
    }
    return "Affordable" // made a mistake of using else instead of return
}

console.log(checkProductPrice(150))
console.log(checkProductPrice(70))
console.log(checkProductPrice(20))

function calculateDiscount(price, discount){
    const discountAmount = price * discount / 100
    return price - discountAmount
}

console.log(calculateDiscount(200, 20))