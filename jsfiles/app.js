/*
  jshint esversion: 6
*/

// menus

const menu = [
    {
        id: 1,
        category: "burgers",
        title: "The Dollar Bill",
        price: 9.99,
        desc: `1/2 pound, cheese, pickles, ketchup, mustard`,
    },
    {
        id: 2,
        category: "burgers",
        title: "The Pound",
        price: 9.99,
        desc: `2 lbs of premium beef, cheese, pickles, Grey Poupon, mustard`,
    },
    {
        id:3,
        category: "burgers",
        title: "The Euro",
        price: 9.99,
        desc: "bacon, cheese, mayonnaise, mustard, ketchup, onions, pickles, lettuce, garlic tomatoes"
    },
    {
        id:4,
        category: "burgers",
        title: "The Franc",
        price: 9.99,
        desc: `blue cheese, burgundy, mustard`
    },
    {
        id:5,
        category: "burgers",
        title: "The Yen",
        price: 9.99,
        desc: `cheese, pickles, sauteed onions, Teriyaki sauce`
    },
    {
        id:6,
        category: "burgers",
        title: "The Peso",
        price: 9.99,
        desc: `pepper jack cheese, crispy jalepeños, garlic tomatoes, lettuce, jalapeno ranch, sundried tomato guacamole`
    },
    {
        id:7,
        category: "burgers",
        title: "The Yuan",
        price: 9.99,
        desc: `cheese, pickles, ketchup, mustard, sauted onions`
    },
    {
        id:8,
        category: "burgers",
        title: "The Rand",
        price: 11.99,
        desc: `ground chicken, goat cheese & sundried tomato guacamole, bacon, lettuce, garlic, roasted tomatoes, southwestern aioli, fried onion strings`
    },
    
    {
        id:8,
        category: "shakes",
        title: "Fries",
        price: 1.99,
        desc: `ground chicken, goat cheese & sundried tomato guacamole, bacon, lettuce, garlic, roasted tomatoes, southwestern aioli, fried onion strings`
    },
];

const fries = [
    {
      id: 1,
      title: "Hand Cut Fries",
      category: "fries",
      price: 1.99,
      desc: `lightly salted, cut and fried to order`,
    },
    {
      id: 2,
      title: "Crispy Tater Tots",
      category: "fries",
      price: 1.99,
      desc: `tater tots, yum!`,
    },
    {
      id: 3,
      title: "Sweet Potato Tots",
      category: "fries",
      price: 1.99,
      desc: `chipotle aioli`,
    },
    {
      id: 4,
      title: "Chili Cheese Fries",
      category: "fries",
      price: 1.99,
      desc: `chili, cheddar, chipotle aioli, green onions`,
    },
    {
      id: 5,
      title: "Truffle-Lace Fries",
      category: "fries",
      price: 11.99,
      desc: `white truffle oil, parmesan, green onions`,
    },
    {
      id: 6,
      title: "Sweet Potato Fries",
      category: "fries",
      price: 1.99,
      desc: `Cut and fried to order`,
    },
    {
      id: 7,
      title: "Blue Cheese Fries",
      category: "fries",
      price: 1.99,
      desc: `bleu cheese sauce, bleu cheese crumbles, bacon, green onions`,
    },
    {
      id: 8,
      title: "Whole Paycheck Fries",
      category: "fries",
      price: 6.99,
      desc: `All organic: bbq brisket, bacon, cheddar, bbq sauce, green onions`,
    },
    {
      id: 9,
      title: "Crusted Onion Rings",
      category: "fries",
      price: 4.99,
      desc: `served with juke sauce`,
    },
  ]; 

const shakes = [

    {
        id: 1,
        category: "shakes",
        title: "Vanilla",
        price: 3.49,
        // desc: `1/2 pound, cheese, pickles, ketchup, mustard`,
    },
    {
        id: 1,
        category: "shakes",
        title: "Chocolate",
        price: 3.49,
        // desc: `1/2 pound, cheese, pickles, ketchup, mustard`,
    },
    {
        id: 1,
        category: "shakes",
        title: "Cookie Dough",
        price: 4.49,
        // desc: `1/2 pound, cheese, pickles, ketchup, mustard`,
    },
    {
        id: 1,
        category: "shakes",
        title: "Peanut Butter Crunch",
        price: 4.49,
        // desc: `1/2 pound, cheese, pickles, ketchup, mustard`,
    },
];

