// <!----------------------------Program no 1----------------------------------------->
var is_date = function(input) {
    if (Object.prototype.toString.call(input) === "[object Date]")
        return true;
    return false;
}
console.log(is_date("October 13, 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99, 5, 24, 11, 33, 30, 0)));
console.log(is_date([1, 2, 4, 0]));
// <!----------------------------Program no 2----------------------------------------->
var curday = function(sp) {
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //As January is 0.
    var yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (mm + sp + dd + sp + yyyy);
};
console.log(curday('/'));
console.log(curday('-'));
// <!----------------------------Program no 3----------------------------------------->
var getDaysInMonth = function(month, year) {
    return new Date(year, month, 0).getDate();
};
console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));
// <!----------------------------Program no 4----------------------------------------->
var month_name = function(dt) {
    mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return mlist[dt.getMonth()];
};
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
// <!----------------------------Program no 5----------------------------------------->
var compare_dates = function(date1, date2) {
    if (date1 > date2) return ("Date1 > Date2");
    else if (date1 < date2) return ("Date2 > Date1");
    else return ("Date1 = Date2");
}

console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
// <!----------------------------Program no 5----------------------------------------->
var add_minutes = function(dt, minutes) {
    return new Date(dt.getTime() + minutes * 60000);
}
console.log(add_minutes(new Date(2014, 10, 2), 30).toString());