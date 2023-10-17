// Создаем массив с данными для полей
var inputData = [
    { title: "сrid", id: "cridInput", placeholder: "Ввести" },
    { title: "client_id", id: "client_id_input", placeholder: "Ввести" },
    { title: "segment_id", id: "segment_id_input", placeholder: "Ввести" },
    { title: "geo", id: "geo_input", placeholder: "Ввести" },
    { title: "tag_id", id: "tag_id_input", placeholder: "Ввести" },
    { title: "source_id", id: "source_id_input", placeholder: "Ввести" }
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
    var mainOrderContainer = $('.main__order_by');

    for (var i = 1; i <= 5; i++) {
        var newItemBlock = $('<div>').addClass('select__item-block');

        var newTitle = $('<div>')
            .addClass('select__item-title')
            .text('Order_by ' + i);

        var newSelect = $('<select>')
            .addClass('select__item')
            .attr('id', 'Select_Order' + i);

        newItemBlock.append(newTitle, newSelect);
        mainOrderContainer.append(newItemBlock);

        // Call the populateSelect function for each select element
        populateSelect('Select_Order' + i, order_by_options);
    }
});








