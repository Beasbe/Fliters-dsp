function populateSelect(selectId, options) {
    // Получаем элемент select по его ID
    var select = $('#' + selectId);

    // Очищаем select от предыдущих параметров
    select.empty();

    // Перебираем список параметров и добавляем их в select
    $.each(options, function(index, optionData) {
        var option = $('<option>')
            .val(optionData.value)
            .text(optionData.text);

        select.append(option);
    });
}


var selectId = "banner_size_input";
var banner_sizes = [
    { value: "", text: " " },
    { value: "240x400", text: "240x400" },
    { value: "970x250", text: "970x250" },
    { value: "336x280", text: "336x280" },
    { value: "300x600", text: "300x600" },
    { value: "300x250", text: "300x250" },
    { value: "728x90", text: "728x90" },
    { value: "320x480", text: "320x480" }
  
];
var group_by_options = [
    { value: "", text: "" },
    { value: "date", text: "Date" },
    { value: "ctr", text: "CTR" },
    { value: "bidfloor", text: "Bid Floor" },
    { value: "segment_id", text: "Segment ID" },
    { value: "clicks_count", text: "Clicks Count" },
    { value: "crid", text: "CRID" },
    { value: "real_clicks_count", text: "Real Clicks Count" },
    { value: "wins_count", text: "Wins Count" },
    { value: "client_index", text: "Client Index" },
    { value: "source_id", text: "Source ID" },
    { value: "tag_id", text: "Tag ID" },
    { value: "banner_size", text: "Banner Size" },
    { value: "geo", text: "Geo" },
    { value: "win_rate", text: "Win Rate" },
    { value: "amount", text: "Amount" },
    { value: "client_id", text: "Client ID" },
    { value: "render_rate", text: "Render Rate" },
    { value: "real_ctr_rate", text: "Real CTR Rate" },
    { value: "renders_count", text: "Renders Count" },
    { value: "ctr_rate", text: "CTR Rate" },
    { value: "ad_type", text: "Ad Type" },
    { value: "cpm", text: "CPM" },
    { value: "real_ctr", text: "Real CTR" },
    { value: "device_type", text: "Device Type" },
    { value: "auction_participation_rate", text: "Auction Participation Rate" },
    { value: "auction_participation_count", text: "Auction Participation Count" },
    { value: "bid_requests_count", text: "Bid Requests Count" }
];

var selectId2 = "format_group_by";
var order_by_options = [
    { value: "", text: "" },
    { value: "date", text: "Date" },
    { value: "ctr", text: "CTR" },
    { value: "bidfloor", text: "Bid Floor" },
    { value: "segment_id", text: "Segment ID" },
    { value: "clicks_count", text: "Clicks Count" },
    { value: "crid", text: "CRID" },
    { value: "real_clicks_count", text: "Real Clicks Count" },
    { value: "wins_count", text: "Wins Count" },
    { value: "client_index", text: "Client Index" },
    { value: "source_id", text: "Source ID" },
    { value: "tag_id", text: "Tag ID" },
    { value: "banner_size", text: "Banner Size" },
    { value: "geo", text: "Geo" },
    { value: "win_rate", text: "Win Rate" },
    { value: "amount", text: "Amount" },
    { value: "client_id", text: "Client ID" },
    { value: "render_rate", text: "Render Rate" },
    { value: "real_ctr_rate", text: "Real CTR Rate" },
    { value: "renders_count", text: "Renders Count" },
    { value: "ctr_rate", text: "CTR Rate" },
    { value: "ad_type", text: "Ad Type" },
    { value: "cpm", text: "CPM" },
    { value: "real_ctr", text: "Real CTR" },
    { value: "device_type", text: "Device Type" },
    { value: "auction_participation_rate", text: "Auction Participation Rate" },
    { value: "auction_participation_count", text: "Auction Participation Count" },
    { value: "bid_requests_count", text: "Bid Requests Count" },
    { value: "-date", text: "-Date" },
    { value: "-ctr", text: "-CTR" },
    { value: "-bidfloor", text: "-Bid Floor" },
    { value: "-segment_id", text: "-Segment ID" },
    { value: "-clicks_count", text: "-Clicks Count" },
    { value: "-crid", text: "-CRID" },
    { value: "-real_clicks_count", text: "-Real Clicks Count" },
    { value: "-wins_count", text: "-Wins Count" },
    { value: "-client_index", text: "-Client Index" },
    { value: "-source_id", text: "-Source ID" },
    { value: "-tag_id", text: "-Tag ID" },
    { value: "-banner_size", text: "-Banner Size" },
    { value: "-geo", text: "-Geo" },
    { value: "-win_rate", text: "-Win Rate" },
    { value: "-amount", text: "-Amount" },
    { value: "-client_id", text: "-Client ID" },
    { value: "-render_rate", text: "-Render Rate" },
    { value: "-real_ctr_rate", text: "-Real CTR Rate" },
    { value: "-renders_count", text: "-Renders Count" },
    { value: "-ctr_rate", text: "-CTR Rate" },
    { value: "-ad_type", text: "-Ad Type" },
    { value: "-cpm", text: "-CPM" },
    { value: "-real_ctr", text: "-Real CTR" },
    { value: "-device_type", text: "-Device Type" },
    { value: "-auction_participation_rate", text: "-Auction Participation Rate" },
    { value: "-auction_participation_count", text: "-Auction Participation Count" },
    { value: "-bid_requests_count", text: "-Bid Requests Count" }
];
var selectId3 = "client_index_input";
var client_index_options = [
    { value: "", text: "" },
    { value: "през", text: "през" },
    { value: "нег", text: "нег" },
    { value: "мат", text: "мат" },
    { value: "лднр", text: "лднр" },
    { value: "днб", text: "днб" }


];
var selectId4 = "date_group_type";
var date_group_type_opt = [
    { value: "", text: "" },
    { value: "day", text: "day" },
    { value: "week", text: "week" },
    { value: "month", text: "month" }


];
var selectId5 = "adTypeInput";
var adTypeInput_opt = [
    { value: "", text: "" },
    { value: "amb", text: "amb" },
]



//populateSelect(selectId2, group_by_options);
populateSelect(selectId4, date_group_type_opt);
populateSelect(selectId5,adTypeInput_opt);

