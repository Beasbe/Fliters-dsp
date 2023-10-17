function formatDate(date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var day = date.getDate().toString().padStart(2, "0");
    return year + "-" + month + "-" + day;
}

// Set default dates for datepickers
var datePicker1 = $("#datepicker1");
var datePicker2 = $("#datepicker2");

var currentDate = new Date();
currentDate.setDate(currentDate.getDate() - 7);
var formattedDate1 = formatDate(currentDate);
datePicker1.val(formattedDate1);

var formattedDate2 = formatDate(new Date());
datePicker2.val(formattedDate2);

// Click event handlers for day, week, and month buttons
$("#day").click(function () {
    datePicker1.val(formatDate(new Date()));
});

$("#week").click(function () {
    var weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    datePicker1.val(formatDate(weekAgo));
});

$("#month").click(function () {
    var monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    datePicker1.val(formatDate(monthAgo));
});
// Initialize datepickers
datePicker1.datepicker({
    dateFormat: "yy-mm-dd",
    onSelect: function (selectedDate) {
        datePicker2.datepicker("option", "minDate", selectedDate);
        updateApiLink();
    },
});

datePicker2.datepicker({
    dateFormat: "yy-mm-dd",
    onSelect: function (selectedDate) {
        datePicker1.datepicker("option", "maxDate", selectedDate);
        updateApiLink();
    },
});