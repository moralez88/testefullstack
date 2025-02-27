import { MongoClient } from 'mongodb';
import { config } from 'dotenv';

config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce';

async function seed() {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();

  // Limpar coleções existentes
  await db.collection('categories').deleteMany({});
  await db.collection('products').deleteMany({});
  await db.collection('orders').deleteMany({});

  // Criar categorias
  const categories = await db.collection('categories').insertMany([
    { name: 'Eletrônicos' },
    { name: 'Livros' },
    { name: 'Roupas' },
    { name: 'Acessórios' },
  ]);

  const categoryIds = Object.values(categories.insertedIds);

  // Criar produtos
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

  // Criar pedidos
  const orders = await db.collection('orders').insertMany([
    {
      date: new Date(),
      productIds: [productIds[0], productIds[1]],
      total: 2089.89,
    },
    {
      date: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 dia atrás
      productIds: [productIds[2]],
      total: 49.90,
    },
    {
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 dias atrás
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
