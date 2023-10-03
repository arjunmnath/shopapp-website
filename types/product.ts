

type Product = {
    productId: string,
    productName: string,
    stock: number,
    costPrice: number,
    sellingPrice: number,
    profit: number,
    stockUpdate: string
}

type Products = Product[]
export type {
    Products,
    Product
}