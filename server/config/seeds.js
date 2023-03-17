const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Product Name',
      description:
        'Details: Brand Name, Size, Tech Specs',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Product Name',
      description:
      'Details: Brand Name, Size, Tech Specs',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Product Name',
      category: categories[1]._id,
      description:
      'Details: Brand Name, Size, Tech Specs',
      image: 'toilet-paper.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Product Name',
      category: categories[1]._id,
      description:
      'Details: Brand Name, Size, Tech Specs',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Product Name',
      category: categories[1]._id,
      description:
      'Details: Brand Name, Size, Tech Specs',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Product Name',
      category: categories[2]._id,
      description:
      'Details: Brand Name, Size, Tech Specs',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Product Name',
      category: categories[2]._id,
      description:
      'Details: Brand Name, Size, Tech Specs',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Product Name',
      category: categories[3]._id,
      description:
      'Details: Brand Name, Size, Tech Specs',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Product Name',
      category: categories[4]._id,
      description: 'Details: Brand Name, Size, Tech Specs',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Product Name',
      category: categories[4]._id,
      description:
      'Details: Brand Name, Size, Tech Specs',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Product Name',
      category: categories[4]._id,
      description:
      'Details: Brand Name, Size, Tech Specs',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Product Name',
      category: categories[4]._id,
      description:
      'Details: Brand Name, Size, Tech Specs',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
