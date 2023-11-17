// Создаем массив с данными для полей
var inputData = [
    { title: "сrid", id: "cridInput", placeholder: "id1, id2..." },
    { title: "client_id", id: "client_id_input", placeholder: "id1, id2..." },
    { title: "segment_id", id: "segment_id_input", placeholder: "id1, id2..." },
    { title: "geo", id: "geo_input", placeholder: "id1, id2..." },
    { title: "tag_id", id: "tag_id_input", placeholder: "id1, id2..." },
    { title: "source_id", id: "source_id_input", placeholder: "id1, id2..." }
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







