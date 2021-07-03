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

// console.log(workHour);

// global function
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let locationsArray = [];


//constructor
function Location(name, minCus, maxCus, avgCookiesCus,){
    this.name = name;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.avgCookiesCus = avgCookiesCus;


    this.customersEachHour = [];
 
    this.cookiesEachHour = [];

    this.totalCookiesPerDay = 0;

    locationsArray.push(this);

}





//prototype random custumer per hour 
Location.prototype.calCustomersEachHour = function(){
    
    for (let i = 0; i < workHour.length; i++) {
        
        this.customersEachHour.push(random(this.minCus, this.maxCus)); 
        
    }
    
    
}

Location.prototype.calcCookiesEachHour = function(){
    
    for (let i = 0; i < workHour.length; i++) {
        this.cookiesEachHour.push(Math.floor(this.avgCookiesCus * this.customersEachHour[i]));

        this.totalCookiesPerDay += this.cookiesEachHour[i]
    }
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





// rendering function for result div
let parent = document.getElementById('sales');


let tableElement = document.createElement('table');
parent.appendChild(tableElement)

function makeHeader(){
    
    let headerRow = document.createElement('tr');
    tableElement.appendChild(headerRow);
    
    
    let firstTh = document.createElement('th');
    headerRow.appendChild(firstTh);
    firstTh.textContent = 'Name';
    
    for (let i = 0; i < workHour.length; i++) {
        let thElement = document.createElement('th');
        headerRow.appendChild(thElement);
        thElement.textContent = workHour[i];
    }
    
    let lastTh = document.createElement('th');
    headerRow.appendChild(lastTh);
    lastTh.textContent = 'Daily Locations Total'
}
makeHeader();



// prototype function

Location.prototype.render = function(){
    let dataRow = document.createElement('tr');
    tableElement.appendChild(dataRow);
    
    let nameData = document.createElement('td');
    dataRow.appendChild(nameData)
    nameData.textContent = this.name;
    
    for (let i = 0; i < workHour.length; i++) {
        let tdElement = document.createElement('td');
        dataRow.appendChild(tdElement);
        tdElement.textContent = this.cookiesEachHour[i]
    }
    
    let totalDailyEachLocation = document.createElement('td');
    dataRow.appendChild(totalDailyEachLocation);
    totalDailyEachLocation.textContent = this.totalCookiesPerDay;
    
}

// calling loop
for (let i = 0; i < locationsArray.length; i++) {
    locationsArray[i].calCustomersEachHour();
    locationsArray[i].calcCookiesEachHour();
    locationsArray[i].render();
}

function makeFooter(){
    let footerRow = document.createElement('tr');
    tableElement.appendChild(footerRow);
    
    let footerTh = document.createElement('th');
    footerRow.appendChild(footerTh);
    footerTh.textContent = 'Totals'

    let totalOfTotals = 0;
    for (let i = 0; i < workHour.length; i++) {
        let totalEachHour = 0;
        
        for (let j = 0; j < locationsArray.length; j++) {
            totalEachHour += locationsArray[j].cookiesEachHour[i];
            
        }

        let footerData = document.createElement('td');
        footerRow.appendChild(footerData);
        footerData.textContent = totalEachHour
        
        
        totalOfTotals += totalEachHour;
    }
    

    let finalTd = document.createElement('td');
    footerRow.appendChild(finalTd);
    finalTd.textContent = totalOfTotals
    
}
makeFooter();


const salesForm = document.getElementById("SalesForm");

salesForm.addEventListener('submit' , handleSubmit);


function handleSubmit(event){
    event.preventDefault();

    const nameField = event.target.nameField.value;
    console.log(nameField);

    const maxCusField = event.target.maxCusField.value;
    console.log(maxCusField);

    const minCustField = event.target.minCustField.value;
    console.log(minCustField);

    const avgCookiesField = event.target.avgCookiesField.value;
    console.log(avgCookiesField);

    const newLocation = new Location(nameField, minCustField ,maxCusField, avgCookiesField);
    
    let deleter = tableElement.rows.length -1;
    tableElement.deleteRow(deleter);
    
    
    newLocation.calCustomersEachHour();
    newLocation.calcCookiesEachHour();
    newLocation.render();
    
    makeFooter();
}







