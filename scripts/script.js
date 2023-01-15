
// setting slider
let previousSlide = 0
let currentSlide = 0

// getting HTML element needed
let slidesBtn = document.querySelector(".slide-arrows").childNodes
let slides = document.querySelectorAll(".slide");
let slidesShortcutBtn = document.querySelector(".slide-shortcut-btn").childNodes

console.log(slides);

// setting slider function
const moveSlide = (prevSlide = 0, currSlide = 0) => {
    slides[prevSlide].classList.remove("slide-active");
    slides[currSlide].classList.add("slide-active");
    slidesShortcutBtn[prevSlide].classList.remove("active-move-to-slide");
    slidesShortcutBtn[currSlide].classList.add("active-move-to-slide");
}
// left arrow function
slidesBtn[1].addEventListener("click", () => {
    if (currentSlide == 0) {
        previousSlide = 0;
        currentSlide = slides.length - 1;
        moveSlide(previousSlide, currentSlide);
    } else {
        previousSlide = currentSlide;
        currentSlide -= 1;
        moveSlide(previousSlide, currentSlide);
    }
});

// right arrow function
slidesBtn[3].addEventListener("click", () => {
    if (currentSlide == slides.length - 1) {
        previousSlide = slides.length - 1;
        currentSlide = 0;
        moveSlide(previousSlide, currentSlide);
    } else {
        previousSlide = currentSlide;
        currentSlide += 1;
        moveSlide(previousSlide, currentSlide);
    }
});


// setting autoplay
setInterval(() => {
    if (currentSlide == slides.length - 1) {
        previousSlide = slides.length - 1
        currentSlide = 0
        moveSlide(previousSlide, currentSlide);
    } else {
        previousSlide = currentSlide
        currentSlide += 1
        moveSlide(previousSlide, currentSlide);
    }}, 6000
);



// setting shortcut btn
slidesShortcutBtn[1].addEventListener("click", () => {
    previousSlide = currentSlide
    currentSlide = 0
    moveSlide(previousSlide, currentSlide);
})
slidesShortcutBtn[3].addEventListener("click", () => {
    previousSlide = currentSlide
    currentSlide = 1
    moveSlide(previousSlide, currentSlide);
})
slidesShortcutBtn[5].addEventListener("click", () => {
    previousSlide = currentSlide
    currentSlide = 2
    moveSlide(previousSlide, currentSlide);
})
slidesShortcutBtn[7].addEventListener("click", () => {
    previousSlide = currentSlide
    currentSlide = 3
    moveSlide(previousSlide, currentSlide);
})
slidesShortcutBtn[9].addEventListener("click", () => {
    previousSlide = currentSlide
    currentSlide = slides.length - 1
    moveSlide(previousSlide, currentSlide);
})

// and sliding function
// for (i = 0; i < slides.length; i++) {
//     console.log(i);
//     slides[i].style.transform = `translateX(${i + "00"}%)`
// }



let eventContainer = document.querySelector(".event-container");

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
`
return eventShow
}



let tmADt = new Date();
let hour = tmADt.getHours();
let minute = tmADt.getMinutes();
let day = tmADt.getDay();

if (hour >= 7 && minute >= 40) {
    if (hour <= 8 && minute <= 40){
        eventContainer.innerHTML = showEvent(0);
    }
}

if (day == 3) {
    if (hour >= 14 && minute >= 30) {
        if (hour <= 15 && minute <= 0){
            eventContainer.innerHTML = showEvent(1);
        }
    }
}

// form.addEventListener("submit", (e) => {
//     let data = {
//         name: fullName.value,
//         email: email.value,
//         message: message.value
//     }
//     console.log(data);
   
// });
