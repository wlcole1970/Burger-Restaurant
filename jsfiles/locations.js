/*
  jshint esversion: 6
*/

import { key } from './api.js';

const locations = [

    {
        id: 1,
        img: "images/katy.jpg",
        title: "Katy",
        address: '25660 Nelson Way, Katy, TX 77494',
        phone: '281-555-5555',
        iframe: `https://www.google.com/maps/embed/v1/view?zoom=17&center=29.7744%2C-95.8206&key=${key}`,
    },

    {
        id: 2,
        img: "images/woodlands.jpg",
        title: "Galleria",
        address: '1201 Lake Woodlands Dr., The Woodlands, TX 77380',
        phone: '281-555-5555',
        iframe: `https://www.google.com/maps/embed/v1/view?zoom=17&center=30.1641%2C-95.4554&key=${key}`,
    },

    {
        id: 3,
        img: "images/midtown.jpg",
        title: "Midtown",
        address: '3511 Main St., Houston, TX 77002',
        phone: '281-555-5555',
        iframe: `https://www.google.com/maps/embed/v1/view?zoom=17&center=29.7392,-95.3785&key=${key}`,
    },

    {
        id: 4,
        img: "images/uptown.jpg",
        title: "Galleria",
        address: '2018 Post Oak Blvd, Houston, TX 77056',
        phone: '281-555-5555',
        iframe: "https://www.google.com/maps/embed/v1/view?zoom=17&center=29.7460,-95.4613&key=AIzaSyCyiloYoV303sgisw9hhbmKEfTV2d1oXxM",


    },
];


const locationDesc = document.querySelector('.locations');


// load items
window.addEventListener('DOMContentLoaded', function() {
    
    displayLocationItems(locations);
});

function displayLocationItems(locationItems) {
    let locationsPlace = locationItems.map(function(item) {
        return `<img class='' src="${item.img}" alt="restaurant image">
            
        <h3 class="py-3">${item.title}</h3>
        <p>${item.address}</p>
        <p>${item.phone}</p>
         <div>
             <iframe width="600" height="450" frameborder="0" style="border:0"
src="${item.iframe}" allowfullscreen></iframe>
         <hr></div>
        `;
    });
    locationsPlace = locationsPlace.join('');
    locationDesc.innerHTML = locationsPlace;
}

// get current year 

document.getElementById("year").innerHTML = new Date().getFullYear();
