const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
  apiKey: process.env.APY_KEY,
  authDomain: "milobakery-ch.firebaseapp.com",
  projectId: "milobakery-ch"
});

var db = firebase.firestore();

const productos = [
    {
        id: 1,
        title: 'Frutos Rojos',
        price: 360,
        pictureUrl: 'cr-frutos-rojos.jpeg',
        description: 'Cinamon Rolls x 3 Rolls',
        stock: 100,
        category: 'cinnamon-rolls',
        outstanding: false
        
    },
    {
      id: 2,
      title: 'Apple',
      price: 360,
      pictureUrl: 'cr-apple.jpeg',
      description: 'Cinamon Rolls x 3 Rolls',
      stock: 100,
      category: 'cinnamon-rolls',
      outstanding: true
      
    },
    {
      id: 3,
      title: 'Chocotorta',
      price: 360,
      pictureUrl: 'cr-chocotorta.jpeg',
      description: 'Cinamon Rolls x 3 Rolls',
      stock: 100,
      category: 'cinnamon-rolls',
      outstanding: true
      
    },
    {
      id: 4,
      title: 'Crema de Limon',
      price: 360,
      pictureUrl: 'cr-crema-lemon.jpeg',
      description: 'Cinamon Rolls x 3 Rolls',
      stock: 100,
      category: 'cinnamon-rolls',
      outstanding: true
      
    },
    {
      id: 5,
      title: 'Crema de Avellana y Cacao',
      price: 360,
      pictureUrl: 'cr-crema-avellana-cacao.jpeg',
      description: 'Cinamon Rolls x 3 Rolls',
      stock: 100,
      category: 'cinnamon-rolls',
      outstanding: true
      
    },
    {
      id: 6,
      title: 'Sirope Chocolate',
      price: 360,
      pictureUrl: 'cr-clasico-sirope-chocolate.jpeg',
      description: 'Cinamon Rolls x 3 Rolls',
      stock: 100,
      category: 'cinnamon-rolls',
      outstanding: true
      
    },
    {
      id: 7,
      title: 'Frosting Vainilla',
      price: 360,
      pictureUrl: 'cr-clasico-frosting-vainilla.jpeg',
      description: 'Cinamon Rolls x 3 Rolls',
      stock: 100,
      category: 'cinnamon-rolls',
      outstanding: true
      
    },
    {
      id: 8,
      title: 'Dulce de leche',
      price: 360,
      pictureUrl: 'cr-clasico-dulce-leche.jpeg',
      description: 'Cinamon Rolls x 3 Rolls',
      stock: 100,
      category: 'cinnamon-rolls',
      outstanding: true
      
    },
    {
        id: 9,
        title: 'Tradicional',
        price: 1100,
        pictureUrl: 'rc-tradicional.jpeg',
        description: 'Roll Cake - Torta húngara que rinde 9 porciones.',
        stock: 50,
        category: 'roll-cake',
        outstanding: false
    },
    {
      id: 10,
      title: 'Lemon y Ganache de Chocolate',
      price: 1450,
      pictureUrl: 'rc-lemon-ganache-chocolate.jpeg',
      description: 'Roll Cake - Torta húngara que rinde 9 porciones.',
      stock: 50,
      category: 'roll-cake',
      outstanding: true
    },
    {
      id: 11,
      title: 'Nutella',
      price: 1650,
      pictureUrl: 'rc-nutella.jpeg',
      description: 'Roll Cake - Torta húngara que rinde 9 porciones.',
      stock: 50,
      category: 'roll-cake',
      outstanding: true
    },
    {
      id: 12,
      title: 'Lemon',
      price: 1450,
      pictureUrl: 'rc-lemon.jpeg',
      description: 'Roll Cake - Torta húngara que rinde 9 porciones.',
      stock: 50,
      category: 'roll-cake',
      outstanding: true
    },
    {
      id: 13,
      title: 'Apple y Frutos Rojos',
      price: 1450,
      pictureUrl: 'rc-apple-frutos-rojos.jpeg',
      description: 'Roll Cake - Torta húngara que rinde 9 porciones.',
      stock: 50,
      category: 'roll-cake',
      outstanding: true
    },
    {
        id: 14,
        title: 'Tradicional',
        price: 900,
        pictureUrl: 'pj-clasico.jpeg',
        description: 'Pan de Jamon Tradicional',
        stock: 10,
        category: 'pan-de-jamon',
        outstanding: false
    },
    {
      id: 15,
      title: 'Jamon y Queso Crema',
      price: 1000,
      pictureUrl: 'pj-queso-crema.jpeg',
      description: 'Pan de Jamon con Queso Crema',
      stock: 10,
      category: 'pan-de-jamon',
      outstanding: false
    }

];

productos.forEach((obj) => {
  db.collection("productos")
    .add({
      id: obj.id,
      category: obj.category,
      title: obj.title,
      description: obj.description,
      pictureUrl: obj.pictureUrl,
      price: obj.price,
      stock: obj.stock,
      outstanding: obj.outstanding

    })
    .then((docRef) => {
      console.log("Producto registrado con ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error al agregar un documento: ", error);
    });
});