const desserts = [

    {
        id: 1,
        title: "The Krugerand",
        category: "dessert",
        price: 4.99,
        desc: "Pecan Pie w/ Vaniila Whipped Topping",
    },
    
    {
        id: 2,
        title: "The Wall Street",
        category: "dessert",
        price: 4.99,
        desc: "New York Cheese Cake with Strawberry Sauce",
    },
    {
        id: 3,
        title: "The Rupiah",
        category: "dessert",
        price: 4.99,
        desc: "Coconut Meringue",
    },

];

const drinks = [
    {
        id: 1,
        title: "St. Arnolds",
        category: "drinks",
        bottle_price: 2.99,
        draft_price: 3.49,
    },
    {
        id: 1,
        title: "Shiner Bock",
        category: "drinks",
        bottle_price: 2.99,
        draft_price: 3.49,
    },
    {
        id: 1,
        title: "Pabst Blue Ribbon",
        category: "drinks",
        bottle_price: "2.50",
        draft_price: "3.00",
    },
    {
        id: 1,
        title: "Miller High Life",
        category: "drinks",
        bottle_price: "2.50",
        draft_price: "3.00",
    },
];

// const locations = [
//     {
//         id: 1,
//         img: "images/uptown.jpg",
//         title: "Galleria",
//         address: '2018 Post Oak Blvd, Houston, TX 77056',
//         phone: '281-555-5555',
//         iframe: "https://www.google.com/maps/embed/v1/view?zoom=17&center=29.7460,-95.4613&key=AIzaSyCyiloYoV303sgisw9hhbmKEfTV2d1oXxM"


//     }
// ];

//DOM Content Loader
const burgerDesc = document.querySelector('.burgerDescription');
const friesDesc = document.querySelector('.friesDescription');
const shakesDesc = document.querySelector('.shakesDescription');
const dessertDesc = document.querySelector('.dessertDescription');
const drinksDesc = document.querySelector('.drinksDescription');
// const locationDesc = document.queryCommandValue('.locations');


// load items
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    displayFriesItems(fries);
    displayShakesItems(shakes);
    displayDessertItems(desserts);
    displayDrinksItems(drinks);
    displayLocationItems(locations);
});

// functions for various menus 

// burgers function 
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {

        if (item.category === 'burgers') {
            return `<li>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <p>$${item.price}</p>
            </li>`;
        }
       

    });
        displayMenu = displayMenu.join('');
        burgerDesc.innerHTML = displayMenu;
    
}

// fries function 
function displayFriesItems(friesItems) {
    let friesMenu = friesItems.map(function (item) {
        if (item.category === 'fries') {
            return `<li>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <p>$${item.price}</p>
            </li>`;
        }

    });
        friesMenu = friesMenu.join('');
        friesDesc.innerHTML = friesMenu;
}

//desserts functions
function displayDessertItems(dessertItems) {
    let dessertMenu = dessertItems.map(function (item) {
        if (item.category === 'dessert') {
            return `<li>
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
            <p>$${item.price}</p>
        </li>`;
        }

    });
        dessertMenu = dessertMenu.join('');
        dessertDesc.innerHTML = dessertMenu;
}

//shakes functions
function displayShakesItems(shakesItems) {
    let shakesMenu = shakesItems.map(function (item) {
        if (item.category === 'shakes') {
            return `<li>
            <h4>${item.title}</h4>
            <p>$${item.price}</p>
            </li>`;
        }

    });
        shakesMenu = shakesMenu.join('');
        shakesDesc.innerHTML = shakesMenu;
}

//drinks functions
function displayDrinksItems(drinkItems) {
    let drinksMenu = drinkItems.map(function (item){
        if (item.category === 'drinks') {
             return `
            <li>
            <h3>${item.title}</h3>
            <p>Bottle - $${item.bottle_price}</p>
            <p>Draft - $${item.draft_price}<p>
            <li>`;
        }
           
    });
        drinksMenu = drinksMenu.join('');
        drinksDesc.innerHTML = drinksMenu;
}

// function displayLocationItems(locationItems) {
//     let locationsPlace = locationItems.map(function(item) {
//         return `
//         <img class='' src="${item.img}" alt="restaurant image">
            
//         <h3 class="py-3">${item.title}</h3>
//         <p>${item.address}</p>
//         <p>${item.phone}</p>
//         <div>
//             <iframe width="600" height="450" frameborder="0" style="border:0"
// src="${item.iframe}" allowfullscreen></iframe>
//         </div>
//         `;
//     });
//     locationsPlace = locationsPlace.join('');
//     locationDesc.innerHTML = locationsPlace;
// }

// get current year 

document.getElementById("year").innerHTML = new Date().getFullYear();