

var date = Date()
var currentTime = new Date()
var daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var hours = currentTime.getHours()
console.log(date)
console.log(daysofWeek)
console.log(currentTime)
console.log(currentTime.getDate())
console.log(hours)


document.querySelector('#currentDay').innerHTML = daysofWeek[currentTime.getDay()] + " - " + months[currentTime.getMonth()] + " " + currentTime.getDate() + ", " + currentTime.getFullYear()

//convert to milliseconds

var milisecondsPerHour = 3600000

// var articles = document.querySelectorAll('span');

// span.forEach(innerHTML);
// console.log(span)

console.log(document.querySelectorAll('span').textContent)


//compare time number in scheduler to current time and add or remmove class based on current time

function compareTime(){
    for (i=0; i < document.querySelectorAll('span').length; i++);
    
    if (i == hours){
        document.querySelector('.form-control').classList.add("present")
        document.querySelector('.form-control').classList.remove("future")
    }
    else if (i > hours){
            document.querySelector('.form-control').classList.add("future")
            document.querySelector('.form-control').classList.remove("present")
        }
    else {
        document.querySelector('.form-control').classList.remove("future")
        document.querySelector('.form-control').classList.remove("present")
    }
    }

compareTime()

