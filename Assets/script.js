

var date = Date()
var currentTime = new Date()
var daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(date)
console.log(daysofWeek)
console.log(currentTime)


document.querySelector('#currentDay').innerHTML = "Testing"



function updateday(){
    document.querySelector('#currentDay').innerHTML = "Testing"
    console.log(daysofWeek[currentTime.getDay()])
    
}

updateday()