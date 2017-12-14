var secDegrees = 6.0;
var	minDegrees = 6.0/60;
var	hourDegrees = 6.0/3600;
var	second = document.getElementById("second");
var	minute = document.getElementById("minute");
var	hour = document.getElementById("hour");

var Tick = setInterval(Interval, 1000);
function Interval(){
	second.style.transform = "rotate(" + secDegrees + "deg)";
	secDegrees+=6.0;
	minute.style.transform = "rotate(" + minDegrees + "deg)";
	minDegrees+=6.0/60;
	hour.style.transform = "rotate(" + hourDegrees + "deg)";
	hourDegrees+=6.0/3600;
};