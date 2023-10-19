// Создаем массив с данными для полей
var inputData = [
    { title: "сrid", id: "cridInput", placeholder: "id1;id2..." },
    { title: "client_id", id: "client_id_input", placeholder: "id1;id2..." },
    { title: "segment_id", id: "segment_id_input", placeholder: "id1;id2..." },
    { title: "geo", id: "geo_input", placeholder: "id1;id2..." },
    { title: "tag_id", id: "tag_id_input", placeholder: "id1;id2..." },
    { title: "source_id", id: "source_id_input", placeholder: "id1;id2..." }
];

// Создаем контейнер для вставки
var container = $(".main__input-block");

// Проходим по данным и создаем блоки input
for (var i = 0; i < inputData.length; i++) {
    var itemData = inputData[i];

    // Создаем блок input
    var inputBlock = $("<div>").addClass("input__item-block");
    var inputTitle = $("<div>").addClass("input__item-title").text(itemData.title);
    var input = $("<input>").addClass("input__item")
        .attr("type", "text")
        .attr("id", itemData.id)
        .attr("placeholder", itemData.placeholder);

    // Добавляем элементы в блок input
    inputBlock.append(inputTitle, input);

    // Добавляем блок input в контейнер
    container.append(inputBlock);
}
$(document).ready(function () {
    // Define the populateSelect function to populate the select elements


    // Define the MulitipleChoises function to create multiple select blocks
    function MulitipleChoises(main_container, item_title, options, how_many) {
        var mainOrderContainer = $(main_container);
        var number_of_copies = how_many;
        for (var i = 1; i <= number_of_copies; i++) {
            var newItemBlock = $('<div>').addClass('select__item-block');

            var newTitle = $('<div>')
                .addClass('select__item-title')
                .text(item_title + ' ' + i);

            var newSelect = $('<select>')
                .addClass('select__item')
                .attr('id', item_title + i);
            var id = item_title + i.toString();

            newItemBlock.append(newTitle, newSelect);
            mainOrderContainer.append(newItemBlock);
            populateSelect(id, options);


        }
    }

    var where = ['.main__order_by', '.main__banner_size', '.main__client_index', '.main__group_by'];
    var what = ["Order_by", "banner_size", "client_index", "group_by"];
    var options = [order_by_options, banner_sizes, client_index_options, group_by_options];
    var how_many = [5, 5, 5, 5];
    for (var i = 0; i < where.length; i++) {
        MulitipleChoises(where[i], what[i], options[i], how_many[i]);
    }
});







