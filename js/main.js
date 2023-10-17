$(document).ready(function () {
// Function to format a date
function Orderbyfunc(){
    var order ={
        order1: $("#Select_Order1").val(),
        order2: $("#Select_Order2").val(),
        order3: $("#Select_Order3").val(),
        order4: $("#Select_Order4").val(),
        order5: $("#Select_Order5").val(),
    };
    var order_by = "";
    for (let key in order) {
        if (order[key]) {
            order_by += 'order_by=' + order[key] + '&';
        }
    }
    order_by = order_by.slice(0, -1);
    return order_by;
}

// Function to update the API link
function updateApiLink() {
    var order_by = Orderbyfunc();
    var filters = {
        start: datePicker1.val(),
        end: datePicker2.val(),
        response_format: $("#formatSelect").val(),
        date_group_type: $("#date_group_type").val(),
        ad_type: $("#adTypeInput").val(),
        crid: $("#cridInput").val(),
        client_id: $("#client_id_input").val(),
        client_index: $("#client_index_input").val(),
        geo: $("#geo_input").val(),
        segment_id: $("#segment_id_input").val(),
        tag_id: $("#tag_id_input").val(),
        source_id: $("#source_id_input").val(),
        banner_size: $("#banner_size_input").val(),
        device_type: $("#device_type_input").val(),
        format_group_by: $("#format_group_by").val(), 
    };

    let apiLink = "http://ex.ru/api/v1/statistic/report?";

    for (let key in filters) {
        if (filters[key]) {
            apiLink += key + "=" + encodeURIComponent(filters[key]) + "&";
        }
    }

    apiLink += order_by;

    $("#apiLink").attr("href", apiLink);
    $("#apiLinkInput").val(apiLink);
}

// Input change event handlers to update the API link
$("#Select_Order1, #Select_Order2, #Select_Order3, #date_group_type, #Select_Order4, #Select_Order5, #formatSelect, #Select_Order, #adTypeInput, #cridInput, #format_group_by, #client_id_input, #client_index_input, #segment_id_input, #geo_input, #tag_id_input, #source_id_input, #banner_size_input, #device_type_input").on("input", updateApiLink);
// реализация header

        var dateBtn = $('.datepicker__btn');
        var customBtn = $('#custom-btn');

        dateBtn.click(function() {
            dateBtn.css('border-bottom', 'none');
            $(this).css('border-bottom', '2px solid #7cb8e9');
            $('.main__datepicker-inputs').css('display', 'none');
            updateApiLink();
        });

        customBtn.click(function() {
            $('.main__datepicker-inputs').css('display', 'flex');
            updateApiLink();
        });


});



