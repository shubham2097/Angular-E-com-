export interface sellerSignUp {
    name: string,
    password: string,
    email: string
}

export interface sellerLogin {
    email: string,
    password: string
}

export interface sellerAddNewProduct {
    name: string,
    price: number,
    color:string,
    category:string,
    description:string,
    imageUrl:string,
    id:number
}