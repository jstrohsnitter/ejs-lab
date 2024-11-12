const express = require('express');
const app = express();

const RESTAURANT = {
    name: 'The Green Byte Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
    menu: [
      { 
        id: 1,
        name: 'Quantum Quinoa Mushroom Burger',
        price: 13.00,
        rating: 4,
        category: 'mains',
        details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
      },
      { 
        id: 2,
        name: 'Binary Berry Cheesecake',
        price: 10.11,
        rating: 3,
        category: 'desserts',
        details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
      },
      { 
        id: 3,
        name: 'Recursive Rigatoni',
        price: 17.00,
        rating: 5,
        category: 'mains',
        details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
      },
      { 
        id: 4,
        name: 'Pumpkin Pi Squared',
        price: 3.14,
        rating: 5,
        category: 'desserts',
        details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
      },
      { 
        id: 5,
        name: 'Fibonacci String Bean Fries',
        price: 11.23,
        rating: 5,
        category: 'sides',
        details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
      }
    ]
  }
  








app.get('/', (req, res) => {
  res.render('home.ejs', {
    restaurant: RESTAURANT,
  });
});

app.get('/menu', (req, res) => {
    res.render('menu.ejs', {
        menu: RESTAURANT.menu,
    })
  });


  
  app.get('/menu/:category', (req, res) => {
    const dish = req.params.category
    const menuItems = RESTAURANT.menu
    const mainDishes = menuItems.filter((dishes) => dishes.category === 'mains')
    const sideDishes = menuItems.filter((dishes) => dishes.category === 'sides') 
    const dessertDishes = menuItems.filter((dishes) => dishes.category === 'desserts')  
    console.log(sideDishes)
    console.log(mainDishes)
    console.log(dessertDishes)
    if (dish === 'mains') {
        res.render('category.ejs', {
            mainItems: mainDishes,
            msg: "Mains"
        })
        }
        if (dish === 'sides') {
            res.render('category.ejs', {
                mainItems: sideDishes,
                msg: "Sides"
            })
        }
        if (dish === 'desserts') {
            res.render('category.ejs', {
                mainItems: dessertDishes,
                msg: "Desserts"
            })
        }
    // res.render('category.ejs', {
    //     mainItems: dessertDishes
    // })
//============================First Attempt below============================    
    // const dish = req.params.category// LEFT OFF HERE ADDING REQ PARAMS
    // const mainDishes =[]
    // const sideDishes = []
    // const dessertDishes = []
    // RESTAURANT.menu.forEach(banana => {
    //     if(banana.category === mains)
    //         mainDishes.push(banana)
    //     console.log(mainDishes)
    //     if(banana.category === sides)
    //         sideDishes.push(banana)
    //     if(banana.category === desserts)
    //         dessertDishes.push(banana)
    // })
    // if (dish === mains) {
    //     menuItems = mainDishes
    //     console.log('mainDishes')
    // }
    // if (dish === sides) {
    //     menuItems = sideDishes
    // }
    // if (dish === desserts) {
    //     menuItems = dessertDishes
    // }

    // res.render('category.ejs', {
    //     items: menuItems[dish]
    // });
})
//================================================================================

app.listen(3000);
