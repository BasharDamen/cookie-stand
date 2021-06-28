'use strict';



let workHour = [];

for (let i = 6; i < 20; i++) {
    
    if(i < 12){
        
        workHour.push(i + 'am');
        
    }
    else if(i == 12){
        workHour.push( i + 'pm');
    }
    else{
        workHour.push(i-12 + 'pm');
        
    }
    
}

console.log(workHour);

//constructor
function Location(name, minCus, maxCus, avgCookiesCus, cusPerHour, cookiesPurch){
    this.name = name;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.avgCookiesCus = avgCookiesCus;
    this.cusPerHour = []
    this.cookiesPurch = []
}


let seattle = new Location('Seattle', 23, 65, 6.3)
console.log(seattle);

let tokyo = new Location('Tokyo', 2, 24, 1.2)
console.log(tokyo);

let dubai = new Location('Dubai', 11, 38, 3.7)
console.log(dubai);

let paris = new Location('Paris', 20, 38, 2.3)
console.log(paris);

let lima = new Location('Lima', 2, 16, 4.6)
console.log(lima);


// global function
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//prototype random custumer per hour 
Location.prototype.randomCus = function(){
    
    for (let i = 0; i < workHour.length; i++) {
        
        this.cusPerHour.push(random(this.minCus, this.maxCus)); 
        
        this.cookiesPurch.push(Math.floor(this.cusPerHour[i] * this.avgCookiesCus));
    }
     
    
}

console.log(seattle.randomCus());
console.log(tokyo.randomCus());
console.log(dubai.randomCus());
console.log(paris.randomCus());
console.log(lima.randomCus());






// generating amount of cookies by a prototype function
// Location.prototype.amountCookiesPurch = function(){
        

// }
// console.log(seattle.amountCookiesPurch());



// Location.prototype.amountCookiesPurch = function(){
        
//     this.cookiesPurch = Math.floor( this.cusPerHour * this.avgCookiesCus);
        

// }




//Dom

const parentElm = document.getElementById('sales');
const h2 = document.createElement('h2');
parentElm.appendChild(h2); 
h2.textContent = 'Sales information for each location';

const tableElm = document.createElement('table')
parentElm.appendChild(tableElm);
console.log(tableElm);

let trElm = document.createElement('tr');
tableElm.appendChild(trElm);

let emptyTh = document.createElement('th')
trElm.appendChild(emptyTh);

let tr2Elm = document.createElement('tr')
tableElm.appendChild(tr2Elm);



for (let i = 0; i < workHour.length; i++) {
    
    let thElm = document.createElement('th');
    trElm.appendChild(thElm);
    thElm.textContent = workHour[i]
}

Location.prototype.table = function(){

    
    for (let i = 0; i < 4; i++) {
        
        let tdElm = document.createElement('td');
        tr2Elm.appendChild(tdElm);
        tdElm.textContent = this.name;
        
        
    }
}
log.console(seattle.table());
log.console(tokyo.table());
log.console(dubai.table());
log.console(paris.table());
log.console(lima.table());

// for (let i = 0; i < 7; i++) {

    
//     let tdElm = document.createElement('td');
//     tr2Elm.appendChild(tdElm);
//     tdElm.textContent = seattle.name

    
    
// }









//================================
// function Location(name, minCus, maxCus, avgCookiesCus){
    
//     this.name = name;
//     this.minCus = minCus;
//     this.maxCus = maxCus;
//     this.avgCookiesCus = avgCookiesCus;
// }

// let seattle = new Location('Seattle', 23, 65, 6.3)
// console.log(seattle);

// let tokyo = new Location('Tokyo', 2, 24, 1.2)
// console.log(tokyo);

// let dubai = new Location('Dubai', 11, 38, 3.7)
// console.log(dubai);

// let paris = new Location('Paris', 20, 38, 2.3)
// console.log(paris);

// let lima = new Location('Lima', 2, 16, 4.6)
// console.log(lima);


// Location.prototype.randomCus = function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);    
// }

