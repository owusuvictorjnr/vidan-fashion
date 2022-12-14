import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      // Admin user
      name: 'Vitech',
      email: 'vitech@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },

    {
      // Normal user
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'Gents Set',
      slug: 'Gents Set',
      category: 'Gents ware',
      image: '/images/gent1.jpg',
      price: '100',
      brand: 'Vitech',
      rating: '4.5',
      numReviews: '8',
      countInStock: '20',
      description: 'A popular shirt',
    },

    {
      name: 'Kids Set',
      slug: 'Kids Set',
      category: 'Kids ware',
      image: '/images/kids1.jpg',
      price: '100',
      brand: 'Vitech',
      rating: '4.5',
      numReviews: '8',
      countInStock: '20',
      description: 'A popular shirt',
    },

    {
      name: 'kids Set2',
      slug: 'kids Set',
      category: 'Kids ware',
      image: '/images/kids2.jpg',
      price: '100',
      brand: 'Vitech',
      rating: '4.5',
      numReviews: '8',
      countInStock: '20',
      description: 'A popular shirt',
    },

    {
      name: 'Office Set',
      slug: 'Office Set',
      category: 'Office ware',
      image: '/images/office2.jpg',
      price: '100',
      brand: 'Vitech',
      rating: '4.5',
      numReviews: '8',
      countInStock: '20',
      description: 'A popular shirt',
    },

    {
      name: ' Set1',
      slug: 'Set',
      category: 'Gents ware',
      image: '/images/set1.jpg',
      price: '100',
      brand: 'Vitech',
      rating: '4.5',
      numReviews: '8',
      countInStock: '20',
      description: 'A popular shirt',
    },

    {
      name: ' Set2',
      slug: 'Gents Ware',
      category: 'Gents ware',
      image: '/images/set2.jpg',
      price: '100',
      brand: 'Vitech',
      rating: '4.5',
      numReviews: '8',
      countInStock: '20',
      description: 'A popular shirt',
    },

    {
      name: 'Tops',
      slug: 'Unisex',
      category: 'Unisex',
      image: '/images/tops.jpg',
      price: '100',
      brand: 'Vitech',
      rating: '4.5',
      numReviews: '8',
      countInStock: '20',
      description: 'A popular shirt',
    },
  ],
};

export default data;
