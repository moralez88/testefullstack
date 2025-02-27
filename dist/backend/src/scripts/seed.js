"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce';
async function seed() {
    const client = await mongodb_1.MongoClient.connect(MONGODB_URI);
    const db = client.db();
    await db.collection('categories').deleteMany({});
    await db.collection('products').deleteMany({});
    await db.collection('orders').deleteMany({});
    const categories = await db.collection('categories').insertMany([
        { name: 'Eletrônicos' },
        { name: 'Livros' },
        { name: 'Roupas' },
        { name: 'Acessórios' },
    ]);
    const categoryIds = Object.values(categories.insertedIds);
    const products = await db.collection('products').insertMany([
        {
            name: 'Smartphone XYZ',
            description: 'Último modelo com câmera incrível',
            price: 1999.99,
            categoryIds: [categoryIds[0]],
            imageUrl: 'https://localhost:4566/products-images/smartphone.jpg',
        },
        {
            name: 'Clean Code',
            description: 'Livro sobre boas práticas de programação',
            price: 89.90,
            categoryIds: [categoryIds[1]],
            imageUrl: 'https://localhost:4566/products-images/book.jpg',
        },
        {
            name: 'Camiseta Tech',
            description: 'Camiseta 100% algodão',
            price: 49.90,
            categoryIds: [categoryIds[2]],
            imageUrl: 'https://localhost:4566/products-images/tshirt.jpg',
        },
    ]);
    const productIds = Object.values(products.insertedIds);
    const orders = await db.collection('orders').insertMany([
        {
            date: new Date(),
            productIds: [productIds[0], productIds[1]],
            total: 2089.89,
        },
        {
            date: new Date(Date.now() - 24 * 60 * 60 * 1000),
            productIds: [productIds[2]],
            total: 49.90,
        },
        {
            date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            productIds: [productIds[0], productIds[2]],
            total: 2049.89,
        },
    ]);
    console.log('Dados inseridos com sucesso!');
    console.log(`Categorias criadas: ${categories.insertedCount}`);
    console.log(`Produtos criados: ${products.insertedCount}`);
    console.log(`Pedidos criados: ${orders.insertedCount}`);
    await client.close();
}
seed().catch(console.error);
//# sourceMappingURL=seed.js.map