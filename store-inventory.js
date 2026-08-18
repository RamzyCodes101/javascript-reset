const products = [
  { name: "Laptop", price: 3500, stock: 4, category: "electronics" },
  { name: "Mouse", price: 150, stock: 0, category: "accessories" },
  { name: "Keyboard", price: 300, stock: 7, category: "accessories" },
  { name: "Monitor", price: 1200, stock: 2, category: "electronics" },
  { name: "USB Cable", price: 50, stock: 15, category: "accessories" }
];

const stockedProduct = products.filter((product) => {
    return product.stock > 0
})

console.log(stockedProduct)

const findProduct = products.find((product) => {
    return product.name === "Monitor"
})

console.log(findProduct)

const productLabel = products.map((product) => {
    return `${product.name} - ${product.price}`
})

console.log(productLabel)

const totalvalue = products.reduce((total, product) => {
    return total + product.price * product.stock
},0)

console.log(totalvalue)

const productInAccessories = products.filter((product) => {
    return product.category === "accessories" && product.price < 500
})

console.log(productInAccessories)