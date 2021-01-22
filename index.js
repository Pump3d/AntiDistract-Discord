let time;
let hour;
let minute;
let intCurTime;
let curTime;

let stopTime = "11:20"; //put the time you want it to stop here (in military time)

function checkTime() {
    let cont = true;
    while (cont) {
        time = new Date()
        hour = time.getHours();
        minute =time.getMinutes();
        intCurTime = hour + ":" + minute;
        curTime = intCurTime.toString()
        console.log(curTime);
        if (curTime >= stopTime) {
            cont = false
            console.log("stopped")
            location.reload()
        } else {
            alert(curTime)
        }
    }
};

time = new Date()
let day = time.getDay();
function checkWeekend() {
    if (day == 6 || day == 7) {
        console.log("Weekend")
    } else {
        checkTime()
    }
};

checkWeekend();
