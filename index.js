let time;
let hour;
let minute;
let intCurTime;
let curTime;
let localStr;
let apm;
let array;

let stopTime = "6:23 PM"; //put the time you want it to stop here

function checkTime() {
    let cont = true;
    while (cont) {
        time = new Date()
        hour = time.getHours();
        minute = time.getMinutes();
        intCurTime = hour + ":" + minute;
		apm = stopTime.substring(stopTime.length - 2, stopTime.length)
		if (intCurTime.substring(4, intCurTime.length) < 2) {
			intCurTime = intCurTime.substring(0, 3) + 0 + intCurTime[3]
		};
		curTime = intCurTime.toString()
		console.log(curTime + " MT")
		array = intCurTime.split(':');
		if (array[0] > 12) {
			curTime = (Math.abs(intCurTime.substring(0, 2) - 12)).toString() + curTime.substring(2, curTime.length) + " PM"
		} else {
			curTime = curTime + " AM"
		};
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

checkTime();
