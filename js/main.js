$(document).ready(function () {

// Function to update the API link
function updateApiLink() {

    var filters = {
        start: datePicker1.val(),
        end: datePicker2.val(),
        group_by: $("#group_by").val(),
        order_by: $("#order_by").val(),
        banner_size: $("#banner_size").val(),
        response_format: $("#formatSelect").val(),
        ad_type: $("#adTypeInput").val(),
        crid: $("#cridInput").val(),
        client_id: $("#client_id_input").val(),
        geo: $("#geo_input").val(),
        segment_id: $("#segment_id_input").val(),
        tag_id: $("#tag_id_input").val(),
        client_index: $("#client_index").val(),
        source_id: $("#source_id_input").val(),
        date_group_type: $("#date_group_type").val(),
    };


    let apiLink = "http://ex.ru/api/v1/statistic/report?";

    for (var key in filters) {

        var value = filters[key];

        if (value) {
            if (Array.isArray(value)) {
                for (var i in value){
                    apiLink += "&" + key + "=" + encodeURIComponent(value[i].trim());
                }
            }
            else if (value.indexOf(',') !== -1) {
                var elements = value.split(',');
                for (var i in elements) {
                    apiLink += "&" + key + "=" + encodeURIComponent(elements[i].trim());
                }
            }
            else {
                apiLink += "&" + key + "=" + encodeURIComponent(value);
            }
        }
    }



    $("#apiLink").attr("href", apiLink);
    $("#apiLinkInput").val(apiLink);
}

// Input change event handlers to update the API link
document.addEventListener("click", updateApiLink);
//$("#order_by, #client_index, #group_by, #date_group_type, #formatSelect, #Select_Order, #adTypeInput, #cridInput, #format_group_by, #segment_id_input, #geo_input, #tag_id_input, #source_id_input, #device_type_input").on("input", updateApiLink);
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



