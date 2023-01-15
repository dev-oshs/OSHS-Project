console.time('timer')
let eventsContainers = document.querySelectorAll(".event-container");

let schoolEventList = [
    {
        eventName: "Assembly",
        occurrence: "Every morning",
        time: {
            from: "7:40am",
            to: "8:40am"
        }
    },
    {
        eventName: "Society",
        occurrence: "Every Wednesday afternoon",
        time: {
            from: "7:40am",
            to: "8:40am"
        }
    },
    {
        eventName: "Boys and girl talk",
        occurrence: "Every Friday morning",
        time: {
            from: "8:30am",
            to: "9:00am"
        }
    }
]


const showEvent = index =>  {
    let eventShow = `
    <h3 class="event-name">${schoolEventList[index].eventName}</h3>
    <p class="event-occurrence">${schoolEventList[index].occurrence}</p>
    <p class="time">
        <span>
            <span style="color: black;">From: </span>
            ${schoolEventList[index].time.from}
        </span>
    </p>
    <p class="time">
        <span>
            <span style="color: black;">To: </span>
            ${schoolEventList[index].time.to}
        </span>
    </p>
    <div class="under-line"></div>
`
return eventShow
}



let tmADt = new Date();
let hour = tmADt.getHours();
let minute = tmADt.getMinutes();
let day = tmADt.getDay();

for (let i = 0; i < schoolEventList.length; i++) {
    if(eventsContainers[1].innerText == "No Event.") eventsContainers[1].innerHTML = ""
    eventsContainers[1].innerHTML += showEvent(i);
}

if (hour >= 7 && minute >= 45 || hour <= 8 && minute <= 45) {
    eventsContainers[0].innerHTML = showEvent(0);
}

if (day == 3) {
    if (hour >= 14) {
        if (hour <= 15 && minute <= 30){
            eventsContainers[0].innerHTML = showEvent(1);
        }
    }
}

    console.timeEnd('timer')
