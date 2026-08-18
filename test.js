const products = [
  { name: "Laptop", price: 3500 },
  { name: "Mouse", price: 150 },
  { name: "Keyboard", price: 300 },
  { name: "Monitor", price: 1200 }
];

const affordableProducts = products.filter((product) => {
    return product.price < 1000
})

console.log(affordableProducts)

const findProducts = products.find((product) => {
    return product.name === "Monitor"
})

console.log(findProducts)

const labelProducts = products.map((product) => {
    return `${product.name} - ${product.price}`
})

console.log(labelProducts)

const totalPrice = products.reduce((total,product) => {
    return total + product.price
}, 0)

console.log(totalPrice)