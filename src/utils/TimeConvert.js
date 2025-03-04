"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeekday = exports.MySQLDatetimeToJSDatetime = exports.JSDatetimeToMySQLDatetime = void 0;
function JSDatetimeToMySQLDatetime(date) {
    let dateString = date.toLocaleDateString('vn-VN');
    let timeString = date.toLocaleTimeString('vn-VN');
    function convertTime(time) {
        let timeFraction = time.split(" ");
        let noon = timeFraction[1];
        if (noon === "AM") {
            let hour = timeFraction[0].split(":");
            return normalize(hour[0]) + ":" + hour[1] + ":" + hour[2];
        }
        else {
            let hour = timeFraction[0].split(":");
            let a = hour[0] == "12" ? hour[0] : Number(hour[0]) + 12;
            return a + ":" + hour[1] + ":" + hour[2];
        }
    }
    function convertDate(date) {
        let dateSplit = date.split("/");
        return dateSplit[2] + "-" + normalize(dateSplit[0]) + "-" + normalize(dateSplit[1]);
    }
    function normalize(date) {
        if (date.length == 1) {
            return "0" + date;
        }
        else {
            return date;
        }
    }
    return convertDate(dateString) + " " + convertTime(timeString);
}
exports.JSDatetimeToMySQLDatetime = JSDatetimeToMySQLDatetime;
function MySQLDatetimeToJSDatetime(date) {
    return JSDatetimeToMySQLDatetime(new Date(date));
}
exports.MySQLDatetimeToJSDatetime = MySQLDatetimeToJSDatetime;
function getWeekday(datetimeString) {
    const date = new Date(datetimeString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}
exports.getWeekday = getWeekday;