// let seatArray = [];
// let cookCal = function(){
//     for (let i = 0; i < 14; i++) {
//         this.seatArray[i] = this.getcusHour();
        
//     }
//     return this.seatArray
// }

// getcusHour = function() {
//     return Math.round(randomCus(this.maxCus, this.minCus) * this.avgCookieCus);
    
// };
//===========================================
// let seattle = {
    
//     name: 'Seattle',
//     minCus: 23,
//     maxCus: 65,
//     avgCookieCus: 6.3,
//     seatArray: [],
//     cookCal: function(){
//         for (let i = 0; i < 14; i++) {
//             this.seatArray[i] = this.getcusHour();
            
//         }
//         return this.seatArray
//     },
//     getcusHour: function() {
//         return Math.round(randomCus(this.maxCus, this.minCus) * this.avgCookieCus);
        
//     },
    
    
// }




// let tokyo = {
    
//     name: 'Tokyo',
//     minCus: 2,
//     maxCus: 24,
//     avgCookieCus: 1.2,
//     tokArray: [],
//     cookCal: function(){
//         for (let i = 0; i < 14; i++) {
//             this.tokArray[i] = this.getcusHour();
            
//         }
//         return this.tokArray
//     },
//     getcusHour: function() {
//         return Math.round(randomCus(this.maxCus, this.minCus) * this.avgCookieCus);
        
//     },
    
    
// }




// let dubai = {
    
//     name: 'Dubai',
//     minCus: 11,
//     maxCus: 38,
//     avgCookieCus: 3.7,
//     dubArray: [],
//     cookCal: function(){
//         for (let i = 0; i < 14; i++) {
//             this.dubArray[i] = this.getcusHour();
            
//         }
//         return this.dubArray
//     },
//     getcusHour: function() {
//         return Math.round(randomCus(this.maxCus, this.minCus) * this.avgCookieCus);
        
//     },
    
    
// }



// let paris = {
    
//     name: 'Paris',
//     minCus: 20,
//     maxCus: 38,
//     avgCookieCus: 2.3,
//     parArray: [],
//     cookCal: function(){
//         for (let i = 0; i < 14; i++) {
//             this.parArray[i] = this.getcusHour();
            
//         }
//         return this.parArray
//     },
//     getcusHour: function() {
//         return Math.round(randomCus(this.maxCus, this.minCus) * this.avgCookieCus);
        
//     },
    
    
// }



// let lima = {
    
//     name: 'Lima',
//     minCus: 2,
//     maxCus: 16,
//     avgCookieCus: 4.6,
//     limaArray: [],
//     cookCal: function(){
//         for (let i = 0; i < 14; i++) {
//             this.limaArray[i] = this.getcusHour();
            
//         }
//         return this.limaArray
//     },
//     getcusHour: function() {
//         return Math.round(randomCus(this.maxCus, this.minCus) * this.avgCookieCus);

//     },
    
    
// }
//========================================

// let timeArray = ['6am', '7am', '8am', '9am' , '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']







// function unOrderedList(a, b){
    
    
    
    // let arraySum = timeArray.reduce((a,b) => a + b, 0);
//     let parent = document.getElementById('sales');
//     let para= document.createElement('p');
//     parent.appendChild(para);
//     para.textContent= (`${b} Sales`);
    
//     let child1 = document.createElement('ul');
//     parent.appendChild(child1);

//     let child2 = document.createElement('li');
//     parent.appendChild(child2);
//     for (let i = 0; i < a.length; i++) {
        
//         let li = document.createElement('li')
//         child1.appendChild(li);
//         li.textContent = `${timeArray[i]} : ${a[i]} : Cookies`;
//         child2.textContent = `Total = ${a.reduce((a,b) => a + b, 0)} : Cookies`
//     }
    
// }

// unOrderedList(seattle.cookCal(), seattle.name);
// unOrderedList(tokyo.cookCal(), tokyo.name);
// unOrderedList(dubai.cookCal(),dubai.name);
// unOrderedList(paris.cookCal(), paris.name);
// unOrderedList(lima.cookCal(), lima.name);
