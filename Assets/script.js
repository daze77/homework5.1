//this is an event listner that applies to all the buttons as they use the same class we needed a new code so that each button is clickable and will trigger the function

var buttons = document.querySelectorAll(".saveBtn")
buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        saveAgendaLocal();
    });
})

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
hoursmomentjs=moment().format('HH')
console.log(hours)
console.log(hoursmomentjs)
currentmomentJSDate = moment().format('LL')
currentdayofWeekmomentJS = (moment().format('dddd'))
console.log(moment().format('[today] dddd'))
console.log(moment().format('dddd'))


//add current date and time to top of agenda
// document.querySelector('#currentDay').innerHTML = daysofWeek[currentTime.getDay()] + " - " + months[currentTime.getMonth()] + " " + currentTime.getDate() + ", " + currentTime.getFullYear()

// Date using moment JS
$('#currentDay').append(currentdayofWeekmomentJS, " ", currentmomentJSDate)



//check local storage for agenda.  
if(localStorage.currentAgenda){
    
    //If local storage has the saved agenda pull it into a new variable called savedAgenda so that we can grab the values
    var savedAgenda = JSON.parse(localStorage.currentAgenda)
   
    console.log("found saved agenda",savedAgenda)

    //grab the values that are in savedAgenda that we got from locaStorage and use then to populate the Agenda
    $('input')[0].value = savedAgenda._1
    $('input')[1].value = savedAgenda._2
    $('input')[2].value = savedAgenda._3
    $('input')[3].value = savedAgenda._4
    $('input')[4].value = savedAgenda._5
    $('input')[5].value = savedAgenda._6
    $('input')[6].value = savedAgenda._7
    $('input')[7].value = savedAgenda._8
    $('input')[8].value = savedAgenda._9
    $('input')[9].value = savedAgenda._10
    $('input')[10].value = savedAgenda._11
    $('input')[11].value = savedAgenda._12
    $('input')[12].value = savedAgenda._13
    $('input')[13].value = savedAgenda._14
    $('input')[14].value = savedAgenda._15
    $('input')[15].value = savedAgenda._16
    $('input')[16].value = savedAgenda._17
    $('input')[17].value = savedAgenda._18
    $('input')[18].value = savedAgenda._19
    $('input')[19].value = savedAgenda._20
    $('input')[20].value = savedAgenda._21
    $('input')[21].value = savedAgenda._22
    $('input')[22].value = savedAgenda._23
    $('input')[23].value = savedAgenda._24
}

//This is the function to trigger the collection of values in the agenda and save it to the loca file.  We are not pushing in this case because it is one day only and we want to ensure we recrieve all values
function saveAgendaLocal(){
    var currentAgenda = {
        _1: $('input')[0].value,
        _2: $('input')[1].value,
        _3: $('input')[2].value,
        _4: $('input')[3].value,
        _5: $('input')[4].value,
        _6: $('input')[5].value,
        _7: $('input')[6].value,
        _8: $('input')[7].value,
        _9: $('input')[8].value,
        _10: $('input')[9].value,
        _11: $('input')[10].value,
        _12: $('input')[11].value,
        _13: $('input')[12].value,
        _14: $('input')[13].value,
        _15: $('input')[14].value,
        _16: $('input')[15].value,
        _17: $('input')[16].value,
        _18: $('input')[17].value,
        _19: $('input')[18].value,
        _20: $('input')[19].value,
        _21: $('input')[20].value,
        _22: $('input')[21].value,
        _23: $('input')[22].value,
        _24: $('input')[23].value,

    }
        console.log("This is the current agenda",currentAgenda)
        //save the agenda to localStorage
        localStorage.currentAgenda =  JSON.stringify(currentAgenda)

}
saveAgendaLocal()


//check the current time and update the scheduler based on scheduler time to current time
var time = $('.form-control')
for (var i =0; i<time.length; i++){
    time.textContent = i
    console.log(time.textContent)
    if((1+(i)) < hoursmomentjs){
        console.log("past")
        time[i].classList.add("past")
        time[i].classList.remove("present")
        time[i].classList.remove("future")
    }
    else if((1+(i)) == hoursmomentjs){
        console.log("Present")
        time[i].classList.add("present")
        time[i].classList.remove("past")
        time[i].classList.remove("future")
    }
    else {
        console.log("future")
        time[i].classList.add("future")
        time[i].classList.remove("past")
        time[i].classList.remove("present")
    }
}
