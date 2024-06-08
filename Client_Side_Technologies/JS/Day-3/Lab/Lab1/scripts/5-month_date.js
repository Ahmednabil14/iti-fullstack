let alertMonthDate = function (date) {
    let dateString = date.toDateString();
    let month = dateString.split(' ')[1];
    alert(month)
}