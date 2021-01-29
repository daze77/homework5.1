//this is an event listner that applies to all the buttons as they use the same class we needed a new code so that each button is clickable and will trigger the function

var buttons = document.querySelectorAll(".saveButton")
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


//add current date and time to top of agenda
document.querySelector('#currentDay').innerHTML = daysofWeek[currentTime.getDay()] + " - " + months[currentTime.getMonth()] + " " + currentTime.getDate() + ", " + currentTime.getFullYear()

























//convert to milliseconds

// var milisecondsPerHour = 3600000

// var articles = document.querySelectorAll('span');

// span.forEach(innerHTML);
// console.log(span)



//compare time number in scheduler to current time and add or remmove class based on current time

// function compareTime(){
//     for (i=0; i < document.querySelectorAll('span').length; i++);
    
//     if (i == hours){
//         document.querySelector('.form-control').classList.add("present")
//         document.querySelector('.form-control').classList.remove("future")
//     }
//     else if (i > hours){
//             document.querySelector('.form-control').classList.add("future")
//             document.querySelector('.form-control').classList.remove("present")
//         }
//     else {
//         document.querySelector('.form-control').classList.remove("future")
//         document.querySelector('.form-control').classList.remove("present")
//     }
//     }

// compareTime()



// var time = document.querySelectorAll(".input-group-text");
// 	for (var i = 0; i < time.length; i++) {
// 	  console.log('time: ', time[i]);
// 	}


// var time = document.querySelectorAll(".input-group-text");
// 	for (const fakeImage of time.values()) {
// 	  console.log('time: ', time);
// 	};












    

var timetext = {
    _1: parseInt(document.querySelectorAll('.input-group-text')[0].innerHTML),
    _2: parseInt(document.querySelectorAll('.input-group-text')[1].innerHTML),
    _3: parseInt(document.querySelectorAll('.input-group-text')[2].innerHTML),
    _4: parseInt(document.querySelectorAll('.input-group-text')[3].innerHTML),
    _5: parseInt(document.querySelectorAll('.input-group-text')[4].innerHTML),
    _6: parseInt(document.querySelectorAll('.input-group-text')[5].innerHTML),
    _7: parseInt(document.querySelectorAll('.input-group-text')[6].innerHTML),
    _8: parseInt(document.querySelectorAll('.input-group-text')[7].innerHTML),
    _9: parseInt(document.querySelectorAll('.input-group-text')[8].innerHTML),
    _10: parseInt(document.querySelectorAll('.input-group-text')[9].innerHTML),
    _11: parseInt(document.querySelectorAll('.input-group-text')[10].innerHTML),
    _12: parseInt(document.querySelectorAll('.input-group-text')[11].innerHTML),
    _13: parseInt(document.querySelectorAll('.input-group-text')[12].innerHTML),
    _14: parseInt(document.querySelectorAll('.input-group-text')[13].innerHTML),
    _15: parseInt(document.querySelectorAll('.input-group-text')[14].innerHTML),
    _16: parseInt(document.querySelectorAll('.input-group-text')[15].innerHTML),
    _17: parseInt(document.querySelectorAll('.input-group-text')[16].innerHTML),
    _18: parseInt(document.querySelectorAll('.input-group-text')[17].innerHTML),
    _19: parseInt(document.querySelectorAll('.input-group-text')[18].innerHTML),
    _20: parseInt(document.querySelectorAll('.input-group-text')[19].innerHTML),
    _21: parseInt(document.querySelectorAll('.input-group-text')[20].innerHTML),
    _22: parseInt(document.querySelectorAll('.input-group-text')[21].innerHTML),
    _23: parseInt(document.querySelectorAll('.input-group-text')[22].innerHTML),
    _24: parseInt(document.querySelectorAll('.input-group-text')[23].innerHTML),

}





for (y in parseInt(document.querySelector('div').innertext))
{
    var y = (y)
    console.log(y)
}

for (var x in timetext) {
    console.log(timetext[x])
    console.log("Present",Math.floor(timetext[x])===hours)
    console.log("Past", Math.floor(timetext[x])< hours)
    console.log("Future",Math.floor(timetext[x])> hours)

    while (Math.floor(timetext[x])===hours ){
        document.querySelector('input').classList.add("present");    
    }




}




    // var xx = (x + ":" +  timetext[x])
    // console.log(xx)
    // console.log("Future",Math.floor(timetext[x])> hours)



// console.log("this is the time text", timetext)
//   for (var i in timetext){
//       console.log(timetext.length)}

