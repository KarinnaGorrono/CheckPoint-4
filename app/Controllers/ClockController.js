

function _updateClock() {
    let now = new Date(),
        hours = now.getHours(),
        amPm = hours >= 12 ? 'pm' : 'am',

        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', "November", 'December'];
    let date = [months[now.getMonth()] + ' ' + now.getDate(), + ' ' + now.getFullYear()];

    let time = now.getHours() % 12 || 12 + ":" + now.getMinutes();



    document.getElementById('clock').innerText = [time] + ' ' + [amPm] + ' ' + [date];

}



export class ClockController {
    constructor() {
        this.setClock()
        _updateClock()


    }
    setClock() {
        setInterval('', 1000)
        _updateClock()
    }

}