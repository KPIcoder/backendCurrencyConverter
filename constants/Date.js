function checkDateLength(date) {
    if(date.toString().length > 2 && date.toString().length < 1)
        return
    if(date.toString().length === 1)
        return '0'+ date
    return date;
}

class Date {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    formDateUrl(day, month, year) {
        this.day = checkDateLength(this.day);
        this.month = checkDateLength(this.month);
        return `${this.year}-${this.month}-${this.day}`
    }
}

module.exports = Date;
