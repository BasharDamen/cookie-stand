'use strict';

function randomCus(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);    
}


let seattle = {
    
    name: 'Seattle',
    minCus: 23,
    maxCus: 65,
    avgCookieCus: 6.3,
    seatArray: [],
    cookCal: function(){
        for (let i = 0; i < 14; i++) {
            this.seatArray[i] = this.getcusHour();
            
        }
        return this.seatArray
    },
    getcusHour: function() {
        return Math.round(randomCus(this.maxCus, this.minCus) * this.avgCookieCus);

    },
    
    
}


let tokyo = {
    
    name: 'Tokyo',
    minCus: 2,
    maxCus: 24,
    avgCookieCus: 1.2,
    tokArray: [],
    cookCal: function(){
        for (let i = 0; i < 14; i++) {
            this.tokArray[i] = this.getcusHour();
            
        }
        return this.tokArray
    },
    getcusHour: function() {
        return Math.round(randomCus(this.maxCus, this.minCus) * this.avgCookieCus);

    },
    
    
}


let dubai = {
    
    name: 'Dubai',
    minCus: 11,
    maxCus: 38,
    avgCookieCus: 3.7,
    dubArray: [],
    cookCal: function(){
        for (let i = 0; i < 14; i++) {
            this.dubArray[i] = this.getcusHour();
            
        }
        return this.dubArray
    },
    getcusHour: function() {
        return Math.round(randomCus(this.maxCus, this.minCus) * this.avgCookieCus);

    },
    
    
}


let paris = {
    
    name: 'Paris',
    minCus: 20,
    maxCus: 38,
    avgCookieCus: 2.3,
    parArray: [],
    cookCal: function(){
        for (let i = 0; i < 14; i++) {
            this.parArray[i] = this.getcusHour();
            
        }
        return this.parArray
    },
    getcusHour: function() {
        return Math.round(randomCus(this.maxCus, this.minCus) * this.avgCookieCus);

    },
    
    
}



let lima = {
    
    name: 'Lima',
    minCus: 2,
    maxCus: 16,
    avgCookieCus: 4.6,
    limaArray: [],
    cookCal: function(){
        for (let i = 0; i < 14; i++) {
            this.limaArray[i] = this.getcusHour();
            
        }
        return this.limaArray
    },
    getcusHour: function() {
        return Math.round(randomCus(this.maxCus, this.minCus) * this.avgCookieCus);

    },
    
    
}

let timeArray = ['6am', '7am', '8am', '9am' , '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
// console.log(arraySum);

function unOrderedList(a, b){
    
    
    
    // let arraySum = timeArray.reduce((a,b) => a + b, 0);
    let parent = document.getElementById('sales');
    let para= document.createElement('p');
    parent.appendChild(para);
    para.textContent= (`${b} Sales`);
    
    let child1 = document.createElement('ul');
    parent.appendChild(child1);

    let child2 = document.createElement('li');
    parent.appendChild(child2);
    for (let i = 0; i < a.length; i++) {
        
        let li = document.createElement('li')
        child1.appendChild(li);
        li.textContent = `${timeArray[i]} : ${a[i]} : Cookies`;
        child2.textContent = `Total = ${a.reduce((a,b) => a + b, 0)} : Cookies`
    }
    
}

unOrderedList(seattle.cookCal(), seattle.name);
unOrderedList(tokyo.cookCal(), tokyo.name);
unOrderedList(dubai.cookCal(),dubai.name);
unOrderedList(paris.cookCal(), paris.name);
unOrderedList(lima.cookCal(), lima.name);