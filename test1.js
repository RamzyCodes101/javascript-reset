const products = [
  { name: "Mouse", price: 150, stock: 0, category: "accessories" },
  { name: "Keyboard", price: 300, stock: 7, category: "accessories" },
  { name: "Monitor", price: 1200, stock: 2, category: "electronics" },
  { name: "USB Cable", price: 50, stock: 15, category: "accessories" }
]

function getAvailableProducts(products){
    const productInStock = products.filter((product) => {
        return product.stock > 0
    })
    return productInStock
}

console.log(getAvailableProducts(products))

function getTotalInventoryValue(products){
    const inventoryTotal = products.reduce((total, product) => {
        return total + product.price * product.stock
    },0)
    return inventoryTotal
}

console.log(getTotalInventoryValue(products))

function findProductByName(products, name){
    const productName = products.find((product) => {
        return product.name === name
    })

    return productName
}

console.log(findProductByName(products, "Monitor"))

function getProductByCategory(products, category){
    const productCategory = products.filter((product) => {
        return product.category === category 
    })

    return productCategory
}

console.log(getProductByCategory(products, "accessories"))
console.log(getProductByCategory(products, "electronics"))

function getProductUnderPrice(product, maxPrice){
    return product.filter((product) => {
        return product.price < maxPrice && product.stock > 0
    })
}

console.log(getProductUnderPrice(products, 2000))

function getAffordableProducts(product, maxPrice, category){
    return product.filter((product) => {
        return product.category === category && product.price < maxPrice && product.stock > 0
    })
}

console.log(getAffordableProducts(products, 200, "accessories"))