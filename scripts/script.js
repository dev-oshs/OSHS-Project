// setting slider
let previousSlide = 1
let currentSlide = 1

// getting HTML element needed
let slidesBtn = document.querySelector(".slide-arrows").childNodes
let slides = document.querySelector(".slides-container").childNodes
let slidesShortcutBtn = document.querySelector(".slide-shortcut-btn").childNodes
let index = 0
// setting slider function
const moveSlide = (prevSlide = 1, currSlide = 1) => {
    index += 1
    slides[prevSlide].classList.remove("slide-active");
    slides[currSlide].classList.add("slide-active");
    slidesShortcutBtn[prevSlide].classList.remove("active-move-to-slide");
    slidesShortcutBtn[currSlide].classList.add("active-move-to-slide");
    // slides[prevSlide].style.transform = `translateX(${slides.length - prevSlide - 1 + "00"}%)`
    // slides[currSlide].style.transform = `translateX(${slides.length - currSlide - 1 + "00"}%)`

    // slides[prevSlide].style.transform = `translateX(${index * 100 - 100}%)`
    // slides[currSlide].style.transform = `translateX(-${index * 100 - 100}%)`

}
// left arrow function
slidesBtn[1].addEventListener("click", () => {
    if (currentSlide == 1) {
        previousSlide = 1
        currentSlide = slides.length - 2
        moveSlide(previousSlide, currentSlide);
    } else {
        previousSlide = currentSlide
        currentSlide -= 2
        moveSlide(previousSlide, currentSlide);
    }
});

// right arrow function
slidesBtn[3].addEventListener("click", () => {
    if (currentSlide == slides.length - 2) {
        previousSlide = slides.length - 2
        currentSlide = 1
        moveSlide(previousSlide, currentSlide);
    } else {
        previousSlide = currentSlide
        currentSlide += 2
        moveSlide(previousSlide, currentSlide);
    }
});


// setting autoplay
setInterval(() => {
    if (currentSlide == slides.length - 2) {
        previousSlide = slides.length - 2
        currentSlide = 1
        moveSlide(previousSlide, currentSlide);
    } else {
        previousSlide = currentSlide
        currentSlide += 2
        moveSlide(previousSlide, currentSlide);
    }}, 6000
);



// setting shortcut btn
slidesShortcutBtn[1].addEventListener("click", () => {
    previousSlide = currentSlide
    currentSlide = 1
    moveSlide(previousSlide, currentSlide);
})
slidesShortcutBtn[3].addEventListener("click", () => {
    previousSlide = currentSlide
    currentSlide = 3
    moveSlide(previousSlide, currentSlide);
})
slidesShortcutBtn[5].addEventListener("click", () => {
    previousSlide = currentSlide
    currentSlide = 5
    moveSlide(previousSlide, currentSlide);
})
slidesShortcutBtn[7].addEventListener("click", () => {
    previousSlide = currentSlide
    currentSlide = 7
    moveSlide(previousSlide, currentSlide);
})
slidesShortcutBtn[9].addEventListener("click", () => {
    previousSlide = currentSlide
    currentSlide = slides.length - 2
    moveSlide(previousSlide, currentSlide);
})

// and sliding function
// for (i = 1; i < slides.length; i += 2) {
//     slides[i].style.transform = `translateX(${slides.length - i - 1 + "00"}%)`
// }

console.log(slides);

let upArrowBtn = document.querySelector(".up-arrow");

const slideUp = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        upArrowBtn.style.display = "block"

    } else {
        upArrowBtn.style.display = "none"
    }
}

window.addEventListener("scroll", slideUp);
slideUp();

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
        occurrence: "Every Wednesday morning",
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

if (hour >= 7 && hour <= 8) {
    if (minute){}
    eventContainer.innerHTML = showEvent(0);
}

// setting up navbar
let openNavBtn = document.querySelector("#open-nav-btn");
let closeNavBtn = document.querySelector("#close-nav-btn");
let navBar = document.querySelector(".nav-bar");

openNavBtn.addEventListener("click", () => {
    navBar.classList.add("nav-opened");
    let a = document.createElement("a");
    a.href = "#"
    a.click();

});
closeNavBtn.addEventListener("click", () => {
    navBar.classList.remove("nav-opened");
});