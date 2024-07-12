/// Planets
// mercury = document.querySelector('.mercury')
// venus = document.querySelector('.venus')
// moon = document.querySelector('.moon')
// earth = document.querySelector('.earth')
// mars = document.querySelector('.mars')
// jupiter = document.querySelector('.jupiter')
// saturn = document.querySelector('.saturn')
// uranus = document.querySelector('.uranus')
// neptune = document.querySelector('.neptune')

date = document.querySelector('#date')
btn = document.querySelector('#speed')

let mercurySpd = 8.7
let venusSpd = 22.4
let moonSpd = 3.5
let earthSpd = 36.5
let marsSpd = 68.6
let jupiterSpd = 100
let saturnSpd = 200
let uranusSpd = 350
let neptuneSpd = 700


let id = 0
var SPEED = 120
let now = new Date()

let year = parseInt(now.getFullYear())
let month = parseInt(now.getMonth()) + 1
let day = parseInt(now.getDate())



function start() {
    speeder()
}


function solarTime(speed)
{
    clearInterval(id)
    id = setInterval(() =>
    {
        if (day > 29) {month += 1;  day = 1}
        else if (month > 12) {year += 1;  month = 1}

        time = setDate(day, month, year)

        date.textContent = time
        day++

        if (btn.textContent == 'x1')
            day+=1

    }, speed)
}

function setDate(day, month, year) {
    if (String(day).length == 1 && String(month).length == 1) return `0${day} / 0${month} / ${year}`
        else if (String(day).length == 1) return `0${day} / ${month} / ${year}`
        else if (String(month).length == 1) return `${day} / 0${month} / ${year}`
        else  return `${day} / ${month} / ${year}`
}

