type Product = {
    id: number
    title: string
    decscription: string
    capacity: string
    type: string
    price: number
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        decscription: 'This is iPhone 14 Pro',
        capacity: 'phone',
        type: '256',
        price: 1500,
    },
    {
        id: 2,
        title: 'iPhone 13Pro',
        decscription: 'This is iPhone 13 Pro',
        capacity: 'phone',
        type: '256',
        price: 1000,
    },
    {
        id: 3,
        title: 'iPhone 14 ',
        decscription: 'This is iPhone 14 ',
        capacity: 'phone',
        type: '512',
        price: 2000,
    },
    {
        id: 4,
        title: 'iPhone 11 Max ',
        decscription: 'This is 11 Max ',
        capacity: 'phone',
        type: '128',
        price: 1900,
    },
    {
        id: 5,
        title: 'iPhone XS ',
        decscription: 'This is iPhone XS ',
        capacity: 'phone',
        type: '68',
        price: 500,
    },
    {
        id: 6,
        title: 'iPhone 12 Pro ',
        decscription: 'This is iPhone 12 Pro ',
        capacity: 'phone',
        type: '664',
        price: 3000,
    },
]

export default productsArray
