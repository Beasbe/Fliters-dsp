$(document).ready(function () {

function Orderbyfunc(inputs, name){ //функция чтобы собрать несколько значений одного ключа
    var order = inputs
    var order_by = "";
    for (let key in order) {
        if (order[key]) {
            order_by += name + order[key] + '&';
        }
    }
    order_by = order_by.slice(0, -1);
    return order_by;
}

// Function to update the API link
function updateApiLink() {
var banner_size_input ={
     order1: $("#banner_size1").val(),
     order2: $("#banner_size2").val(),
     order3: $("#banner_size3").val(),
     order4: $("#banner_size4").val(),
     order5: $("#banner_size5").val(),
 }
var banner_size_key = 'banner_size=';
var banner_size = Orderbyfunc(banner_size_input, banner_size_key)
    var order_by_inputs ={
        order1: $("#Order_by1").val(),
        order2: $("#Order_by2").val(),
        order3: $("#Order_by3").val(),
        order4: $("#Order_by4").val(),
        order5: $("#Order_by5").val(),
    };
    var order_key = 'order_by=';
    var order_by = Orderbyfunc(order_by_inputs, order_key);
    var group_by_inputs ={
        order1: $("#group_by1").val(),
        order2: $("#group_by2").val(),
        order3: $("#group_by3").val(),
        order4: $("#group_by4").val(),
        order5: $("#group_by5").val(),
    };
    var group_by_key = 'group_by=';
    var group_by = Orderbyfunc(group_by_inputs, group_by_key);
    var client_index_inputs ={
        order1: $("#client_index1").val(),
        order2: $("#client_index2").val(),
        order3: $("#client_index3").val(),
        order4: $("#client_index4").val(),
        order5: $("#client_index5").val(),
    };
    var client_index_key = 'client_index=';
    var client_index = Orderbyfunc(client_index_inputs, client_index_key);
    var filters = {
        start: datePicker1.val(),
        end: datePicker2.val(),
        response_format: $("#formatSelect").val(),
        ad_type: $("#adTypeInput").val(),
        crid: $("#cridInput").val(),
        client_id: $("#client_id_input").val(),
        geo: $("#geo_input").val(),
        segment_id: $("#segment_id_input").val(),
        tag_id: $("#tag_id_input").val(),
        source_id: $("#source_id_input").val(),
    };


    let apiLink = "http://ex.ru/api/v1/statistic/report?";

    for (var key in filters) {
        var value = filters[key];
        if (value) {
            if (value.indexOf(';') !== -1) {
                var elements = value.split(';');
                for (var i in elements) {
                    apiLink += "&" + key + "=" + encodeURIComponent(elements[i].trim());
                }
            } else {
                apiLink += "&" + key + "=" + encodeURIComponent(value);
            }
        }
    }

    apiLink += order_by + banner_size + group_by + client_index;

    $("#apiLink").attr("href", apiLink);
    $("#apiLinkInput").val(apiLink);
}

// Input change event handlers to update the API link
$("#Order_by1, #client_index1, #client_index2, #client_index3, #client_index4, #client_index5, #group_by1, #group_by2, #group_by3, #group_by4, #group_by5, #banner_size1, #banner_size2, #banner_size3, #banner_size4, #banner_size5, #Order_by2, #Order_by3, #date_group_type, #Order_by4, #Order_by5, #formatSelect, #Select_Order, #adTypeInput, #cridInput, #format_group_by, #client_id_input, #client_index_input, #segment_id_input, #geo_input, #tag_id_input, #source_id_input, #banner_size_input, #device_type_input").on("input", updateApiLink);
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