// // function compareTime(){
//     for (var i  in timetext){i=0; i < timetext.length; i++;
    
    
//     if ( i == hours){
//         document.querySelector('.form-control').classList.add("present")
//         document.querySelector('.form-control').classList.remove("future")
//         document.querySelector('.form-control').classList.remove("past")

//         console.log(i)
//     }}
    // else if (i > hours){
    //         document.querySelector('.form-control').classList.add("future")
    //         document.querySelector('.form-control').classList.remove("present")
    //         document.querySelector('.form-control').classList.remove("past")

    //     }
    // else {
    //     document.querySelector('.form-control').classList.remove("future")
    //     document.querySelector('.form-control').classList.remove("present")
    //     document.querySelector('.form-control').classList.add("past")

    // }
    






























//check local storage for agenda.  
if(localStorage.currentAgenda){
    
    //If local storage has the saved agenda pull it into a new variable called savedAgenda so that we can grab the values
    var savedAgenda = JSON.parse(localStorage.currentAgenda)
   
    console.log("found saved agenda",savedAgenda)

    //grab the values that are in savedAgenda that we got from locaStorage and use then to populate the Agenda
    document.querySelectorAll('input')[0].value = savedAgenda._1
    document.querySelectorAll('input')[1].value = savedAgenda._2
    document.querySelectorAll('input')[2].value = savedAgenda._3
    document.querySelectorAll('input')[3].value = savedAgenda._4
    document.querySelectorAll('input')[4].value = savedAgenda._5
    document.querySelectorAll('input')[5].value = savedAgenda._6
    document.querySelectorAll('input')[6].value = savedAgenda._7
    document.querySelectorAll('input')[7].value = savedAgenda._8
    document.querySelectorAll('input')[8].value = savedAgenda._9
    document.querySelectorAll('input')[9].value = savedAgenda._10
    document.querySelectorAll('input')[10].value = savedAgenda._11
    document.querySelectorAll('input')[11].value = savedAgenda._12
    document.querySelectorAll('input')[12].value = savedAgenda._13
    document.querySelectorAll('input')[13].value = savedAgenda._14
    document.querySelectorAll('input')[14].value = savedAgenda._15
    document.querySelectorAll('input')[15].value = savedAgenda._16
    document.querySelectorAll('input')[16].value = savedAgenda._17
    document.querySelectorAll('input')[17].value = savedAgenda._18
    document.querySelectorAll('input')[18].value = savedAgenda._19
    document.querySelectorAll('input')[19].value = savedAgenda._20
    document.querySelectorAll('input')[20].value = savedAgenda._21
    document.querySelectorAll('input')[21].value = savedAgenda._22
    document.querySelectorAll('input')[22].value = savedAgenda._23
    document.querySelectorAll('input')[23].value = savedAgenda._24
    }

//This is the function to trigger the collection of values in the agenda and save it to the loca file.  We are not pushing in this case because it is one day only and we want to ensure we recrieve all values
function saveAgendaLocal(){
    var currentAgenda = {
        _1: document.querySelectorAll('input')[0].value,
        _2: document.querySelectorAll('input')[1].value,
        _3: document.querySelectorAll('input')[2].value,
        _4: document.querySelectorAll('input')[3].value,
        _5: document.querySelectorAll('input')[4].value,
        _6: document.querySelectorAll('input')[5].value,
        _7: document.querySelectorAll('input')[6].value,
        _8: document.querySelectorAll('input')[7].value,
        _9: document.querySelectorAll('input')[8].value,
        _10: document.querySelectorAll('input')[9].value,
        _11: document.querySelectorAll('input')[10].value,
        _12: document.querySelectorAll('input')[11].value,
        _13: document.querySelectorAll('input')[12].value,
        _14: document.querySelectorAll('input')[13].value,
        _15: document.querySelectorAll('input')[14].value,
        _16: document.querySelectorAll('input')[15].value,
        _17: document.querySelectorAll('input')[16].value,
        _18: document.querySelectorAll('input')[17].value,
        _19: document.querySelectorAll('input')[18].value,
        _20: document.querySelectorAll('input')[19].value,
        _21: document.querySelectorAll('input')[20].value,
        _22: document.querySelectorAll('input')[21].value,
        _23: document.querySelectorAll('input')[22].value,
        _24: document.querySelectorAll('input')[23].value,

    }
        console.log("This is the current agenda",currentAgenda)
        //save the agenda to localStorage
        localStorage.currentAgenda =  JSON.stringify(currentAgenda)

}
saveAgendaLocal()