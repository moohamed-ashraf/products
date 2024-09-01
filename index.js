"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response = {
    products: [
        {
            id: 1,
            title: "Essence Mascara Lash Princess",
            description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
            category: "beauty",
            price: 9.99,
            discountPercentage: 7.17,
            rating: 4.94,
            stock: 5,
            brand: "Essence",
            sku: "RCH45Q1A",
            weight: 2,
            dimensions: {
                width: 23.17,
                height: 14.43,
                depth: 28.01,
            },
        },
    ],
    total: 194,
    skip: 0,
    limit: 30,
};
console.log(response.products[0].description);
console.log(response.total);