function speeder() {

    switch (String(btn.textContent)) {
        case 'x1':
            document.documentElement.style.setProperty('--mercurySpd', `${Math.round(mercurySpd)}s`)
            document.documentElement.style.setProperty('--venusSpd', `${Math.round(venusSpd)}s`)
            document.documentElement.style.setProperty('--moonSpd', `${Math.round(moonSpd)}s`)
            document.documentElement.style.setProperty('--earthSpd', `${Math.round(earthSpd)}s`)
            document.documentElement.style.setProperty('--marsSpd', `${Math.round(marsSpd)}s`)
            document.documentElement.style.setProperty('--jupiterSpd', `${Math.round(jupiterSpd)}s`)
            document.documentElement.style.setProperty('--saturnSpd', `${Math.round(saturnSpd)}s`)
            document.documentElement.style.setProperty('--uranusSpd', `${Math.round(uranusSpd)}s`)
            document.documentElement.style.setProperty('--neptuneSpd', `${Math.round(neptuneSpd)}s`)

            btn.textContent = 'x2'
            solarTime(SPEED)
            break;
        case "x2":
            document.documentElement.style.setProperty('--mercurySpd', `${Math.round(mercurySpd) / 2}s`)
            document.documentElement.style.setProperty('--venusSpd', `${Math.round(venusSpd) / 2}s`)
            document.documentElement.style.setProperty('--moonSpd', `${Math.round(moonSpd) / 2}s`)
            document.documentElement.style.setProperty('--earthSpd', `${Math.round(earthSpd) / 2}s`)
            document.documentElement.style.setProperty('--marsSpd', `${Math.round(marsSpd) / 2}s`)
            document.documentElement.style.setProperty('--jupiterSpd', `${Math.round(jupiterSpd) / 2}s`)
            document.documentElement.style.setProperty('--saturnSpd', `${Math.round(saturnSpd) / 2}s`)
            document.documentElement.style.setProperty('--uranusSpd', `${Math.round(uranusSpd) / 2}s`)
            document.documentElement.style.setProperty('--neptuneSpd', `${Math.round(neptuneSpd) / 2}s`)

            btn.textContent = 'x3'
            solarTime(Math.round(SPEED / 2))
            break;
        case 'x3':
            document.documentElement.style.setProperty('--mercurySpd', `${Math.round(mercurySpd) / 3}s`)
            document.documentElement.style.setProperty('--venusSpd', `${Math.round(venusSpd) / 3}s`)
            document.documentElement.style.setProperty('--moonSpd', `${Math.round(moonSpd) / 3}s`)
            document.documentElement.style.setProperty('--earthSpd', `${Math.round(earthSpd) / 3}s`)
            document.documentElement.style.setProperty('--marsSpd', `${Math.round(marsSpd) / 3}s`)
            document.documentElement.style.setProperty('--jupiterSpd', `${Math.round(jupiterSpd) / 3}s`)
            document.documentElement.style.setProperty('--saturnSpd', `${Math.round(saturnSpd) / 3}s`)
            document.documentElement.style.setProperty('--uranusSpd', `${Math.round(uranusSpd) / 3}s`)
            document.documentElement.style.setProperty('--neptuneSpd', `${Math.round(neptuneSpd) / 3}s`)

            btn.textContent = 'x5'
            solarTime(Math.round(SPEED / 3))
            break;
        case 'x5':
            document.documentElement.style.setProperty('--mercurySpd', `${Math.round(mercurySpd) / 5}s`)
            document.documentElement.style.setProperty('--venusSpd', `${Math.round(venusSpd) / 5}s`)
            document.documentElement.style.setProperty('--moonSpd', `${Math.round(moonSpd) / 5}s`)
            document.documentElement.style.setProperty('--earthSpd', `${Math.round(earthSpd) / 5}s`)
            document.documentElement.style.setProperty('--marsSpd', `${Math.round(marsSpd) / 5}s`)
            document.documentElement.style.setProperty('--jupiterSpd', `${Math.round(jupiterSpd) / 5}s`)
            document.documentElement.style.setProperty('--saturnSpd', `${Math.round(saturnSpd) / 5}s`)
            document.documentElement.style.setProperty('--uranusSpd', `${Math.round(uranusSpd) / 5}s`)
            document.documentElement.style.setProperty('--neptuneSpd', `${Math.round(neptuneSpd) / 5}s`)

            btn.textContent = 'x10'
            solarTime(Math.round(SPEED / 5.59))
            break;
        case 'x10':
            document.documentElement.style.setProperty('--mercurySpd', `${Math.round(mercurySpd) / 10}s`)
            document.documentElement.style.setProperty('--venusSpd', `${Math.round(venusSpd) / 10}s`)
            document.documentElement.style.setProperty('--moonSpd', `${Math.round(moonSpd) / 10}s`)
            document.documentElement.style.setProperty('--earthSpd', `${Math.round(earthSpd) / 10}s`)
            document.documentElement.style.setProperty('--marsSpd', `${Math.round(marsSpd) / 10}s`)
            document.documentElement.style.setProperty('--jupiterSpd', `${Math.round(jupiterSpd) / 10}s`)
            document.documentElement.style.setProperty('--saturnSpd', `${Math.round(saturnSpd) / 10}s`)
            document.documentElement.style.setProperty('--uranusSpd', `${Math.round(uranusSpd) / 10}s`)
            document.documentElement.style.setProperty('--neptuneSpd', `${Math.round(neptuneSpd) / 10}s`)

            btn.textContent = 'x25'
            solarTime(Math.round(SPEED / 11.3))
            break;
        case 'x25':
            document.documentElement.style.setProperty('--mercurySpd', `${Math.round(mercurySpd) / 25}s`)
            document.documentElement.style.setProperty('--venusSpd', `${Math.round(venusSpd) / 25}s`)
            document.documentElement.style.setProperty('--moonSpd', `${Math.round(moonSpd) / 25}s`)
            document.documentElement.style.setProperty('--earthSpd', `${Math.round(earthSpd) / 25}s`)
            document.documentElement.style.setProperty('--marsSpd', `${Math.round(marsSpd) / 25}s`)
            document.documentElement.style.setProperty('--jupiterSpd', `${Math.round(jupiterSpd) / 25}s`)
            document.documentElement.style.setProperty('--saturnSpd', `${Math.round(saturnSpd) / 25}s`)
            document.documentElement.style.setProperty('--uranusSpd', `${Math.round(uranusSpd) / 25}s`)
            document.documentElement.style.setProperty('--neptuneSpd', `${Math.round(neptuneSpd) / 25}s`)

            btn.textContent = 'x50'
            solarTime(Math.round(SPEED / 25.5))
            break;
        case 'x50':
            document.documentElement.style.setProperty('--mercurySpd', `${Math.round(mercurySpd) / 50}s`)
            document.documentElement.style.setProperty('--venusSpd', `${Math.round(venusSpd) / 50}s`)
            document.documentElement.style.setProperty('--moonSpd', `${Math.round(moonSpd) / 50}s`)
            document.documentElement.style.setProperty('--earthSpd', `${Math.round(earthSpd) / 50}s`)
            document.documentElement.style.setProperty('--marsSpd', `${Math.round(marsSpd) / 50}s`)
            document.documentElement.style.setProperty('--jupiterSpd', `${Math.round(jupiterSpd) / 50}s`)
            document.documentElement.style.setProperty('--saturnSpd', `${Math.round(saturnSpd) / 50}s`)
            document.documentElement.style.setProperty('--uranusSpd', `${Math.round(uranusSpd) / 50}s`)
            document.documentElement.style.setProperty('--neptuneSpd', `${Math.round(neptuneSpd) / 50}s`)

            btn.textContent = 'x1'
            solarTime(Math.round(SPEED / 50))
            break;
        default:
            console.log('ERROR: No value matcher');
    }
    console.log(SPEED);

}



time = setDate(day, month, year)
date.textContent = time

n = 1
let id_ = setInterval(() => {
    date.style.opacity = 0

    setTimeout(() => {
        date.style.opacity = 1
    }, 700)
}, 1500)

// Game on \\
setTimeout(() => {
    clearInterval(id_)
    start()
    solarTime(SPEED)

}, 4000)


