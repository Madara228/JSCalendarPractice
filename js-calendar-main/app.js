let calendar = document.querySelector('.calendar')

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var selectYear = document.getElementById("year");
var selectMonth = document.getElementById("month-picker");
var selectDay = document.getElementById("day");
isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

function generate_year_range(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";
    }
    return years;
  }

function generate_day_range(_val){
    var days = "";
    for(let day=0;day<_val;day++){
        days += "<option value='" + day + "'>" + (day+1) + "</option>";
    }
    return days;
}
var createYear = generate_year_range(1970, 2050);

document.getElementById("year").innerHTML = createYear;

let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
generateCalendar = (month, year) => {
    days_of_month = [31, getFebDays(selectYear.value), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let calendar_days = calendar.querySelector('.calendar-days')


    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()
    
    let curr_month = `${months[month]}`
    var t = 0;
    for(let i = 0; i<months.length; i++){
        if(curr_month == months[i]){
            t = i;
            break
        }
    }
    month_picker.value = t;

    let first_day = new Date(year, month, 0)

    for (let i = 0; i < days_of_month[month] + first_day.getDay(); i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }


}

let month_list = calendar.querySelector('.month-list')

let month_picker = calendar.querySelector('#month-picker')

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}


var createDay = generate_day_range(curr_month);
document.getElementById("day").innerHTML = createDay;


selectYear.value = curr_year.value;
selectMonth.value = curr_month.value;
function _renderJump(){
    generateCalendar(selectMonth.value,selectYear.value);
    var createDay = generate_day_range(days_of_month[selectMonth.value]);
    document.getElementById("day").innerHTML = createDay;

}
generateCalendar(curr_month.value, curr_year.value)
